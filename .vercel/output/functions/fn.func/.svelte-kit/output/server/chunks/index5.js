import "./utils.js";
import { p as parse, t as traversePath, S as SuperFormError, c as clone, f as findErrors, m as mapErrors, a as traversePaths, b as traversePathAsync } from "./utils2.js";
import { p as page } from "./stores.js";
import { d as derived, w as writable } from "./index2.js";
import { p as onDestroy, q as get_store_value, t as tick } from "./index3.js";
import { b as browser } from "./environment.js";
import { s as stringify } from "./stringify.js";
function guard$1(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard$1("goto");
const invalidateAll = guard$1("invalidateAll");
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const applyAction = guard("applyAction");
function deserialize(result) {
  const parsed = JSON.parse(result);
  if (parsed.data) {
    parsed.data = parse(parsed.data);
  }
  return parsed;
}
function enhance(form, submit = () => {
}) {
  const fallback_callback = async ({ action, result, reset }) => {
    if (result.type === "success") {
      if (reset !== false) {
        HTMLFormElement.prototype.reset.call(form);
      }
      await invalidateAll();
    }
    if (location.origin + location.pathname === action.origin + action.pathname || result.type === "redirect" || result.type === "error") {
      applyAction(result);
    }
  };
  async function handle_submit(event) {
    event.preventDefault();
    const action = new URL(
      // We can't do submitter.formAction directly because that property is always set
      // We do cloneNode for avoid DOM clobbering - https://github.com/sveltejs/kit/issues/7593
      event.submitter?.hasAttribute("formaction") ? (
        /** @type {HTMLButtonElement | HTMLInputElement} */
        event.submitter.formAction
      ) : (
        /** @type {HTMLFormElement} */
        HTMLFormElement.prototype.cloneNode.call(form).action
      )
    );
    const data = new FormData(form);
    const submitter_name = event.submitter?.getAttribute("name");
    if (submitter_name) {
      data.append(submitter_name, event.submitter?.getAttribute("value") ?? "");
    }
    const controller = new AbortController();
    let cancelled = false;
    const cancel = () => cancelled = true;
    const callback = await submit({
      action,
      cancel,
      controller,
      data,
      form,
      submitter: event.submitter
    }) ?? fallback_callback;
    if (cancelled)
      return;
    let result;
    try {
      const response = await fetch(action, {
        method: "POST",
        headers: {
          accept: "application/json",
          "x-sveltekit-action": "true"
        },
        cache: "no-store",
        body: data,
        signal: controller.signal
      });
      result = deserialize(await response.text());
      if (result.type === "error")
        result.status = response.status;
    } catch (error) {
      if (
        /** @type {any} */
        error?.name === "AbortError"
      )
        return;
      result = { type: "error", error };
    }
    callback({
      action,
      data,
      form,
      update: (opts) => fallback_callback({ action, result, reset: opts?.reset }),
      // @ts-expect-error generic constraints stuff we don't care about
      result
    });
  }
  HTMLFormElement.prototype.addEventListener.call(form, "submit", handle_submit);
  return {
    destroy() {
      HTMLFormElement.prototype.removeEventListener.call(form, "submit", handle_submit);
    }
  };
}
const isElementInViewport = (el, topOffset = 0) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= topOffset && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
};
const scrollToAndCenter = (el, offset = 1.125, behavior = "smooth") => {
  const elementRect = el.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const top = absoluteElementTop - window.innerHeight / (2 * offset);
  window.scrollTo({ left: 0, top, behavior });
};
function normalizePath(path) {
  return Array.isArray(path) ? path : [path];
}
function fieldProxy(form, path) {
  const path2 = normalizePath(path);
  const proxy = derived(form, ($form) => {
    const data = traversePath($form, path2);
    return data?.value;
  });
  return {
    subscribe(...params) {
      const unsub = proxy.subscribe(...params);
      return () => {
        unsub();
      };
    },
    //subscribe: proxy.subscribe,
    update(upd) {
      form.update((f) => {
        const output = traversePath(f, path2);
        if (output)
          output.parent[output.key] = upd(output.value);
        return f;
      });
    },
    set(value) {
      form.update((f) => {
        const output = traversePath(f, path2);
        if (output)
          output.parent[output.key] = value;
        return f;
      });
    }
  };
}
var FetchStatus;
(function(FetchStatus2) {
  FetchStatus2[FetchStatus2["Idle"] = 0] = "Idle";
  FetchStatus2[FetchStatus2["Submitting"] = 1] = "Submitting";
  FetchStatus2[FetchStatus2["Delayed"] = 2] = "Delayed";
  FetchStatus2[FetchStatus2["Timeout"] = 3] = "Timeout";
})(FetchStatus || (FetchStatus = {}));
const defaultFormOptions = {
  applyAction: true,
  invalidateAll: true,
  resetForm: false,
  autoFocusOnError: "detect",
  scrollToError: "smooth",
  errorSelector: "[data-invalid]",
  selectErrorText: false,
  stickyNavbar: void 0,
  taintedMessage: "Do you want to leave this page? Changes you made may not be saved.",
  onSubmit: void 0,
  onResult: void 0,
  onUpdate: void 0,
  onUpdated: void 0,
  onError: void 0,
  dataType: "form",
  validators: void 0,
  defaultValidator: "keep",
  clearOnSubmit: "errors-and-message",
  delayMs: 500,
  timeoutMs: 8e3,
  multipleSubmits: "prevent",
  validation: void 0
};
function superForm(form, options = {}) {
  options = { ...defaultFormOptions, ...options };
  function emptyForm() {
    return {
      valid: false,
      errors: {},
      data: {},
      empty: true,
      constraints: {}
    };
  }
  function findForms(data) {
    return Object.values(data).filter((v) => isValidationObject(v) !== false);
  }
  function isValidationObject(object) {
    if (!object || typeof object !== "object")
      return false;
    if (!("valid" in object && "empty" in object && typeof object.valid === "boolean")) {
      return false;
    }
    return "id" in object && typeof object.id === "string" ? object.id : void 0;
  }
  if (typeof form === "string" && typeof options.id === "string") {
    throw new SuperFormError("You cannot specify an id both in the first superForm argument and in the options.");
  }
  const unsubscriptions = [];
  onDestroy(() => {
    unsubscriptions.forEach((unsub) => unsub());
    for (const events of Object.values(formEvents)) {
      events.length = 0;
    }
  });
  let formId = typeof form === "string" ? form : options.id ?? form?.id;
  const FormId = writable(formId);
  unsubscriptions.push(FormId.subscribe((id) => formId = id));
  {
    const postedForm = get_store_value(page).form;
    if (postedForm && typeof postedForm === "object") {
      for (const superForm2 of findForms(postedForm).reverse()) {
        if (superForm2.id === formId) {
          form = superForm2;
          break;
        }
      }
    }
  }
  function checkJson(key, value) {
    if (!value || typeof value !== "object")
      return;
    if (Array.isArray(value)) {
      if (value.length > 0)
        checkJson(key, value[0]);
    } else if (!(value instanceof Date)) {
      throw new SuperFormError(`Object found in form field "${key}". Set options.dataType = 'json' and use:enhance to use nested data structures.`);
    }
  }
  if (!form || typeof form === "string") {
    form = emptyForm();
  } else if (options.dataType !== "json") {
    for (const [key, value] of Object.entries(form.data)) {
      checkJson(key, value);
    }
  }
  const initialForm = clone(form);
  const storeForm = clone(form);
  const Valid = writable(storeForm.valid);
  const Empty = writable(storeForm.empty);
  const Message = writable(storeForm.message);
  const Errors = writable(storeForm.errors);
  const Data = writable(storeForm.data);
  const Constraints = writable(storeForm.constraints);
  const Meta = writable(storeForm.meta);
  const Tainted = writable();
  const Submitting = writable(false);
  const Delayed = writable(false);
  const Timeout = writable(false);
  const AllErrors = derived(Errors, ($errors) => {
    if (!$errors)
      return [];
    return findErrors($errors);
  });
  const FirstError = derived(AllErrors, ($all) => $all[0] ?? null);
  if (typeof initialForm.valid !== "boolean") {
    throw new SuperFormError("A non-validation object was passed to superForm. Check what's passed to its first parameter (null/undefined is allowed).");
  }
  const _taintedMessage = options.taintedMessage;
  options.taintedMessage = void 0;
  function enableTaintedMessage() {
    options.taintedMessage = _taintedMessage;
  }
  function rebind(form2, untaint, message) {
    if (untaint) {
      Tainted.set(typeof untaint === "boolean" ? void 0 : untaint);
      clone(form2.data);
    }
    message = message ?? form2.message;
    Data.set(form2.data);
    Message.set(message);
    Empty.set(form2.empty);
    Valid.set(form2.valid);
    Errors.set(form2.errors);
    Meta.set(form2.meta);
    FormId.set(form2.id);
    if (options.flashMessage && shouldSyncFlash(options)) {
      const flash = options.flashMessage.module.getFlash(page);
      if (message && get_store_value(flash) === void 0) {
        flash.set(message);
      }
    }
  }
  async function _update(form2, untaint) {
    let cancelled = false;
    const data = {
      form: form2,
      cancel: () => cancelled = true
    };
    for (const event of formEvents.onUpdate) {
      await event(data);
    }
    if (cancelled) {
      if (options.flashMessage)
        cancelFlash(options);
      return;
    }
    if (form2.valid && options.resetForm) {
      _resetForm(form2.message);
    } else {
      rebind(form2, untaint);
    }
    if (formEvents.onUpdated.length) {
      await tick();
    }
    for (const event of formEvents.onUpdated) {
      event({ form: form2 });
    }
  }
  function _resetForm(message) {
    rebind(clone(initialForm), true, message);
  }
  const Data_update = async (result, untaint) => {
    if (result.type == "error") {
      throw new SuperFormError(`ActionResult of type "${result.type}" cannot be passed to update function.`);
    }
    if (result.type == "redirect") {
      if (options.resetForm)
        _resetForm();
      return;
    }
    if (typeof result.data !== "object") {
      throw new SuperFormError("Non-object validation data returned from ActionResult.");
    }
    const forms = findForms(result.data);
    if (!forms.length) {
      throw new SuperFormError("No form data returned from ActionResult. Make sure you return { form } in the form actions.");
    }
    for (const newForm of forms) {
      if (newForm.id !== formId)
        continue;
      await _update(newForm, untaint ?? (result.status >= 200 && result.status < 300));
    }
  };
  const formEvents = {
    onSubmit: options.onSubmit ? [options.onSubmit] : [],
    onResult: options.onResult ? [options.onResult] : [],
    onUpdate: options.onUpdate ? [options.onUpdate] : [],
    onUpdated: options.onUpdated ? [options.onUpdated] : [],
    onError: options.onError ? [options.onError] : []
  };
  const Fields = Object.fromEntries(Object.keys(initialForm.data).map((key) => {
    return [key, Fields_create(key, initialForm)];
  }));
  function Fields_create(key, validation) {
    return {
      name: key,
      value: fieldProxy(Data, key),
      errors: fieldProxy(Errors, key),
      constraints: fieldProxy(Constraints, key),
      type: validation.meta?.types[key]
    };
  }
  return {
    form: Data,
    formId: FormId,
    errors: Errors,
    message: Message,
    constraints: Constraints,
    meta: derived(Meta, ($m) => $m),
    fields: Fields,
    tainted: Tainted,
    valid: derived(Valid, ($s) => $s),
    empty: derived(Empty, ($e) => $e),
    submitting: derived(Submitting, ($s) => $s),
    delayed: derived(Delayed, ($d) => $d),
    timeout: derived(Timeout, ($t) => $t),
    options,
    capture: () => ({
      valid: get_store_value(Valid),
      errors: get_store_value(Errors),
      data: get_store_value(Data),
      empty: get_store_value(Empty),
      constraints: get_store_value(Constraints),
      message: get_store_value(Message),
      id: formId,
      meta: get_store_value(Meta),
      tainted: get_store_value(Tainted)
    }),
    restore: (snapshot) => {
      rebind(snapshot, snapshot.tainted ?? true);
    },
    enhance: (el, events) => {
      if (events) {
        if (events.onError) {
          if (options.onError === "apply") {
            throw new SuperFormError('options.onError is set to "apply", cannot add any onError events.');
          } else if (events.onError === "apply") {
            throw new SuperFormError('Cannot add "apply" as onError event in use:enhance.');
          }
          formEvents.onError.push(events.onError);
        }
        if (events.onResult)
          formEvents.onResult.push(events.onResult);
        if (events.onSubmit)
          formEvents.onSubmit.push(events.onSubmit);
        if (events.onUpdate)
          formEvents.onUpdate.push(events.onUpdate);
        if (events.onUpdated)
          formEvents.onUpdated.push(events.onUpdated);
      }
      return formEnhance(el, Submitting, Delayed, Timeout, Errors, Data_update, options, Data, Message, enableTaintedMessage, formEvents);
    },
    firstError: FirstError,
    allErrors: AllErrors,
    update: Data_update,
    reset: (options2) => _resetForm(options2?.keepMessage ? get_store_value(Message) : void 0)
  };
}
function cancelFlash(options) {
  if (!options.flashMessage || !browser)
    return;
  if (!shouldSyncFlash(options))
    return;
  document.cookie = `flash=; Max-Age=0; Path=${options.flashMessage.cookiePath ?? "/"};`;
}
function shouldSyncFlash(options) {
  if (!options.flashMessage || !browser)
    return false;
  return options.syncFlashMessage;
}
function formEnhance(formEl, submitting, delayed, timeout, errs, Data_update, options, data, message, enableTaintedForm, formEvents) {
  enableTaintedForm();
  const errors = errs;
  function setError(path, newErrors) {
    errors.update((err) => {
      const errorPath = traversePath(err, path, ({ parent, key, value }) => {
        if (value === void 0)
          parent[key] = {};
        return parent[key];
      });
      if (errorPath) {
        const { parent, key } = errorPath;
        if (newErrors === null)
          delete parent[key];
        else
          parent[key] = newErrors;
      }
      return err;
    });
  }
  async function validate(validator, value, path) {
    const errors2 = await validator(value);
    setError(path, typeof errors2 === "string" ? [errors2] : errors2 ?? null);
    return !errors2;
  }
  const ErrorTextEvents = /* @__PURE__ */ new Set();
  function ErrorTextEvents_selectText(e) {
    const target = e.target;
    if (options.selectErrorText)
      target.select();
  }
  function ErrorTextEvents_addErrorTextListeners(formEl2) {
    formEl2.querySelectorAll("input").forEach((el) => {
      el.addEventListener("invalid", ErrorTextEvents_selectText);
    });
  }
  function ErrorTextEvents_removeErrorTextListeners(formEl2) {
    formEl2.querySelectorAll("input").forEach((el) => el.removeEventListener("invalid", ErrorTextEvents_selectText));
  }
  onDestroy(() => {
    ErrorTextEvents.forEach((formEl2) => ErrorTextEvents_removeErrorTextListeners(formEl2));
    ErrorTextEvents.clear();
  });
  function Form(formEl2) {
    function rebind() {
      if (options.selectErrorText) {
        if (Form2 && formEl2 !== Form2) {
          ErrorTextEvents_removeErrorTextListeners(Form2);
          ErrorTextEvents.delete(Form2);
        }
        if (!ErrorTextEvents.has(formEl2)) {
          ErrorTextEvents_addErrorTextListeners(formEl2);
          ErrorTextEvents.add(formEl2);
        }
      }
      Form2 = formEl2;
    }
    let Form2;
    function Form_shouldAutoFocus(userAgent) {
      if (typeof options.autoFocusOnError === "boolean")
        return options.autoFocusOnError;
      else
        return !/iPhone|iPad|iPod|Android/i.test(userAgent);
    }
    const Form_scrollToFirstError = async () => {
      if (options.scrollToError == "off")
        return;
      const selector = options.errorSelector;
      if (!selector)
        return;
      await tick();
      let el;
      el = Form2.querySelector(selector);
      if (!el)
        return;
      el = el.querySelector(selector) ?? el;
      const nav = options.stickyNavbar ? document.querySelector(options.stickyNavbar) : null;
      if (!isElementInViewport(el, nav?.offsetHeight ?? 0)) {
        scrollToAndCenter(el, void 0, options.scrollToError);
      }
      if (!Form_shouldAutoFocus(navigator.userAgent))
        return;
      let focusEl;
      focusEl = el;
      if (!["INPUT", "SELECT", "BUTTON", "TEXTAREA"].includes(focusEl.tagName)) {
        focusEl = focusEl.querySelector('input:not([type="hidden"]):not(.flatpickr-input), select, textarea');
      }
      if (focusEl) {
        try {
          focusEl.focus({ preventScroll: true });
          if (options.selectErrorText && focusEl.tagName == "INPUT") {
            focusEl.select();
          }
        } catch (err) {
        }
      }
    };
    rebind();
    {
      let state = FetchStatus.Idle;
      let delayedTimeout, timeoutTimeout;
      const setState = (s) => {
        state = s;
        submitting.set(state >= FetchStatus.Submitting);
        delayed.set(state >= FetchStatus.Delayed);
        timeout.set(state >= FetchStatus.Timeout);
      };
      return {
        submitting: () => {
          rebind();
          setState(state != FetchStatus.Delayed ? FetchStatus.Submitting : FetchStatus.Delayed);
          if (delayedTimeout)
            clearTimeout(delayedTimeout);
          if (timeoutTimeout)
            clearTimeout(timeoutTimeout);
          delayedTimeout = window.setTimeout(() => {
            if (state == FetchStatus.Submitting)
              setState(FetchStatus.Delayed);
          }, options.delayMs);
          timeoutTimeout = window.setTimeout(() => {
            if (state == FetchStatus.Delayed)
              setState(FetchStatus.Timeout);
          }, options.timeoutMs);
        },
        completed: (cancelled) => {
          if (delayedTimeout)
            clearTimeout(delayedTimeout);
          if (timeoutTimeout)
            clearTimeout(timeoutTimeout);
          delayedTimeout = timeoutTimeout = 0;
          setState(FetchStatus.Idle);
          if (!cancelled)
            setTimeout(Form_scrollToFirstError);
        },
        scrollToFirstError: () => setTimeout(Form_scrollToFirstError),
        isSubmitting: () => state === FetchStatus.Submitting || state === FetchStatus.Delayed
      };
    }
  }
  const htmlForm = Form(formEl);
  let currentRequest;
  return enhance(formEl, async (submit) => {
    let cancelled = false;
    function cancel() {
      cancelled = true;
      return submit.cancel();
    }
    if (htmlForm.isSubmitting() && options.multipleSubmits == "prevent") {
      cancel();
    } else {
      if (htmlForm.isSubmitting() && options.multipleSubmits == "abort") {
        if (currentRequest)
          currentRequest.abort();
      }
      currentRequest = submit.controller;
      const data2 = { ...submit, cancel };
      for (const event of formEvents.onSubmit) {
        await event(data2);
      }
    }
    if (cancelled) {
      if (options.flashMessage)
        cancelFlash(options);
    } else {
      if (options.validators) {
        const checkData = get_store_value(data);
        let success;
        if (options.validators.constructor.name == "ZodObject" || options.validators.constructor.name == "ZodEffects") {
          const validator = options.validators;
          const result = await validator.safeParseAsync(checkData);
          success = result.success;
          if (!result.success) {
            errors.set(mapErrors(result.error.format()));
          }
        } else {
          const validator = options.validators;
          success = true;
          await traversePaths(checkData, async ({ value, path }) => {
            const validationPath = path.filter((p) => isNaN(parseInt(p)));
            const maybeValidator = await traversePathAsync(validator, validationPath);
            if (typeof maybeValidator?.value === "function") {
              const check = maybeValidator.value;
              if (Array.isArray(value)) {
                for (const key in value) {
                  if (!await validate(check, value[key], path.concat([key]))) {
                    success = false;
                  }
                }
                return;
              } else if (!await validate(check, value, path)) {
                success = false;
              }
            }
          });
        }
        if (!success) {
          cancel();
          htmlForm.scrollToFirstError();
        }
      }
      if (!cancelled) {
        switch (options.clearOnSubmit) {
          case "errors-and-message":
            errors.set({});
            message.set(void 0);
            break;
          case "errors":
            errors.set({});
            break;
          case "message":
            message.set(void 0);
            break;
        }
        if (options.flashMessage && (options.clearOnSubmit == "errors-and-message" || options.clearOnSubmit == "message") && shouldSyncFlash(options)) {
          options.flashMessage.module.getFlash(page).set(void 0);
        }
        htmlForm.submitting();
        if (options.dataType === "json") {
          const postData = get_store_value(data);
          submit.data.set("__superform_json", stringify(postData));
          Object.keys(postData).forEach((key) => {
            if (typeof submit.data.get(key) === "string") {
              submit.data.delete(key);
            }
          });
        }
      }
    }
    return async ({ result }) => {
      currentRequest = null;
      let cancelled2 = false;
      const data2 = {
        result,
        formEl,
        cancel: () => cancelled2 = true
      };
      for (const event of formEvents.onResult) {
        await event(data2);
      }
      if (!cancelled2) {
        if (result.type !== "error") {
          if (result.type === "success" && options.invalidateAll) {
            await invalidateAll();
          }
          if (options.applyAction) {
            await applyAction(result);
          } else {
            await Data_update(result);
          }
        } else {
          if (options.applyAction) {
            if (options.onError == "apply") {
              await applyAction(result);
            } else {
              await applyAction({
                type: "failure",
                status: Math.floor(result.status || 500)
              });
            }
          }
          if (options.onError !== "apply") {
            const data3 = { result, message };
            for (const event of formEvents.onError) {
              if (event !== "apply")
                await event(data3);
            }
          }
        }
        if (options.flashMessage) {
          if (result.type == "error" && options.flashMessage.onError) {
            await options.flashMessage.onError({
              result,
              message: options.flashMessage.module.getFlash(page)
            });
          } else if (result.type != "error") {
            await options.flashMessage.module.updateFlash(page);
          }
        }
      } else {
        if (options.flashMessage)
          cancelFlash(options);
      }
      htmlForm.completed(cancelled2);
    };
  });
}
export {
  goto as g,
  superForm as s
};
