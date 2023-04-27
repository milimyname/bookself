import { c as create_ssr_component, k as compute_rest_props, f as spread, g as escape_object, o as escape_attribute_value, e as escape$1, d as add_attribute } from "./index3.js";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const pxToPt = (px) => isNaN(Number(px)) ? null : parseInt(px, 10) * 3 / 4;
const styleToString = (style) => {
  return Object.keys(style).reduce((acc, key) => acc + key.split(/(?=[A-Z])/).join("-").toLowerCase() + ":" + style[key] + ";", "");
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styles = { maxWidth: "37.5em", ...style };
  const inlineStyle = styleToString(styles);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<div><!-- HTML_TAG_START -->${`<!--[if mso | IE]>
          <table role="presentation" width="100%" align="center" style="${inlineStyle}"><tr><td></td><td style="width:37.5em;background:#ffffff">
        <![endif]-->`}<!-- HTML_TAG_END --></div>
<div${spread(
    [
      escape_object($$restProps),
      {
        style: escape_attribute_value(inlineStyle)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>
<div><!-- HTML_TAG_START -->${`<!--[if mso | IE]>
          </td><td></td></tr></table>
          <![endif]-->`}<!-- HTML_TAG_END --></div>`;
});
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<head${spread([escape_object($$restProps)], {})}><meta httpequiv="Content-Type" content="text/html; charset=UTF-8">
	${slots.default ? slots.default({}) : ``}</head>`;
});
const Html = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["lang"]);
  let { lang = "en" } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `<html${spread(
    [
      escape_object($$restProps),
      { id: "__svelte-email" },
      { lang: escape_attribute_value(lang) }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</html>`;
});
const Preview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["preview"]);
  let { preview = "" } = $$props;
  const renderWhiteSpace = (text) => {
    const whiteSpaceCodes = " ‌​‍‎‏\uFEFF";
    return whiteSpaceCodes.repeat(150 - text.length);
  };
  if ($$props.preview === void 0 && $$bindings.preview && preview !== void 0)
    $$bindings.preview(preview);
  return `<div${spread(
    [
      { id: "__svelte-email-preview" },
      {
        style: escape_attribute_value(styleToString({
          display: "none",
          overflow: "hidden",
          lineHeight: "1px",
          opacity: 0,
          maxHeight: 0,
          maxWidth: 0
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${escape$1(preview)}
	<div>${escape$1(renderWhiteSpace(preview))}</div></div>`;
});
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefaultTable = { width: "100%", ...style };
  const styleDefaultTr = {
    display: "grid",
    gridAutoColumns: "minmax(0, 1fr)",
    gridAutoFlow: "column"
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<table${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefaultTable))
      },
      { align: "center" },
      { border: escape_attribute_value(0) },
      { cellpadding: escape_attribute_value(0) },
      { cellspacing: escape_attribute_value(0) },
      { role: "presentation" },
      escape_object($$restProps)
    ],
    {}
  )}><tbody><tr${add_attribute("style", styleToString(styleDefaultTr), 0)}>${slots.default ? slots.default({}) : ``}</tr></tbody></table>`;
});
const Text$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    fontSize: "14px",
    lineHeight: "24px",
    margin: "16px 0",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<p${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
var ElementType;
(function(ElementType2) {
  ElementType2["Root"] = "root";
  ElementType2["Text"] = "text";
  ElementType2["Directive"] = "directive";
  ElementType2["Comment"] = "comment";
  ElementType2["Script"] = "script";
  ElementType2["Style"] = "style";
  ElementType2["Tag"] = "tag";
  ElementType2["CDATA"] = "cdata";
  ElementType2["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag$1(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text$1 = ElementType.Text;
const Directive = ElementType.Directive;
const Comment$1 = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA$1 = ElementType.CDATA;
const Doctype = ElementType.Doctype;
class Node {
  constructor() {
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  // Read-write aliases for properties
  /**
   * Same as {@link parent}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get parentNode() {
    return this.parent;
  }
  set parentNode(parent) {
    this.parent = parent;
  }
  /**
   * Same as {@link prev}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get previousSibling() {
    return this.prev;
  }
  set previousSibling(prev) {
    this.prev = prev;
  }
  /**
   * Same as {@link next}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nextSibling() {
    return this.next;
  }
  set nextSibling(next) {
    this.next = next;
  }
  /**
   * Clone this node, and optionally its children.
   *
   * @param recursive Clone child nodes as well.
   * @returns A clone of the node.
   */
  cloneNode(recursive = false) {
    return cloneNode(this, recursive);
  }
}
class DataNode extends Node {
  /**
   * @param data The content of the data node
   */
  constructor(data) {
    super();
    this.data = data;
  }
  /**
   * Same as {@link data}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get nodeValue() {
    return this.data;
  }
  set nodeValue(data) {
    this.data = data;
  }
}
class Text extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Text;
  }
  get nodeType() {
    return 3;
  }
}
class Comment extends DataNode {
  constructor() {
    super(...arguments);
    this.type = ElementType.Comment;
  }
  get nodeType() {
    return 8;
  }
}
class ProcessingInstruction extends DataNode {
  constructor(name2, data) {
    super(data);
    this.name = name2;
    this.type = ElementType.Directive;
  }
  get nodeType() {
    return 1;
  }
}
class NodeWithChildren extends Node {
  /**
   * @param children Children of the node. Only certain node types can have children.
   */
  constructor(children) {
    super();
    this.children = children;
  }
  // Aliases
  /** First child of the node. */
  get firstChild() {
    var _a2;
    return (_a2 = this.children[0]) !== null && _a2 !== void 0 ? _a2 : null;
  }
  /** Last child of the node. */
  get lastChild() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }
  /**
   * Same as {@link children}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get childNodes() {
    return this.children;
  }
  set childNodes(children) {
    this.children = children;
  }
}
class CDATA extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.CDATA;
  }
  get nodeType() {
    return 4;
  }
}
class Document extends NodeWithChildren {
  constructor() {
    super(...arguments);
    this.type = ElementType.Root;
  }
  get nodeType() {
    return 9;
  }
}
class Element extends NodeWithChildren {
  /**
   * @param name Name of the tag, eg. `div`, `span`.
   * @param attribs Object mapping attribute names to attribute values.
   * @param children Children of the node.
   */
  constructor(name2, attribs, children = [], type = name2 === "script" ? ElementType.Script : name2 === "style" ? ElementType.Style : ElementType.Tag) {
    super(children);
    this.name = name2;
    this.attribs = attribs;
    this.type = type;
  }
  get nodeType() {
    return 1;
  }
  // DOM Level 1 aliases
  /**
   * Same as {@link name}.
   * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
   */
  get tagName() {
    return this.name;
  }
  set tagName(name2) {
    this.name = name2;
  }
  get attributes() {
    return Object.keys(this.attribs).map((name2) => {
      var _a2, _b;
      return {
        name: name2,
        value: this.attribs[name2],
        namespace: (_a2 = this["x-attribsNamespace"]) === null || _a2 === void 0 ? void 0 : _a2[name2],
        prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name2]
      };
    });
  }
}
function isTag(node) {
  return isTag$1(node);
}
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
function isText(node) {
  return node.type === ElementType.Text;
}
function isComment(node) {
  return node.type === ElementType.Comment;
}
function isDirective(node) {
  return node.type === ElementType.Directive;
}
function isDocument(node) {
  return node.type === ElementType.Root;
}
function cloneNode(node, recursive = false) {
  let result;
  if (isText(node)) {
    result = new Text(node.data);
  } else if (isComment(node)) {
    result = new Comment(node.data);
  } else if (isTag(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Element(node.name, { ...node.attribs }, children);
    children.forEach((child) => child.parent = clone);
    if (node.namespace != null) {
      clone.namespace = node.namespace;
    }
    if (node["x-attribsNamespace"]) {
      clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
    }
    if (node["x-attribsPrefix"]) {
      clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
    }
    result = clone;
  } else if (isCDATA(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new CDATA(children);
    children.forEach((child) => child.parent = clone);
    result = clone;
  } else if (isDocument(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Document(children);
    children.forEach((child) => child.parent = clone);
    if (node["x-mode"]) {
      clone["x-mode"] = node["x-mode"];
    }
    result = clone;
  } else if (isDirective(node)) {
    const instruction = new ProcessingInstruction(node.name, node.data);
    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error(`Not implemented yet: ${node.type}`);
  }
  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  if (node.sourceCodeLocation != null) {
    result.sourceCodeLocation = node.sourceCodeLocation;
  }
  return result;
}
function cloneChildren(childs) {
  const children = childs.map((child) => cloneNode(child, true));
  for (let i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
const defaultOpts = {
  withStartIndices: false,
  withEndIndices: false,
  xmlMode: false
};
class DomHandler {
  /**
   * @param callback Called once parsing has completed.
   * @param options Settings for the handler.
   * @param elementCB Callback whenever a tag is closed.
   */
  constructor(callback, options2, elementCB) {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
    if (typeof options2 === "function") {
      elementCB = options2;
      options2 = defaultOpts;
    }
    if (typeof callback === "object") {
      options2 = callback;
      callback = void 0;
    }
    this.callback = callback !== null && callback !== void 0 ? callback : null;
    this.options = options2 !== null && options2 !== void 0 ? options2 : defaultOpts;
    this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
  }
  onparserinit(parser) {
    this.parser = parser;
  }
  // Resets the handler back to starting state
  onreset() {
    this.dom = [];
    this.root = new Document(this.dom);
    this.done = false;
    this.tagStack = [this.root];
    this.lastNode = null;
    this.parser = null;
  }
  // Signals the handler that parsing is done
  onend() {
    if (this.done)
      return;
    this.done = true;
    this.parser = null;
    this.handleCallback(null);
  }
  onerror(error) {
    this.handleCallback(error);
  }
  onclosetag() {
    this.lastNode = null;
    const elem = this.tagStack.pop();
    if (this.options.withEndIndices) {
      elem.endIndex = this.parser.endIndex;
    }
    if (this.elementCB)
      this.elementCB(elem);
  }
  onopentag(name2, attribs) {
    const type = this.options.xmlMode ? ElementType.Tag : void 0;
    const element = new Element(name2, attribs, void 0, type);
    this.addNode(element);
    this.tagStack.push(element);
  }
  ontext(data) {
    const { lastNode } = this;
    if (lastNode && lastNode.type === ElementType.Text) {
      lastNode.data += data;
      if (this.options.withEndIndices) {
        lastNode.endIndex = this.parser.endIndex;
      }
    } else {
      const node = new Text(data);
      this.addNode(node);
      this.lastNode = node;
    }
  }
  oncomment(data) {
    if (this.lastNode && this.lastNode.type === ElementType.Comment) {
      this.lastNode.data += data;
      return;
    }
    const node = new Comment(data);
    this.addNode(node);
    this.lastNode = node;
  }
  oncommentend() {
    this.lastNode = null;
  }
  oncdatastart() {
    const text = new Text("");
    const node = new CDATA([text]);
    this.addNode(node);
    text.parent = node;
    this.lastNode = text;
  }
  oncdataend() {
    this.lastNode = null;
  }
  onprocessinginstruction(name2, data) {
    const node = new ProcessingInstruction(name2, data);
    this.addNode(node);
  }
  handleCallback(error) {
    if (typeof this.callback === "function") {
      this.callback(error, this.dom);
    } else if (error) {
      throw error;
    }
  }
  addNode(node) {
    const parent = this.tagStack[this.tagStack.length - 1];
    const previousSibling = parent.children[parent.children.length - 1];
    if (this.options.withStartIndices) {
      node.startIndex = this.parser.startIndex;
    }
    if (this.options.withEndIndices) {
      node.endIndex = this.parser.endIndex;
    }
    parent.children.push(node);
    if (previousSibling) {
      node.prev = previousSibling;
      previousSibling.next = node;
    }
    node.parent = parent;
    this.lastNode = null;
  }
}
const e = /\n/g;
function n(n2) {
  const o2 = [...n2.matchAll(e)].map((e2) => e2.index || 0);
  o2.unshift(-1);
  const s2 = t(o2, 0, o2.length);
  return (e2) => r(s2, e2);
}
function t(e2, n2, r2) {
  if (r2 - n2 == 1)
    return { offset: e2[n2], index: n2 + 1 };
  const o2 = Math.ceil((n2 + r2) / 2), s2 = t(e2, n2, o2), l2 = t(e2, o2, r2);
  return { offset: s2.offset, low: s2, high: l2 };
}
function r(e2, n2) {
  return function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "index");
  }(e2) ? { line: e2.index, column: n2 - e2.offset } : r(e2.high.offset < n2 ? e2.high : e2.low, n2);
}
function o(e2, t2 = "", r2 = {}) {
  const o2 = "string" != typeof t2 ? t2 : r2, l2 = "string" == typeof t2 ? t2 : "", c2 = e2.map(s), f = !!o2.lineNumbers;
  return function(e3, t3 = 0) {
    const r3 = f ? n(e3) : () => ({ line: 0, column: 0 });
    let o3 = t3;
    const s2 = [];
    e:
      for (; o3 < e3.length; ) {
        let n2 = false;
        for (const t4 of c2) {
          t4.regex.lastIndex = o3;
          const c3 = t4.regex.exec(e3);
          if (c3 && c3[0].length > 0) {
            if (!t4.discard) {
              const e4 = r3(o3), n3 = "string" == typeof t4.replace ? c3[0].replace(new RegExp(t4.regex.source, t4.regex.flags), t4.replace) : c3[0];
              s2.push({ state: l2, name: t4.name, text: n3, offset: o3, len: c3[0].length, line: e4.line, column: e4.column });
            }
            if (o3 = t4.regex.lastIndex, n2 = true, t4.push) {
              const n3 = t4.push(e3, o3);
              s2.push(...n3.tokens), o3 = n3.offset;
            }
            if (t4.pop)
              break e;
            break;
          }
        }
        if (!n2)
          break;
      }
    return { tokens: s2, offset: o3, complete: e3.length <= o3 };
  };
}
function s(e2, n2) {
  return { ...e2, regex: l(e2, n2) };
}
function l(e2, n2) {
  if (0 === e2.name.length)
    throw new Error(`Rule #${n2} has empty name, which is not allowed.`);
  if (function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "regex");
  }(e2))
    return function(e3) {
      if (e3.global)
        throw new Error(`Regular expression /${e3.source}/${e3.flags} contains the global flag, which is not allowed.`);
      return e3.sticky ? e3 : new RegExp(e3.source, e3.flags + "y");
    }(e2.regex);
  if (function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "str");
  }(e2)) {
    if (0 === e2.str.length)
      throw new Error(`Rule #${n2} ("${e2.name}") has empty "str" property, which is not allowed.`);
    return new RegExp(c(e2.str), "y");
  }
  return new RegExp(c(e2.name), "y");
}
function c(e2) {
  return e2.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
function token$1(onToken, onEnd) {
  return (data, i) => {
    let position = i;
    let value = void 0;
    if (i < data.tokens.length) {
      value = onToken(data.tokens[i], data, i);
      if (value !== void 0) {
        position++;
      }
    } else {
      onEnd?.(data, i);
    }
    return value === void 0 ? { matched: false } : {
      matched: true,
      position,
      value
    };
  };
}
function mapInner(r2, f) {
  return r2.matched ? {
    matched: true,
    position: r2.position,
    value: f(r2.value, r2.position)
  } : r2;
}
function mapOuter(r2, f) {
  return r2.matched ? f(r2) : r2;
}
function map(p, mapper) {
  return (data, i) => mapInner(p(data, i), (v, j) => mapper(v, data, i, j));
}
function option(p, def) {
  return (data, i) => {
    const r2 = p(data, i);
    return r2.matched ? r2 : {
      matched: true,
      position: i,
      value: def
    };
  };
}
function choice(...ps) {
  return (data, i) => {
    for (const p of ps) {
      const result = p(data, i);
      if (result.matched) {
        return result;
      }
    }
    return { matched: false };
  };
}
function otherwise(pa, pb) {
  return (data, i) => {
    const r1 = pa(data, i);
    return r1.matched ? r1 : pb(data, i);
  };
}
function takeWhile(p, test) {
  return (data, i) => {
    const values = [];
    let success = true;
    do {
      const r2 = p(data, i);
      if (r2.matched && test(r2.value, values.length + 1, data, i, r2.position)) {
        values.push(r2.value);
        i = r2.position;
      } else {
        success = false;
      }
    } while (success);
    return {
      matched: true,
      position: i,
      value: values
    };
  };
}
function many(p) {
  return takeWhile(p, () => true);
}
function many1(p) {
  return ab(p, many(p), (head, tail) => [head, ...tail]);
}
function ab(pa, pb, join) {
  return (data, i) => mapOuter(pa(data, i), (ma) => mapInner(pb(data, ma.position), (vb, j) => join(ma.value, vb, data, i, j)));
}
function left(pa, pb) {
  return ab(pa, pb, (va) => va);
}
function right(pa, pb) {
  return ab(pa, pb, (va, vb) => vb);
}
function abc(pa, pb, pc, join) {
  return (data, i) => mapOuter(pa(data, i), (ma) => mapOuter(pb(data, ma.position), (mb) => mapInner(pc(data, mb.position), (vc, j) => join(ma.value, mb.value, vc, data, i, j))));
}
function middle(pa, pb, pc) {
  return abc(pa, pb, pc, (ra, rb) => rb);
}
function all(...ps) {
  return (data, i) => {
    const result = [];
    let position = i;
    for (const p of ps) {
      const r1 = p(data, position);
      if (r1.matched) {
        result.push(r1.value);
        position = r1.position;
      } else {
        return { matched: false };
      }
    }
    return {
      matched: true,
      position,
      value: result
    };
  };
}
function flatten(...ps) {
  return flatten1(all(...ps));
}
function flatten1(p) {
  return map(p, (vs) => vs.flatMap((v) => v));
}
function chainReduce(acc, f) {
  return (data, i) => {
    let loop = true;
    let acc1 = acc;
    let pos = i;
    do {
      const r2 = f(acc1, data, pos)(data, pos);
      if (r2.matched) {
        acc1 = r2.value;
        pos = r2.position;
      } else {
        loop = false;
      }
    } while (loop);
    return {
      matched: true,
      position: pos,
      value: acc1
    };
  };
}
function reduceLeft(acc, p, reducer) {
  return chainReduce(acc, (acc2) => map(p, (v, data, i, j) => reducer(acc2, v, data, i, j)));
}
function leftAssoc2(pLeft, pOper, pRight) {
  return chain(pLeft, (v0) => reduceLeft(v0, ab(pOper, pRight, (f, y) => [f, y]), (acc, [f, y]) => f(acc, y)));
}
function chain(p, f) {
  return (data, i) => mapOuter(p(data, i), (m1) => f(m1.value, data, i, m1.position)(data, m1.position));
}
const ws = `(?:[ \\t\\r\\n\\f]*)`;
const nl = `(?:\\n|\\r\\n|\\r|\\f)`;
const nonascii = `[^\\x00-\\x7F]`;
const unicode = `(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)`;
const escape = `(?:\\\\[^\\n\\r\\f0-9a-f])`;
const nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${escape})`;
const nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${escape})`;
const name = `(?:${nmchar}+)`;
const ident = `(?:[-]?${nmstart}${nmchar}*)`;
const string1 = `'([^\\n\\r\\f\\\\']|\\\\${nl}|${nonascii}|${unicode}|${escape})*'`;
const string2 = `"([^\\n\\r\\f\\\\"]|\\\\${nl}|${nonascii}|${unicode}|${escape})*"`;
const lexSelector = o([
  { name: "ws", regex: new RegExp(ws) },
  { name: "hash", regex: new RegExp(`#${name}`, "i") },
  { name: "ident", regex: new RegExp(ident, "i") },
  { name: "str1", regex: new RegExp(string1, "i") },
  { name: "str2", regex: new RegExp(string2, "i") },
  { name: "*" },
  { name: "." },
  { name: "," },
  { name: "[" },
  { name: "]" },
  { name: "=" },
  { name: ">" },
  { name: "|" },
  { name: "+" },
  { name: "~" },
  { name: "^" },
  { name: "$" }
]);
const lexEscapedString = o([
  { name: "unicode", regex: new RegExp(unicode, "i") },
  { name: "escape", regex: new RegExp(escape, "i") },
  { name: "any", regex: new RegExp("[\\s\\S]", "i") }
]);
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
  return [a0 + b0, a1 + b1, a2 + b2];
}
function sumAllSpec(ss) {
  return ss.reduce(sumSpec, [0, 0, 0]);
}
const unicodeEscapedSequence_ = token$1((t2) => t2.name === "unicode" ? String.fromCodePoint(parseInt(t2.text.slice(1), 16)) : void 0);
const escapedSequence_ = token$1((t2) => t2.name === "escape" ? t2.text.slice(1) : void 0);
const anyChar_ = token$1((t2) => t2.name === "any" ? t2.text : void 0);
const escapedString_ = map(many(choice(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs) => cs.join(""));
function unescape(escapedString) {
  const lexerResult = lexEscapedString(escapedString);
  const result = escapedString_({ tokens: lexerResult.tokens, options: void 0 }, 0);
  return result.value;
}
function literal(name2) {
  return token$1((t2) => t2.name === name2 ? true : void 0);
}
const whitespace_ = token$1((t2) => t2.name === "ws" ? null : void 0);
const optionalWhitespace_ = option(whitespace_, null);
function optionallySpaced(parser) {
  return middle(optionalWhitespace_, parser, optionalWhitespace_);
}
const identifier_ = token$1((t2) => t2.name === "ident" ? unescape(t2.text) : void 0);
const hashId_ = token$1((t2) => t2.name === "hash" ? unescape(t2.text.slice(1)) : void 0);
const string_ = token$1((t2) => t2.name.startsWith("str") ? unescape(t2.text.slice(1, -1)) : void 0);
const namespace_ = left(option(identifier_, ""), literal("|"));
const qualifiedName_ = otherwise(ab(namespace_, identifier_, (ns, name2) => ({ name: name2, namespace: ns })), map(identifier_, (name2) => ({ name: name2, namespace: null })));
const uniSelector_ = otherwise(ab(namespace_, literal("*"), (ns) => ({ type: "universal", namespace: ns, specificity: [0, 0, 0] })), map(literal("*"), () => ({ type: "universal", namespace: null, specificity: [0, 0, 0] })));
const tagSelector_ = map(qualifiedName_, ({ name: name2, namespace }) => ({
  type: "tag",
  name: name2,
  namespace,
  specificity: [0, 0, 1]
}));
const classSelector_ = ab(literal("."), identifier_, (fullstop, name2) => ({
  type: "class",
  name: name2,
  specificity: [0, 1, 0]
}));
const idSelector_ = map(hashId_, (name2) => ({
  type: "id",
  name: name2,
  specificity: [1, 0, 0]
}));
const attrModifier_ = token$1((t2) => {
  if (t2.name === "ident") {
    if (t2.text === "i" || t2.text === "I") {
      return "i";
    }
    if (t2.text === "s" || t2.text === "S") {
      return "s";
    }
  }
  return void 0;
});
const attrValue_ = otherwise(ab(string_, option(right(optionalWhitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })), ab(identifier_, option(right(whitespace_, attrModifier_), null), (v, mod) => ({ value: v, modifier: mod })));
const attrMatcher_ = choice(map(literal("="), () => "="), ab(literal("~"), literal("="), () => "~="), ab(literal("|"), literal("="), () => "|="), ab(literal("^"), literal("="), () => "^="), ab(literal("$"), literal("="), () => "$="), ab(literal("*"), literal("="), () => "*="));
const attrPresenceSelector_ = abc(literal("["), optionallySpaced(qualifiedName_), literal("]"), (lbr, { name: name2, namespace }) => ({
  type: "attrPresence",
  name: name2,
  namespace,
  specificity: [0, 1, 0]
}));
const attrValueSelector_ = middle(literal("["), abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name: name2, namespace }, matcher, { value, modifier }) => ({
  type: "attrValue",
  name: name2,
  namespace,
  matcher,
  value,
  modifier,
  specificity: [0, 1, 0]
})), literal("]"));
const attrSelector_ = otherwise(attrPresenceSelector_, attrValueSelector_);
const typeSelector_ = otherwise(uniSelector_, tagSelector_);
const subclassSelector_ = choice(idSelector_, classSelector_, attrSelector_);
const compoundSelector_ = map(otherwise(flatten(typeSelector_, many(subclassSelector_)), many1(subclassSelector_)), (ss) => {
  return {
    type: "compound",
    list: ss,
    specificity: sumAllSpec(ss.map((s2) => s2.specificity))
  };
});
const combinator_ = choice(map(literal(">"), () => ">"), map(literal("+"), () => "+"), map(literal("~"), () => "~"), ab(literal("|"), literal("|"), () => "||"));
const combinatorSeparator_ = otherwise(optionallySpaced(combinator_), map(whitespace_, () => " "));
const complexSelector_ = leftAssoc2(compoundSelector_, map(combinatorSeparator_, (c2) => (left2, right2) => ({
  type: "compound",
  list: [...right2.list, { type: "combinator", combinator: c2, left: left2, specificity: left2.specificity }],
  specificity: sumSpec(left2.specificity, right2.specificity)
})), compoundSelector_);
function parse_(parser, str) {
  if (!(typeof str === "string" || str instanceof String)) {
    throw new Error("Expected a selector string. Actual input is not a string!");
  }
  const lexerResult = lexSelector(str);
  if (!lexerResult.complete) {
    throw new Error(`The input "${str}" was only partially tokenized, stopped at offset ${lexerResult.offset}!
` + prettyPrintPosition(str, lexerResult.offset));
  }
  const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: void 0 }, 0);
  if (!result.matched) {
    throw new Error(`No match for "${str}" input!`);
  }
  if (result.position < lexerResult.tokens.length) {
    const token2 = lexerResult.tokens[result.position];
    throw new Error(`The input "${str}" was only partially parsed, stopped at offset ${token2.offset}!
` + prettyPrintPosition(str, token2.offset, token2.len));
  }
  return result.value;
}
function prettyPrintPosition(str, offset, len = 1) {
  return `${str.replace(/(\t)|(\r)|(\n)/g, (m, t2, r2) => t2 ? "␉" : r2 ? "␍" : "␊")}
${"".padEnd(offset)}${"^".repeat(len)}`;
}
function parse1(str) {
  return parse_(complexSelector_, str);
}
function serialize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "universal":
      return _serNs(selector.namespace) + "*";
    case "tag":
      return _serNs(selector.namespace) + _serIdent(selector.name);
    case "class":
      return "." + _serIdent(selector.name);
    case "id":
      return "#" + _serIdent(selector.name);
    case "attrPresence":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;
    case "attrValue":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}"${_serStr(selector.value)}"${selector.modifier ? selector.modifier : ""}]`;
    case "combinator":
      return serialize(selector.left) + selector.combinator;
    case "compound":
      return selector.list.reduce((acc, node) => {
        if (node.type === "combinator") {
          return serialize(node) + acc;
        } else {
          return acc + serialize(node);
        }
      }, "");
    case "list":
      return selector.list.map(serialize).join(",");
  }
}
function _serNs(ns) {
  return ns || ns === "" ? _serIdent(ns) + "|" : "";
}
function _codePoint(char) {
  return `\\${char.codePointAt(0).toString(16)} `;
}
function _serIdent(str) {
  return str.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g,
    (m, d1, d2, hy, safe, nl2, ctrl, other) => d1 ? _codePoint(d1) : d2 ? "-" + _codePoint(d2.slice(1)) : hy ? "\\-" : safe ? safe : nl2 ? "�" : ctrl ? _codePoint(ctrl) : "\\" + other
  );
}
function _serStr(str) {
  return str.replace(
    /(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g,
    (m, dq, bs, nl2, ctrl) => dq ? '\\"' : bs ? "\\\\" : nl2 ? "�" : _codePoint(ctrl)
  );
}
function normalize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "compound": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b)));
      break;
    }
    case "combinator": {
      normalize(selector.left);
      break;
    }
    case "list": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b) => serialize(a) < serialize(b) ? -1 : 1);
      break;
    }
  }
  return selector;
}
function _getSelectorPriority(selector) {
  switch (selector.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, selector.name];
    case "attrPresence":
      return [4, serialize(selector)];
    case "attrValue":
      return [5, serialize(selector)];
    case "combinator":
      return [15, serialize(selector)];
  }
}
function compareSpecificity(a, b) {
  return _compareArrays(a, b);
}
function _compareArrays(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error("Arguments must be arrays.");
  }
  const shorter = a.length < b.length ? a.length : b.length;
  for (let i = 0; i < shorter; i++) {
    if (a[i] === b[i]) {
      continue;
    }
    return a[i] < b[i] ? -1 : 1;
  }
  return a.length - b.length;
}
class DecisionTree {
  constructor(input) {
    this.branches = weave(toAstTerminalPairs(input));
  }
  build(builder) {
    return builder(this.branches);
  }
}
function toAstTerminalPairs(array) {
  const len = array.length;
  const results = new Array(len);
  for (let i = 0; i < len; i++) {
    const [selectorString, val] = array[i];
    const ast = preprocess(parse1(selectorString));
    results[i] = {
      ast,
      terminal: {
        type: "terminal",
        valueContainer: { index: i, value: val, specificity: ast.specificity }
      }
    };
  }
  return results;
}
function preprocess(ast) {
  reduceSelectorVariants(ast);
  normalize(ast);
  return ast;
}
function reduceSelectorVariants(ast) {
  const newList = [];
  ast.list.forEach((sel) => {
    switch (sel.type) {
      case "class":
        newList.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "id":
        newList.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "combinator":
        reduceSelectorVariants(sel.left);
        newList.push(sel);
        break;
      case "universal":
        break;
      default:
        newList.push(sel);
        break;
    }
  });
  ast.list = newList;
}
function weave(items) {
  const branches = [];
  while (items.length) {
    const topKind = findTopKey(items, (sel) => true, getSelectorKind);
    const { matches, nonmatches, empty } = breakByKind(items, topKind);
    items = nonmatches;
    if (matches.length) {
      branches.push(branchOfKind(topKind, matches));
    }
    if (empty.length) {
      branches.push(...terminate(empty));
    }
  }
  return branches;
}
function terminate(items) {
  const results = [];
  for (const item of items) {
    const terminal = item.terminal;
    if (terminal.type === "terminal") {
      results.push(terminal);
    } else {
      const { matches, rest } = partition(terminal.cont, (node) => node.type === "terminal");
      matches.forEach((node) => results.push(node));
      if (rest.length) {
        terminal.cont = rest;
        results.push(terminal);
      }
    }
  }
  return results;
}
function breakByKind(items, selectedKind) {
  const matches = [];
  const nonmatches = [];
  const empty = [];
  for (const item of items) {
    const simpsels = item.ast.list;
    if (simpsels.length) {
      const isMatch = simpsels.some((node) => getSelectorKind(node) === selectedKind);
      (isMatch ? matches : nonmatches).push(item);
    } else {
      empty.push(item);
    }
  }
  return { matches, nonmatches, empty };
}
function getSelectorKind(sel) {
  switch (sel.type) {
    case "attrPresence":
      return `attrPresence ${sel.name}`;
    case "attrValue":
      return `attrValue ${sel.name}`;
    case "combinator":
      return `combinator ${sel.combinator}`;
    default:
      return sel.type;
  }
}
function branchOfKind(kind, items) {
  if (kind === "tag") {
    return tagNameBranch(items);
  }
  if (kind.startsWith("attrValue ")) {
    return attrValueBranch(kind.substring(10), items);
  }
  if (kind.startsWith("attrPresence ")) {
    return attrPresenceBranch(kind.substring(13), items);
  }
  if (kind === "combinator >") {
    return combinatorBranch(">", items);
  }
  if (kind === "combinator +") {
    return combinatorBranch("+", items);
  }
  throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
  const groups = spliceAndGroup(items, (x) => x.type === "tag", (x) => x.name);
  const variants = Object.entries(groups).map(([name2, group]) => ({
    type: "variant",
    value: name2,
    cont: weave(group.items)
  }));
  return {
    type: "tagName",
    variants
  };
}
function attrPresenceBranch(name2, items) {
  for (const item of items) {
    spliceSimpleSelector(item, (x) => x.type === "attrPresence" && x.name === name2);
  }
  return {
    type: "attrPresence",
    name: name2,
    cont: weave(items)
  };
}
function attrValueBranch(name2, items) {
  const groups = spliceAndGroup(items, (x) => x.type === "attrValue" && x.name === name2, (x) => `${x.matcher} ${x.modifier || ""} ${x.value}`);
  const matchers = [];
  for (const group of Object.values(groups)) {
    const sel = group.oneSimpleSelector;
    const predicate = getAttrPredicate(sel);
    const continuation = weave(group.items);
    matchers.push({
      type: "matcher",
      matcher: sel.matcher,
      modifier: sel.modifier,
      value: sel.value,
      predicate,
      cont: continuation
    });
  }
  return {
    type: "attrValue",
    name: name2,
    matchers
  };
}
function getAttrPredicate(sel) {
  if (sel.modifier === "i") {
    const expected = sel.value.toLowerCase();
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual.toLowerCase();
      case "~=":
        return (actual) => actual.toLowerCase().split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.toLowerCase().startsWith(expected);
      case "$=":
        return (actual) => actual.toLowerCase().endsWith(expected);
      case "*=":
        return (actual) => actual.toLowerCase().includes(expected);
      case "|=":
        return (actual) => {
          const lower = actual.toLowerCase();
          return expected === lower || lower.startsWith(expected) && lower[expected.length] === "-";
        };
    }
  } else {
    const expected = sel.value;
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual;
      case "~=":
        return (actual) => actual.split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.startsWith(expected);
      case "$=":
        return (actual) => actual.endsWith(expected);
      case "*=":
        return (actual) => actual.includes(expected);
      case "|=":
        return (actual) => expected === actual || actual.startsWith(expected) && actual[expected.length] === "-";
    }
  }
}
function combinatorBranch(combinator, items) {
  const groups = spliceAndGroup(items, (x) => x.type === "combinator" && x.combinator === combinator, (x) => serialize(x.left));
  const leftItems = [];
  for (const group of Object.values(groups)) {
    const rightCont = weave(group.items);
    const leftAst = group.oneSimpleSelector.left;
    leftItems.push({
      ast: leftAst,
      terminal: { type: "popElement", cont: rightCont }
    });
  }
  return {
    type: "pushElement",
    combinator,
    cont: weave(leftItems)
  };
}
function spliceAndGroup(items, predicate, keyCallback) {
  const groups = {};
  while (items.length) {
    const bestKey = findTopKey(items, predicate, keyCallback);
    const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;
    const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);
    const { matches, rest } = partition1(items, hasBestKeyPredicate);
    let oneSimpleSelector = null;
    for (const item of matches) {
      const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
      if (!oneSimpleSelector) {
        oneSimpleSelector = splicedNode;
      }
    }
    if (oneSimpleSelector == null) {
      throw new Error("No simple selector is found.");
    }
    groups[bestKey] = { oneSimpleSelector, items: matches };
    items = rest;
  }
  return groups;
}
function spliceSimpleSelector(item, predicate) {
  const simpsels = item.ast.list;
  const matches = new Array(simpsels.length);
  let firstIndex = -1;
  for (let i = simpsels.length; i-- > 0; ) {
    if (predicate(simpsels[i])) {
      matches[i] = true;
      firstIndex = i;
    }
  }
  if (firstIndex == -1) {
    throw new Error(`Couldn't find the required simple selector.`);
  }
  const result = simpsels[firstIndex];
  item.ast.list = simpsels.filter((sel, i) => !matches[i]);
  return result;
}
function findTopKey(items, predicate, keyCallback) {
  const candidates = {};
  for (const item of items) {
    const candidates1 = {};
    for (const node of item.ast.list.filter(predicate)) {
      candidates1[keyCallback(node)] = true;
    }
    for (const key of Object.keys(candidates1)) {
      if (candidates[key]) {
        candidates[key]++;
      } else {
        candidates[key] = 1;
      }
    }
  }
  let topKind = "";
  let topCounter = 0;
  for (const entry of Object.entries(candidates)) {
    if (entry[1] > topCounter) {
      topKind = entry[0];
      topCounter = entry[1];
    }
  }
  return topKind;
}
function partition(src2, predicate) {
  const matches = [];
  const rest = [];
  for (const x of src2) {
    if (predicate(x)) {
      matches.push(x);
    } else {
      rest.push(x);
    }
  }
  return { matches, rest };
}
function partition1(src2, predicate) {
  const matches = [];
  const rest = [];
  for (const x of src2) {
    if (predicate(x)) {
      matches.push(x);
    } else {
      rest.push(x);
    }
  }
  return { matches, rest };
}
class Picker {
  constructor(f) {
    this.f = f;
  }
  pickAll(el) {
    return this.f(el);
  }
  pick1(el, preferFirst = false) {
    const results = this.f(el);
    const len = results.length;
    if (len === 0) {
      return null;
    }
    if (len === 1) {
      return results[0].value;
    }
    const comparator = preferFirst ? comparatorPreferFirst : comparatorPreferLast;
    let result = results[0];
    for (let i = 1; i < len; i++) {
      const next = results[i];
      if (comparator(result, next)) {
        result = next;
      }
    }
    return result.value;
  }
}
function comparatorPreferFirst(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index < acc.index;
}
function comparatorPreferLast(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index > acc.index;
}
function hp2Builder(nodes) {
  return new Picker(handleArray(nodes));
}
function handleArray(nodes) {
  const matchers = nodes.map(handleNode);
  return (el, ...tail) => matchers.flatMap((m) => m(el, ...tail));
}
function handleNode(node) {
  switch (node.type) {
    case "terminal": {
      const result = [node.valueContainer];
      return (el, ...tail) => result;
    }
    case "tagName":
      return handleTagName(node);
    case "attrValue":
      return handleAttrValueName(node);
    case "attrPresence":
      return handleAttrPresenceName(node);
    case "pushElement":
      return handlePushElementNode(node);
    case "popElement":
      return handlePopElementNode(node);
  }
}
function handleTagName(node) {
  const variants = {};
  for (const variant of node.variants) {
    variants[variant.value] = handleArray(variant.cont);
  }
  return (el, ...tail) => {
    const continuation = variants[el.name];
    return continuation ? continuation(el, ...tail) : [];
  };
}
function handleAttrPresenceName(node) {
  const attrName = node.name;
  const continuation = handleArray(node.cont);
  return (el, ...tail) => Object.prototype.hasOwnProperty.call(el.attribs, attrName) ? continuation(el, ...tail) : [];
}
function handleAttrValueName(node) {
  const callbacks = [];
  for (const matcher of node.matchers) {
    const predicate = matcher.predicate;
    const continuation = handleArray(matcher.cont);
    callbacks.push((attr, el, ...tail) => predicate(attr) ? continuation(el, ...tail) : []);
  }
  const attrName = node.name;
  return (el, ...tail) => {
    const attr = el.attribs[attrName];
    return attr || attr === "" ? callbacks.flatMap((cb) => cb(attr, el, ...tail)) : [];
  };
}
function handlePushElementNode(node) {
  const continuation = handleArray(node.cont);
  const leftElementGetter = node.combinator === "+" ? getPrecedingElement : getParentElement;
  return (el, ...tail) => {
    const next = leftElementGetter(el);
    if (next === null) {
      return [];
    }
    return continuation(next, el, ...tail);
  };
}
const getPrecedingElement = (el) => {
  const prev = el.prev;
  if (prev === null) {
    return null;
  }
  return isTag(prev) ? prev : getPrecedingElement(prev);
};
const getParentElement = (el) => {
  const parent = el.parent;
  return parent && isTag(parent) ? parent : null;
};
function handlePopElementNode(node) {
  const continuation = handleArray(node.cont);
  return (el, next, ...tail) => continuation(next, ...tail);
}
const htmlDecodeTree = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((c2) => c2.charCodeAt(0))
);
const xmlDecodeTree = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((c2) => c2.charCodeAt(0))
);
var _a;
const decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
const fromCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
    let output2 = "";
    if (codePoint > 65535) {
      codePoint -= 65536;
      output2 += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output2 += String.fromCharCode(codePoint);
    return output2;
  }
);
function replaceCodePoint(codePoint) {
  var _a2;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}
var CharCodes$1;
(function(CharCodes2) {
  CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
  CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
  CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
  CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
  CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
  CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
  CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
  CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
  CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
  CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
  CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes$1 || (CharCodes$1 = {}));
const TO_LOWER_BIT = 32;
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
  BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function isNumber$1(code) {
  return code >= CharCodes$1.ZERO && code <= CharCodes$1.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_F || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes$1.UPPER_A && code <= CharCodes$1.UPPER_Z || code >= CharCodes$1.LOWER_A && code <= CharCodes$1.LOWER_Z || isNumber$1(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes$1.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
  DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
  DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
class EntityDecoder {
  constructor(decodeTree, emitCodePoint, errors) {
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    this.state = EntityDecoderState.EntityStart;
    this.consumed = 1;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(decodeMode) {
    this.decodeMode = decodeMode;
    this.state = EntityDecoderState.EntityStart;
    this.result = 0;
    this.treeIndex = 0;
    this.excess = 1;
    this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(str, offset) {
    switch (this.state) {
      case EntityDecoderState.EntityStart: {
        if (str.charCodeAt(offset) === CharCodes$1.NUM) {
          this.state = EntityDecoderState.NumericStart;
          this.consumed += 1;
          return this.stateNumericStart(str, offset + 1);
        }
        this.state = EntityDecoderState.NamedEntity;
        return this.stateNamedEntity(str, offset);
      }
      case EntityDecoderState.NumericStart: {
        return this.stateNumericStart(str, offset);
      }
      case EntityDecoderState.NumericDecimal: {
        return this.stateNumericDecimal(str, offset);
      }
      case EntityDecoderState.NumericHex: {
        return this.stateNumericHex(str, offset);
      }
      case EntityDecoderState.NamedEntity: {
        return this.stateNamedEntity(str, offset);
      }
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(str, offset) {
    if (offset >= str.length) {
      return -1;
    }
    if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes$1.LOWER_X) {
      this.state = EntityDecoderState.NumericHex;
      this.consumed += 1;
      return this.stateNumericHex(str, offset + 1);
    }
    this.state = EntityDecoderState.NumericDecimal;
    return this.stateNumericDecimal(str, offset);
  }
  addToNumericResult(str, start, end, base) {
    if (start !== end) {
      const digitCount = end - start;
      this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
      this.consumed += digitCount;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber$1(char) || isHexadecimalCharacter(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 16);
        return this.emitNumericEntity(char, 3);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 16);
    return -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(str, offset) {
    const startIdx = offset;
    while (offset < str.length) {
      const char = str.charCodeAt(offset);
      if (isNumber$1(char)) {
        offset += 1;
      } else {
        this.addToNumericResult(str, startIdx, offset, 10);
        return this.emitNumericEntity(char, 2);
      }
    }
    this.addToNumericResult(str, startIdx, offset, 10);
    return -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(lastCp, expectedLength) {
    var _a2;
    if (this.consumed <= expectedLength) {
      (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
      return 0;
    }
    if (lastCp === CharCodes$1.SEMI) {
      this.consumed += 1;
    } else if (this.decodeMode === DecodingMode.Strict) {
      return 0;
    }
    this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
    if (this.errors) {
      if (lastCp !== CharCodes$1.SEMI) {
        this.errors.missingSemicolonAfterCharacterReference();
      }
      this.errors.validateNumericCharacterReference(this.result);
    }
    return this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(str, offset) {
    const { decodeTree } = this;
    let current = decodeTree[this.treeIndex];
    let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
    for (; offset < str.length; offset++, this.excess++) {
      const char = str.charCodeAt(offset);
      this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
      if (this.treeIndex < 0) {
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
        (valueLength === 0 || // And there should be no invalid characters.
        isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
      }
      current = decodeTree[this.treeIndex];
      valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      if (valueLength !== 0) {
        if (char === CharCodes$1.SEMI) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        if (this.decodeMode !== DecodingMode.Strict) {
          this.result = this.treeIndex;
          this.consumed += this.excess;
          this.excess = 0;
        }
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var _a2;
    const { result, decodeTree } = this;
    const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
    this.emitNamedEntityData(result, valueLength, this.consumed);
    (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.missingSemicolonAfterCharacterReference();
    return this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(result, valueLength, consumed) {
    const { decodeTree } = this;
    this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
    if (valueLength === 3) {
      this.emitCodePoint(decodeTree[result + 2], consumed);
    }
    return consumed;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var _a2;
    switch (this.state) {
      case EntityDecoderState.NamedEntity: {
        return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      }
      case EntityDecoderState.NumericDecimal: {
        return this.emitNumericEntity(0, 2);
      }
      case EntityDecoderState.NumericHex: {
        return this.emitNumericEntity(0, 3);
      }
      case EntityDecoderState.NumericStart: {
        (_a2 = this.errors) === null || _a2 === void 0 ? void 0 : _a2.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      case EntityDecoderState.EntityStart: {
        return 0;
      }
    }
  }
}
function getDecoder(decodeTree) {
  let ret = "";
  const decoder = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      const len = decoder.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo = nodeIdx;
  let hi = lo + branchCount - 1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo = mid + 1;
    } else if (midVal > char) {
      hi = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
getDecoder(htmlDecodeTree);
getDecoder(xmlDecodeTree);
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
  CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
  CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
  CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes2[CharCodes2["Space"] = 32] = "Space";
  CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
  CharCodes2[CharCodes2["Number"] = 35] = "Number";
  CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
  CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
  CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
  CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
  CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
  CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
  CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
  CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
  CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
  CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
  CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
  CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
  CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
  CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
  CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
  CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
  CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
  CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
  CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
  CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
var State;
(function(State2) {
  State2[State2["Text"] = 1] = "Text";
  State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
  State2[State2["InTagName"] = 3] = "InTagName";
  State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
  State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
  State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
  State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
  State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
  State2[State2["InAttributeName"] = 9] = "InAttributeName";
  State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
  State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
  State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
  State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
  State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
  State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
  State2[State2["InDeclaration"] = 16] = "InDeclaration";
  State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
  State2[State2["BeforeComment"] = 18] = "BeforeComment";
  State2[State2["CDATASequence"] = 19] = "CDATASequence";
  State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
  State2[State2["InCommentLike"] = 21] = "InCommentLike";
  State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
  State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
  State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
  State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
  State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
  State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
  State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
  State2[State2["InHexEntity"] = 29] = "InHexEntity";
})(State || (State = {}));
function isWhitespace$2(c2) {
  return c2 === CharCodes.Space || c2 === CharCodes.NewLine || c2 === CharCodes.Tab || c2 === CharCodes.FormFeed || c2 === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c2) {
  return c2 === CharCodes.Slash || c2 === CharCodes.Gt || isWhitespace$2(c2);
}
function isNumber(c2) {
  return c2 >= CharCodes.Zero && c2 <= CharCodes.Nine;
}
function isASCIIAlpha(c2) {
  return c2 >= CharCodes.LowerA && c2 <= CharCodes.LowerZ || c2 >= CharCodes.UpperA && c2 <= CharCodes.UpperZ;
}
function isHexDigit(c2) {
  return c2 >= CharCodes.UpperA && c2 <= CharCodes.UpperF || c2 >= CharCodes.LowerA && c2 <= CharCodes.LowerF;
}
var QuoteType;
(function(QuoteType2) {
  QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
  QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
  QuoteType2[QuoteType2["Single"] = 2] = "Single";
  QuoteType2[QuoteType2["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
const Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  CdataEnd: new Uint8Array([93, 93, 62]),
  CommentEnd: new Uint8Array([45, 45, 62]),
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
  // `</title`
};
class Tokenizer {
  constructor({ xmlMode = false, decodeEntities = true }, cbs) {
    this.cbs = cbs;
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.isSpecial = false;
    this.running = true;
    this.offset = 0;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
    this.trieIndex = 0;
    this.trieCurrent = 0;
    this.entityResult = 0;
    this.entityExcess = 0;
    this.xmlMode = xmlMode;
    this.decodeEntities = decodeEntities;
    this.entityTrie = xmlMode ? xmlDecodeTree : htmlDecodeTree;
  }
  reset() {
    this.state = State.Text;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = State.Text;
    this.currentSequence = void 0;
    this.running = true;
    this.offset = 0;
  }
  write(chunk) {
    this.offset += this.buffer.length;
    this.buffer = chunk;
    this.parse();
  }
  end() {
    if (this.running)
      this.finish();
  }
  pause() {
    this.running = false;
  }
  resume() {
    this.running = true;
    if (this.index < this.buffer.length + this.offset) {
      this.parse();
    }
  }
  /**
   * The current index within all of the written data.
   */
  getIndex() {
    return this.index;
  }
  /**
   * The start of the current section.
   */
  getSectionStart() {
    return this.sectionStart;
  }
  stateText(c2) {
    if (c2 === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = State.BeforeTagName;
      this.sectionStart = this.index;
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.state = State.BeforeEntity;
    }
  }
  stateSpecialStartSequence(c2) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c2)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c2 | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.isSpecial = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = State.InTagName;
    this.stateInTagName(c2);
  }
  /** Look for an end tag. For <title> tags, also decode entities. */
  stateInSpecialTag(c2) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c2 === CharCodes.Gt || isWhitespace$2(c2)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.isSpecial = false;
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c2);
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c2 | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd) {
        if (this.decodeEntities && c2 === CharCodes.Amp) {
          this.state = State.BeforeEntity;
        }
      } else if (this.fastForwardTo(CharCodes.Lt)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c2 === CharCodes.Lt);
    }
  }
  stateCDATASequence(c2) {
    if (c2 === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = State.InCommentLike;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = State.InDeclaration;
      this.stateInDeclaration(c2);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c2) {
    while (++this.index < this.buffer.length + this.offset) {
      if (this.buffer.charCodeAt(this.index - this.offset) === c2) {
        return true;
      }
    }
    this.index = this.buffer.length + this.offset - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c2) {
    if (c2 === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index, 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index, 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = State.Text;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c2 !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  /**
   * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
   *
   * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
   * We allow anything that wouldn't end the tag.
   */
  isTagStartChar(c2) {
    return this.xmlMode ? !isEndOfTagSection(c2) : isASCIIAlpha(c2);
  }
  startSpecial(sequence, offset) {
    this.isSpecial = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
    this.state = State.SpecialStartSequence;
  }
  stateBeforeTagName(c2) {
    if (c2 === CharCodes.ExclamationMark) {
      this.state = State.BeforeDeclaration;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.Questionmark) {
      this.state = State.InProcessingInstruction;
      this.sectionStart = this.index + 1;
    } else if (this.isTagStartChar(c2)) {
      const lower = c2 | 32;
      this.sectionStart = this.index;
      if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
        this.startSpecial(Sequences.TitleEnd, 3);
      } else {
        this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
      }
    } else if (c2 === CharCodes.Slash) {
      this.state = State.BeforeClosingTagName;
    } else {
      this.state = State.Text;
      this.stateText(c2);
    }
  }
  stateInTagName(c2) {
    if (isEndOfTagSection(c2)) {
      this.cbs.onopentagname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    }
  }
  stateBeforeClosingTagName(c2) {
    if (isWhitespace$2(c2))
      ;
    else if (c2 === CharCodes.Gt) {
      this.state = State.Text;
    } else {
      this.state = this.isTagStartChar(c2) ? State.InClosingTagName : State.InSpecialComment;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c2) {
    if (c2 === CharCodes.Gt || isWhitespace$2(c2)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterClosingTagName;
      this.stateAfterClosingTagName(c2);
    }
  }
  stateAfterClosingTagName(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.state = State.Text;
      this.baseState = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttributeName(c2) {
    if (c2 === CharCodes.Gt) {
      this.cbs.onopentagend(this.index);
      if (this.isSpecial) {
        this.state = State.InSpecialTag;
        this.sequenceIndex = 0;
      } else {
        this.state = State.Text;
      }
      this.baseState = this.state;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.Slash) {
      this.state = State.InSelfClosingTag;
    } else if (!isWhitespace$2(c2)) {
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c2) {
    if (c2 === CharCodes.Gt) {
      this.cbs.onselfclosingtag(this.index);
      this.state = State.Text;
      this.baseState = State.Text;
      this.sectionStart = this.index + 1;
      this.isSpecial = false;
    } else if (!isWhitespace$2(c2)) {
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    }
  }
  stateInAttributeName(c2) {
    if (c2 === CharCodes.Eq || isEndOfTagSection(c2)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = State.AfterAttributeName;
      this.stateAfterAttributeName(c2);
    }
  }
  stateAfterAttributeName(c2) {
    if (c2 === CharCodes.Eq) {
      this.state = State.BeforeAttributeValue;
    } else if (c2 === CharCodes.Slash || c2 === CharCodes.Gt) {
      this.cbs.onattribend(QuoteType.NoValue, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    } else if (!isWhitespace$2(c2)) {
      this.cbs.onattribend(QuoteType.NoValue, this.index);
      this.state = State.InAttributeName;
      this.sectionStart = this.index;
    }
  }
  stateBeforeAttributeValue(c2) {
    if (c2 === CharCodes.DoubleQuote) {
      this.state = State.InAttributeValueDq;
      this.sectionStart = this.index + 1;
    } else if (c2 === CharCodes.SingleQuote) {
      this.state = State.InAttributeValueSq;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace$2(c2)) {
      this.sectionStart = this.index;
      this.state = State.InAttributeValueNq;
      this.stateInAttributeValueNoQuotes(c2);
    }
  }
  handleInAttributeValue(c2, quote) {
    if (c2 === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
      this.state = State.BeforeAttributeName;
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.baseState = this.state;
      this.state = State.BeforeEntity;
    }
  }
  stateInAttributeValueDoubleQuotes(c2) {
    this.handleInAttributeValue(c2, CharCodes.DoubleQuote);
  }
  stateInAttributeValueSingleQuotes(c2) {
    this.handleInAttributeValue(c2, CharCodes.SingleQuote);
  }
  stateInAttributeValueNoQuotes(c2) {
    if (isWhitespace$2(c2) || c2 === CharCodes.Gt) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(QuoteType.Unquoted, this.index);
      this.state = State.BeforeAttributeName;
      this.stateBeforeAttributeName(c2);
    } else if (this.decodeEntities && c2 === CharCodes.Amp) {
      this.baseState = this.state;
      this.state = State.BeforeEntity;
    }
  }
  stateBeforeDeclaration(c2) {
    if (c2 === CharCodes.OpeningSquareBracket) {
      this.state = State.CDATASequence;
      this.sequenceIndex = 0;
    } else {
      this.state = c2 === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
    }
  }
  stateInDeclaration(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.ondeclaration(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c2) {
    if (c2 === CharCodes.Dash) {
      this.state = State.InCommentLike;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = State.InDeclaration;
    }
  }
  stateInSpecialComment(c2) {
    if (c2 === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
      this.cbs.oncomment(this.sectionStart, this.index, 0);
      this.state = State.Text;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c2) {
    const lower = c2 | 32;
    if (lower === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (lower === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = State.InTagName;
      this.stateInTagName(c2);
    }
  }
  stateBeforeEntity(c2) {
    this.entityExcess = 1;
    this.entityResult = 0;
    if (c2 === CharCodes.Number) {
      this.state = State.BeforeNumericEntity;
    } else if (c2 === CharCodes.Amp)
      ;
    else {
      this.trieIndex = 0;
      this.trieCurrent = this.entityTrie[0];
      this.state = State.InNamedEntity;
      this.stateInNamedEntity(c2);
    }
  }
  stateInNamedEntity(c2) {
    this.entityExcess += 1;
    this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c2);
    if (this.trieIndex < 0) {
      this.emitNamedEntity();
      this.index--;
      return;
    }
    this.trieCurrent = this.entityTrie[this.trieIndex];
    const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
    if (masked) {
      const valueLength = (masked >> 14) - 1;
      if (!this.allowLegacyEntity() && c2 !== CharCodes.Semi) {
        this.trieIndex += valueLength;
      } else {
        const entityStart = this.index - this.entityExcess + 1;
        if (entityStart > this.sectionStart) {
          this.emitPartial(this.sectionStart, entityStart);
        }
        this.entityResult = this.trieIndex;
        this.trieIndex += valueLength;
        this.entityExcess = 0;
        this.sectionStart = this.index + 1;
        if (valueLength === 0) {
          this.emitNamedEntity();
        }
      }
    }
  }
  emitNamedEntity() {
    this.state = this.baseState;
    if (this.entityResult === 0) {
      return;
    }
    const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14;
    switch (valueLength) {
      case 1: {
        this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
        break;
      }
      case 2: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        break;
      }
      case 3: {
        this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
        this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
      }
    }
  }
  stateBeforeNumericEntity(c2) {
    if ((c2 | 32) === CharCodes.LowerX) {
      this.entityExcess++;
      this.state = State.InHexEntity;
    } else {
      this.state = State.InNumericEntity;
      this.stateInNumericEntity(c2);
    }
  }
  emitNumericEntity(strict) {
    const entityStart = this.index - this.entityExcess - 1;
    const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
    if (numberStart !== this.index) {
      if (entityStart > this.sectionStart) {
        this.emitPartial(this.sectionStart, entityStart);
      }
      this.sectionStart = this.index + Number(strict);
      this.emitCodePoint(replaceCodePoint(this.entityResult));
    }
    this.state = this.baseState;
  }
  stateInNumericEntity(c2) {
    if (c2 === CharCodes.Semi) {
      this.emitNumericEntity(true);
    } else if (isNumber(c2)) {
      this.entityResult = this.entityResult * 10 + (c2 - CharCodes.Zero);
      this.entityExcess++;
    } else {
      if (this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else {
        this.state = this.baseState;
      }
      this.index--;
    }
  }
  stateInHexEntity(c2) {
    if (c2 === CharCodes.Semi) {
      this.emitNumericEntity(true);
    } else if (isNumber(c2)) {
      this.entityResult = this.entityResult * 16 + (c2 - CharCodes.Zero);
      this.entityExcess++;
    } else if (isHexDigit(c2)) {
      this.entityResult = this.entityResult * 16 + ((c2 | 32) - CharCodes.LowerA + 10);
      this.entityExcess++;
    } else {
      if (this.allowLegacyEntity()) {
        this.emitNumericEntity(false);
      } else {
        this.state = this.baseState;
      }
      this.index--;
    }
  }
  allowLegacyEntity() {
    return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.running && this.sectionStart !== this.index) {
      if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  shouldContinue() {
    return this.index < this.buffer.length + this.offset && this.running;
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse() {
    while (this.shouldContinue()) {
      const c2 = this.buffer.charCodeAt(this.index - this.offset);
      switch (this.state) {
        case State.Text: {
          this.stateText(c2);
          break;
        }
        case State.SpecialStartSequence: {
          this.stateSpecialStartSequence(c2);
          break;
        }
        case State.InSpecialTag: {
          this.stateInSpecialTag(c2);
          break;
        }
        case State.CDATASequence: {
          this.stateCDATASequence(c2);
          break;
        }
        case State.InAttributeValueDq: {
          this.stateInAttributeValueDoubleQuotes(c2);
          break;
        }
        case State.InAttributeName: {
          this.stateInAttributeName(c2);
          break;
        }
        case State.InCommentLike: {
          this.stateInCommentLike(c2);
          break;
        }
        case State.InSpecialComment: {
          this.stateInSpecialComment(c2);
          break;
        }
        case State.BeforeAttributeName: {
          this.stateBeforeAttributeName(c2);
          break;
        }
        case State.InTagName: {
          this.stateInTagName(c2);
          break;
        }
        case State.InClosingTagName: {
          this.stateInClosingTagName(c2);
          break;
        }
        case State.BeforeTagName: {
          this.stateBeforeTagName(c2);
          break;
        }
        case State.AfterAttributeName: {
          this.stateAfterAttributeName(c2);
          break;
        }
        case State.InAttributeValueSq: {
          this.stateInAttributeValueSingleQuotes(c2);
          break;
        }
        case State.BeforeAttributeValue: {
          this.stateBeforeAttributeValue(c2);
          break;
        }
        case State.BeforeClosingTagName: {
          this.stateBeforeClosingTagName(c2);
          break;
        }
        case State.AfterClosingTagName: {
          this.stateAfterClosingTagName(c2);
          break;
        }
        case State.BeforeSpecialS: {
          this.stateBeforeSpecialS(c2);
          break;
        }
        case State.InAttributeValueNq: {
          this.stateInAttributeValueNoQuotes(c2);
          break;
        }
        case State.InSelfClosingTag: {
          this.stateInSelfClosingTag(c2);
          break;
        }
        case State.InDeclaration: {
          this.stateInDeclaration(c2);
          break;
        }
        case State.BeforeDeclaration: {
          this.stateBeforeDeclaration(c2);
          break;
        }
        case State.BeforeComment: {
          this.stateBeforeComment(c2);
          break;
        }
        case State.InProcessingInstruction: {
          this.stateInProcessingInstruction(c2);
          break;
        }
        case State.InNamedEntity: {
          this.stateInNamedEntity(c2);
          break;
        }
        case State.BeforeEntity: {
          this.stateBeforeEntity(c2);
          break;
        }
        case State.InHexEntity: {
          this.stateInHexEntity(c2);
          break;
        }
        case State.InNumericEntity: {
          this.stateInNumericEntity(c2);
          break;
        }
        default: {
          this.stateBeforeNumericEntity(c2);
        }
      }
      this.index++;
    }
    this.cleanup();
  }
  finish() {
    if (this.state === State.InNamedEntity) {
      this.emitNamedEntity();
    }
    if (this.sectionStart < this.index) {
      this.handleTrailingData();
    }
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length + this.offset;
    if (this.state === State.InCommentLike) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex, 0);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex, 0);
      }
    } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
      this.emitNumericEntity(false);
    } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
      this.emitNumericEntity(false);
    } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName)
      ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitPartial(start, endIndex) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      this.cbs.onattribdata(start, endIndex);
    } else {
      this.cbs.ontext(start, endIndex);
    }
  }
  emitCodePoint(cp) {
    if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
      this.cbs.onattribentity(cp);
    } else {
      this.cbs.ontextentity(cp);
    }
  }
}
const formTags = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]);
const pTag = /* @__PURE__ */ new Set(["p"]);
const tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
const ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
const rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
const openImpliesClose = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", pTag],
  ["h1", pTag],
  ["h2", pTag],
  ["h3", pTag],
  ["h4", pTag],
  ["h5", pTag],
  ["h6", pTag],
  ["select", formTags],
  ["input", formTags],
  ["output", formTags],
  ["button", formTags],
  ["datalist", formTags],
  ["textarea", formTags],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", ddtTags],
  ["dt", ddtTags],
  ["address", pTag],
  ["article", pTag],
  ["aside", pTag],
  ["blockquote", pTag],
  ["details", pTag],
  ["div", pTag],
  ["dl", pTag],
  ["fieldset", pTag],
  ["figcaption", pTag],
  ["figure", pTag],
  ["footer", pTag],
  ["form", pTag],
  ["header", pTag],
  ["hr", pTag],
  ["main", pTag],
  ["nav", pTag],
  ["ol", pTag],
  ["pre", pTag],
  ["section", pTag],
  ["table", pTag],
  ["ul", pTag],
  ["rt", rtpTags],
  ["rp", rtpTags],
  ["tbody", tableSectionTags],
  ["tfoot", tableSectionTags]
]);
const voidElements = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
const foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
const htmlIntegrationElements = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]);
const reNameEnd = /\s|\//;
class Parser {
  constructor(cbs, options2 = {}) {
    var _a2, _b, _c, _d, _e;
    this.options = options2;
    this.startIndex = 0;
    this.endIndex = 0;
    this.openTagStart = 0;
    this.tagname = "";
    this.attribname = "";
    this.attribvalue = "";
    this.attribs = null;
    this.stack = [];
    this.foreignContext = [];
    this.buffers = [];
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
    this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
    this.lowerCaseTagNames = (_a2 = options2.lowerCaseTags) !== null && _a2 !== void 0 ? _a2 : !options2.xmlMode;
    this.lowerCaseAttributeNames = (_b = options2.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options2.xmlMode;
    this.tokenizer = new ((_c = options2.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
    (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
  }
  // Tokenizer event handlers
  /** @internal */
  ontext(start, endIndex) {
    var _a2, _b;
    const data = this.getSlice(start, endIndex);
    this.endIndex = endIndex - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, data);
    this.startIndex = endIndex;
  }
  /** @internal */
  ontextentity(cp) {
    var _a2, _b;
    const index = this.tokenizer.getSectionStart();
    this.endIndex = index - 1;
    (_b = (_a2 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a2, fromCodePoint(cp));
    this.startIndex = index;
  }
  isVoidElement(name2) {
    return !this.options.xmlMode && voidElements.has(name2);
  }
  /** @internal */
  onopentagname(start, endIndex) {
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    this.emitOpenTag(name2);
  }
  emitOpenTag(name2) {
    var _a2, _b, _c, _d;
    this.openTagStart = this.startIndex;
    this.tagname = name2;
    const impliesClose = !this.options.xmlMode && openImpliesClose.get(name2);
    if (impliesClose) {
      while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
        const element = this.stack.pop();
        (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, element, true);
      }
    }
    if (!this.isVoidElement(name2)) {
      this.stack.push(name2);
      if (foreignContextElements.has(name2)) {
        this.foreignContext.push(true);
      } else if (htmlIntegrationElements.has(name2)) {
        this.foreignContext.push(false);
      }
    }
    (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name2);
    if (this.cbs.onopentag)
      this.attribs = {};
  }
  endOpenTag(isImplied) {
    var _a2, _b;
    this.startIndex = this.openTagStart;
    if (this.attribs) {
      (_b = (_a2 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a2, this.tagname, this.attribs, isImplied);
      this.attribs = null;
    }
    if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
      this.cbs.onclosetag(this.tagname, true);
    }
    this.tagname = "";
  }
  /** @internal */
  onopentagend(endIndex) {
    this.endIndex = endIndex;
    this.endOpenTag(false);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onclosetag(start, endIndex) {
    var _a2, _b, _c, _d, _e, _f;
    this.endIndex = endIndex;
    let name2 = this.getSlice(start, endIndex);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    if (foreignContextElements.has(name2) || htmlIntegrationElements.has(name2)) {
      this.foreignContext.pop();
    }
    if (!this.isVoidElement(name2)) {
      const pos = this.stack.lastIndexOf(name2);
      if (pos !== -1) {
        if (this.cbs.onclosetag) {
          let count = this.stack.length - pos;
          while (count--) {
            this.cbs.onclosetag(this.stack.pop(), count !== 0);
          }
        } else
          this.stack.length = pos;
      } else if (!this.options.xmlMode && name2 === "p") {
        this.emitOpenTag("p");
        this.closeCurrentTag(true);
      }
    } else if (!this.options.xmlMode && name2 === "br") {
      (_b = (_a2 = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a2, "br");
      (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
      (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onselfclosingtag(endIndex) {
    this.endIndex = endIndex;
    if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
      this.closeCurrentTag(false);
      this.startIndex = endIndex + 1;
    } else {
      this.onopentagend(endIndex);
    }
  }
  closeCurrentTag(isOpenImplied) {
    var _a2, _b;
    const name2 = this.tagname;
    this.endOpenTag(isOpenImplied);
    if (this.stack[this.stack.length - 1] === name2) {
      (_b = (_a2 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a2, name2, !isOpenImplied);
      this.stack.pop();
    }
  }
  /** @internal */
  onattribname(start, endIndex) {
    this.startIndex = start;
    const name2 = this.getSlice(start, endIndex);
    this.attribname = this.lowerCaseAttributeNames ? name2.toLowerCase() : name2;
  }
  /** @internal */
  onattribdata(start, endIndex) {
    this.attribvalue += this.getSlice(start, endIndex);
  }
  /** @internal */
  onattribentity(cp) {
    this.attribvalue += fromCodePoint(cp);
  }
  /** @internal */
  onattribend(quote, endIndex) {
    var _a2, _b;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a2, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
    if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
      this.attribs[this.attribname] = this.attribvalue;
    }
    this.attribvalue = "";
  }
  getInstructionName(value) {
    const index = value.search(reNameEnd);
    let name2 = index < 0 ? value : value.substr(0, index);
    if (this.lowerCaseTagNames) {
      name2 = name2.toLowerCase();
    }
    return name2;
  }
  /** @internal */
  ondeclaration(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`!${name2}`, `!${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onprocessinginstruction(start, endIndex) {
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex);
    if (this.cbs.onprocessinginstruction) {
      const name2 = this.getInstructionName(value);
      this.cbs.onprocessinginstruction(`?${name2}`, `?${value}`);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncomment(start, endIndex, offset) {
    var _a2, _b, _c, _d;
    this.endIndex = endIndex;
    (_b = (_a2 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a2, this.getSlice(start, endIndex - offset));
    (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  oncdata(start, endIndex, offset) {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    this.endIndex = endIndex;
    const value = this.getSlice(start, endIndex - offset);
    if (this.options.xmlMode || this.options.recognizeCDATA) {
      (_b = (_a2 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a2);
      (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
      (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
    } else {
      (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
      (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
    }
    this.startIndex = endIndex + 1;
  }
  /** @internal */
  onend() {
    var _a2, _b;
    if (this.cbs.onclosetag) {
      this.endIndex = this.startIndex;
      for (let index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
        ;
    }
    (_b = (_a2 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a2);
  }
  /**
   * Resets the parser to a blank state, ready to parse a new HTML document
   */
  reset() {
    var _a2, _b, _c, _d;
    (_b = (_a2 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a2);
    this.tokenizer.reset();
    this.tagname = "";
    this.attribname = "";
    this.attribs = null;
    this.stack.length = 0;
    this.startIndex = 0;
    this.endIndex = 0;
    (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
    this.buffers.length = 0;
    this.bufferOffset = 0;
    this.writeIndex = 0;
    this.ended = false;
  }
  /**
   * Resets the parser, then parses a complete document and
   * pushes it to the handler.
   *
   * @param data Document to parse.
   */
  parseComplete(data) {
    this.reset();
    this.end(data);
  }
  getSlice(start, end) {
    while (start - this.bufferOffset >= this.buffers[0].length) {
      this.shiftBuffer();
    }
    let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
    while (end - this.bufferOffset > this.buffers[0].length) {
      this.shiftBuffer();
      slice += this.buffers[0].slice(0, end - this.bufferOffset);
    }
    return slice;
  }
  shiftBuffer() {
    this.bufferOffset += this.buffers[0].length;
    this.writeIndex--;
    this.buffers.shift();
  }
  /**
   * Parses a chunk of data and calls the corresponding callbacks.
   *
   * @param chunk Chunk to parse.
   */
  write(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".write() after done!"));
      return;
    }
    this.buffers.push(chunk);
    if (this.tokenizer.running) {
      this.tokenizer.write(chunk);
      this.writeIndex++;
    }
  }
  /**
   * Parses the end of the buffer and clears the stack, calls onend.
   *
   * @param chunk Optional final chunk to parse.
   */
  end(chunk) {
    var _a2, _b;
    if (this.ended) {
      (_b = (_a2 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a2, new Error(".end() after done!"));
      return;
    }
    if (chunk)
      this.write(chunk);
    this.ended = true;
    this.tokenizer.end();
  }
  /**
   * Pauses parsing. The parser won't emit events until `resume` is called.
   */
  pause() {
    this.tokenizer.pause();
  }
  /**
   * Resumes parsing after `pause` was called.
   */
  resume() {
    this.tokenizer.resume();
    while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
      this.tokenizer.write(this.buffers[this.writeIndex++]);
    }
    if (this.ended)
      this.tokenizer.end();
  }
  /**
   * Alias of `write`, for backwards compatibility.
   *
   * @param chunk Chunk to parse.
   * @deprecated
   */
  parseChunk(chunk) {
    this.write(chunk);
  }
  /**
   * Alias of `end`, for backwards compatibility.
   *
   * @param chunk Optional final chunk to parse.
   * @deprecated
   */
  done(chunk) {
    this.end(chunk);
  }
}
const xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
const xmlCodeMap = /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [39, "&apos;"],
  [60, "&lt;"],
  [62, "&gt;"]
]);
const getCodePoint = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    (c2, index) => (c2.charCodeAt(index) & 64512) === 55296 ? (c2.charCodeAt(index) - 55296) * 1024 + c2.charCodeAt(index + 1) - 56320 + 65536 : c2.charCodeAt(index)
  )
);
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i = match.index;
    const char = str.charCodeAt(i);
    const next = xmlCodeMap.get(char);
    if (next !== void 0) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
function getEscaper(regex2, map2) {
  return function escape2(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex2.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
const escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
  [34, "&quot;"],
  [38, "&amp;"],
  [160, "&nbsp;"]
]));
const escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
  [38, "&amp;"],
  [60, "&lt;"],
  [62, "&gt;"],
  [160, "&nbsp;"]
]));
const elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((val) => [val.toLowerCase(), val]));
const attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((val) => [val.toLowerCase(), val]));
const unencodedElements = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes, opts) {
  var _a2;
  if (!attributes)
    return;
  const encode = ((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes).map((key) => {
    var _a3, _b;
    const value = (_a3 = attributes[key]) !== null && _a3 !== void 0 ? _a3 : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return `${key}="${encode(value)}"`;
  }).join(" ");
}
const singleTag = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function render$1(node, options2 = {}) {
  const nodes = "length" in node ? node : [node];
  let output2 = "";
  for (let i = 0; i < nodes.length; i++) {
    output2 += renderNode(nodes[i], options2);
  }
  return output2;
}
function renderNode(node, options2) {
  switch (node.type) {
    case Root:
      return render$1(node.children, options2);
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment$1:
      return renderComment(node);
    case CDATA$1:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options2);
    case Text$1:
      return renderText(node, options2);
  }
}
const foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]);
const foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a2;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a2 = elementNames.get(elem.name)) !== null && _a2 !== void 0 ? _a2 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)
  ))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render$1(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
}
function renderDirective(elem) {
  return `<${elem.data}>`;
}
function renderText(elem, opts) {
  var _a2;
  let data = elem.data || "";
  if (((_a2 = opts.encodeEntities) !== null && _a2 !== void 0 ? _a2 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
}
function renderCdata(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
  return `<!--${elem.data}-->`;
}
function parseDocument(data, options2) {
  const handler = new DomHandler(void 0, options2);
  new Parser(handler, options2).end(data);
  return handler.root;
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options2) {
  return options2.clone !== false && options2.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options2) : value;
}
function defaultArrayMerge(target, source, options2) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options2);
  });
}
function getMergeFunction(key, options2) {
  if (!options2.customMerge) {
    return deepmerge;
  }
  var customMerge = options2.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options2) {
  var destination = {};
  if (options2.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options2);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options2.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options2)(target[key], source[key], options2);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options2);
    }
  });
  return destination;
}
function deepmerge(target, source, options2) {
  options2 = options2 || {};
  options2.arrayMerge = options2.arrayMerge || defaultArrayMerge;
  options2.isMergeableObject = options2.isMergeableObject || isMergeableObject;
  options2.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options2);
  } else if (sourceIsArray) {
    return options2.arrayMerge(target, source, options2);
  } else {
    return mergeObject(target, source, options2);
  }
}
deepmerge.all = function deepmergeAll(array, options2) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options2);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
const merge = /* @__PURE__ */ getDefaultExportFromCjs(cjs);
function limitedDepthRecursive(n2, f, g = () => void 0) {
  if (n2 === void 0) {
    const f1 = function(...args) {
      return f(f1, ...args);
    };
    return f1;
  }
  if (n2 >= 0) {
    return function(...args) {
      return f(limitedDepthRecursive(n2 - 1, f, g), ...args);
    };
  }
  return g;
}
function trimCharacter(str, char) {
  let start = 0;
  let end = str.length;
  while (start < end && str[start] === char) {
    ++start;
  }
  while (end > start && str[end - 1] === char) {
    --end;
  }
  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
function trimCharacterEnd(str, char) {
  let end = str.length;
  while (end > 0 && str[end - 1] === char) {
    --end;
  }
  return end < str.length ? str.substring(0, end) : str;
}
function unicodeEscape(str) {
  return str.replace(/[\s\S]/g, (c2) => "\\u" + c2.charCodeAt().toString(16).padStart(4, "0"));
}
function mergeDuplicatesPreferLast(items, getKey) {
  const map2 = /* @__PURE__ */ new Map();
  for (let i = items.length; i-- > 0; ) {
    const item = items[i];
    const key = getKey(item);
    map2.set(
      key,
      map2.has(key) ? merge(item, map2.get(key), { arrayMerge: overwriteMerge$1 }) : item
    );
  }
  return [...map2.values()].reverse();
}
const overwriteMerge$1 = (acc, src2, options2) => [...src2];
function get(obj, path) {
  for (const key of path) {
    if (!obj) {
      return void 0;
    }
    obj = obj[key];
  }
  return obj;
}
function numberToLetterSequence(num, baseChar = "a", base = 26) {
  const digits = [];
  do {
    num -= 1;
    digits.push(num % base);
    num = num / base >> 0;
  } while (num > 0);
  const baseCode = baseChar.charCodeAt(0);
  return digits.reverse().map((n2) => String.fromCharCode(baseCode + n2)).join("");
}
const I = ["I", "X", "C", "M"];
const V = ["V", "L", "D"];
function numberToRoman(num) {
  return [...num + ""].map((n2) => +n2).reverse().map((v, i) => v % 5 < 4 ? (v < 5 ? "" : V[i]) + I[i].repeat(v % 5) : I[i] + (v < 5 ? V[i] : I[i + 1])).reverse().join("");
}
class InlineTextBuilder {
  /**
   * Creates an instance of InlineTextBuilder.
   *
   * If `maxLineLength` is not provided then it is either `options.wordwrap` or unlimited.
   *
   * @param { Options } options           HtmlToText options.
   * @param { number }  [ maxLineLength ] This builder will try to wrap text to fit this line length.
   */
  constructor(options2, maxLineLength = void 0) {
    this.lines = [];
    this.nextLineWords = [];
    this.maxLineLength = maxLineLength || options2.wordwrap || Number.MAX_VALUE;
    this.nextLineAvailableChars = this.maxLineLength;
    this.wrapCharacters = get(options2, ["longWordSplit", "wrapCharacters"]) || [];
    this.forceWrapOnLimit = get(options2, ["longWordSplit", "forceWrapOnLimit"]) || false;
    this.stashedSpace = false;
    this.wordBreakOpportunity = false;
  }
  /**
   * Add a new word.
   *
   * @param { string } word A word to add.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  pushWord(word, noWrap = false) {
    if (this.nextLineAvailableChars <= 0 && !noWrap) {
      this.startNewLine();
    }
    const isLineStart = this.nextLineWords.length === 0;
    const cost = word.length + (isLineStart ? 0 : 1);
    if (cost <= this.nextLineAvailableChars || noWrap) {
      this.nextLineWords.push(word);
      this.nextLineAvailableChars -= cost;
    } else {
      const [first, ...rest] = this.splitLongWord(word);
      if (!isLineStart) {
        this.startNewLine();
      }
      this.nextLineWords.push(first);
      this.nextLineAvailableChars -= first.length;
      for (const part of rest) {
        this.startNewLine();
        this.nextLineWords.push(part);
        this.nextLineAvailableChars -= part.length;
      }
    }
  }
  /**
   * Pop a word from the currently built line.
   * This doesn't affect completed lines.
   *
   * @returns { string }
   */
  popWord() {
    const lastWord = this.nextLineWords.pop();
    if (lastWord !== void 0) {
      const isLineStart = this.nextLineWords.length === 0;
      const cost = lastWord.length + (isLineStart ? 0 : 1);
      this.nextLineAvailableChars += cost;
    }
    return lastWord;
  }
  /**
   * Concat a word to the last word already in the builder.
   * Adds a new word in case there are no words yet in the last line.
   *
   * @param { string } word A word to be concatenated.
   * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
   */
  concatWord(word, noWrap = false) {
    if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
      this.pushWord(word, noWrap);
      this.wordBreakOpportunity = false;
    } else {
      const lastWord = this.popWord();
      this.pushWord(lastWord ? lastWord.concat(word) : word, noWrap);
    }
  }
  /**
   * Add current line (and more empty lines if provided argument > 1) to the list of complete lines and start a new one.
   *
   * @param { number } n Number of line breaks that will be added to the resulting string.
   */
  startNewLine(n2 = 1) {
    this.lines.push(this.nextLineWords);
    if (n2 > 1) {
      this.lines.push(...Array.from({ length: n2 - 1 }, () => []));
    }
    this.nextLineWords = [];
    this.nextLineAvailableChars = this.maxLineLength;
  }
  /**
   * No words in this builder.
   *
   * @returns { boolean }
   */
  isEmpty() {
    return this.lines.length === 0 && this.nextLineWords.length === 0;
  }
  clear() {
    this.lines.length = 0;
    this.nextLineWords.length = 0;
    this.nextLineAvailableChars = this.maxLineLength;
  }
  /**
   * Join all lines of words inside the InlineTextBuilder into a complete string.
   *
   * @returns { string }
   */
  toString() {
    return [...this.lines, this.nextLineWords].map((words) => words.join(" ")).join("\n");
  }
  /**
   * Split a long word up to fit within the word wrap limit.
   * Use either a character to split looking back from the word wrap limit,
   * or truncate to the word wrap limit.
   *
   * @param   { string }   word Input word.
   * @returns { string[] }      Parts of the word.
   */
  splitLongWord(word) {
    const parts = [];
    let idx = 0;
    while (word.length > this.maxLineLength) {
      const firstLine = word.substring(0, this.maxLineLength);
      const remainingChars = word.substring(this.maxLineLength);
      const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);
      if (splitIndex > -1) {
        word = firstLine.substring(splitIndex + 1) + remainingChars;
        parts.push(firstLine.substring(0, splitIndex + 1));
      } else {
        idx++;
        if (idx < this.wrapCharacters.length) {
          word = firstLine + remainingChars;
        } else {
          if (this.forceWrapOnLimit) {
            parts.push(firstLine);
            word = remainingChars;
            if (word.length > this.maxLineLength) {
              continue;
            }
          } else {
            word = firstLine + remainingChars;
          }
          break;
        }
      }
    }
    parts.push(word);
    return parts;
  }
}
class StackItem {
  constructor(next = null) {
    this.next = next;
  }
  getRoot() {
    return this.next ? this.next : this;
  }
}
class BlockStackItem extends StackItem {
  constructor(options2, next = null, leadingLineBreaks = 1, maxLineLength = void 0) {
    super(next);
    this.leadingLineBreaks = leadingLineBreaks;
    this.inlineTextBuilder = new InlineTextBuilder(options2, maxLineLength);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class ListStackItem extends BlockStackItem {
  constructor(options2, next = null, {
    interRowLineBreaks = 1,
    leadingLineBreaks = 2,
    maxLineLength = void 0,
    maxPrefixLength = 0,
    prefixAlign = "left"
  } = {}) {
    super(options2, next, leadingLineBreaks, maxLineLength);
    this.maxPrefixLength = maxPrefixLength;
    this.prefixAlign = prefixAlign;
    this.interRowLineBreaks = interRowLineBreaks;
  }
}
class ListItemStackItem extends BlockStackItem {
  constructor(options2, next = null, {
    leadingLineBreaks = 1,
    maxLineLength = void 0,
    prefix = ""
  } = {}) {
    super(options2, next, leadingLineBreaks, maxLineLength);
    this.prefix = prefix;
  }
}
class TableStackItem extends StackItem {
  constructor(next = null) {
    super(next);
    this.rows = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TableRowStackItem extends StackItem {
  constructor(next = null) {
    super(next);
    this.cells = [];
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TableCellStackItem extends StackItem {
  constructor(options2, next = null, maxColumnWidth = void 0) {
    super(next);
    this.inlineTextBuilder = new InlineTextBuilder(options2, maxColumnWidth);
    this.rawText = "";
    this.stashedLineBreaks = 0;
    this.isPre = next && next.isPre;
    this.isNoWrap = next && next.isNoWrap;
  }
}
class TransformerStackItem extends StackItem {
  constructor(next = null, transform) {
    super(next);
    this.transform = transform;
  }
}
function charactersToCodes(str) {
  return [...str].map((c2) => "\\u" + c2.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
class WhitespaceProcessor {
  /**
   * Creates an instance of WhitespaceProcessor.
   *
   * @param { Options } options    HtmlToText options.
   * @memberof WhitespaceProcessor
   */
  constructor(options2) {
    this.whitespaceChars = options2.preserveNewlines ? options2.whitespaceCharacters.replace(/\n/g, "") : options2.whitespaceCharacters;
    const whitespaceCodes = charactersToCodes(this.whitespaceChars);
    this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
    this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
    this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
    this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${whitespaceCodes}])`, "g");
    this.newlineOrNonNewlineStringRe = new RegExp(`(\\n|[^\\n]+)`, "g");
    if (options2.preserveNewlines) {
      const wordOrNewlineRe = new RegExp(`\\n|[^\\n${whitespaceCodes}]+`, "gm");
      this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str) => str, noWrap = false) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordOrNewlineRe.exec(text);
        if (m) {
          anyMatch = true;
          if (m[0] === "\n") {
            inlineTextBuilder.startNewLine();
          } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordOrNewlineRe.exec(text)) !== null) {
            if (m[0] === "\n") {
              inlineTextBuilder.startNewLine();
            } else {
              inlineTextBuilder.pushWord(transform(m[0]), noWrap);
            }
          }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    } else {
      const wordRe = new RegExp(`[^${whitespaceCodes}]+`, "g");
      this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str) => str, noWrap = false) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m = wordRe.exec(text);
        if (m) {
          anyMatch = true;
          if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          } else {
            inlineTextBuilder.concatWord(transform(m[0]), noWrap);
          }
          while ((m = wordRe.exec(text)) !== null) {
            inlineTextBuilder.pushWord(transform(m[0]), noWrap);
          }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
      };
    }
  }
  /**
   * Add text with only minimal processing.
   * Everything between newlines considered a single word.
   * No whitespace is trimmed.
   * Not affected by preserveNewlines option - `\n` always starts a new line.
   *
   * `noWrap` argument is `true` by default - this won't start a new line
   * even if there is not enough space left in the current line.
   *
   * @param { string }            text              Input text.
   * @param { InlineTextBuilder } inlineTextBuilder A builder to receive processed text.
   * @param { boolean }           [noWrap] Don't wrap text even if the line is too long.
   */
  addLiteral(text, inlineTextBuilder, noWrap = true) {
    if (!text) {
      return;
    }
    const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
    let anyMatch = false;
    let m = this.newlineOrNonNewlineStringRe.exec(text);
    if (m) {
      anyMatch = true;
      if (m[0] === "\n") {
        inlineTextBuilder.startNewLine();
      } else if (previouslyStashedSpace) {
        inlineTextBuilder.pushWord(m[0], noWrap);
      } else {
        inlineTextBuilder.concatWord(m[0], noWrap);
      }
      while ((m = this.newlineOrNonNewlineStringRe.exec(text)) !== null) {
        if (m[0] === "\n") {
          inlineTextBuilder.startNewLine();
        } else {
          inlineTextBuilder.pushWord(m[0], noWrap);
        }
      }
    }
    inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch;
  }
  /**
   * Test whether the given text starts with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testLeadingWhitespace(text) {
    return this.leadingWhitespaceRe.test(text);
  }
  /**
   * Test whether the given text ends with HTML whitespace character.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testTrailingWhitespace(text) {
    return this.trailingWhitespaceRe.test(text);
  }
  /**
   * Test whether the given text contains any non-whitespace characters.
   *
   * @param   { string }  text  The string to test.
   * @returns { boolean }
   */
  testContainsWords(text) {
    return !this.allWhitespaceOrEmptyRe.test(text);
  }
  /**
   * Return the number of newlines if there are no words.
   *
   * If any word is found then return zero regardless of the actual number of newlines.
   *
   * @param   { string }  text  Input string.
   * @returns { number }
   */
  countNewlinesNoWords(text) {
    this.newlineOrNonWhitespaceRe.lastIndex = 0;
    let counter = 0;
    let match;
    while ((match = this.newlineOrNonWhitespaceRe.exec(text)) !== null) {
      if (match[0] === "\n") {
        counter++;
      } else {
        return 0;
      }
    }
    return counter;
  }
}
class BlockTextBuilder {
  /**
   * Creates an instance of BlockTextBuilder.
   *
   * @param { Options } options HtmlToText options.
   * @param { import('selderee').Picker<DomNode, TagDefinition> } picker Selectors decision tree picker.
   * @param { any} [metadata] Optional metadata for HTML document, for use in formatters.
   */
  constructor(options2, picker, metadata = void 0) {
    this.options = options2;
    this.picker = picker;
    this.metadata = metadata;
    this.whitespaceProcessor = new WhitespaceProcessor(options2);
    this._stackItem = new BlockStackItem(options2);
    this._wordTransformer = void 0;
  }
  /**
   * Put a word-by-word transform function onto the transformations stack.
   *
   * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
   *
   * Word transformations applied before wrapping.
   *
   * @param { (str: string) => string } wordTransform Word transformation function.
   */
  pushWordTransform(wordTransform) {
    this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
  }
  /**
   * Remove a function from the word transformations stack.
   *
   * @returns { (str: string) => string } A function that was removed.
   */
  popWordTransform() {
    if (!this._wordTransformer) {
      return void 0;
    }
    const transform = this._wordTransformer.transform;
    this._wordTransformer = this._wordTransformer.next;
    return transform;
  }
  /**
   * Ignore wordwrap option in followup inline additions and disable automatic wrapping.
   */
  startNoWrap() {
    this._stackItem.isNoWrap = true;
  }
  /**
   * Return automatic wrapping to behavior defined by options.
   */
  stopNoWrap() {
    this._stackItem.isNoWrap = false;
  }
  /** @returns { (str: string) => string } */
  _getCombinedWordTransformer() {
    const wt = this._wordTransformer ? (str) => applyTransformer(str, this._wordTransformer) : void 0;
    const ce = this.options.encodeCharacters;
    return wt ? ce ? (str) => ce(wt(str)) : wt : ce;
  }
  _popStackItem() {
    const item = this._stackItem;
    this._stackItem = item.next;
    return item;
  }
  /**
   * Add a line break into currently built block.
   */
  addLineBreak() {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += "\n";
    } else {
      this._stackItem.inlineTextBuilder.startNewLine();
    }
  }
  /**
   * Allow to break line in case directly following text will not fit.
   */
  addWordBreakOpportunity() {
    if (this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem) {
      this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
    }
  }
  /**
   * Add a node inline into the currently built block.
   *
   * @param { string } str
   * Text content of a node to add.
   *
   * @param { object } [param1]
   * Object holding the parameters of the operation.
   *
   * @param { boolean } [param1.noWordTransform]
   * Ignore word transformers if there are any.
   * Don't encode characters as well.
   * (Use this for things like URL addresses).
   */
  addInline(str, { noWordTransform = false } = {}) {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }
    if (str.length === 0 || // empty string
    this._stackItem.stashedLineBreaks && // stashed linebreaks make whitespace irrelevant
    !this.whitespaceProcessor.testContainsWords(str)) {
      return;
    }
    if (this.options.preserveNewlines) {
      const newlinesNumber = this.whitespaceProcessor.countNewlinesNoWords(str);
      if (newlinesNumber > 0) {
        this._stackItem.inlineTextBuilder.startNewLine(newlinesNumber);
        return;
      }
    }
    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.shrinkWrapAdd(
      str,
      this._stackItem.inlineTextBuilder,
      noWordTransform ? void 0 : this._getCombinedWordTransformer(),
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0;
  }
  /**
   * Add a string inline into the currently built block.
   *
   * Use this for markup elements that don't have to adhere
   * to text layout rules.
   *
   * @param { string } str Text to add.
   */
  addLiteral(str) {
    if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
      return;
    }
    if (str.length === 0) {
      return;
    }
    if (this._stackItem.isPre) {
      this._stackItem.rawText += str;
      return;
    }
    if (this._stackItem.stashedLineBreaks) {
      this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
    }
    this.whitespaceProcessor.addLiteral(
      str,
      this._stackItem.inlineTextBuilder,
      this._stackItem.isNoWrap
    );
    this._stackItem.stashedLineBreaks = 0;
  }
  /**
   * Start building a new block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any preceding block.
   *
   * @param { number }  [param0.reservedLineLength]
   * Reserve this number of characters on each line for block markup.
   *
   * @param { boolean } [param0.isPre]
   * Should HTML whitespace be preserved inside this block.
   */
  openBlock({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
    const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
    this._stackItem = new BlockStackItem(
      this.options,
      this._stackItem,
      leadingLineBreaks,
      maxLineLength
    );
    if (isPre) {
      this._stackItem.isPre = true;
    }
  }
  /**
   * Finalize currently built block, add it's content to the parent block.
   *
   * @param { object } [param0]
   * Object holding the parameters of the block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This block should have at least this number of line breaks to separate it from any following block.
   *
   * @param { (str: string) => string } [param0.blockTransform]
   * A function to transform the block text before adding to the parent block.
   * This happens after word wrap and should be used in combination with reserved line length
   * in order to keep line lengths correct.
   * Used for whole block markup.
   */
  closeBlock({ trailingLineBreaks = 1, blockTransform = void 0 } = {}) {
    const block = this._popStackItem();
    const blockText = blockTransform ? blockTransform(getText(block)) : getText(block);
    addText(this._stackItem, blockText, block.leadingLineBreaks, Math.max(block.stashedLineBreaks, trailingLineBreaks));
  }
  /**
   * Start building a new list.
   *
   * @param { object } [param0]
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.maxPrefixLength]
   * Length of the longest list item prefix.
   * If not supplied or too small then list items won't be aligned properly.
   *
   * @param { 'left' | 'right' } [param0.prefixAlign]
   * Specify how prefixes of different lengths have to be aligned
   * within a column.
   *
   * @param { number } [param0.interRowLineBreaks]
   * Minimum number of line breaks between list items.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any preceding block.
   */
  openList({ maxPrefixLength = 0, prefixAlign = "left", interRowLineBreaks = 1, leadingLineBreaks = 2 } = {}) {
    this._stackItem = new ListStackItem(this.options, this._stackItem, {
      interRowLineBreaks,
      leadingLineBreaks,
      maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
      maxPrefixLength,
      prefixAlign
    });
  }
  /**
   * Start building a new list item.
   *
   * @param {object} param0
   * Object holding the parameters of the list item.
   *
   * @param { string } [param0.prefix]
   * Prefix for this list item (item number, bullet point, etc).
   */
  openListItem({ prefix = "" } = {}) {
    if (!(this._stackItem instanceof ListStackItem)) {
      throw new Error("Can't add a list item to something that is not a list! Check the formatter.");
    }
    const list = this._stackItem;
    const prefixLength = Math.max(prefix.length, list.maxPrefixLength);
    const maxLineLength = Math.max(20, list.inlineTextBuilder.maxLineLength - prefixLength);
    this._stackItem = new ListItemStackItem(this.options, list, {
      prefix,
      maxLineLength,
      leadingLineBreaks: list.interRowLineBreaks
    });
  }
  /**
   * Finalize currently built list item, add it's content to the parent list.
   */
  closeListItem() {
    const listItem = this._popStackItem();
    const list = listItem.next;
    const prefixLength = Math.max(listItem.prefix.length, list.maxPrefixLength);
    const spacing = "\n" + " ".repeat(prefixLength);
    const prefix = list.prefixAlign === "right" ? listItem.prefix.padStart(prefixLength) : listItem.prefix.padEnd(prefixLength);
    const text = prefix + getText(listItem).replace(/\n/g, spacing);
    addText(
      list,
      text,
      listItem.leadingLineBreaks,
      Math.max(listItem.stashedLineBreaks, list.interRowLineBreaks)
    );
  }
  /**
   * Finalize currently built list, add it's content to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the list.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This list should have at least this number of line breaks to separate it from any following block.
   */
  closeList({ trailingLineBreaks = 2 } = {}) {
    const list = this._popStackItem();
    const text = getText(list);
    if (text) {
      addText(this._stackItem, text, list.leadingLineBreaks, trailingLineBreaks);
    }
  }
  /**
   * Start building a table.
   */
  openTable() {
    this._stackItem = new TableStackItem(this._stackItem);
  }
  /**
   * Start building a table row.
   */
  openTableRow() {
    if (!(this._stackItem instanceof TableStackItem)) {
      throw new Error("Can't add a table row to something that is not a table! Check the formatter.");
    }
    this._stackItem = new TableRowStackItem(this._stackItem);
  }
  /**
   * Start building a table cell.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.maxColumnWidth]
   * Wrap cell content to this width. Fall back to global wordwrap value if undefined.
   */
  openTableCell({ maxColumnWidth = void 0 } = {}) {
    if (!(this._stackItem instanceof TableRowStackItem)) {
      throw new Error("Can't add a table cell to something that is not a table row! Check the formatter.");
    }
    this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
  }
  /**
   * Finalize currently built table cell and add it to parent table row's cells.
   *
   * @param { object } [param0]
   * Object holding the parameters of the cell.
   *
   * @param { number } [param0.colspan] How many columns this cell should occupy.
   * @param { number } [param0.rowspan] How many rows this cell should occupy.
   */
  closeTableCell({ colspan = 1, rowspan = 1 } = {}) {
    const cell = this._popStackItem();
    const text = trimCharacter(getText(cell), "\n");
    cell.next.cells.push({ colspan, rowspan, text });
  }
  /**
   * Finalize currently built table row and add it to parent table's rows.
   */
  closeTableRow() {
    const row = this._popStackItem();
    row.next.rows.push(row.cells);
  }
  /**
   * Finalize currently built table and add the rendered text to the parent block.
   *
   * @param { object } param0
   * Object holding the parameters of the table.
   *
   * @param { TablePrinter } param0.tableToString
   * A function to convert a table of stringified cells into a complete table.
   *
   * @param { number } [param0.leadingLineBreaks]
   * This table should have at least this number of line breaks to separate if from any preceding block.
   *
   * @param { number } [param0.trailingLineBreaks]
   * This table should have at least this number of line breaks to separate it from any following block.
   */
  closeTable({ tableToString: tableToString2, leadingLineBreaks = 2, trailingLineBreaks = 2 }) {
    const table = this._popStackItem();
    const output2 = tableToString2(table.rows);
    if (output2) {
      addText(this._stackItem, output2, leadingLineBreaks, trailingLineBreaks);
    }
  }
  /**
   * Return the rendered text content of this builder.
   *
   * @returns { string }
   */
  toString() {
    return getText(this._stackItem.getRoot());
  }
}
function getText(stackItem) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can be requested for text contents.");
  }
  return stackItem.inlineTextBuilder.isEmpty() ? stackItem.rawText : stackItem.rawText + stackItem.inlineTextBuilder.toString();
}
function addText(stackItem, text, leadingLineBreaks, trailingLineBreaks) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can contain text.");
  }
  const parentText = getText(stackItem);
  const lineBreaks = Math.max(stackItem.stashedLineBreaks, leadingLineBreaks);
  stackItem.inlineTextBuilder.clear();
  if (parentText) {
    stackItem.rawText = parentText + "\n".repeat(lineBreaks) + text;
  } else {
    stackItem.rawText = text;
    stackItem.leadingLineBreaks = lineBreaks;
  }
  stackItem.stashedLineBreaks = trailingLineBreaks;
}
function applyTransformer(str, transformer) {
  return transformer ? applyTransformer(transformer.transform(str), transformer.next) : str;
}
function compile$1(options2 = {}) {
  const selectorsWithoutFormat = options2.selectors.filter((s2) => !s2.format);
  if (selectorsWithoutFormat.length) {
    throw new Error(
      "Following selectors have no specified format: " + selectorsWithoutFormat.map((s2) => `\`${s2.selector}\``).join(", ")
    );
  }
  const picker = new DecisionTree(
    options2.selectors.map((s2) => [s2.selector, s2])
  ).build(hp2Builder);
  if (typeof options2.encodeCharacters !== "function") {
    options2.encodeCharacters = makeReplacerFromDict(options2.encodeCharacters);
  }
  const baseSelectorsPicker = new DecisionTree(
    options2.baseElements.selectors.map((s2, i) => [s2, i + 1])
  ).build(hp2Builder);
  function findBaseElements(dom) {
    return findBases(dom, options2, baseSelectorsPicker);
  }
  const limitedWalk = limitedDepthRecursive(
    options2.limits.maxDepth,
    recursiveWalk,
    function(dom, builder) {
      builder.addInline(options2.limits.ellipsis || "");
    }
  );
  return function(html2, metadata = void 0) {
    return process(html2, metadata, options2, picker, findBaseElements, limitedWalk);
  };
}
function process(html2, metadata, options2, picker, findBaseElements, walk) {
  const maxInputLength = options2.limits.maxInputLength;
  if (maxInputLength && html2 && html2.length > maxInputLength) {
    console.warn(
      `Input length ${html2.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`
    );
    html2 = html2.substring(0, maxInputLength);
  }
  const document = parseDocument(html2, { decodeEntities: options2.decodeEntities });
  const bases = findBaseElements(document.children);
  const builder = new BlockTextBuilder(options2, picker, metadata);
  walk(bases, builder);
  return builder.toString();
}
function findBases(dom, options2, baseSelectorsPicker) {
  const results = [];
  function recursiveWalk2(walk, dom2) {
    dom2 = dom2.slice(0, options2.limits.maxChildNodes);
    for (const elem of dom2) {
      if (elem.type !== "tag") {
        continue;
      }
      const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
      if (pickedSelectorIndex > 0) {
        results.push({ selectorIndex: pickedSelectorIndex, element: elem });
      } else if (elem.children) {
        walk(elem.children);
      }
      if (results.length >= options2.limits.maxBaseElements) {
        return;
      }
    }
  }
  const limitedWalk = limitedDepthRecursive(
    options2.limits.maxDepth,
    recursiveWalk2
  );
  limitedWalk(dom);
  if (options2.baseElements.orderBy !== "occurrence") {
    results.sort((a, b) => a.selectorIndex - b.selectorIndex);
  }
  return options2.baseElements.returnDomByDefault && results.length === 0 ? dom : results.map((x) => x.element);
}
function recursiveWalk(walk, dom, builder) {
  if (!dom) {
    return;
  }
  const options2 = builder.options;
  const tooManyChildNodes = dom.length > options2.limits.maxChildNodes;
  if (tooManyChildNodes) {
    dom = dom.slice(0, options2.limits.maxChildNodes);
    dom.push({
      data: options2.limits.ellipsis,
      type: "text"
    });
  }
  for (const elem of dom) {
    switch (elem.type) {
      case "text": {
        builder.addInline(elem.data);
        break;
      }
      case "tag": {
        const tagDefinition = builder.picker.pick1(elem);
        const format = options2.formatters[tagDefinition.format];
        format(elem, walk, builder, tagDefinition.options || {});
        break;
      }
    }
  }
  return;
}
function makeReplacerFromDict(dict) {
  if (!dict || Object.keys(dict).length === 0) {
    return void 0;
  }
  const entries = Object.entries(dict).filter(([, v]) => v !== false);
  const regex2 = new RegExp(
    entries.map(([c2]) => `(${unicodeEscape([...c2][0])})`).join("|"),
    "g"
  );
  const values = entries.map(([, v]) => v);
  const replacer = (m, ...cgs) => values[cgs.findIndex((cg) => cg)];
  return (str) => str.replace(regex2, replacer);
}
function formatSkip(elem, walk, builder, formatOptions) {
}
function formatInlineString(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.string || "");
}
function formatBlockString(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addLiteral(formatOptions.string || "");
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInline(elem, walk, builder, formatOptions) {
  walk(elem.children, builder);
}
function formatBlock$1(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function renderOpenTag(elem) {
  const attrs = elem.attribs && elem.attribs.length ? " " + Object.entries(elem.attribs).map(([k, v]) => v === "" ? k : `${k}=${v.replace(/"/g, "&quot;")}`).join(" ") : "";
  return `<${elem.name}${attrs}>`;
}
function renderCloseTag(elem) {
  return `</${elem.name}>`;
}
function formatInlineTag(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
}
function formatBlockTag(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineHtml(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(
    render$1(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
}
function formatBlockHtml(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(
    render$1(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineSurround(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.prefix || "");
  walk(elem.children, builder);
  builder.addLiteral(formatOptions.suffix || "");
}
var genericFormatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  block: formatBlock$1,
  blockHtml: formatBlockHtml,
  blockString: formatBlockString,
  blockTag: formatBlockTag,
  inline: formatInline,
  inlineHtml: formatInlineHtml,
  inlineString: formatInlineString,
  inlineSurround: formatInlineSurround,
  inlineTag: formatInlineTag,
  skip: formatSkip
});
function getRow(matrix, j) {
  if (!matrix[j]) {
    matrix[j] = [];
  }
  return matrix[j];
}
function findFirstVacantIndex(row, x = 0) {
  while (row[x]) {
    x++;
  }
  return x;
}
function transposeInPlace(matrix, maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const rowI = getRow(matrix, i);
    for (let j = 0; j < i; j++) {
      const rowJ = getRow(matrix, j);
      if (rowI[j] || rowJ[i]) {
        const temp = rowI[j];
        rowI[j] = rowJ[i];
        rowJ[i] = temp;
      }
    }
  }
}
function putCellIntoLayout(cell, layout, baseRow, baseCol) {
  for (let r2 = 0; r2 < cell.rowspan; r2++) {
    const layoutRow = getRow(layout, baseRow + r2);
    for (let c2 = 0; c2 < cell.colspan; c2++) {
      layoutRow[baseCol + c2] = cell;
    }
  }
}
function getOrInitOffset(offsets, index) {
  if (offsets[index] === void 0) {
    offsets[index] = index === 0 ? 0 : 1 + getOrInitOffset(offsets, index - 1);
  }
  return offsets[index];
}
function updateOffset(offsets, base, span, value) {
  offsets[base + span] = Math.max(
    getOrInitOffset(offsets, base + span),
    getOrInitOffset(offsets, base) + value
  );
}
function tableToString(tableRows, rowSpacing, colSpacing) {
  const layout = [];
  let colNumber = 0;
  const rowNumber = tableRows.length;
  const rowOffsets = [0];
  for (let j = 0; j < rowNumber; j++) {
    const layoutRow = getRow(layout, j);
    const cells = tableRows[j];
    let x = 0;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      x = findFirstVacantIndex(layoutRow, x);
      putCellIntoLayout(cell, layout, j, x);
      x += cell.colspan;
      cell.lines = cell.text.split("\n");
      const cellHeight = cell.lines.length;
      updateOffset(rowOffsets, j, cell.rowspan, cellHeight + rowSpacing);
    }
    colNumber = layoutRow.length > colNumber ? layoutRow.length : colNumber;
  }
  transposeInPlace(layout, rowNumber > colNumber ? rowNumber : colNumber);
  const outputLines = [];
  const colOffsets = [0];
  for (let x = 0; x < colNumber; x++) {
    let y = 0;
    let cell;
    const rowsInThisColumn = Math.min(rowNumber, layout[x].length);
    while (y < rowsInThisColumn) {
      cell = layout[x][y];
      if (cell) {
        if (!cell.rendered) {
          let cellWidth = 0;
          for (let j = 0; j < cell.lines.length; j++) {
            const line = cell.lines[j];
            const lineOffset = rowOffsets[y] + j;
            outputLines[lineOffset] = (outputLines[lineOffset] || "").padEnd(colOffsets[x]) + line;
            cellWidth = line.length > cellWidth ? line.length : cellWidth;
          }
          updateOffset(colOffsets, x, cell.colspan, cellWidth + colSpacing);
          cell.rendered = true;
        }
        y += cell.rowspan;
      } else {
        const lineOffset = rowOffsets[y];
        outputLines[lineOffset] = outputLines[lineOffset] || "";
        y++;
      }
    }
  }
  return outputLines.join("\n");
}
function formatLineBreak(elem, walk, builder, formatOptions) {
  builder.addLineBreak();
}
function formatWbr(elem, walk, builder, formatOptions) {
  builder.addWordBreakOpportunity();
}
function formatHorizontalLine(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addInline("-".repeat(formatOptions.length || builder.options.wordwrap || 40));
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatParagraph(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatPre(elem, walk, builder, formatOptions) {
  builder.openBlock({
    isPre: true,
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2
  });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatHeading(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  if (formatOptions.uppercase !== false) {
    builder.pushWordTransform((str) => str.toUpperCase());
    walk(elem.children, builder);
    builder.popWordTransform();
  } else {
    walk(elem.children, builder);
  }
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatBlockquote(elem, walk, builder, formatOptions) {
  builder.openBlock({
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
    reservedLineLength: 2
  });
  walk(elem.children, builder);
  builder.closeBlock({
    trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
    blockTransform: (str) => (formatOptions.trimEmptyLines !== false ? trimCharacter(str, "\n") : str).split("\n").map((line) => "> " + line).join("\n")
  });
}
function withBrackets(str, brackets) {
  if (!brackets) {
    return str;
  }
  const lbr = typeof brackets[0] === "string" ? brackets[0] : "[";
  const rbr = typeof brackets[1] === "string" ? brackets[1] : "]";
  return lbr + str + rbr;
}
function pathRewrite(path, rewriter, baseUrl, metadata, elem) {
  const modifiedPath = typeof rewriter === "function" ? rewriter(path, metadata, elem) : path;
  return modifiedPath[0] === "/" && baseUrl ? trimCharacterEnd(baseUrl, "/") + modifiedPath : modifiedPath;
}
function formatImage(elem, walk, builder, formatOptions) {
  const attribs = elem.attribs || {};
  const alt = attribs.alt ? attribs.alt : "";
  const src2 = !attribs.src ? "" : pathRewrite(attribs.src, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
  const text = !src2 ? alt : !alt ? withBrackets(src2, formatOptions.linkBrackets) : alt + " " + withBrackets(src2, formatOptions.linkBrackets);
  builder.addInline(text, { noWordTransform: true });
}
function formatAnchor(elem, walk, builder, formatOptions) {
  function getHref() {
    if (formatOptions.ignoreHref) {
      return "";
    }
    if (!elem.attribs || !elem.attribs.href) {
      return "";
    }
    let href2 = elem.attribs.href.replace(/^mailto:/, "");
    if (formatOptions.noAnchorUrl && href2[0] === "#") {
      return "";
    }
    href2 = pathRewrite(href2, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
    return href2;
  }
  const href = getHref();
  if (!href) {
    walk(elem.children, builder);
  } else {
    let text = "";
    builder.pushWordTransform(
      (str) => {
        if (str) {
          text += str;
        }
        return str;
      }
    );
    walk(elem.children, builder);
    builder.popWordTransform();
    const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
    if (!hideSameLink) {
      builder.addInline(
        !text ? href : " " + withBrackets(href, formatOptions.linkBrackets),
        { noWordTransform: true }
      );
    }
  }
}
function formatList(elem, walk, builder, formatOptions, nextPrefixCallback) {
  const isNestedList = get(elem, ["parent", "name"]) === "li";
  let maxPrefixLength = 0;
  const listItems = (elem.children || []).filter((child) => child.type !== "text" || !/^\s*$/.test(child.data)).map(function(child) {
    if (child.name !== "li") {
      return { node: child, prefix: "" };
    }
    const prefix = isNestedList ? nextPrefixCallback().trimStart() : nextPrefixCallback();
    if (prefix.length > maxPrefixLength) {
      maxPrefixLength = prefix.length;
    }
    return { node: child, prefix };
  });
  if (!listItems.length) {
    return;
  }
  builder.openList({
    interRowLineBreaks: 1,
    leadingLineBreaks: isNestedList ? 1 : formatOptions.leadingLineBreaks || 2,
    maxPrefixLength,
    prefixAlign: "left"
  });
  for (const { node, prefix } of listItems) {
    builder.openListItem({ prefix });
    walk([node], builder);
    builder.closeListItem();
  }
  builder.closeList({ trailingLineBreaks: isNestedList ? 1 : formatOptions.trailingLineBreaks || 2 });
}
function formatUnorderedList(elem, walk, builder, formatOptions) {
  const prefix = formatOptions.itemPrefix || " * ";
  return formatList(elem, walk, builder, formatOptions, () => prefix);
}
function formatOrderedList(elem, walk, builder, formatOptions) {
  let nextIndex = Number(elem.attribs.start || "1");
  const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
  const nextPrefixCallback = () => " " + indexFunction(nextIndex++) + ". ";
  return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}
function getOrderedListIndexFunction(olType = "1") {
  switch (olType) {
    case "a":
      return (i) => numberToLetterSequence(i, "a");
    case "A":
      return (i) => numberToLetterSequence(i, "A");
    case "i":
      return (i) => numberToRoman(i).toLowerCase();
    case "I":
      return (i) => numberToRoman(i);
    case "1":
    default:
      return (i) => i.toString();
  }
}
function splitClassesAndIds(selectors) {
  const classes = [];
  const ids = [];
  for (const selector of selectors) {
    if (selector.startsWith(".")) {
      classes.push(selector.substring(1));
    } else if (selector.startsWith("#")) {
      ids.push(selector.substring(1));
    }
  }
  return { classes, ids };
}
function isDataTable(attr, tables) {
  if (tables === true) {
    return true;
  }
  if (!attr) {
    return false;
  }
  const { classes, ids } = splitClassesAndIds(tables);
  const attrClasses = (attr["class"] || "").split(" ");
  const attrIds = (attr["id"] || "").split(" ");
  return attrClasses.some((x) => classes.includes(x)) || attrIds.some((x) => ids.includes(x));
}
function formatTable(elem, walk, builder, formatOptions) {
  return isDataTable(elem.attribs, builder.options.tables) ? formatDataTable(elem, walk, builder, formatOptions) : formatBlock(elem, walk, builder, formatOptions);
}
function formatBlock(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks });
}
function formatDataTable(elem, walk, builder, formatOptions) {
  builder.openTable();
  elem.children.forEach(walkTable);
  builder.closeTable({
    tableToString: (rows) => tableToString(rows, formatOptions.rowSpacing ?? 0, formatOptions.colSpacing ?? 3),
    leadingLineBreaks: formatOptions.leadingLineBreaks,
    trailingLineBreaks: formatOptions.trailingLineBreaks
  });
  function formatCell(cellNode) {
    const colspan = +get(cellNode, ["attribs", "colspan"]) || 1;
    const rowspan = +get(cellNode, ["attribs", "rowspan"]) || 1;
    builder.openTableCell({ maxColumnWidth: formatOptions.maxColumnWidth });
    walk(cellNode.children, builder);
    builder.closeTableCell({ colspan, rowspan });
  }
  function walkTable(elem2) {
    if (elem2.type !== "tag") {
      return;
    }
    const formatHeaderCell = formatOptions.uppercaseHeaderCells !== false ? (cellNode) => {
      builder.pushWordTransform((str) => str.toUpperCase());
      formatCell(cellNode);
      builder.popWordTransform();
    } : formatCell;
    switch (elem2.name) {
      case "thead":
      case "tbody":
      case "tfoot":
      case "center":
        elem2.children.forEach(walkTable);
        return;
      case "tr": {
        builder.openTableRow();
        for (const childOfTr of elem2.children) {
          if (childOfTr.type !== "tag") {
            continue;
          }
          switch (childOfTr.name) {
            case "th": {
              formatHeaderCell(childOfTr);
              break;
            }
            case "td": {
              formatCell(childOfTr);
              break;
            }
          }
        }
        builder.closeTableRow();
        break;
      }
    }
  }
}
var textFormatters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  anchor: formatAnchor,
  blockquote: formatBlockquote,
  dataTable: formatDataTable,
  heading: formatHeading,
  horizontalLine: formatHorizontalLine,
  image: formatImage,
  lineBreak: formatLineBreak,
  orderedList: formatOrderedList,
  paragraph: formatParagraph,
  pre: formatPre,
  table: formatTable,
  unorderedList: formatUnorderedList,
  wbr: formatWbr
});
const DEFAULT_OPTIONS = {
  baseElements: {
    selectors: ["body"],
    orderBy: "selectors",
    // 'selectors' | 'occurrence'
    returnDomByDefault: true
  },
  decodeEntities: true,
  encodeCharacters: {},
  formatters: {},
  limits: {
    ellipsis: "...",
    maxBaseElements: void 0,
    maxChildNodes: void 0,
    maxDepth: void 0,
    maxInputLength: 1 << 24
    // 16_777_216
  },
  longWordSplit: {
    forceWrapOnLimit: false,
    wrapCharacters: []
  },
  preserveNewlines: false,
  selectors: [
    { selector: "*", format: "inline" },
    {
      selector: "a",
      format: "anchor",
      options: {
        baseUrl: null,
        hideLinkHrefIfSameAsText: false,
        ignoreHref: false,
        linkBrackets: ["[", "]"],
        noAnchorUrl: true
      }
    },
    { selector: "article", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "aside", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "blockquote",
      format: "blockquote",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2, trimEmptyLines: true }
    },
    { selector: "br", format: "lineBreak" },
    { selector: "div", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "footer", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "form", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "h1", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h2", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h3", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h4", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h5", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "h6", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
    { selector: "header", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "hr",
      format: "horizontalLine",
      options: { leadingLineBreaks: 2, length: void 0, trailingLineBreaks: 2 }
    },
    {
      selector: "img",
      format: "image",
      options: { baseUrl: null, linkBrackets: ["[", "]"] }
    },
    { selector: "main", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    { selector: "nav", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "ol",
      format: "orderedList",
      options: { leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "p", format: "paragraph", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "pre", format: "pre", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
    { selector: "section", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
    {
      selector: "table",
      format: "table",
      options: {
        colSpacing: 3,
        leadingLineBreaks: 2,
        maxColumnWidth: 60,
        rowSpacing: 0,
        trailingLineBreaks: 2,
        uppercaseHeaderCells: true
      }
    },
    {
      selector: "ul",
      format: "unorderedList",
      options: { itemPrefix: " * ", leadingLineBreaks: 2, trailingLineBreaks: 2 }
    },
    { selector: "wbr", format: "wbr" }
  ],
  tables: [],
  // deprecated
  whitespaceCharacters: " 	\r\n\f​",
  wordwrap: 80
};
const concatMerge = (acc, src2, options2) => [...acc, ...src2];
const overwriteMerge = (acc, src2, options2) => [...src2];
const selectorsMerge = (acc, src2, options2) => acc.some((s2) => typeof s2 === "object") ? concatMerge(acc, src2) : overwriteMerge(acc, src2);
function compile(options2 = {}) {
  options2 = merge(
    DEFAULT_OPTIONS,
    options2,
    {
      arrayMerge: overwriteMerge,
      customMerge: (key) => key === "selectors" ? selectorsMerge : void 0
    }
  );
  options2.formatters = Object.assign({}, genericFormatters, textFormatters, options2.formatters);
  options2.selectors = mergeDuplicatesPreferLast(options2.selectors, (s2) => s2.selector);
  handleDeprecatedOptions(options2);
  return compile$1(options2);
}
function convert(html2, options2 = {}, metadata = void 0) {
  return compile(options2)(html2, metadata);
}
function handleDeprecatedOptions(options2) {
  if (options2.tags) {
    const tagDefinitions = Object.entries(options2.tags).map(
      ([selector, definition]) => ({ ...definition, selector: selector || "*" })
    );
    options2.selectors.push(...tagDefinitions);
    options2.selectors = mergeDuplicatesPreferLast(options2.selectors, (s2) => s2.selector);
  }
  function set(obj, path, value) {
    const valueKey = path.pop();
    for (const key of path) {
      let nested = obj[key];
      if (!nested) {
        nested = {};
        obj[key] = nested;
      }
      obj = nested;
    }
    obj[valueKey] = value;
  }
  if (options2["baseElement"]) {
    const baseElement = options2["baseElement"];
    set(
      options2,
      ["baseElements", "selectors"],
      Array.isArray(baseElement) ? baseElement : [baseElement]
    );
  }
  if (options2["returnDomByDefault"] !== void 0) {
    set(options2, ["baseElements", "returnDomByDefault"], options2["returnDomByDefault"]);
  }
  for (const definition of options2.selectors) {
    if (definition.format === "anchor" && get(definition, ["options", "noLinkBrackets"])) {
      set(definition, ["options", "linkBrackets"], false);
    }
  }
}
var js = { exports: {} };
var src = {};
var javascript = { exports: {} };
var beautifier$2 = {};
var output = {};
var hasRequiredOutput;
function requireOutput() {
  if (hasRequiredOutput)
    return output;
  hasRequiredOutput = 1;
  function OutputLine(parent) {
    this.__parent = parent;
    this.__character_count = 0;
    this.__indent_count = -1;
    this.__alignment_count = 0;
    this.__wrap_point_index = 0;
    this.__wrap_point_character_count = 0;
    this.__wrap_point_indent_count = -1;
    this.__wrap_point_alignment_count = 0;
    this.__items = [];
  }
  OutputLine.prototype.clone_empty = function() {
    var line = new OutputLine(this.__parent);
    line.set_indent(this.__indent_count, this.__alignment_count);
    return line;
  };
  OutputLine.prototype.item = function(index) {
    if (index < 0) {
      return this.__items[this.__items.length + index];
    } else {
      return this.__items[index];
    }
  };
  OutputLine.prototype.has_match = function(pattern2) {
    for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
      if (this.__items[lastCheckedOutput].match(pattern2)) {
        return true;
      }
    }
    return false;
  };
  OutputLine.prototype.set_indent = function(indent, alignment) {
    if (this.is_empty()) {
      this.__indent_count = indent || 0;
      this.__alignment_count = alignment || 0;
      this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
    }
  };
  OutputLine.prototype._set_wrap_point = function() {
    if (this.__parent.wrap_line_length) {
      this.__wrap_point_index = this.__items.length;
      this.__wrap_point_character_count = this.__character_count;
      this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
      this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
    }
  };
  OutputLine.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  };
  OutputLine.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var next = this.__parent.current_line;
      next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
      next.__items = this.__items.slice(this.__wrap_point_index);
      this.__items = this.__items.slice(0, this.__wrap_point_index);
      next.__character_count += this.__character_count - this.__wrap_point_character_count;
      this.__character_count = this.__wrap_point_character_count;
      if (next.__items[0] === " ") {
        next.__items.splice(0, 1);
        next.__character_count -= 1;
      }
      return true;
    }
    return false;
  };
  OutputLine.prototype.is_empty = function() {
    return this.__items.length === 0;
  };
  OutputLine.prototype.last = function() {
    if (!this.is_empty()) {
      return this.__items[this.__items.length - 1];
    } else {
      return null;
    }
  };
  OutputLine.prototype.push = function(item) {
    this.__items.push(item);
    var last_newline_index = item.lastIndexOf("\n");
    if (last_newline_index !== -1) {
      this.__character_count = item.length - last_newline_index;
    } else {
      this.__character_count += item.length;
    }
  };
  OutputLine.prototype.pop = function() {
    var item = null;
    if (!this.is_empty()) {
      item = this.__items.pop();
      this.__character_count -= item.length;
    }
    return item;
  };
  OutputLine.prototype._remove_indent = function() {
    if (this.__indent_count > 0) {
      this.__indent_count -= 1;
      this.__character_count -= this.__parent.indent_size;
    }
  };
  OutputLine.prototype._remove_wrap_indent = function() {
    if (this.__wrap_point_indent_count > 0) {
      this.__wrap_point_indent_count -= 1;
    }
  };
  OutputLine.prototype.trim = function() {
    while (this.last() === " ") {
      this.__items.pop();
      this.__character_count -= 1;
    }
  };
  OutputLine.prototype.toString = function() {
    var result = "";
    if (this.is_empty()) {
      if (this.__parent.indent_empty_lines) {
        result = this.__parent.get_indent_string(this.__indent_count);
      }
    } else {
      result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
      result += this.__items.join("");
    }
    return result;
  };
  function IndentStringCache(options2, baseIndentString) {
    this.__cache = [""];
    this.__indent_size = options2.indent_size;
    this.__indent_string = options2.indent_char;
    if (!options2.indent_with_tabs) {
      this.__indent_string = new Array(options2.indent_size + 1).join(options2.indent_char);
    }
    baseIndentString = baseIndentString || "";
    if (options2.indent_level > 0) {
      baseIndentString = new Array(options2.indent_level + 1).join(this.__indent_string);
    }
    this.__base_string = baseIndentString;
    this.__base_string_length = baseIndentString.length;
  }
  IndentStringCache.prototype.get_indent_size = function(indent, column) {
    var result = this.__base_string_length;
    column = column || 0;
    if (indent < 0) {
      result = 0;
    }
    result += indent * this.__indent_size;
    result += column;
    return result;
  };
  IndentStringCache.prototype.get_indent_string = function(indent_level, column) {
    var result = this.__base_string;
    column = column || 0;
    if (indent_level < 0) {
      indent_level = 0;
      result = "";
    }
    column += indent_level * this.__indent_size;
    this.__ensure_cache(column);
    result += this.__cache[column];
    return result;
  };
  IndentStringCache.prototype.__ensure_cache = function(column) {
    while (column >= this.__cache.length) {
      this.__add_column();
    }
  };
  IndentStringCache.prototype.__add_column = function() {
    var column = this.__cache.length;
    var indent = 0;
    var result = "";
    if (this.__indent_size && column >= this.__indent_size) {
      indent = Math.floor(column / this.__indent_size);
      column -= indent * this.__indent_size;
      result = new Array(indent + 1).join(this.__indent_string);
    }
    if (column) {
      result += new Array(column + 1).join(" ");
    }
    this.__cache.push(result);
  };
  function Output(options2, baseIndentString) {
    this.__indent_cache = new IndentStringCache(options2, baseIndentString);
    this.raw = false;
    this._end_with_newline = options2.end_with_newline;
    this.indent_size = options2.indent_size;
    this.wrap_line_length = options2.wrap_line_length;
    this.indent_empty_lines = options2.indent_empty_lines;
    this.__lines = [];
    this.previous_line = null;
    this.current_line = null;
    this.next_line = new OutputLine(this);
    this.space_before_token = false;
    this.non_breaking_space = false;
    this.previous_token_wrapped = false;
    this.__add_outputline();
  }
  Output.prototype.__add_outputline = function() {
    this.previous_line = this.current_line;
    this.current_line = this.next_line.clone_empty();
    this.__lines.push(this.current_line);
  };
  Output.prototype.get_line_number = function() {
    return this.__lines.length;
  };
  Output.prototype.get_indent_string = function(indent, column) {
    return this.__indent_cache.get_indent_string(indent, column);
  };
  Output.prototype.get_indent_size = function(indent, column) {
    return this.__indent_cache.get_indent_size(indent, column);
  };
  Output.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  };
  Output.prototype.add_new_line = function(force_newline) {
    if (this.is_empty() || !force_newline && this.just_added_newline()) {
      return false;
    }
    if (!this.raw) {
      this.__add_outputline();
    }
    return true;
  };
  Output.prototype.get_code = function(eol) {
    this.trim(true);
    var last_item = this.current_line.pop();
    if (last_item) {
      if (last_item[last_item.length - 1] === "\n") {
        last_item = last_item.replace(/\n+$/g, "");
      }
      this.current_line.push(last_item);
    }
    if (this._end_with_newline) {
      this.__add_outputline();
    }
    var sweet_code = this.__lines.join("\n");
    if (eol !== "\n") {
      sweet_code = sweet_code.replace(/[\n]/g, eol);
    }
    return sweet_code;
  };
  Output.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  };
  Output.prototype.set_indent = function(indent, alignment) {
    indent = indent || 0;
    alignment = alignment || 0;
    this.next_line.set_indent(indent, alignment);
    if (this.__lines.length > 1) {
      this.current_line.set_indent(indent, alignment);
      return true;
    }
    this.current_line.set_indent();
    return false;
  };
  Output.prototype.add_raw_token = function(token2) {
    for (var x = 0; x < token2.newlines; x++) {
      this.__add_outputline();
    }
    this.current_line.set_indent(-1);
    this.current_line.push(token2.whitespace_before);
    this.current_line.push(token2.text);
    this.space_before_token = false;
    this.non_breaking_space = false;
    this.previous_token_wrapped = false;
  };
  Output.prototype.add_token = function(printable_token) {
    this.__add_space_before_token();
    this.current_line.push(printable_token);
    this.space_before_token = false;
    this.non_breaking_space = false;
    this.previous_token_wrapped = this.current_line._allow_wrap();
  };
  Output.prototype.__add_space_before_token = function() {
    if (this.space_before_token && !this.just_added_newline()) {
      if (!this.non_breaking_space) {
        this.set_wrap_point();
      }
      this.current_line.push(" ");
    }
  };
  Output.prototype.remove_indent = function(index) {
    var output_length = this.__lines.length;
    while (index < output_length) {
      this.__lines[index]._remove_indent();
      index++;
    }
    this.current_line._remove_wrap_indent();
  };
  Output.prototype.trim = function(eat_newlines) {
    eat_newlines = eat_newlines === void 0 ? false : eat_newlines;
    this.current_line.trim();
    while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
      this.__lines.pop();
      this.current_line = this.__lines[this.__lines.length - 1];
      this.current_line.trim();
    }
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  };
  Output.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  };
  Output.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  };
  Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
    var index = this.__lines.length - 2;
    while (index >= 0) {
      var potentialEmptyLine = this.__lines[index];
      if (potentialEmptyLine.is_empty()) {
        break;
      } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
        this.__lines.splice(index + 1, 0, new OutputLine(this));
        this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      index--;
    }
  };
  output.Output = Output;
  return output;
}
var token = {};
var hasRequiredToken;
function requireToken() {
  if (hasRequiredToken)
    return token;
  hasRequiredToken = 1;
  function Token(type, text, newlines, whitespace_before) {
    this.type = type;
    this.text = text;
    this.comments_before = null;
    this.newlines = newlines || 0;
    this.whitespace_before = whitespace_before || "";
    this.parent = null;
    this.next = null;
    this.previous = null;
    this.opened = null;
    this.closed = null;
    this.directives = null;
  }
  token.Token = Token;
  return token;
}
var acorn = {};
var hasRequiredAcorn;
function requireAcorn() {
  if (hasRequiredAcorn)
    return acorn;
  hasRequiredAcorn = 1;
  (function(exports) {
    var baseASCIIidentifierStartChars = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a";
    var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a";
    var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
    var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f";
    var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
    var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
    exports.identifier = new RegExp(identifierStart + identifierChars, "g");
    exports.identifierStart = new RegExp(identifierStart);
    exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
    exports.newline = /[\n\r\u2028\u2029]/;
    exports.lineBreak = new RegExp("\r\n|" + exports.newline.source);
    exports.allLineBreaks = new RegExp(exports.lineBreak.source, "g");
  })(acorn);
  return acorn;
}
var options$3 = {};
var options$2 = {};
var hasRequiredOptions$3;
function requireOptions$3() {
  if (hasRequiredOptions$3)
    return options$2;
  hasRequiredOptions$3 = 1;
  function Options(options2, merge_child_field) {
    this.raw_options = _mergeOpts(options2, merge_child_field);
    this.disabled = this._get_boolean("disabled");
    this.eol = this._get_characters("eol", "auto");
    this.end_with_newline = this._get_boolean("end_with_newline");
    this.indent_size = this._get_number("indent_size", 4);
    this.indent_char = this._get_characters("indent_char", " ");
    this.indent_level = this._get_number("indent_level");
    this.preserve_newlines = this._get_boolean("preserve_newlines", true);
    this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786);
    if (!this.preserve_newlines) {
      this.max_preserve_newlines = 0;
    }
    this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	");
    if (this.indent_with_tabs) {
      this.indent_char = "	";
      if (this.indent_size === 1) {
        this.indent_size = 4;
      }
    }
    this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char"));
    this.indent_empty_lines = this._get_boolean("indent_empty_lines");
    this.templating = this._get_selection_list("templating", ["auto", "none", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  Options.prototype._get_array = function(name2, default_value) {
    var option_value = this.raw_options[name2];
    var result = default_value || [];
    if (typeof option_value === "object") {
      if (option_value !== null && typeof option_value.concat === "function") {
        result = option_value.concat();
      }
    } else if (typeof option_value === "string") {
      result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
    }
    return result;
  };
  Options.prototype._get_boolean = function(name2, default_value) {
    var option_value = this.raw_options[name2];
    var result = option_value === void 0 ? !!default_value : !!option_value;
    return result;
  };
  Options.prototype._get_characters = function(name2, default_value) {
    var option_value = this.raw_options[name2];
    var result = default_value || "";
    if (typeof option_value === "string") {
      result = option_value.replace(/\\r/, "\r").replace(/\\n/, "\n").replace(/\\t/, "	");
    }
    return result;
  };
  Options.prototype._get_number = function(name2, default_value) {
    var option_value = this.raw_options[name2];
    default_value = parseInt(default_value, 10);
    if (isNaN(default_value)) {
      default_value = 0;
    }
    var result = parseInt(option_value, 10);
    if (isNaN(result)) {
      result = default_value;
    }
    return result;
  };
  Options.prototype._get_selection = function(name2, selection_list, default_value) {
    var result = this._get_selection_list(name2, selection_list, default_value);
    if (result.length !== 1) {
      throw new Error(
        "Invalid Option Value: The option '" + name2 + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name2] + "'"
      );
    }
    return result[0];
  };
  Options.prototype._get_selection_list = function(name2, selection_list, default_value) {
    if (!selection_list || selection_list.length === 0) {
      throw new Error("Selection list cannot be empty.");
    }
    default_value = default_value || [selection_list[0]];
    if (!this._is_valid_selection(default_value, selection_list)) {
      throw new Error("Invalid Default Value!");
    }
    var result = this._get_array(name2, default_value);
    if (!this._is_valid_selection(result, selection_list)) {
      throw new Error(
        "Invalid Option Value: The option '" + name2 + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name2] + "'"
      );
    }
    return result;
  };
  Options.prototype._is_valid_selection = function(result, selection_list) {
    return result.length && selection_list.length && !result.some(function(item) {
      return selection_list.indexOf(item) === -1;
    });
  };
  function _mergeOpts(allOptions, childFieldName) {
    var finalOpts = {};
    allOptions = _normalizeOpts(allOptions);
    var name2;
    for (name2 in allOptions) {
      if (name2 !== childFieldName) {
        finalOpts[name2] = allOptions[name2];
      }
    }
    if (childFieldName && allOptions[childFieldName]) {
      for (name2 in allOptions[childFieldName]) {
        finalOpts[name2] = allOptions[childFieldName][name2];
      }
    }
    return finalOpts;
  }
  function _normalizeOpts(options2) {
    var convertedOpts = {};
    var key;
    for (key in options2) {
      var newKey = key.replace(/-/g, "_");
      convertedOpts[newKey] = options2[key];
    }
    return convertedOpts;
  }
  options$2.Options = Options;
  options$2.normalizeOpts = _normalizeOpts;
  options$2.mergeOpts = _mergeOpts;
  return options$2;
}
var hasRequiredOptions$2;
function requireOptions$2() {
  if (hasRequiredOptions$2)
    return options$3;
  hasRequiredOptions$2 = 1;
  var BaseOptions = requireOptions$3().Options;
  var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
  function Options(options2) {
    BaseOptions.call(this, options2, "js");
    var raw_brace_style = this.raw_options.brace_style || null;
    if (raw_brace_style === "expand-strict") {
      this.raw_options.brace_style = "expand";
    } else if (raw_brace_style === "collapse-preserve-inline") {
      this.raw_options.brace_style = "collapse,preserve-inline";
    } else if (this.raw_options.braces_on_own_line !== void 0) {
      this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
    }
    var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = false;
    this.brace_style = "collapse";
    for (var bs = 0; bs < brace_style_split.length; bs++) {
      if (brace_style_split[bs] === "preserve-inline") {
        this.brace_preserve_inline = true;
      } else {
        this.brace_style = brace_style_split[bs];
      }
    }
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods");
    this.break_chained_methods = this._get_boolean("break_chained_methods");
    this.space_in_paren = this._get_boolean("space_in_paren");
    this.space_in_empty_paren = this._get_boolean("space_in_empty_paren");
    this.jslint_happy = this._get_boolean("jslint_happy");
    this.space_after_anon_function = this._get_boolean("space_after_anon_function");
    this.space_after_named_function = this._get_boolean("space_after_named_function");
    this.keep_array_indentation = this._get_boolean("keep_array_indentation");
    this.space_before_conditional = this._get_boolean("space_before_conditional", true);
    this.unescape_strings = this._get_boolean("unescape_strings");
    this.e4x = this._get_boolean("e4x");
    this.comma_first = this._get_boolean("comma_first");
    this.operator_position = this._get_selection("operator_position", validPositionValues);
    this.test_output_raw = this._get_boolean("test_output_raw");
    if (this.jslint_happy) {
      this.space_after_anon_function = true;
    }
  }
  Options.prototype = new BaseOptions();
  options$3.Options = Options;
  return options$3;
}
var tokenizer$2 = {};
var inputscanner = {};
var hasRequiredInputscanner;
function requireInputscanner() {
  if (hasRequiredInputscanner)
    return inputscanner;
  hasRequiredInputscanner = 1;
  var regexp_has_sticky = RegExp.prototype.hasOwnProperty("sticky");
  function InputScanner(input_string) {
    this.__input = input_string || "";
    this.__input_length = this.__input.length;
    this.__position = 0;
  }
  InputScanner.prototype.restart = function() {
    this.__position = 0;
  };
  InputScanner.prototype.back = function() {
    if (this.__position > 0) {
      this.__position -= 1;
    }
  };
  InputScanner.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  };
  InputScanner.prototype.next = function() {
    var val = null;
    if (this.hasNext()) {
      val = this.__input.charAt(this.__position);
      this.__position += 1;
    }
    return val;
  };
  InputScanner.prototype.peek = function(index) {
    var val = null;
    index = index || 0;
    index += this.__position;
    if (index >= 0 && index < this.__input_length) {
      val = this.__input.charAt(index);
    }
    return val;
  };
  InputScanner.prototype.__match = function(pattern2, index) {
    pattern2.lastIndex = index;
    var pattern_match = pattern2.exec(this.__input);
    if (pattern_match && !(regexp_has_sticky && pattern2.sticky)) {
      if (pattern_match.index !== index) {
        pattern_match = null;
      }
    }
    return pattern_match;
  };
  InputScanner.prototype.test = function(pattern2, index) {
    index = index || 0;
    index += this.__position;
    if (index >= 0 && index < this.__input_length) {
      return !!this.__match(pattern2, index);
    } else {
      return false;
    }
  };
  InputScanner.prototype.testChar = function(pattern2, index) {
    var val = this.peek(index);
    pattern2.lastIndex = 0;
    return val !== null && pattern2.test(val);
  };
  InputScanner.prototype.match = function(pattern2) {
    var pattern_match = this.__match(pattern2, this.__position);
    if (pattern_match) {
      this.__position += pattern_match[0].length;
    } else {
      pattern_match = null;
    }
    return pattern_match;
  };
  InputScanner.prototype.read = function(starting_pattern, until_pattern, until_after) {
    var val = "";
    var match;
    if (starting_pattern) {
      match = this.match(starting_pattern);
      if (match) {
        val += match[0];
      }
    }
    if (until_pattern && (match || !starting_pattern)) {
      val += this.readUntil(until_pattern, until_after);
    }
    return val;
  };
  InputScanner.prototype.readUntil = function(pattern2, until_after) {
    var val = "";
    var match_index = this.__position;
    pattern2.lastIndex = this.__position;
    var pattern_match = pattern2.exec(this.__input);
    if (pattern_match) {
      match_index = pattern_match.index;
      if (until_after) {
        match_index += pattern_match[0].length;
      }
    } else {
      match_index = this.__input_length;
    }
    val = this.__input.substring(this.__position, match_index);
    this.__position = match_index;
    return val;
  };
  InputScanner.prototype.readUntilAfter = function(pattern2) {
    return this.readUntil(pattern2, true);
  };
  InputScanner.prototype.get_regexp = function(pattern2, match_from) {
    var result = null;
    var flags = "g";
    if (match_from && regexp_has_sticky) {
      flags = "y";
    }
    if (typeof pattern2 === "string" && pattern2 !== "") {
      result = new RegExp(pattern2, flags);
    } else if (pattern2) {
      result = new RegExp(pattern2.source, flags);
    }
    return result;
  };
  InputScanner.prototype.get_literal_regexp = function(literal_string) {
    return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  };
  InputScanner.prototype.peekUntilAfter = function(pattern2) {
    var start = this.__position;
    var val = this.readUntilAfter(pattern2);
    this.__position = start;
    return val;
  };
  InputScanner.prototype.lookBack = function(testVal) {
    var start = this.__position - 1;
    return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
  };
  inputscanner.InputScanner = InputScanner;
  return inputscanner;
}
var tokenizer$1 = {};
var tokenstream = {};
var hasRequiredTokenstream;
function requireTokenstream() {
  if (hasRequiredTokenstream)
    return tokenstream;
  hasRequiredTokenstream = 1;
  function TokenStream(parent_token) {
    this.__tokens = [];
    this.__tokens_length = this.__tokens.length;
    this.__position = 0;
    this.__parent_token = parent_token;
  }
  TokenStream.prototype.restart = function() {
    this.__position = 0;
  };
  TokenStream.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  };
  TokenStream.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  };
  TokenStream.prototype.next = function() {
    var val = null;
    if (this.hasNext()) {
      val = this.__tokens[this.__position];
      this.__position += 1;
    }
    return val;
  };
  TokenStream.prototype.peek = function(index) {
    var val = null;
    index = index || 0;
    index += this.__position;
    if (index >= 0 && index < this.__tokens_length) {
      val = this.__tokens[index];
    }
    return val;
  };
  TokenStream.prototype.add = function(token2) {
    if (this.__parent_token) {
      token2.parent = this.__parent_token;
    }
    this.__tokens.push(token2);
    this.__tokens_length += 1;
  };
  tokenstream.TokenStream = TokenStream;
  return tokenstream;
}
var whitespacepattern = {};
var pattern = {};
var hasRequiredPattern;
function requirePattern() {
  if (hasRequiredPattern)
    return pattern;
  hasRequiredPattern = 1;
  function Pattern(input_scanner, parent) {
    this._input = input_scanner;
    this._starting_pattern = null;
    this._match_pattern = null;
    this._until_pattern = null;
    this._until_after = false;
    if (parent) {
      this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
      this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
      this._until_pattern = this._input.get_regexp(parent._until_pattern);
      this._until_after = parent._until_after;
    }
  }
  Pattern.prototype.read = function() {
    var result = this._input.read(this._starting_pattern);
    if (!this._starting_pattern || result) {
      result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
    }
    return result;
  };
  Pattern.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  };
  Pattern.prototype.until_after = function(pattern2) {
    var result = this._create();
    result._until_after = true;
    result._until_pattern = this._input.get_regexp(pattern2);
    result._update();
    return result;
  };
  Pattern.prototype.until = function(pattern2) {
    var result = this._create();
    result._until_after = false;
    result._until_pattern = this._input.get_regexp(pattern2);
    result._update();
    return result;
  };
  Pattern.prototype.starting_with = function(pattern2) {
    var result = this._create();
    result._starting_pattern = this._input.get_regexp(pattern2, true);
    result._update();
    return result;
  };
  Pattern.prototype.matching = function(pattern2) {
    var result = this._create();
    result._match_pattern = this._input.get_regexp(pattern2, true);
    result._update();
    return result;
  };
  Pattern.prototype._create = function() {
    return new Pattern(this._input, this);
  };
  Pattern.prototype._update = function() {
  };
  pattern.Pattern = Pattern;
  return pattern;
}
var hasRequiredWhitespacepattern;
function requireWhitespacepattern() {
  if (hasRequiredWhitespacepattern)
    return whitespacepattern;
  hasRequiredWhitespacepattern = 1;
  var Pattern = requirePattern().Pattern;
  function WhitespacePattern(input_scanner, parent) {
    Pattern.call(this, input_scanner, parent);
    if (parent) {
      this._line_regexp = this._input.get_regexp(parent._line_regexp);
    } else {
      this.__set_whitespace_patterns("", "");
    }
    this.newline_count = 0;
    this.whitespace_before_token = "";
  }
  WhitespacePattern.prototype = new Pattern();
  WhitespacePattern.prototype.__set_whitespace_patterns = function(whitespace_chars, newline_chars) {
    whitespace_chars += "\\t ";
    newline_chars += "\\n\\r";
    this._match_pattern = this._input.get_regexp(
      "[" + whitespace_chars + newline_chars + "]+",
      true
    );
    this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + newline_chars + "]"
    );
  };
  WhitespacePattern.prototype.read = function() {
    this.newline_count = 0;
    this.whitespace_before_token = "";
    var resulting_string = this._input.read(this._match_pattern);
    if (resulting_string === " ") {
      this.whitespace_before_token = " ";
    } else if (resulting_string) {
      var matches = this.__split(this._newline_regexp, resulting_string);
      this.newline_count = matches.length - 1;
      this.whitespace_before_token = matches[this.newline_count];
    }
    return resulting_string;
  };
  WhitespacePattern.prototype.matching = function(whitespace_chars, newline_chars) {
    var result = this._create();
    result.__set_whitespace_patterns(whitespace_chars, newline_chars);
    result._update();
    return result;
  };
  WhitespacePattern.prototype._create = function() {
    return new WhitespacePattern(this._input, this);
  };
  WhitespacePattern.prototype.__split = function(regexp, input_string) {
    regexp.lastIndex = 0;
    var start_index = 0;
    var result = [];
    var next_match = regexp.exec(input_string);
    while (next_match) {
      result.push(input_string.substring(start_index, next_match.index));
      start_index = next_match.index + next_match[0].length;
      next_match = regexp.exec(input_string);
    }
    if (start_index < input_string.length) {
      result.push(input_string.substring(start_index, input_string.length));
    } else {
      result.push("");
    }
    return result;
  };
  whitespacepattern.WhitespacePattern = WhitespacePattern;
  return whitespacepattern;
}
var hasRequiredTokenizer$2;
function requireTokenizer$2() {
  if (hasRequiredTokenizer$2)
    return tokenizer$1;
  hasRequiredTokenizer$2 = 1;
  var InputScanner = requireInputscanner().InputScanner;
  var Token = requireToken().Token;
  var TokenStream = requireTokenstream().TokenStream;
  var WhitespacePattern = requireWhitespacepattern().WhitespacePattern;
  var TOKEN = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  };
  var Tokenizer2 = function(input_string, options2) {
    this._input = new InputScanner(input_string);
    this._options = options2 || {};
    this.__tokens = null;
    this._patterns = {};
    this._patterns.whitespace = new WhitespacePattern(this._input);
  };
  Tokenizer2.prototype.tokenize = function() {
    this._input.restart();
    this.__tokens = new TokenStream();
    this._reset();
    var current;
    var previous = new Token(TOKEN.START, "");
    var open_token = null;
    var open_stack = [];
    var comments = new TokenStream();
    while (previous.type !== TOKEN.EOF) {
      current = this._get_next_token(previous, open_token);
      while (this._is_comment(current)) {
        comments.add(current);
        current = this._get_next_token(previous, open_token);
      }
      if (!comments.isEmpty()) {
        current.comments_before = comments;
        comments = new TokenStream();
      }
      current.parent = open_token;
      if (this._is_opening(current)) {
        open_stack.push(open_token);
        open_token = current;
      } else if (open_token && this._is_closing(current, open_token)) {
        current.opened = open_token;
        open_token.closed = current;
        open_token = open_stack.pop();
        current.parent = open_token;
      }
      current.previous = previous;
      previous.next = current;
      this.__tokens.add(current);
      previous = current;
    }
    return this.__tokens;
  };
  Tokenizer2.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  };
  Tokenizer2.prototype._reset = function() {
  };
  Tokenizer2.prototype._get_next_token = function(previous_token, open_token) {
    this._readWhitespace();
    var resulting_string = this._input.read(/.+/g);
    if (resulting_string) {
      return this._create_token(TOKEN.RAW, resulting_string);
    } else {
      return this._create_token(TOKEN.EOF, "");
    }
  };
  Tokenizer2.prototype._is_comment = function(current_token) {
    return false;
  };
  Tokenizer2.prototype._is_opening = function(current_token) {
    return false;
  };
  Tokenizer2.prototype._is_closing = function(current_token, open_token) {
    return false;
  };
  Tokenizer2.prototype._create_token = function(type, text) {
    var token2 = new Token(
      type,
      text,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return token2;
  };
  Tokenizer2.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  };
  tokenizer$1.Tokenizer = Tokenizer2;
  tokenizer$1.TOKEN = TOKEN;
  return tokenizer$1;
}
var directives = {};
var hasRequiredDirectives;
function requireDirectives() {
  if (hasRequiredDirectives)
    return directives;
  hasRequiredDirectives = 1;
  function Directives(start_block_pattern, end_block_pattern) {
    start_block_pattern = typeof start_block_pattern === "string" ? start_block_pattern : start_block_pattern.source;
    end_block_pattern = typeof end_block_pattern === "string" ? end_block_pattern : end_block_pattern.source;
    this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, "g");
    this.__directive_pattern = / (\w+)[:](\w+)/g;
    this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, "g");
  }
  Directives.prototype.get_directives = function(text) {
    if (!text.match(this.__directives_block_pattern)) {
      return null;
    }
    var directives2 = {};
    this.__directive_pattern.lastIndex = 0;
    var directive_match = this.__directive_pattern.exec(text);
    while (directive_match) {
      directives2[directive_match[1]] = directive_match[2];
      directive_match = this.__directive_pattern.exec(text);
    }
    return directives2;
  };
  Directives.prototype.readIgnored = function(input) {
    return input.readUntilAfter(this.__directives_end_ignore_pattern);
  };
  directives.Directives = Directives;
  return directives;
}
var templatablepattern = {};
var hasRequiredTemplatablepattern;
function requireTemplatablepattern() {
  if (hasRequiredTemplatablepattern)
    return templatablepattern;
  hasRequiredTemplatablepattern = 1;
  var Pattern = requirePattern().Pattern;
  var template_names = {
    django: false,
    erb: false,
    handlebars: false,
    php: false,
    smarty: false
  };
  function TemplatablePattern(input_scanner, parent) {
    Pattern.call(this, input_scanner, parent);
    this.__template_pattern = null;
    this._disabled = Object.assign({}, template_names);
    this._excluded = Object.assign({}, template_names);
    if (parent) {
      this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
      this._excluded = Object.assign(this._excluded, parent._excluded);
      this._disabled = Object.assign(this._disabled, parent._disabled);
    }
    var pattern2 = new Pattern(input_scanner);
    this.__patterns = {
      handlebars_comment: pattern2.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: pattern2.starting_with(/{{{/).until_after(/}}}/),
      handlebars: pattern2.starting_with(/{{/).until_after(/}}/),
      php: pattern2.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: pattern2.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      // django coflicts with handlebars a bit.
      django: pattern2.starting_with(/{%/).until_after(/%}/),
      django_value: pattern2.starting_with(/{{/).until_after(/}}/),
      django_comment: pattern2.starting_with(/{#/).until_after(/#}/),
      smarty: pattern2.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: pattern2.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: pattern2.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  TemplatablePattern.prototype = new Pattern();
  TemplatablePattern.prototype._create = function() {
    return new TemplatablePattern(this._input, this);
  };
  TemplatablePattern.prototype._update = function() {
    this.__set_templated_pattern();
  };
  TemplatablePattern.prototype.disable = function(language) {
    var result = this._create();
    result._disabled[language] = true;
    result._update();
    return result;
  };
  TemplatablePattern.prototype.read_options = function(options2) {
    var result = this._create();
    for (var language in template_names) {
      result._disabled[language] = options2.templating.indexOf(language) === -1;
    }
    result._update();
    return result;
  };
  TemplatablePattern.prototype.exclude = function(language) {
    var result = this._create();
    result._excluded[language] = true;
    result._update();
    return result;
  };
  TemplatablePattern.prototype.read = function() {
    var result = "";
    if (this._match_pattern) {
      result = this._input.read(this._starting_pattern);
    } else {
      result = this._input.read(this._starting_pattern, this.__template_pattern);
    }
    var next = this._read_template();
    while (next) {
      if (this._match_pattern) {
        next += this._input.read(this._match_pattern);
      } else {
        next += this._input.readUntil(this.__template_pattern);
      }
      result += next;
      next = this._read_template();
    }
    if (this._until_after) {
      result += this._input.readUntilAfter(this._until_pattern);
    }
    return result;
  };
  TemplatablePattern.prototype.__set_templated_pattern = function() {
    var items = [];
    if (!this._disabled.php) {
      items.push(this.__patterns.php._starting_pattern.source);
    }
    if (!this._disabled.handlebars) {
      items.push(this.__patterns.handlebars._starting_pattern.source);
    }
    if (!this._disabled.erb) {
      items.push(this.__patterns.erb._starting_pattern.source);
    }
    if (!this._disabled.django) {
      items.push(this.__patterns.django._starting_pattern.source);
      items.push(this.__patterns.django_value._starting_pattern.source);
      items.push(this.__patterns.django_comment._starting_pattern.source);
    }
    if (!this._disabled.smarty) {
      items.push(this.__patterns.smarty._starting_pattern.source);
    }
    if (this._until_pattern) {
      items.push(this._until_pattern.source);
    }
    this.__template_pattern = this._input.get_regexp("(?:" + items.join("|") + ")");
  };
  TemplatablePattern.prototype._read_template = function() {
    var resulting_string = "";
    var c2 = this._input.peek();
    if (c2 === "<") {
      var peek1 = this._input.peek(1);
      if (!this._disabled.php && !this._excluded.php && peek1 === "?") {
        resulting_string = resulting_string || this.__patterns.php.read();
      }
      if (!this._disabled.erb && !this._excluded.erb && peek1 === "%") {
        resulting_string = resulting_string || this.__patterns.erb.read();
      }
    } else if (c2 === "{") {
      if (!this._disabled.handlebars && !this._excluded.handlebars) {
        resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
        resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
        resulting_string = resulting_string || this.__patterns.handlebars.read();
      }
      if (!this._disabled.django) {
        if (!this._excluded.django && !this._excluded.handlebars) {
          resulting_string = resulting_string || this.__patterns.django_value.read();
        }
        if (!this._excluded.django) {
          resulting_string = resulting_string || this.__patterns.django_comment.read();
          resulting_string = resulting_string || this.__patterns.django.read();
        }
      }
      if (!this._disabled.smarty) {
        if (this._disabled.django && this._disabled.handlebars) {
          resulting_string = resulting_string || this.__patterns.smarty_comment.read();
          resulting_string = resulting_string || this.__patterns.smarty_literal.read();
          resulting_string = resulting_string || this.__patterns.smarty.read();
        }
      }
    }
    return resulting_string;
  };
  templatablepattern.TemplatablePattern = TemplatablePattern;
  return templatablepattern;
}
var hasRequiredTokenizer$1;
function requireTokenizer$1() {
  if (hasRequiredTokenizer$1)
    return tokenizer$2;
  hasRequiredTokenizer$1 = 1;
  var InputScanner = requireInputscanner().InputScanner;
  var BaseTokenizer = requireTokenizer$2().Tokenizer;
  var BASETOKEN = requireTokenizer$2().TOKEN;
  var Directives = requireDirectives().Directives;
  var acorn2 = requireAcorn();
  var Pattern = requirePattern().Pattern;
  var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;
  function in_array(what, arr) {
    return arr.indexOf(what) !== -1;
  }
  var TOKEN = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: BASETOKEN.START,
    RAW: BASETOKEN.RAW,
    EOF: BASETOKEN.EOF
  };
  var directives_core = new Directives(/\/\*/, /\*\//);
  var number_pattern = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/;
  var digit = /[0-9]/;
  var dot_pattern = /[^\d\.]/;
  var positionable_operators = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" ");
  var punct = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
  punct = "\\?\\.(?!\\d) " + punct;
  punct = punct.replace(/ /g, "|");
  var punct_pattern = new RegExp(punct);
  var line_starters = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
  var reserved_words = line_starters.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]);
  var reserved_word_pattern = new RegExp("^(?:" + reserved_words.join("|") + ")$");
  var in_html_comment;
  var Tokenizer2 = function(input_string, options2) {
    BaseTokenizer.call(this, input_string, options2);
    this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var pattern_reader = new Pattern(this._input);
    var templatable = new TemplatablePattern(this._input).read_options(this._options);
    this.__patterns = {
      template: templatable,
      identifier: templatable.starting_with(acorn2.identifier).matching(acorn2.identifierMatch),
      number: pattern_reader.matching(number_pattern),
      punct: pattern_reader.matching(punct_pattern),
      // comment ends just before nearest linefeed or end of file
      comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      //  /* ... */ comment ends with nearest */ or end of file
      block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: pattern_reader.matching(/<!--/),
      html_comment_end: pattern_reader.matching(/-->/),
      include: pattern_reader.starting_with(/#include/).until_after(acorn2.lineBreak),
      shebang: pattern_reader.starting_with(/#!/).until_after(acorn2.lineBreak),
      xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
      double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
      template_text: templatable.until(/[`\\$]/),
      template_expression: templatable.until(/[`}\\]/)
    };
  };
  Tokenizer2.prototype = new BaseTokenizer();
  Tokenizer2.prototype._is_comment = function(current_token) {
    return current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.BLOCK_COMMENT || current_token.type === TOKEN.UNKNOWN;
  };
  Tokenizer2.prototype._is_opening = function(current_token) {
    return current_token.type === TOKEN.START_BLOCK || current_token.type === TOKEN.START_EXPR;
  };
  Tokenizer2.prototype._is_closing = function(current_token, open_token) {
    return (current_token.type === TOKEN.END_BLOCK || current_token.type === TOKEN.END_EXPR) && (open_token && (current_token.text === "]" && open_token.text === "[" || current_token.text === ")" && open_token.text === "(" || current_token.text === "}" && open_token.text === "{"));
  };
  Tokenizer2.prototype._reset = function() {
    in_html_comment = false;
  };
  Tokenizer2.prototype._get_next_token = function(previous_token, open_token) {
    var token2 = null;
    this._readWhitespace();
    var c2 = this._input.peek();
    if (c2 === null) {
      return this._create_token(TOKEN.EOF, "");
    }
    token2 = token2 || this._read_non_javascript(c2);
    token2 = token2 || this._read_string(c2);
    token2 = token2 || this._read_word(previous_token);
    token2 = token2 || this._read_singles(c2);
    token2 = token2 || this._read_comment(c2);
    token2 = token2 || this._read_regexp(c2, previous_token);
    token2 = token2 || this._read_xml(c2, previous_token);
    token2 = token2 || this._read_punctuation();
    token2 = token2 || this._create_token(TOKEN.UNKNOWN, this._input.next());
    return token2;
  };
  Tokenizer2.prototype._read_word = function(previous_token) {
    var resulting_string;
    resulting_string = this.__patterns.identifier.read();
    if (resulting_string !== "") {
      resulting_string = resulting_string.replace(acorn2.allLineBreaks, "\n");
      if (!(previous_token.type === TOKEN.DOT || previous_token.type === TOKEN.RESERVED && (previous_token.text === "set" || previous_token.text === "get")) && reserved_word_pattern.test(resulting_string)) {
        if ((resulting_string === "in" || resulting_string === "of") && (previous_token.type === TOKEN.WORD || previous_token.type === TOKEN.STRING)) {
          return this._create_token(TOKEN.OPERATOR, resulting_string);
        }
        return this._create_token(TOKEN.RESERVED, resulting_string);
      }
      return this._create_token(TOKEN.WORD, resulting_string);
    }
    resulting_string = this.__patterns.number.read();
    if (resulting_string !== "") {
      return this._create_token(TOKEN.WORD, resulting_string);
    }
  };
  Tokenizer2.prototype._read_singles = function(c2) {
    var token2 = null;
    if (c2 === "(" || c2 === "[") {
      token2 = this._create_token(TOKEN.START_EXPR, c2);
    } else if (c2 === ")" || c2 === "]") {
      token2 = this._create_token(TOKEN.END_EXPR, c2);
    } else if (c2 === "{") {
      token2 = this._create_token(TOKEN.START_BLOCK, c2);
    } else if (c2 === "}") {
      token2 = this._create_token(TOKEN.END_BLOCK, c2);
    } else if (c2 === ";") {
      token2 = this._create_token(TOKEN.SEMICOLON, c2);
    } else if (c2 === "." && dot_pattern.test(this._input.peek(1))) {
      token2 = this._create_token(TOKEN.DOT, c2);
    } else if (c2 === ",") {
      token2 = this._create_token(TOKEN.COMMA, c2);
    }
    if (token2) {
      this._input.next();
    }
    return token2;
  };
  Tokenizer2.prototype._read_punctuation = function() {
    var resulting_string = this.__patterns.punct.read();
    if (resulting_string !== "") {
      if (resulting_string === "=") {
        return this._create_token(TOKEN.EQUALS, resulting_string);
      } else if (resulting_string === "?.") {
        return this._create_token(TOKEN.DOT, resulting_string);
      } else {
        return this._create_token(TOKEN.OPERATOR, resulting_string);
      }
    }
  };
  Tokenizer2.prototype._read_non_javascript = function(c2) {
    var resulting_string = "";
    if (c2 === "#") {
      if (this._is_first_token()) {
        resulting_string = this.__patterns.shebang.read();
        if (resulting_string) {
          return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
        }
      }
      resulting_string = this.__patterns.include.read();
      if (resulting_string) {
        return this._create_token(TOKEN.UNKNOWN, resulting_string.trim() + "\n");
      }
      c2 = this._input.next();
      var sharp = "#";
      if (this._input.hasNext() && this._input.testChar(digit)) {
        do {
          c2 = this._input.next();
          sharp += c2;
        } while (this._input.hasNext() && c2 !== "#" && c2 !== "=");
        if (c2 === "#")
          ;
        else if (this._input.peek() === "[" && this._input.peek(1) === "]") {
          sharp += "[]";
          this._input.next();
          this._input.next();
        } else if (this._input.peek() === "{" && this._input.peek(1) === "}") {
          sharp += "{}";
          this._input.next();
          this._input.next();
        }
        return this._create_token(TOKEN.WORD, sharp);
      }
      this._input.back();
    } else if (c2 === "<" && this._is_first_token()) {
      resulting_string = this.__patterns.html_comment_start.read();
      if (resulting_string) {
        while (this._input.hasNext() && !this._input.testChar(acorn2.newline)) {
          resulting_string += this._input.next();
        }
        in_html_comment = true;
        return this._create_token(TOKEN.COMMENT, resulting_string);
      }
    } else if (in_html_comment && c2 === "-") {
      resulting_string = this.__patterns.html_comment_end.read();
      if (resulting_string) {
        in_html_comment = false;
        return this._create_token(TOKEN.COMMENT, resulting_string);
      }
    }
    return null;
  };
  Tokenizer2.prototype._read_comment = function(c2) {
    var token2 = null;
    if (c2 === "/") {
      var comment = "";
      if (this._input.peek(1) === "*") {
        comment = this.__patterns.block_comment.read();
        var directives2 = directives_core.get_directives(comment);
        if (directives2 && directives2.ignore === "start") {
          comment += directives_core.readIgnored(this._input);
        }
        comment = comment.replace(acorn2.allLineBreaks, "\n");
        token2 = this._create_token(TOKEN.BLOCK_COMMENT, comment);
        token2.directives = directives2;
      } else if (this._input.peek(1) === "/") {
        comment = this.__patterns.comment.read();
        token2 = this._create_token(TOKEN.COMMENT, comment);
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_string = function(c2) {
    if (c2 === "`" || c2 === "'" || c2 === '"') {
      var resulting_string = this._input.next();
      this.has_char_escapes = false;
      if (c2 === "`") {
        resulting_string += this._read_string_recursive("`", true, "${");
      } else {
        resulting_string += this._read_string_recursive(c2);
      }
      if (this.has_char_escapes && this._options.unescape_strings) {
        resulting_string = unescape_string(resulting_string);
      }
      if (this._input.peek() === c2) {
        resulting_string += this._input.next();
      }
      resulting_string = resulting_string.replace(acorn2.allLineBreaks, "\n");
      return this._create_token(TOKEN.STRING, resulting_string);
    }
    return null;
  };
  Tokenizer2.prototype._allow_regexp_or_xml = function(previous_token) {
    return previous_token.type === TOKEN.RESERVED && in_array(previous_token.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || previous_token.type === TOKEN.END_EXPR && previous_token.text === ")" && previous_token.opened.previous.type === TOKEN.RESERVED && in_array(previous_token.opened.previous.text, ["if", "while", "for"]) || in_array(previous_token.type, [
      TOKEN.COMMENT,
      TOKEN.START_EXPR,
      TOKEN.START_BLOCK,
      TOKEN.START,
      TOKEN.END_BLOCK,
      TOKEN.OPERATOR,
      TOKEN.EQUALS,
      TOKEN.EOF,
      TOKEN.SEMICOLON,
      TOKEN.COMMA
    ]);
  };
  Tokenizer2.prototype._read_regexp = function(c2, previous_token) {
    if (c2 === "/" && this._allow_regexp_or_xml(previous_token)) {
      var resulting_string = this._input.next();
      var esc = false;
      var in_char_class = false;
      while (this._input.hasNext() && ((esc || in_char_class || this._input.peek() !== c2) && !this._input.testChar(acorn2.newline))) {
        resulting_string += this._input.peek();
        if (!esc) {
          esc = this._input.peek() === "\\";
          if (this._input.peek() === "[") {
            in_char_class = true;
          } else if (this._input.peek() === "]") {
            in_char_class = false;
          }
        } else {
          esc = false;
        }
        this._input.next();
      }
      if (this._input.peek() === c2) {
        resulting_string += this._input.next();
        resulting_string += this._input.read(acorn2.identifier);
      }
      return this._create_token(TOKEN.STRING, resulting_string);
    }
    return null;
  };
  Tokenizer2.prototype._read_xml = function(c2, previous_token) {
    if (this._options.e4x && c2 === "<" && this._allow_regexp_or_xml(previous_token)) {
      var xmlStr = "";
      var match = this.__patterns.xml.read_match();
      if (match) {
        var rootTag = match[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}");
        var isCurlyRoot = rootTag.indexOf("{") === 0;
        var depth = 0;
        while (match) {
          var isEndTag = !!match[1];
          var tagName = match[2];
          var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";
          if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, "{").replace(/\s+}$/, "}"))) {
            if (isEndTag) {
              --depth;
            } else {
              ++depth;
            }
          }
          xmlStr += match[0];
          if (depth <= 0) {
            break;
          }
          match = this.__patterns.xml.read_match();
        }
        if (!match) {
          xmlStr += this._input.match(/[\s\S]*/g)[0];
        }
        xmlStr = xmlStr.replace(acorn2.allLineBreaks, "\n");
        return this._create_token(TOKEN.STRING, xmlStr);
      }
    }
    return null;
  };
  function unescape_string(s2) {
    var out = "", escaped = 0;
    var input_scan = new InputScanner(s2);
    var matched = null;
    while (input_scan.hasNext()) {
      matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);
      if (matched) {
        out += matched[0];
      }
      if (input_scan.peek() === "\\") {
        input_scan.next();
        if (input_scan.peek() === "x") {
          matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
        } else if (input_scan.peek() === "u") {
          matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
        } else {
          out += "\\";
          if (input_scan.hasNext()) {
            out += input_scan.next();
          }
          continue;
        }
        if (!matched) {
          return s2;
        }
        escaped = parseInt(matched[1], 16);
        if (escaped > 126 && escaped <= 255 && matched[0].indexOf("x") === 0) {
          return s2;
        } else if (escaped >= 0 && escaped < 32) {
          out += "\\" + matched[0];
          continue;
        } else if (escaped === 34 || escaped === 39 || escaped === 92) {
          out += "\\" + String.fromCharCode(escaped);
        } else {
          out += String.fromCharCode(escaped);
        }
      }
    }
    return out;
  }
  Tokenizer2.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
    var current_char;
    var pattern2;
    if (delimiter === "'") {
      pattern2 = this.__patterns.single_quote;
    } else if (delimiter === '"') {
      pattern2 = this.__patterns.double_quote;
    } else if (delimiter === "`") {
      pattern2 = this.__patterns.template_text;
    } else if (delimiter === "}") {
      pattern2 = this.__patterns.template_expression;
    }
    var resulting_string = pattern2.read();
    var next = "";
    while (this._input.hasNext()) {
      next = this._input.next();
      if (next === delimiter || !allow_unescaped_newlines && acorn2.newline.test(next)) {
        this._input.back();
        break;
      } else if (next === "\\" && this._input.hasNext()) {
        current_char = this._input.peek();
        if (current_char === "x" || current_char === "u") {
          this.has_char_escapes = true;
        } else if (current_char === "\r" && this._input.peek(1) === "\n") {
          this._input.next();
        }
        next += this._input.next();
      } else if (start_sub) {
        if (start_sub === "${" && next === "$" && this._input.peek() === "{") {
          next += this._input.next();
        }
        if (start_sub === next) {
          if (delimiter === "`") {
            next += this._read_string_recursive("}", allow_unescaped_newlines, "`");
          } else {
            next += this._read_string_recursive("`", allow_unescaped_newlines, "${");
          }
          if (this._input.hasNext()) {
            next += this._input.next();
          }
        }
      }
      next += pattern2.read();
      resulting_string += next;
    }
    return resulting_string;
  };
  tokenizer$2.Tokenizer = Tokenizer2;
  tokenizer$2.TOKEN = TOKEN;
  tokenizer$2.positionable_operators = positionable_operators.slice();
  tokenizer$2.line_starters = line_starters.slice();
  return tokenizer$2;
}
var hasRequiredBeautifier$2;
function requireBeautifier$2() {
  if (hasRequiredBeautifier$2)
    return beautifier$2;
  hasRequiredBeautifier$2 = 1;
  var Output = requireOutput().Output;
  var Token = requireToken().Token;
  var acorn2 = requireAcorn();
  var Options = requireOptions$2().Options;
  var Tokenizer2 = requireTokenizer$1().Tokenizer;
  var line_starters = requireTokenizer$1().line_starters;
  var positionable_operators = requireTokenizer$1().positionable_operators;
  var TOKEN = requireTokenizer$1().TOKEN;
  function in_array(what, arr) {
    return arr.indexOf(what) !== -1;
  }
  function ltrim(s2) {
    return s2.replace(/^\s+/g, "");
  }
  function generateMapFromStrings(list) {
    var result = {};
    for (var x = 0; x < list.length; x++) {
      result[list[x].replace(/-/g, "_")] = list[x];
    }
    return result;
  }
  function reserved_word(token2, word) {
    return token2 && token2.type === TOKEN.RESERVED && token2.text === word;
  }
  function reserved_array(token2, words) {
    return token2 && token2.type === TOKEN.RESERVED && in_array(token2.text, words);
  }
  var special_words = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"];
  var validPositionValues = ["before-newline", "after-newline", "preserve-newline"];
  var OPERATOR_POSITION = generateMapFromStrings(validPositionValues);
  var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
  var MODE = {
    BlockStatement: "BlockStatement",
    // 'BLOCK'
    Statement: "Statement",
    // 'STATEMENT'
    ObjectLiteral: "ObjectLiteral",
    // 'OBJECT',
    ArrayLiteral: "ArrayLiteral",
    //'[EXPRESSION]',
    ForInitializer: "ForInitializer",
    //'(FOR-EXPRESSION)',
    Conditional: "Conditional",
    //'(COND-EXPRESSION)',
    Expression: "Expression"
    //'(EXPRESSION)'
  };
  function remove_redundant_indentation(output2, frame) {
    if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
      return;
    }
    output2.remove_indent(frame.start_line_index);
  }
  function split_linebreaks(s2) {
    s2 = s2.replace(acorn2.allLineBreaks, "\n");
    var out = [], idx = s2.indexOf("\n");
    while (idx !== -1) {
      out.push(s2.substring(0, idx));
      s2 = s2.substring(idx + 1);
      idx = s2.indexOf("\n");
    }
    if (s2.length) {
      out.push(s2);
    }
    return out;
  }
  function is_array(mode) {
    return mode === MODE.ArrayLiteral;
  }
  function is_expression(mode) {
    return in_array(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
  }
  function all_lines_start_with(lines, c2) {
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i].trim();
      if (line.charAt(0) !== c2) {
        return false;
      }
    }
    return true;
  }
  function each_line_matches_indent(lines, indent) {
    var i = 0, len = lines.length, line;
    for (; i < len; i++) {
      line = lines[i];
      if (line && line.indexOf(indent) !== 0) {
        return false;
      }
    }
    return true;
  }
  function Beautifier(source_text, options2) {
    options2 = options2 || {};
    this._source_text = source_text || "";
    this._output = null;
    this._tokens = null;
    this._last_last_text = null;
    this._flags = null;
    this._previous_flags = null;
    this._flag_store = null;
    this._options = new Options(options2);
  }
  Beautifier.prototype.create_flags = function(flags_base, mode) {
    var next_indent_level = 0;
    if (flags_base) {
      next_indent_level = flags_base.indentation_level;
      if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
        next_indent_level = flags_base.line_indent_level;
      }
    }
    var next_flags = {
      mode,
      parent: flags_base,
      last_token: flags_base ? flags_base.last_token : new Token(TOKEN.START_BLOCK, ""),
      // last token text
      last_word: flags_base ? flags_base.last_word : "",
      // last TOKEN.WORD passed
      declaration_statement: false,
      declaration_assignment: false,
      multiline_frame: false,
      inline_frame: false,
      if_block: false,
      else_block: false,
      class_start_block: false,
      // class A { INSIDE HERE } or class B extends C { INSIDE HERE }
      do_block: false,
      do_while: false,
      import_block: false,
      in_case_statement: false,
      // switch(..){ INSIDE HERE }
      in_case: false,
      // we're on the exact line with "case 0:"
      case_body: false,
      // the indented case-action block
      case_block: false,
      // the indented case-action block is wrapped with {}
      indentation_level: next_indent_level,
      alignment: 0,
      line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return next_flags;
  };
  Beautifier.prototype._reset = function(source_text) {
    var baseIndentString = source_text.match(/^[\t ]*/)[0];
    this._last_last_text = "";
    this._output = new Output(this._options, baseIndentString);
    this._output.raw = this._options.test_output_raw;
    this._flag_store = [];
    this.set_mode(MODE.BlockStatement);
    var tokenizer2 = new Tokenizer2(source_text, this._options);
    this._tokens = tokenizer2.tokenize();
    return source_text;
  };
  Beautifier.prototype.beautify = function() {
    if (this._options.disabled) {
      return this._source_text;
    }
    var sweet_code;
    var source_text = this._reset(this._source_text);
    var eol = this._options.eol;
    if (this._options.eol === "auto") {
      eol = "\n";
      if (source_text && acorn2.lineBreak.test(source_text || "")) {
        eol = source_text.match(acorn2.lineBreak)[0];
      }
    }
    var current_token = this._tokens.next();
    while (current_token) {
      this.handle_token(current_token);
      this._last_last_text = this._flags.last_token.text;
      this._flags.last_token = current_token;
      current_token = this._tokens.next();
    }
    sweet_code = this._output.get_code(eol);
    return sweet_code;
  };
  Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
    if (current_token.type === TOKEN.START_EXPR) {
      this.handle_start_expr(current_token);
    } else if (current_token.type === TOKEN.END_EXPR) {
      this.handle_end_expr(current_token);
    } else if (current_token.type === TOKEN.START_BLOCK) {
      this.handle_start_block(current_token);
    } else if (current_token.type === TOKEN.END_BLOCK) {
      this.handle_end_block(current_token);
    } else if (current_token.type === TOKEN.WORD) {
      this.handle_word(current_token);
    } else if (current_token.type === TOKEN.RESERVED) {
      this.handle_word(current_token);
    } else if (current_token.type === TOKEN.SEMICOLON) {
      this.handle_semicolon(current_token);
    } else if (current_token.type === TOKEN.STRING) {
      this.handle_string(current_token);
    } else if (current_token.type === TOKEN.EQUALS) {
      this.handle_equals(current_token);
    } else if (current_token.type === TOKEN.OPERATOR) {
      this.handle_operator(current_token);
    } else if (current_token.type === TOKEN.COMMA) {
      this.handle_comma(current_token);
    } else if (current_token.type === TOKEN.BLOCK_COMMENT) {
      this.handle_block_comment(current_token, preserve_statement_flags);
    } else if (current_token.type === TOKEN.COMMENT) {
      this.handle_comment(current_token, preserve_statement_flags);
    } else if (current_token.type === TOKEN.DOT) {
      this.handle_dot(current_token);
    } else if (current_token.type === TOKEN.EOF) {
      this.handle_eof(current_token);
    } else if (current_token.type === TOKEN.UNKNOWN) {
      this.handle_unknown(current_token, preserve_statement_flags);
    } else {
      this.handle_unknown(current_token, preserve_statement_flags);
    }
  };
  Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
    var newlines = current_token.newlines;
    var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);
    if (current_token.comments_before) {
      var comment_token = current_token.comments_before.next();
      while (comment_token) {
        this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
        this.handle_token(comment_token, preserve_statement_flags);
        comment_token = current_token.comments_before.next();
      }
    }
    if (keep_whitespace) {
      for (var i = 0; i < newlines; i += 1) {
        this.print_newline(i > 0, preserve_statement_flags);
      }
    } else {
      if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
        newlines = this._options.max_preserve_newlines;
      }
      if (this._options.preserve_newlines) {
        if (newlines > 1) {
          this.print_newline(false, preserve_statement_flags);
          for (var j = 1; j < newlines; j += 1) {
            this.print_newline(true, preserve_statement_flags);
          }
        }
      }
    }
  };
  var newline_restricted_tokens = ["async", "break", "continue", "return", "throw", "yield"];
  Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
    force_linewrap = force_linewrap === void 0 ? false : force_linewrap;
    if (this._output.just_added_newline()) {
      return;
    }
    var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
    var operatorLogicApplies = in_array(this._flags.last_token.text, positionable_operators) || in_array(current_token.text, positionable_operators);
    if (operatorLogicApplies) {
      var shouldPrintOperatorNewline = in_array(this._flags.last_token.text, positionable_operators) && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array(current_token.text, positionable_operators);
      shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
    }
    if (shouldPreserveOrForce) {
      this.print_newline(false, true);
    } else if (this._options.wrap_line_length) {
      if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        return;
      }
      this._output.set_wrap_point();
    }
  };
  Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
    if (!preserve_statement_flags) {
      if (this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== TOKEN.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) {
        var next_token = this._tokens.peek();
        while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
          this.restore_mode();
        }
      }
    }
    if (this._output.add_new_line(force_newline)) {
      this._flags.multiline_frame = true;
    }
  };
  Beautifier.prototype.print_token_line_indentation = function(current_token) {
    if (this._output.just_added_newline()) {
      if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === "[" || is_array(this._flags.mode))) {
        this._output.current_line.set_indent(-1);
        this._output.current_line.push(current_token.whitespace_before);
        this._output.space_before_token = false;
      } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
        this._flags.line_indent_level = this._flags.indentation_level;
      }
    }
  };
  Beautifier.prototype.print_token = function(current_token) {
    if (this._output.raw) {
      this._output.add_raw_token(current_token);
      return;
    }
    if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN.COMMA && this._output.just_added_newline()) {
      if (this._output.previous_line.last() === ",") {
        var popped = this._output.previous_line.pop();
        if (this._output.previous_line.is_empty()) {
          this._output.previous_line.push(popped);
          this._output.trim(true);
          this._output.current_line.pop();
          this._output.trim();
        }
        this.print_token_line_indentation(current_token);
        this._output.add_token(",");
        this._output.space_before_token = true;
      }
    }
    this.print_token_line_indentation(current_token);
    this._output.non_breaking_space = true;
    this._output.add_token(current_token.text);
    if (this._output.previous_token_wrapped) {
      this._flags.multiline_frame = true;
    }
  };
  Beautifier.prototype.indent = function() {
    this._flags.indentation_level += 1;
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  };
  Beautifier.prototype.deindent = function() {
    if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
      this._flags.indentation_level -= 1;
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    }
  };
  Beautifier.prototype.set_mode = function(mode) {
    if (this._flags) {
      this._flag_store.push(this._flags);
      this._previous_flags = this._flags;
    } else {
      this._previous_flags = this.create_flags(null, mode);
    }
    this._flags = this.create_flags(this._previous_flags, mode);
    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  };
  Beautifier.prototype.restore_mode = function() {
    if (this._flag_store.length > 0) {
      this._previous_flags = this._flags;
      this._flags = this._flag_store.pop();
      if (this._previous_flags.mode === MODE.Statement) {
        remove_redundant_indentation(this._output, this._previous_flags);
      }
      this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
    }
  };
  Beautifier.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
  };
  Beautifier.prototype.start_of_statement = function(current_token) {
    var start = false;
    start = start || reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD;
    start = start || reserved_word(this._flags.last_token, "do");
    start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
    start = start || reserved_word(this._flags.last_token, "else") && !(reserved_word(current_token, "if") && !current_token.comments_before);
    start = start || this._flags.last_token.type === TOKEN.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
    start = start || this._flags.last_token.type === TOKEN.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === "--" || current_token.text === "++") && this._last_last_text !== "function" && current_token.type !== TOKEN.WORD && current_token.type !== TOKEN.RESERVED;
    start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ["get", "set"]));
    if (start) {
      this.set_mode(MODE.Statement);
      this.indent();
      this.handle_whitespace_and_comments(current_token, true);
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(
          current_token,
          reserved_array(current_token, ["do", "for", "if", "while"])
        );
      }
      return true;
    }
    return false;
  };
  Beautifier.prototype.handle_start_expr = function(current_token) {
    if (!this.start_of_statement(current_token)) {
      this.handle_whitespace_and_comments(current_token);
    }
    var next_mode = MODE.Expression;
    if (current_token.text === "[") {
      if (this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === ")") {
        if (reserved_array(this._flags.last_token, line_starters)) {
          this._output.space_before_token = true;
        }
        this.print_token(current_token);
        this.set_mode(next_mode);
        this.indent();
        if (this._options.space_in_paren) {
          this._output.space_before_token = true;
        }
        return;
      }
      next_mode = MODE.ArrayLiteral;
      if (is_array(this._flags.mode)) {
        if (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) {
          if (!this._options.keep_array_indentation) {
            this.print_newline();
          }
        }
      }
      if (!in_array(this._flags.last_token.type, [TOKEN.START_EXPR, TOKEN.END_EXPR, TOKEN.WORD, TOKEN.OPERATOR, TOKEN.DOT])) {
        this._output.space_before_token = true;
      }
    } else {
      if (this._flags.last_token.type === TOKEN.RESERVED) {
        if (this._flags.last_token.text === "for") {
          this._output.space_before_token = this._options.space_before_conditional;
          next_mode = MODE.ForInitializer;
        } else if (in_array(this._flags.last_token.text, ["if", "while", "switch"])) {
          this._output.space_before_token = this._options.space_before_conditional;
          next_mode = MODE.Conditional;
        } else if (in_array(this._flags.last_word, ["await", "async"])) {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.text === "import" && current_token.whitespace_before === "") {
          this._output.space_before_token = false;
        } else if (in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === "catch") {
          this._output.space_before_token = true;
        }
      } else if (this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
        if (!this.start_of_object_property()) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      } else if (this._flags.last_token.type === TOKEN.WORD) {
        this._output.space_before_token = false;
        var peek_back_two = this._tokens.peek(-3);
        if (this._options.space_after_named_function && peek_back_two) {
          var peek_back_three = this._tokens.peek(-4);
          if (reserved_array(peek_back_two, ["async", "function"]) || peek_back_two.text === "*" && reserved_array(peek_back_three, ["async", "function"])) {
            this._output.space_before_token = true;
          } else if (this._flags.mode === MODE.ObjectLiteral) {
            if (peek_back_two.text === "{" || peek_back_two.text === "," || peek_back_two.text === "*" && (peek_back_three.text === "{" || peek_back_three.text === ",")) {
              this._output.space_before_token = true;
            }
          } else if (this._flags.parent && this._flags.parent.class_start_block) {
            this._output.space_before_token = true;
          }
        }
      } else {
        this.allow_wrap_or_preserved_newline(current_token);
      }
      if (this._flags.last_token.type === TOKEN.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
        this._output.space_before_token = this._options.space_after_anon_function;
      }
    }
    if (this._flags.last_token.text === ";" || this._flags.last_token.type === TOKEN.START_BLOCK) {
      this.print_newline();
    } else if (this._flags.last_token.type === TOKEN.END_EXPR || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === TOKEN.COMMA) {
      this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
    }
    this.print_token(current_token);
    this.set_mode(next_mode);
    if (this._options.space_in_paren) {
      this._output.space_before_token = true;
    }
    this.indent();
  };
  Beautifier.prototype.handle_end_expr = function(current_token) {
    while (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }
    this.handle_whitespace_and_comments(current_token);
    if (this._flags.multiline_frame) {
      this.allow_wrap_or_preserved_newline(
        current_token,
        current_token.text === "]" && is_array(this._flags.mode) && !this._options.keep_array_indentation
      );
    }
    if (this._options.space_in_paren) {
      if (this._flags.last_token.type === TOKEN.START_EXPR && !this._options.space_in_empty_paren) {
        this._output.trim();
        this._output.space_before_token = false;
      } else {
        this._output.space_before_token = true;
      }
    }
    this.deindent();
    this.print_token(current_token);
    this.restore_mode();
    remove_redundant_indentation(this._output, this._previous_flags);
    if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
      this._previous_flags.mode = MODE.Expression;
      this._flags.do_block = false;
      this._flags.do_while = false;
    }
  };
  Beautifier.prototype.handle_start_block = function(current_token) {
    this.handle_whitespace_and_comments(current_token);
    var next_token = this._tokens.peek();
    var second_token = this._tokens.peek(1);
    if (this._flags.last_word === "switch" && this._flags.last_token.type === TOKEN.END_EXPR) {
      this.set_mode(MODE.BlockStatement);
      this._flags.in_case_statement = true;
    } else if (this._flags.case_body) {
      this.set_mode(MODE.BlockStatement);
    } else if (second_token && (in_array(second_token.text, [":", ","]) && in_array(next_token.type, [TOKEN.STRING, TOKEN.WORD, TOKEN.RESERVED]) || in_array(next_token.text, ["get", "set", "..."]) && in_array(second_token.type, [TOKEN.WORD, TOKEN.RESERVED]))) {
      if (in_array(this._last_last_text, ["class", "interface"]) && !in_array(second_token.text, [":", ","])) {
        this.set_mode(MODE.BlockStatement);
      } else {
        this.set_mode(MODE.ObjectLiteral);
      }
    } else if (this._flags.last_token.type === TOKEN.OPERATOR && this._flags.last_token.text === "=>") {
      this.set_mode(MODE.BlockStatement);
    } else if (in_array(this._flags.last_token.type, [TOKEN.EQUALS, TOKEN.START_EXPR, TOKEN.COMMA, TOKEN.OPERATOR]) || reserved_array(this._flags.last_token, ["return", "throw", "import", "default"])) {
      this.set_mode(MODE.ObjectLiteral);
    } else {
      this.set_mode(MODE.BlockStatement);
    }
    if (this._flags.last_token) {
      if (reserved_array(this._flags.last_token.previous, ["class", "extends"])) {
        this._flags.class_start_block = true;
      }
    }
    var empty_braces = !next_token.comments_before && next_token.text === "}";
    var empty_anonymous_function = empty_braces && this._flags.last_word === "function" && this._flags.last_token.type === TOKEN.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var index = 0;
      var check_token = null;
      this._flags.inline_frame = true;
      do {
        index += 1;
        check_token = this._tokens.peek(index - 1);
        if (check_token.newlines) {
          this._flags.inline_frame = false;
          break;
        }
      } while (check_token.type !== TOKEN.EOF && !(check_token.type === TOKEN.END_BLOCK && check_token.opened === current_token));
    }
    if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
      if (this._flags.last_token.type !== TOKEN.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== "else")) {
        this._output.space_before_token = true;
      } else {
        this.print_newline(false, true);
      }
    } else {
      if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.COMMA)) {
        if (this._flags.last_token.type === TOKEN.COMMA || this._options.space_in_paren) {
          this._output.space_before_token = true;
        }
        if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR && this._flags.inline_frame) {
          this.allow_wrap_or_preserved_newline(current_token);
          this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
          this._flags.multiline_frame = false;
        }
      }
      if (this._flags.last_token.type !== TOKEN.OPERATOR && this._flags.last_token.type !== TOKEN.START_EXPR) {
        if (this._flags.last_token.type === TOKEN.START_BLOCK && !this._flags.inline_frame) {
          this.print_newline();
        } else {
          this._output.space_before_token = true;
        }
      }
    }
    this.print_token(current_token);
    this.indent();
    if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
      this.print_newline();
    }
  };
  Beautifier.prototype.handle_end_block = function(current_token) {
    this.handle_whitespace_and_comments(current_token);
    while (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }
    var empty_braces = this._flags.last_token.type === TOKEN.START_BLOCK;
    if (this._flags.inline_frame && !empty_braces) {
      this._output.space_before_token = true;
    } else if (this._options.brace_style === "expand") {
      if (!empty_braces) {
        this.print_newline();
      }
    } else {
      if (!empty_braces) {
        if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
          this._options.keep_array_indentation = false;
          this.print_newline();
          this._options.keep_array_indentation = true;
        } else {
          this.print_newline();
        }
      }
    }
    this.restore_mode();
    this.print_token(current_token);
  };
  Beautifier.prototype.handle_word = function(current_token) {
    if (current_token.type === TOKEN.RESERVED) {
      if (in_array(current_token.text, ["set", "get"]) && this._flags.mode !== MODE.ObjectLiteral) {
        current_token.type = TOKEN.WORD;
      } else if (current_token.text === "import" && in_array(this._tokens.peek().text, ["(", "."])) {
        current_token.type = TOKEN.WORD;
      } else if (in_array(current_token.text, ["as", "from"]) && !this._flags.import_block) {
        current_token.type = TOKEN.WORD;
      } else if (this._flags.mode === MODE.ObjectLiteral) {
        var next_token = this._tokens.peek();
        if (next_token.text === ":") {
          current_token.type = TOKEN.WORD;
        }
      }
    }
    if (this.start_of_statement(current_token)) {
      if (reserved_array(this._flags.last_token, ["var", "let", "const"]) && current_token.type === TOKEN.WORD) {
        this._flags.declaration_statement = true;
      }
    } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN.OPERATOR || (this._flags.last_token.text === "--" || this._flags.last_token.text === "++")) && this._flags.last_token.type !== TOKEN.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ["var", "let", "const", "set", "get"]))) {
      this.handle_whitespace_and_comments(current_token);
      this.print_newline();
    } else {
      this.handle_whitespace_and_comments(current_token);
    }
    if (this._flags.do_block && !this._flags.do_while) {
      if (reserved_word(current_token, "while")) {
        this._output.space_before_token = true;
        this.print_token(current_token);
        this._output.space_before_token = true;
        this._flags.do_while = true;
        return;
      } else {
        this.print_newline();
        this._flags.do_block = false;
      }
    }
    if (this._flags.if_block) {
      if (!this._flags.else_block && reserved_word(current_token, "else")) {
        this._flags.else_block = true;
      } else {
        while (this._flags.mode === MODE.Statement) {
          this.restore_mode();
        }
        this._flags.if_block = false;
        this._flags.else_block = false;
      }
    }
    if (this._flags.in_case_statement && reserved_array(current_token, ["case", "default"])) {
      this.print_newline();
      if (!this._flags.case_block && (this._flags.case_body || this._options.jslint_happy)) {
        this.deindent();
      }
      this._flags.case_body = false;
      this.print_token(current_token);
      this._flags.in_case = true;
      return;
    }
    if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    }
    if (reserved_word(current_token, "function")) {
      if (in_array(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(in_array(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === TOKEN.OPERATOR)) {
        if (!this._output.just_added_blankline() && !current_token.comments_before) {
          this.print_newline();
          this.print_newline(true);
        }
      }
      if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD) {
        if (reserved_array(this._flags.last_token, ["get", "set", "new", "export"]) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
          this._output.space_before_token = true;
        } else if (reserved_word(this._flags.last_token, "default") && this._last_last_text === "export") {
          this._output.space_before_token = true;
        } else if (this._flags.last_token.text === "declare") {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      } else if (this._flags.last_token.type === TOKEN.OPERATOR || this._flags.last_token.text === "=") {
        this._output.space_before_token = true;
      } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode)))
        ;
      else {
        this.print_newline();
      }
      this.print_token(current_token);
      this._flags.last_word = current_token.text;
      return;
    }
    var prefix = "NONE";
    if (this._flags.last_token.type === TOKEN.END_BLOCK) {
      if (this._previous_flags.inline_frame) {
        prefix = "SPACE";
      } else if (!reserved_array(current_token, ["else", "catch", "finally", "from"])) {
        prefix = "NEWLINE";
      } else {
        if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
          prefix = "NEWLINE";
        } else {
          prefix = "SPACE";
          this._output.space_before_token = true;
        }
      }
    } else if (this._flags.last_token.type === TOKEN.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
      prefix = "NEWLINE";
    } else if (this._flags.last_token.type === TOKEN.SEMICOLON && is_expression(this._flags.mode)) {
      prefix = "SPACE";
    } else if (this._flags.last_token.type === TOKEN.STRING) {
      prefix = "NEWLINE";
    } else if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.last_token.text === "*" && (in_array(this._last_last_text, ["function", "yield"]) || this._flags.mode === MODE.ObjectLiteral && in_array(this._last_last_text, ["{", ","]))) {
      prefix = "SPACE";
    } else if (this._flags.last_token.type === TOKEN.START_BLOCK) {
      if (this._flags.inline_frame) {
        prefix = "SPACE";
      } else {
        prefix = "NEWLINE";
      }
    } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
      this._output.space_before_token = true;
      prefix = "NEWLINE";
    }
    if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
      if (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export") {
        prefix = "SPACE";
      } else {
        prefix = "NEWLINE";
      }
    }
    if (reserved_array(current_token, ["else", "catch", "finally"])) {
      if ((!(this._flags.last_token.type === TOKEN.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.trim(true);
        var line = this._output.current_line;
        if (line.last() !== "}") {
          this.print_newline();
        }
        this._output.space_before_token = true;
      }
    } else if (prefix === "NEWLINE") {
      if (reserved_array(this._flags.last_token, special_words)) {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === "declare" && reserved_array(current_token, ["var", "let", "const"])) {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.type !== TOKEN.END_EXPR) {
        if ((this._flags.last_token.type !== TOKEN.START_EXPR || !reserved_array(current_token, ["var", "let", "const"])) && this._flags.last_token.text !== ":") {
          if (reserved_word(current_token, "if") && reserved_word(current_token.previous, "else")) {
            this._output.space_before_token = true;
          } else {
            this.print_newline();
          }
        }
      } else if (reserved_array(current_token, line_starters) && this._flags.last_token.text !== ")") {
        this.print_newline();
      }
    } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}") {
      this.print_newline();
    } else if (prefix === "SPACE") {
      this._output.space_before_token = true;
    }
    if (current_token.previous && (current_token.previous.type === TOKEN.WORD || current_token.previous.type === TOKEN.RESERVED)) {
      this._output.space_before_token = true;
    }
    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    if (current_token.type === TOKEN.RESERVED) {
      if (current_token.text === "do") {
        this._flags.do_block = true;
      } else if (current_token.text === "if") {
        this._flags.if_block = true;
      } else if (current_token.text === "import") {
        this._flags.import_block = true;
      } else if (this._flags.import_block && reserved_word(current_token, "from")) {
        this._flags.import_block = false;
      }
    }
  };
  Beautifier.prototype.handle_semicolon = function(current_token) {
    if (this.start_of_statement(current_token)) {
      this._output.space_before_token = false;
    } else {
      this.handle_whitespace_and_comments(current_token);
    }
    var next_token = this._tokens.peek();
    while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, "else")) && !this._flags.do_block) {
      this.restore_mode();
    }
    if (this._flags.import_block) {
      this._flags.import_block = false;
    }
    this.print_token(current_token);
  };
  Beautifier.prototype.handle_string = function(current_token) {
    if (current_token.text.startsWith("`") && current_token.newlines === 0 && current_token.whitespace_before === "" && (current_token.previous.text === ")" || this._flags.last_token.type === TOKEN.WORD))
      ;
    else if (this.start_of_statement(current_token)) {
      this._output.space_before_token = true;
    } else {
      this.handle_whitespace_and_comments(current_token);
      if (this._flags.last_token.type === TOKEN.RESERVED || this._flags.last_token.type === TOKEN.WORD || this._flags.inline_frame) {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR || this._flags.last_token.type === TOKEN.EQUALS || this._flags.last_token.type === TOKEN.OPERATOR) {
        if (!this.start_of_object_property()) {
          this.allow_wrap_or_preserved_newline(current_token);
        }
      } else if (current_token.text.startsWith("`") && this._flags.last_token.type === TOKEN.END_EXPR && (current_token.previous.text === "]" || current_token.previous.text === ")") && current_token.newlines === 0) {
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    }
    this.print_token(current_token);
  };
  Beautifier.prototype.handle_equals = function(current_token) {
    if (this.start_of_statement(current_token))
      ;
    else {
      this.handle_whitespace_and_comments(current_token);
    }
    if (this._flags.declaration_statement) {
      this._flags.declaration_assignment = true;
    }
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
  };
  Beautifier.prototype.handle_comma = function(current_token) {
    this.handle_whitespace_and_comments(current_token, true);
    this.print_token(current_token);
    this._output.space_before_token = true;
    if (this._flags.declaration_statement) {
      if (is_expression(this._flags.parent.mode)) {
        this._flags.declaration_assignment = false;
      }
      if (this._flags.declaration_assignment) {
        this._flags.declaration_assignment = false;
        this.print_newline(false, true);
      } else if (this._options.comma_first) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
      if (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      if (!this._flags.inline_frame) {
        this.print_newline();
      }
    } else if (this._options.comma_first) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  };
  Beautifier.prototype.handle_operator = function(current_token) {
    var isGeneratorAsterisk = current_token.text === "*" && (reserved_array(this._flags.last_token, ["function", "yield"]) || in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.COMMA, TOKEN.END_BLOCK, TOKEN.SEMICOLON]));
    var isUnary = in_array(current_token.text, ["-", "+"]) && (in_array(this._flags.last_token.type, [TOKEN.START_BLOCK, TOKEN.START_EXPR, TOKEN.EQUALS, TOKEN.OPERATOR]) || in_array(this._flags.last_token.text, line_starters) || this._flags.last_token.text === ",");
    if (this.start_of_statement(current_token))
      ;
    else {
      var preserve_statement_flags = !isGeneratorAsterisk;
      this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
    }
    if (current_token.text === "*" && this._flags.last_token.type === TOKEN.DOT) {
      this.print_token(current_token);
      return;
    }
    if (current_token.text === "::") {
      this.print_token(current_token);
      return;
    }
    if (this._flags.last_token.type === TOKEN.OPERATOR && in_array(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
    if (current_token.text === ":" && this._flags.in_case) {
      this.print_token(current_token);
      this._flags.in_case = false;
      this._flags.case_body = true;
      if (this._tokens.peek().type !== TOKEN.START_BLOCK) {
        this.indent();
        this.print_newline();
        this._flags.case_block = false;
      } else {
        this._flags.case_block = true;
        this._output.space_before_token = true;
      }
      return;
    }
    var space_before = true;
    var space_after = true;
    var in_ternary = false;
    if (current_token.text === ":") {
      if (this._flags.ternary_depth === 0) {
        space_before = false;
      } else {
        this._flags.ternary_depth -= 1;
        in_ternary = true;
      }
    } else if (current_token.text === "?") {
      this._flags.ternary_depth += 1;
    }
    if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array(current_token.text, positionable_operators)) {
      var isColon = current_token.text === ":";
      var isTernaryColon = isColon && in_ternary;
      var isOtherColon = isColon && !in_ternary;
      switch (this._options.operator_position) {
        case OPERATOR_POSITION.before_newline:
          this._output.space_before_token = !isOtherColon;
          this.print_token(current_token);
          if (!isColon || isTernaryColon) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          this._output.space_before_token = true;
          return;
        case OPERATOR_POSITION.after_newline:
          this._output.space_before_token = true;
          if (!isColon || isTernaryColon) {
            if (this._tokens.peek().newlines) {
              this.print_newline(false, true);
            } else {
              this.allow_wrap_or_preserved_newline(current_token);
            }
          } else {
            this._output.space_before_token = false;
          }
          this.print_token(current_token);
          this._output.space_before_token = true;
          return;
        case OPERATOR_POSITION.preserve_newline:
          if (!isOtherColon) {
            this.allow_wrap_or_preserved_newline(current_token);
          }
          space_before = !(this._output.just_added_newline() || isOtherColon);
          this._output.space_before_token = space_before;
          this.print_token(current_token);
          this._output.space_before_token = true;
          return;
      }
    }
    if (isGeneratorAsterisk) {
      this.allow_wrap_or_preserved_newline(current_token);
      space_before = false;
      var next_token = this._tokens.peek();
      space_after = next_token && in_array(next_token.type, [TOKEN.WORD, TOKEN.RESERVED]);
    } else if (current_token.text === "...") {
      this.allow_wrap_or_preserved_newline(current_token);
      space_before = this._flags.last_token.type === TOKEN.START_BLOCK;
      space_after = false;
    } else if (in_array(current_token.text, ["--", "++", "!", "~"]) || isUnary) {
      if (this._flags.last_token.type === TOKEN.COMMA || this._flags.last_token.type === TOKEN.START_EXPR) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
      space_before = false;
      space_after = false;
      if (current_token.newlines && (current_token.text === "--" || current_token.text === "++" || current_token.text === "~")) {
        var new_line_needed = reserved_array(this._flags.last_token, special_words) && current_token.newlines;
        if (new_line_needed && (this._previous_flags.if_block || this._previous_flags.else_block)) {
          this.restore_mode();
        }
        this.print_newline(new_line_needed, true);
      }
      if (this._flags.last_token.text === ";" && is_expression(this._flags.mode)) {
        space_before = true;
      }
      if (this._flags.last_token.type === TOKEN.RESERVED) {
        space_before = true;
      } else if (this._flags.last_token.type === TOKEN.END_EXPR) {
        space_before = !(this._flags.last_token.text === "]" && (current_token.text === "--" || current_token.text === "++"));
      } else if (this._flags.last_token.type === TOKEN.OPERATOR) {
        space_before = in_array(current_token.text, ["--", "-", "++", "+"]) && in_array(this._flags.last_token.text, ["--", "-", "++", "+"]);
        if (in_array(current_token.text, ["+", "-"]) && in_array(this._flags.last_token.text, ["--", "++"])) {
          space_after = true;
        }
      }
      if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";")) {
        this.print_newline();
      }
    }
    this._output.space_before_token = this._output.space_before_token || space_before;
    this.print_token(current_token);
    this._output.space_before_token = space_after;
  };
  Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
    if (this._output.raw) {
      this._output.add_raw_token(current_token);
      if (current_token.directives && current_token.directives.preserve === "end") {
        this._output.raw = this._options.test_output_raw;
      }
      return;
    }
    if (current_token.directives) {
      this.print_newline(false, preserve_statement_flags);
      this.print_token(current_token);
      if (current_token.directives.preserve === "start") {
        this._output.raw = true;
      }
      this.print_newline(false, true);
      return;
    }
    if (!acorn2.newline.test(current_token.text) && !current_token.newlines) {
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      return;
    } else {
      this.print_block_commment(current_token, preserve_statement_flags);
    }
  };
  Beautifier.prototype.print_block_commment = function(current_token, preserve_statement_flags) {
    var lines = split_linebreaks(current_token.text);
    var j;
    var javadoc = false;
    var starless = false;
    var lastIndent = current_token.whitespace_before;
    var lastIndentLength = lastIndent.length;
    this.print_newline(false, preserve_statement_flags);
    this.print_token_line_indentation(current_token);
    this._output.add_token(lines[0]);
    this.print_newline(false, preserve_statement_flags);
    if (lines.length > 1) {
      lines = lines.slice(1);
      javadoc = all_lines_start_with(lines, "*");
      starless = each_line_matches_indent(lines, lastIndent);
      if (javadoc) {
        this._flags.alignment = 1;
      }
      for (j = 0; j < lines.length; j++) {
        if (javadoc) {
          this.print_token_line_indentation(current_token);
          this._output.add_token(ltrim(lines[j]));
        } else if (starless && lines[j]) {
          this.print_token_line_indentation(current_token);
          this._output.add_token(lines[j].substring(lastIndentLength));
        } else {
          this._output.current_line.set_indent(-1);
          this._output.add_token(lines[j]);
        }
        this.print_newline(false, preserve_statement_flags);
      }
      this._flags.alignment = 0;
    }
  };
  Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
    if (current_token.newlines) {
      this.print_newline(false, preserve_statement_flags);
    } else {
      this._output.trim(true);
    }
    this._output.space_before_token = true;
    this.print_token(current_token);
    this.print_newline(false, preserve_statement_flags);
  };
  Beautifier.prototype.handle_dot = function(current_token) {
    if (this.start_of_statement(current_token))
      ;
    else {
      this.handle_whitespace_and_comments(current_token, true);
    }
    if (this._flags.last_token.text.match("^[0-9]+$")) {
      this._output.space_before_token = true;
    }
    if (reserved_array(this._flags.last_token, special_words)) {
      this._output.space_before_token = false;
    } else {
      this.allow_wrap_or_preserved_newline(
        current_token,
        this._flags.last_token.text === ")" && this._options.break_chained_methods
      );
    }
    if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
      this.deindent();
    }
    this.print_token(current_token);
  };
  Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
    this.print_token(current_token);
    if (current_token.text[current_token.text.length - 1] === "\n") {
      this.print_newline(false, preserve_statement_flags);
    }
  };
  Beautifier.prototype.handle_eof = function(current_token) {
    while (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }
    this.handle_whitespace_and_comments(current_token);
  };
  beautifier$2.Beautifier = Beautifier;
  return beautifier$2;
}
var hasRequiredJavascript;
function requireJavascript() {
  if (hasRequiredJavascript)
    return javascript.exports;
  hasRequiredJavascript = 1;
  var Beautifier = requireBeautifier$2().Beautifier, Options = requireOptions$2().Options;
  function js_beautify(js_source_text, options2) {
    var beautifier2 = new Beautifier(js_source_text, options2);
    return beautifier2.beautify();
  }
  javascript.exports = js_beautify;
  javascript.exports.defaultOptions = function() {
    return new Options();
  };
  return javascript.exports;
}
var css = { exports: {} };
var beautifier$1 = {};
var options$1 = {};
var hasRequiredOptions$1;
function requireOptions$1() {
  if (hasRequiredOptions$1)
    return options$1;
  hasRequiredOptions$1 = 1;
  var BaseOptions = requireOptions$3().Options;
  function Options(options2) {
    BaseOptions.call(this, options2, "css");
    this.selector_separator_newline = this._get_boolean("selector_separator_newline", true);
    this.newline_between_rules = this._get_boolean("newline_between_rules", true);
    var space_around_selector_separator = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || space_around_selector_separator;
    var brace_style_split = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var bs = 0; bs < brace_style_split.length; bs++) {
      if (brace_style_split[bs] !== "expand") {
        this.brace_style = "collapse";
      } else {
        this.brace_style = brace_style_split[bs];
      }
    }
  }
  Options.prototype = new BaseOptions();
  options$1.Options = Options;
  return options$1;
}
var hasRequiredBeautifier$1;
function requireBeautifier$1() {
  if (hasRequiredBeautifier$1)
    return beautifier$1;
  hasRequiredBeautifier$1 = 1;
  var Options = requireOptions$1().Options;
  var Output = requireOutput().Output;
  var InputScanner = requireInputscanner().InputScanner;
  var Directives = requireDirectives().Directives;
  var directives_core = new Directives(/\/\*/, /\*\//);
  var lineBreak = /\r\n|[\r\n]/;
  var allLineBreaks = /\r\n|[\r\n]/g;
  var whitespaceChar = /\s/;
  var whitespacePattern = /(?:\s|\n)+/g;
  var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
  var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function Beautifier(source_text, options2) {
    this._source_text = source_text || "";
    this._options = new Options(options2);
    this._ch = null;
    this._input = null;
    this.NESTED_AT_RULE = {
      "@page": true,
      "@font-face": true,
      "@keyframes": true,
      // also in CONDITIONAL_GROUP_RULE below
      "@media": true,
      "@supports": true,
      "@document": true
    };
    this.CONDITIONAL_GROUP_RULE = {
      "@media": true,
      "@supports": true,
      "@document": true
    };
    this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  Beautifier.prototype.eatString = function(endChars) {
    var result = "";
    this._ch = this._input.next();
    while (this._ch) {
      result += this._ch;
      if (this._ch === "\\") {
        result += this._input.next();
      } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
        break;
      }
      this._ch = this._input.next();
    }
    return result;
  };
  Beautifier.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
    var result = whitespaceChar.test(this._input.peek());
    var newline_count = 0;
    while (whitespaceChar.test(this._input.peek())) {
      this._ch = this._input.next();
      if (allowAtLeastOneNewLine && this._ch === "\n") {
        if (newline_count === 0 || newline_count < this._options.max_preserve_newlines) {
          newline_count++;
          this._output.add_new_line(true);
        }
      }
    }
    return result;
  };
  Beautifier.prototype.foundNestedPseudoClass = function() {
    var openParen = 0;
    var i = 1;
    var ch = this._input.peek(i);
    while (ch) {
      if (ch === "{") {
        return true;
      } else if (ch === "(") {
        openParen += 1;
      } else if (ch === ")") {
        if (openParen === 0) {
          return false;
        }
        openParen -= 1;
      } else if (ch === ";" || ch === "}") {
        return false;
      }
      i++;
      ch = this._input.peek(i);
    }
    return false;
  };
  Beautifier.prototype.print_string = function(output_string) {
    this._output.set_indent(this._indentLevel);
    this._output.non_breaking_space = true;
    this._output.add_token(output_string);
  };
  Beautifier.prototype.preserveSingleSpace = function(isAfterSpace) {
    if (isAfterSpace) {
      this._output.space_before_token = true;
    }
  };
  Beautifier.prototype.indent = function() {
    this._indentLevel++;
  };
  Beautifier.prototype.outdent = function() {
    if (this._indentLevel > 0) {
      this._indentLevel--;
    }
  };
  Beautifier.prototype.beautify = function() {
    if (this._options.disabled) {
      return this._source_text;
    }
    var source_text = this._source_text;
    var eol = this._options.eol;
    if (eol === "auto") {
      eol = "\n";
      if (source_text && lineBreak.test(source_text || "")) {
        eol = source_text.match(lineBreak)[0];
      }
    }
    source_text = source_text.replace(allLineBreaks, "\n");
    var baseIndentString = source_text.match(/^[\t ]*/)[0];
    this._output = new Output(this._options, baseIndentString);
    this._input = new InputScanner(source_text);
    this._indentLevel = 0;
    this._nestedLevel = 0;
    this._ch = null;
    var parenLevel = 0;
    var insideRule = false;
    var insidePropertyValue = false;
    var enteringConditionalGroup = false;
    var insideAtExtend = false;
    var insideAtImport = false;
    var insideScssMap = false;
    var topCharacter = this._ch;
    var insideNonSemiColonValues = false;
    var whitespace;
    var isAfterSpace;
    var previous_ch;
    while (true) {
      whitespace = this._input.read(whitespacePattern);
      isAfterSpace = whitespace !== "";
      previous_ch = topCharacter;
      this._ch = this._input.next();
      if (this._ch === "\\" && this._input.hasNext()) {
        this._ch += this._input.next();
      }
      topCharacter = this._ch;
      if (!this._ch) {
        break;
      } else if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line();
        this._input.back();
        var comment = this._input.read(block_comment_pattern);
        var directives2 = directives_core.get_directives(comment);
        if (directives2 && directives2.ignore === "start") {
          comment += directives_core.readIgnored(this._input);
        }
        this.print_string(comment);
        this.eatWhitespace(true);
        this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/") {
        this._output.space_before_token = true;
        this._input.back();
        this.print_string(this._input.read(comment_pattern));
        this.eatWhitespace(true);
      } else if (this._ch === "@" || this._ch === "$") {
        this.preserveSingleSpace(isAfterSpace);
        if (this._input.peek() === "{") {
          this.print_string(this._ch + this.eatString("}"));
        } else {
          this.print_string(this._ch);
          var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          if (variableOrRule.match(/[ :]$/)) {
            variableOrRule = this.eatString(": ").replace(/\s$/, "");
            this.print_string(variableOrRule);
            this._output.space_before_token = true;
          }
          variableOrRule = variableOrRule.replace(/\s$/, "");
          if (variableOrRule === "extend") {
            insideAtExtend = true;
          } else if (variableOrRule === "import") {
            insideAtImport = true;
          }
          if (variableOrRule in this.NESTED_AT_RULE) {
            this._nestedLevel += 1;
            if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
              enteringConditionalGroup = true;
            }
          } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(":") !== -1) {
            insidePropertyValue = true;
            this.indent();
          }
        }
      } else if (this._ch === "#" && this._input.peek() === "{") {
        this.preserveSingleSpace(isAfterSpace);
        this.print_string(this._ch + this.eatString("}"));
      } else if (this._ch === "{") {
        if (insidePropertyValue) {
          insidePropertyValue = false;
          this.outdent();
        }
        if (enteringConditionalGroup) {
          enteringConditionalGroup = false;
          insideRule = this._indentLevel >= this._nestedLevel;
        } else {
          insideRule = this._indentLevel >= this._nestedLevel - 1;
        }
        if (this._options.newline_between_rules && insideRule) {
          if (this._output.previous_line && this._output.previous_line.item(-1) !== "{") {
            this._output.ensure_empty_line_above("/", ",");
          }
        }
        this._output.space_before_token = true;
        if (this._options.brace_style === "expand") {
          this._output.add_new_line();
          this.print_string(this._ch);
          this.indent();
          this._output.set_indent(this._indentLevel);
        } else {
          if (previous_ch === "(") {
            this._output.space_before_token = false;
          } else if (previous_ch !== ",") {
            this.indent();
          }
          this.print_string(this._ch);
        }
        this.eatWhitespace(true);
        this._output.add_new_line();
      } else if (this._ch === "}") {
        this.outdent();
        this._output.add_new_line();
        if (previous_ch === "{") {
          this._output.trim(true);
        }
        insideAtImport = false;
        insideAtExtend = false;
        if (insidePropertyValue) {
          this.outdent();
          insidePropertyValue = false;
        }
        this.print_string(this._ch);
        insideRule = false;
        if (this._nestedLevel) {
          this._nestedLevel--;
        }
        this.eatWhitespace(true);
        this._output.add_new_line();
        if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
          if (this._input.peek() !== "}") {
            this._output.add_new_line(true);
          }
        }
        if (this._input.peek() === ")") {
          this._output.trim(true);
          if (this._options.brace_style === "expand") {
            this._output.add_new_line(true);
          }
        }
      } else if (this._ch === ":") {
        for (var i = 0; i < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; i++) {
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[i])) {
            insideNonSemiColonValues = true;
            break;
          }
        }
        if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
          this.print_string(":");
          if (!insidePropertyValue) {
            insidePropertyValue = true;
            this._output.space_before_token = true;
            this.eatWhitespace(true);
            this.indent();
          }
        } else {
          if (this._input.lookBack(" ")) {
            this._output.space_before_token = true;
          }
          if (this._input.peek() === ":") {
            this._ch = this._input.next();
            this.print_string("::");
          } else {
            this.print_string(":");
          }
        }
      } else if (this._ch === '"' || this._ch === "'") {
        var preserveQuoteSpace = previous_ch === '"' || previous_ch === "'";
        this.preserveSingleSpace(preserveQuoteSpace || isAfterSpace);
        this.print_string(this._ch + this.eatString(this._ch));
        this.eatWhitespace(true);
      } else if (this._ch === ";") {
        insideNonSemiColonValues = false;
        if (parenLevel === 0) {
          if (insidePropertyValue) {
            this.outdent();
            insidePropertyValue = false;
          }
          insideAtExtend = false;
          insideAtImport = false;
          this.print_string(this._ch);
          this.eatWhitespace(true);
          if (this._input.peek() !== "/") {
            this._output.add_new_line();
          }
        } else {
          this.print_string(this._ch);
          this.eatWhitespace(true);
          this._output.space_before_token = true;
        }
      } else if (this._ch === "(") {
        if (this._input.lookBack("url")) {
          this.print_string(this._ch);
          this.eatWhitespace();
          parenLevel++;
          this.indent();
          this._ch = this._input.next();
          if (this._ch === ")" || this._ch === '"' || this._ch === "'") {
            this._input.back();
          } else if (this._ch) {
            this.print_string(this._ch + this.eatString(")"));
            if (parenLevel) {
              parenLevel--;
              this.outdent();
            }
          }
        } else {
          var space_needed = false;
          if (this._input.lookBack("with")) {
            space_needed = true;
          }
          this.preserveSingleSpace(isAfterSpace || space_needed);
          this.print_string(this._ch);
          if (insidePropertyValue && previous_ch === "$" && this._options.selector_separator_newline) {
            this._output.add_new_line();
            insideScssMap = true;
          } else {
            this.eatWhitespace();
            parenLevel++;
            this.indent();
          }
        }
      } else if (this._ch === ")") {
        if (parenLevel) {
          parenLevel--;
          this.outdent();
        }
        if (insideScssMap && this._input.peek() === ";" && this._options.selector_separator_newline) {
          insideScssMap = false;
          this.outdent();
          this._output.add_new_line();
        }
        this.print_string(this._ch);
      } else if (this._ch === ",") {
        this.print_string(this._ch);
        this.eatWhitespace(true);
        if (this._options.selector_separator_newline && (!insidePropertyValue || insideScssMap) && parenLevel === 0 && !insideAtImport && !insideAtExtend) {
          this._output.add_new_line();
        } else {
          this._output.space_before_token = true;
        }
      } else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !insidePropertyValue && parenLevel === 0) {
        if (this._options.space_around_combinator) {
          this._output.space_before_token = true;
          this.print_string(this._ch);
          this._output.space_before_token = true;
        } else {
          this.print_string(this._ch);
          this.eatWhitespace();
          if (this._ch && whitespaceChar.test(this._ch)) {
            this._ch = "";
          }
        }
      } else if (this._ch === "]") {
        this.print_string(this._ch);
      } else if (this._ch === "[") {
        this.preserveSingleSpace(isAfterSpace);
        this.print_string(this._ch);
      } else if (this._ch === "=") {
        this.eatWhitespace();
        this.print_string("=");
        if (whitespaceChar.test(this._ch)) {
          this._ch = "";
        }
      } else if (this._ch === "!" && !this._input.lookBack("\\")) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
      } else {
        var preserveAfterSpace = previous_ch === '"' || previous_ch === "'";
        this.preserveSingleSpace(preserveAfterSpace || isAfterSpace);
        this.print_string(this._ch);
        if (!this._output.just_added_newline() && this._input.peek() === "\n" && insideNonSemiColonValues) {
          this._output.add_new_line();
        }
      }
    }
    var sweetCode = this._output.get_code(eol);
    return sweetCode;
  };
  beautifier$1.Beautifier = Beautifier;
  return beautifier$1;
}
var hasRequiredCss;
function requireCss() {
  if (hasRequiredCss)
    return css.exports;
  hasRequiredCss = 1;
  var Beautifier = requireBeautifier$1().Beautifier, Options = requireOptions$1().Options;
  function css_beautify(source_text, options2) {
    var beautifier2 = new Beautifier(source_text, options2);
    return beautifier2.beautify();
  }
  css.exports = css_beautify;
  css.exports.defaultOptions = function() {
    return new Options();
  };
  return css.exports;
}
var html = { exports: {} };
var beautifier = {};
var options = {};
var hasRequiredOptions;
function requireOptions() {
  if (hasRequiredOptions)
    return options;
  hasRequiredOptions = 1;
  var BaseOptions = requireOptions$3().Options;
  function Options(options2) {
    BaseOptions.call(this, options2, "html");
    if (this.templating.length === 1 && this.templating[0] === "auto") {
      this.templating = ["django", "erb", "handlebars", "php"];
    }
    this.indent_inner_html = this._get_boolean("indent_inner_html");
    this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true);
    this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true);
    this.indent_handlebars = this._get_boolean("indent_handlebars", true);
    this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    );
    this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size);
    this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]);
    this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      /* 'script', */
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      // obsolete inline tags
      "acronym",
      "big",
      "strike",
      "tt"
    ]);
    this.void_elements = this._get_array("void_elements", [
      // HTLM void elements - aka self-closing tags - aka singletons
      // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // NOTE: Optional tags are too complex for a simple list
      // they are hard coded in _do_optional_end_element
      // Doctype and xml elements
      "!doctype",
      "?xml",
      // obsolete tags
      // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
      // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
      "basefont",
      "isindex"
    ]);
    this.unformatted = this._get_array("unformatted", []);
    this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]);
    this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter");
    this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  Options.prototype = new BaseOptions();
  options.Options = Options;
  return options;
}
var tokenizer = {};
var hasRequiredTokenizer;
function requireTokenizer() {
  if (hasRequiredTokenizer)
    return tokenizer;
  hasRequiredTokenizer = 1;
  var BaseTokenizer = requireTokenizer$2().Tokenizer;
  var BASETOKEN = requireTokenizer$2().TOKEN;
  var Directives = requireDirectives().Directives;
  var TemplatablePattern = requireTemplatablepattern().TemplatablePattern;
  var Pattern = requirePattern().Pattern;
  var TOKEN = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: BASETOKEN.START,
    RAW: BASETOKEN.RAW,
    EOF: BASETOKEN.EOF
  };
  var directives_core = new Directives(/<\!--/, /-->/);
  var Tokenizer2 = function(input_string, options2) {
    BaseTokenizer.call(this, input_string, options2);
    this._current_tag_name = "";
    var templatable_reader = new TemplatablePattern(this._input).read_options(this._options);
    var pattern_reader = new Pattern(this._input);
    this.__patterns = {
      word: templatable_reader.until(/[\n\r\t <]/),
      single_quote: templatable_reader.until_after(/'/),
      double_quote: templatable_reader.until_after(/"/),
      attribute: templatable_reader.until(/[\n\r\t =>]|\/>/),
      element_name: templatable_reader.until(/[\n\r\t >\/]/),
      handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
      handlebars_open: pattern_reader.until(/[\n\r\t }]/),
      handlebars_raw_close: pattern_reader.until(/}}/),
      comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
      cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      // https://en.wikipedia.org/wiki/Conditional_comment
      conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
      processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
    };
    if (this._options.indent_handlebars) {
      this.__patterns.word = this.__patterns.word.exclude("handlebars");
    }
    this._unformatted_content_delimiter = null;
    if (this._options.unformatted_content_delimiter) {
      var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
    }
  };
  Tokenizer2.prototype = new BaseTokenizer();
  Tokenizer2.prototype._is_comment = function(current_token) {
    return false;
  };
  Tokenizer2.prototype._is_opening = function(current_token) {
    return current_token.type === TOKEN.TAG_OPEN;
  };
  Tokenizer2.prototype._is_closing = function(current_token, open_token) {
    return current_token.type === TOKEN.TAG_CLOSE && (open_token && ((current_token.text === ">" || current_token.text === "/>") && open_token.text[0] === "<" || current_token.text === "}}" && open_token.text[0] === "{" && open_token.text[1] === "{"));
  };
  Tokenizer2.prototype._reset = function() {
    this._current_tag_name = "";
  };
  Tokenizer2.prototype._get_next_token = function(previous_token, open_token) {
    var token2 = null;
    this._readWhitespace();
    var c2 = this._input.peek();
    if (c2 === null) {
      return this._create_token(TOKEN.EOF, "");
    }
    token2 = token2 || this._read_open_handlebars(c2, open_token);
    token2 = token2 || this._read_attribute(c2, previous_token, open_token);
    token2 = token2 || this._read_close(c2, open_token);
    token2 = token2 || this._read_raw_content(c2, previous_token, open_token);
    token2 = token2 || this._read_content_word(c2);
    token2 = token2 || this._read_comment_or_cdata(c2);
    token2 = token2 || this._read_processing(c2);
    token2 = token2 || this._read_open(c2, open_token);
    token2 = token2 || this._create_token(TOKEN.UNKNOWN, this._input.next());
    return token2;
  };
  Tokenizer2.prototype._read_comment_or_cdata = function(c2) {
    var token2 = null;
    var resulting_string = null;
    var directives2 = null;
    if (c2 === "<") {
      var peek1 = this._input.peek(1);
      if (peek1 === "!") {
        resulting_string = this.__patterns.comment.read();
        if (resulting_string) {
          directives2 = directives_core.get_directives(resulting_string);
          if (directives2 && directives2.ignore === "start") {
            resulting_string += directives_core.readIgnored(this._input);
          }
        } else {
          resulting_string = this.__patterns.cdata.read();
        }
      }
      if (resulting_string) {
        token2 = this._create_token(TOKEN.COMMENT, resulting_string);
        token2.directives = directives2;
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_processing = function(c2) {
    var token2 = null;
    var resulting_string = null;
    var directives2 = null;
    if (c2 === "<") {
      var peek1 = this._input.peek(1);
      if (peek1 === "!" || peek1 === "?") {
        resulting_string = this.__patterns.conditional_comment.read();
        resulting_string = resulting_string || this.__patterns.processing.read();
      }
      if (resulting_string) {
        token2 = this._create_token(TOKEN.COMMENT, resulting_string);
        token2.directives = directives2;
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_open = function(c2, open_token) {
    var resulting_string = null;
    var token2 = null;
    if (!open_token) {
      if (c2 === "<") {
        resulting_string = this._input.next();
        if (this._input.peek() === "/") {
          resulting_string += this._input.next();
        }
        resulting_string += this.__patterns.element_name.read();
        token2 = this._create_token(TOKEN.TAG_OPEN, resulting_string);
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_open_handlebars = function(c2, open_token) {
    var resulting_string = null;
    var token2 = null;
    if (!open_token) {
      if (this._options.indent_handlebars && c2 === "{" && this._input.peek(1) === "{") {
        if (this._input.peek(2) === "!") {
          resulting_string = this.__patterns.handlebars_comment.read();
          resulting_string = resulting_string || this.__patterns.handlebars.read();
          token2 = this._create_token(TOKEN.COMMENT, resulting_string);
        } else {
          resulting_string = this.__patterns.handlebars_open.read();
          token2 = this._create_token(TOKEN.TAG_OPEN, resulting_string);
        }
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_close = function(c2, open_token) {
    var resulting_string = null;
    var token2 = null;
    if (open_token) {
      if (open_token.text[0] === "<" && (c2 === ">" || c2 === "/" && this._input.peek(1) === ">")) {
        resulting_string = this._input.next();
        if (c2 === "/") {
          resulting_string += this._input.next();
        }
        token2 = this._create_token(TOKEN.TAG_CLOSE, resulting_string);
      } else if (open_token.text[0] === "{" && c2 === "}" && this._input.peek(1) === "}") {
        this._input.next();
        this._input.next();
        token2 = this._create_token(TOKEN.TAG_CLOSE, "}}");
      }
    }
    return token2;
  };
  Tokenizer2.prototype._read_attribute = function(c2, previous_token, open_token) {
    var token2 = null;
    var resulting_string = "";
    if (open_token && open_token.text[0] === "<") {
      if (c2 === "=") {
        token2 = this._create_token(TOKEN.EQUALS, this._input.next());
      } else if (c2 === '"' || c2 === "'") {
        var content = this._input.next();
        if (c2 === '"') {
          content += this.__patterns.double_quote.read();
        } else {
          content += this.__patterns.single_quote.read();
        }
        token2 = this._create_token(TOKEN.VALUE, content);
      } else {
        resulting_string = this.__patterns.attribute.read();
        if (resulting_string) {
          if (previous_token.type === TOKEN.EQUALS) {
            token2 = this._create_token(TOKEN.VALUE, resulting_string);
          } else {
            token2 = this._create_token(TOKEN.ATTRIBUTE, resulting_string);
          }
        }
      }
    }
    return token2;
  };
  Tokenizer2.prototype._is_content_unformatted = function(tag_name) {
    return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
  };
  Tokenizer2.prototype._read_raw_content = function(c2, previous_token, open_token) {
    var resulting_string = "";
    if (open_token && open_token.text[0] === "{") {
      resulting_string = this.__patterns.handlebars_raw_close.read();
    } else if (previous_token.type === TOKEN.TAG_CLOSE && previous_token.opened.text[0] === "<" && previous_token.text[0] !== "/") {
      var tag_name = previous_token.opened.text.substr(1).toLowerCase();
      if (tag_name === "script" || tag_name === "style") {
        var token2 = this._read_comment_or_cdata(c2);
        if (token2) {
          token2.type = TOKEN.TEXT;
          return token2;
        }
        resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
      } else if (this._is_content_unformatted(tag_name)) {
        resulting_string = this._input.readUntil(new RegExp("</" + tag_name + "[\\n\\r\\t ]*?>", "ig"));
      }
    }
    if (resulting_string) {
      return this._create_token(TOKEN.TEXT, resulting_string);
    }
    return null;
  };
  Tokenizer2.prototype._read_content_word = function(c2) {
    var resulting_string = "";
    if (this._options.unformatted_content_delimiter) {
      if (c2 === this._options.unformatted_content_delimiter[0]) {
        resulting_string = this.__patterns.unformatted_content_delimiter.read();
      }
    }
    if (!resulting_string) {
      resulting_string = this.__patterns.word.read();
    }
    if (resulting_string) {
      return this._create_token(TOKEN.TEXT, resulting_string);
    }
  };
  tokenizer.Tokenizer = Tokenizer2;
  tokenizer.TOKEN = TOKEN;
  return tokenizer;
}
var hasRequiredBeautifier;
function requireBeautifier() {
  if (hasRequiredBeautifier)
    return beautifier;
  hasRequiredBeautifier = 1;
  var Options = requireOptions().Options;
  var Output = requireOutput().Output;
  var Tokenizer2 = requireTokenizer().Tokenizer;
  var TOKEN = requireTokenizer().TOKEN;
  var lineBreak = /\r\n|[\r\n]/;
  var allLineBreaks = /\r\n|[\r\n]/g;
  var Printer = function(options2, base_indent_string) {
    this.indent_level = 0;
    this.alignment_size = 0;
    this.max_preserve_newlines = options2.max_preserve_newlines;
    this.preserve_newlines = options2.preserve_newlines;
    this._output = new Output(options2, base_indent_string);
  };
  Printer.prototype.current_line_has_match = function(pattern2) {
    return this._output.current_line.has_match(pattern2);
  };
  Printer.prototype.set_space_before_token = function(value, non_breaking) {
    this._output.space_before_token = value;
    this._output.non_breaking_space = non_breaking;
  };
  Printer.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size);
    this._output.set_wrap_point();
  };
  Printer.prototype.add_raw_token = function(token2) {
    this._output.add_raw_token(token2);
  };
  Printer.prototype.print_preserved_newlines = function(raw_token) {
    var newlines = 0;
    if (raw_token.type !== TOKEN.TEXT && raw_token.previous.type !== TOKEN.TEXT) {
      newlines = raw_token.newlines ? 1 : 0;
    }
    if (this.preserve_newlines) {
      newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
    }
    for (var n2 = 0; n2 < newlines; n2++) {
      this.print_newline(n2 > 0);
    }
    return newlines !== 0;
  };
  Printer.prototype.traverse_whitespace = function(raw_token) {
    if (raw_token.whitespace_before || raw_token.newlines) {
      if (!this.print_preserved_newlines(raw_token)) {
        this._output.space_before_token = true;
      }
      return true;
    }
    return false;
  };
  Printer.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  };
  Printer.prototype.print_newline = function(force) {
    this._output.add_new_line(force);
  };
  Printer.prototype.print_token = function(token2) {
    if (token2.text) {
      this._output.set_indent(this.indent_level, this.alignment_size);
      this._output.add_token(token2.text);
    }
  };
  Printer.prototype.indent = function() {
    this.indent_level++;
  };
  Printer.prototype.get_full_indent = function(level) {
    level = this.indent_level + (level || 0);
    if (level < 1) {
      return "";
    }
    return this._output.get_indent_string(level);
  };
  var get_type_attribute = function(start_token) {
    var result = null;
    var raw_token = start_token.next;
    while (raw_token.type !== TOKEN.EOF && start_token.closed !== raw_token) {
      if (raw_token.type === TOKEN.ATTRIBUTE && raw_token.text === "type") {
        if (raw_token.next && raw_token.next.type === TOKEN.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN.VALUE) {
          result = raw_token.next.next.text;
        }
        break;
      }
      raw_token = raw_token.next;
    }
    return result;
  };
  var get_custom_beautifier_name = function(tag_check, raw_token) {
    var typeAttribute = null;
    var result = null;
    if (!raw_token.closed) {
      return null;
    }
    if (tag_check === "script") {
      typeAttribute = "text/javascript";
    } else if (tag_check === "style") {
      typeAttribute = "text/css";
    }
    typeAttribute = get_type_attribute(raw_token) || typeAttribute;
    if (typeAttribute.search("text/css") > -1) {
      result = "css";
    } else if (typeAttribute.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1) {
      result = "javascript";
    } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
      result = "html";
    } else if (typeAttribute.search(/test\/null/) > -1) {
      result = "null";
    }
    return result;
  };
  function in_array(what, arr) {
    return arr.indexOf(what) !== -1;
  }
  function TagFrame(parent, parser_token, indent_level) {
    this.parent = parent || null;
    this.tag = parser_token ? parser_token.tag_name : "";
    this.indent_level = indent_level || 0;
    this.parser_token = parser_token || null;
  }
  function TagStack(printer) {
    this._printer = printer;
    this._current_frame = null;
  }
  TagStack.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  };
  TagStack.prototype.record_tag = function(parser_token) {
    var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
    this._current_frame = new_frame;
  };
  TagStack.prototype._try_pop_frame = function(frame) {
    var parser_token = null;
    if (frame) {
      parser_token = frame.parser_token;
      this._printer.indent_level = frame.indent_level;
      this._current_frame = frame.parent;
    }
    return parser_token;
  };
  TagStack.prototype._get_frame = function(tag_list, stop_list) {
    var frame = this._current_frame;
    while (frame) {
      if (tag_list.indexOf(frame.tag) !== -1) {
        break;
      } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
        frame = null;
        break;
      }
      frame = frame.parent;
    }
    return frame;
  };
  TagStack.prototype.try_pop = function(tag, stop_list) {
    var frame = this._get_frame([tag], stop_list);
    return this._try_pop_frame(frame);
  };
  TagStack.prototype.indent_to_tag = function(tag_list) {
    var frame = this._get_frame(tag_list);
    if (frame) {
      this._printer.indent_level = frame.indent_level;
    }
  };
  function Beautifier(source_text, options2, js_beautify, css_beautify) {
    this._source_text = source_text || "";
    options2 = options2 || {};
    this._js_beautify = js_beautify;
    this._css_beautify = css_beautify;
    this._tag_stack = null;
    var optionHtml = new Options(options2, "html");
    this._options = optionHtml;
    this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, "force".length) === "force";
    this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline";
    this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned";
    this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple";
    this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, "preserve".length) === "preserve";
    this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  Beautifier.prototype.beautify = function() {
    if (this._options.disabled) {
      return this._source_text;
    }
    var source_text = this._source_text;
    var eol = this._options.eol;
    if (this._options.eol === "auto") {
      eol = "\n";
      if (source_text && lineBreak.test(source_text)) {
        eol = source_text.match(lineBreak)[0];
      }
    }
    source_text = source_text.replace(allLineBreaks, "\n");
    var baseIndentString = source_text.match(/^[\t ]*/)[0];
    var last_token = {
      text: "",
      type: ""
    };
    var last_tag_token = new TagOpenParserToken();
    var printer = new Printer(this._options, baseIndentString);
    var tokens = new Tokenizer2(source_text, this._options).tokenize();
    this._tag_stack = new TagStack(printer);
    var parser_token = null;
    var raw_token = tokens.next();
    while (raw_token.type !== TOKEN.EOF) {
      if (raw_token.type === TOKEN.TAG_OPEN || raw_token.type === TOKEN.COMMENT) {
        parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
        last_tag_token = parser_token;
      } else if (raw_token.type === TOKEN.ATTRIBUTE || raw_token.type === TOKEN.EQUALS || raw_token.type === TOKEN.VALUE || raw_token.type === TOKEN.TEXT && !last_tag_token.tag_complete) {
        parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
      } else if (raw_token.type === TOKEN.TAG_CLOSE) {
        parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
      } else if (raw_token.type === TOKEN.TEXT) {
        parser_token = this._handle_text(printer, raw_token, last_tag_token);
      } else {
        printer.add_raw_token(raw_token);
      }
      last_token = parser_token;
      raw_token = tokens.next();
    }
    var sweet_code = printer._output.get_code(eol);
    return sweet_code;
  };
  Beautifier.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
    var parser_token = {
      text: raw_token.text,
      type: raw_token.type
    };
    printer.alignment_size = 0;
    last_tag_token.tag_complete = true;
    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
    if (last_tag_token.is_unformatted) {
      printer.add_raw_token(raw_token);
    } else {
      if (last_tag_token.tag_start_char === "<") {
        printer.set_space_before_token(raw_token.text[0] === "/", true);
        if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
          printer.print_newline(false);
        }
      }
      printer.print_token(raw_token);
    }
    if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
      printer.indent();
      last_tag_token.indent_content = false;
    }
    if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
      printer.set_wrap_point();
    }
    return parser_token;
  };
  Beautifier.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
    var wrapped = last_tag_token.has_wrapped_attrs;
    var parser_token = {
      text: raw_token.text,
      type: raw_token.type
    };
    printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== "", true);
    if (last_tag_token.is_unformatted) {
      printer.add_raw_token(raw_token);
    } else if (last_tag_token.tag_start_char === "{" && raw_token.type === TOKEN.TEXT) {
      if (printer.print_preserved_newlines(raw_token)) {
        raw_token.newlines = 0;
        printer.add_raw_token(raw_token);
      } else {
        printer.print_token(raw_token);
      }
    } else {
      if (raw_token.type === TOKEN.ATTRIBUTE) {
        printer.set_space_before_token(true);
        last_tag_token.attr_count += 1;
      } else if (raw_token.type === TOKEN.EQUALS) {
        printer.set_space_before_token(false);
      } else if (raw_token.type === TOKEN.VALUE && raw_token.previous.type === TOKEN.EQUALS) {
        printer.set_space_before_token(false);
      }
      if (raw_token.type === TOKEN.ATTRIBUTE && last_tag_token.tag_start_char === "<") {
        if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
          printer.traverse_whitespace(raw_token);
          wrapped = wrapped || raw_token.newlines !== 0;
        }
        if (this._is_wrap_attributes_force) {
          var force_attr_wrap = last_tag_token.attr_count > 1;
          if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
            var is_only_attribute = true;
            var peek_index = 0;
            var peek_token;
            do {
              peek_token = tokens.peek(peek_index);
              if (peek_token.type === TOKEN.ATTRIBUTE) {
                is_only_attribute = false;
                break;
              }
              peek_index += 1;
            } while (peek_index < 4 && peek_token.type !== TOKEN.EOF && peek_token.type !== TOKEN.TAG_CLOSE);
            force_attr_wrap = !is_only_attribute;
          }
          if (force_attr_wrap) {
            printer.print_newline(false);
            wrapped = true;
          }
        }
      }
      printer.print_token(raw_token);
      wrapped = wrapped || printer.previous_token_wrapped();
      last_tag_token.has_wrapped_attrs = wrapped;
    }
    return parser_token;
  };
  Beautifier.prototype._handle_text = function(printer, raw_token, last_tag_token) {
    var parser_token = {
      text: raw_token.text,
      type: "TK_CONTENT"
    };
    if (last_tag_token.custom_beautifier_name) {
      this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
    } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
      printer.add_raw_token(raw_token);
    } else {
      printer.traverse_whitespace(raw_token);
      printer.print_token(raw_token);
    }
    return parser_token;
  };
  Beautifier.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
    var local = this;
    if (raw_token.text !== "") {
      var text = raw_token.text, _beautifier, script_indent_level = 1, pre = "", post = "";
      if (last_tag_token.custom_beautifier_name === "javascript" && typeof this._js_beautify === "function") {
        _beautifier = this._js_beautify;
      } else if (last_tag_token.custom_beautifier_name === "css" && typeof this._css_beautify === "function") {
        _beautifier = this._css_beautify;
      } else if (last_tag_token.custom_beautifier_name === "html") {
        _beautifier = function(html_source, options2) {
          var beautifier2 = new Beautifier(html_source, options2, local._js_beautify, local._css_beautify);
          return beautifier2.beautify();
        };
      }
      if (this._options.indent_scripts === "keep") {
        script_indent_level = 0;
      } else if (this._options.indent_scripts === "separate") {
        script_indent_level = -printer.indent_level;
      }
      var indentation = printer.get_full_indent(script_indent_level);
      text = text.replace(/\n[ \t]*$/, "");
      if (last_tag_token.custom_beautifier_name !== "html" && text[0] === "<" && text.match(/^(<!--|<!\[CDATA\[)/)) {
        var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text);
        if (!matched) {
          printer.add_raw_token(raw_token);
          return;
        }
        pre = indentation + matched[1] + "\n";
        text = matched[4];
        if (matched[5]) {
          post = indentation + matched[5];
        }
        text = text.replace(/\n[ \t]*$/, "");
        if (matched[2] || matched[3].indexOf("\n") !== -1) {
          matched = matched[3].match(/[ \t]+$/);
          if (matched) {
            raw_token.whitespace_before = matched[0];
          }
        }
      }
      if (text) {
        if (_beautifier) {
          var Child_options = function() {
            this.eol = "\n";
          };
          Child_options.prototype = this._options.raw_options;
          var child_options = new Child_options();
          text = _beautifier(indentation + text, child_options);
        } else {
          var white = raw_token.whitespace_before;
          if (white) {
            text = text.replace(new RegExp("\n(" + white + ")?", "g"), "\n");
          }
          text = indentation + text.replace(/\n/g, "\n" + indentation);
        }
      }
      if (pre) {
        if (!text) {
          text = pre + post;
        } else {
          text = pre + text + "\n" + post;
        }
      }
      printer.print_newline(false);
      if (text) {
        raw_token.text = text;
        raw_token.whitespace_before = "";
        raw_token.newlines = 0;
        printer.add_raw_token(raw_token);
        printer.print_newline(true);
      }
    }
  };
  Beautifier.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
    var parser_token = this._get_tag_open_token(raw_token);
    if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && !last_tag_token.is_empty_element && raw_token.type === TOKEN.TAG_OPEN && raw_token.text.indexOf("</") === 0) {
      printer.add_raw_token(raw_token);
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
    } else {
      printer.traverse_whitespace(raw_token);
      this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
      if (!parser_token.is_inline_element) {
        printer.set_wrap_point();
      }
      printer.print_token(raw_token);
    }
    if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
      parser_token.alignment_size = raw_token.text.length + 1;
    }
    if (!parser_token.tag_complete && !parser_token.is_unformatted) {
      printer.alignment_size = parser_token.alignment_size;
    }
    return parser_token;
  };
  var TagOpenParserToken = function(parent, raw_token) {
    this.parent = parent || null;
    this.text = "";
    this.type = "TK_TAG_OPEN";
    this.tag_name = "";
    this.is_inline_element = false;
    this.is_unformatted = false;
    this.is_content_unformatted = false;
    this.is_empty_element = false;
    this.is_start_tag = false;
    this.is_end_tag = false;
    this.indent_content = false;
    this.multiline_content = false;
    this.custom_beautifier_name = null;
    this.start_tag_token = null;
    this.attr_count = 0;
    this.has_wrapped_attrs = false;
    this.alignment_size = 0;
    this.tag_complete = false;
    this.tag_start_char = "";
    this.tag_check = "";
    if (!raw_token) {
      this.tag_complete = true;
    } else {
      var tag_check_match;
      this.tag_start_char = raw_token.text[0];
      this.text = raw_token.text;
      if (this.tag_start_char === "<") {
        tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
        this.tag_check = tag_check_match ? tag_check_match[1] : "";
      } else {
        tag_check_match = raw_token.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/);
        this.tag_check = tag_check_match ? tag_check_match[1] : "";
        if ((raw_token.text.startsWith("{{#>") || raw_token.text.startsWith("{{~#>")) && this.tag_check[0] === ">") {
          if (this.tag_check === ">" && raw_token.next !== null) {
            this.tag_check = raw_token.next.text.split(" ")[0];
          } else {
            this.tag_check = raw_token.text.split(">")[1];
          }
        }
      }
      this.tag_check = this.tag_check.toLowerCase();
      if (raw_token.type === TOKEN.COMMENT) {
        this.tag_complete = true;
      }
      this.is_start_tag = this.tag_check.charAt(0) !== "/";
      this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
      this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === "/>";
      var handlebar_starts = 2;
      if (this.tag_start_char === "{" && this.text.length >= 3) {
        if (this.text.charAt(2) === "~") {
          handlebar_starts = 3;
        }
      }
      this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(handlebar_starts)));
    }
  };
  Beautifier.prototype._get_tag_open_token = function(raw_token) {
    var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
    parser_token.alignment_size = this._options.wrap_attributes_indent_size;
    parser_token.is_end_tag = parser_token.is_end_tag || in_array(parser_token.tag_check, this._options.void_elements);
    parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
    parser_token.is_unformatted = !parser_token.tag_complete && in_array(parser_token.tag_check, this._options.unformatted);
    parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array(parser_token.tag_check, this._options.content_unformatted);
    parser_token.is_inline_element = in_array(parser_token.tag_name, this._options.inline) || parser_token.tag_name.includes("-") || parser_token.tag_start_char === "{";
    return parser_token;
  };
  Beautifier.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {
    if (!parser_token.is_empty_element) {
      if (parser_token.is_end_tag) {
        parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name);
      } else {
        if (this._do_optional_end_element(parser_token)) {
          if (!parser_token.is_inline_element) {
            printer.print_newline(false);
          }
        }
        this._tag_stack.record_tag(parser_token);
        if ((parser_token.tag_name === "script" || parser_token.tag_name === "style") && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
          parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
        }
      }
    }
    if (in_array(parser_token.tag_check, this._options.extra_liners)) {
      printer.print_newline(false);
      if (!printer._output.just_added_blankline()) {
        printer.print_newline(true);
      }
    }
    if (parser_token.is_empty_element) {
      if (parser_token.tag_start_char === "{" && parser_token.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]);
        parser_token.indent_content = true;
        var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
        if (!foundIfOnCurrentLine) {
          printer.print_newline(false);
        }
      }
      if (parser_token.tag_name === "!--" && last_token.type === TOKEN.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf("\n") === -1)
        ;
      else {
        if (!(parser_token.is_inline_element || parser_token.is_unformatted)) {
          printer.print_newline(false);
        }
        this._calcluate_parent_multiline(printer, parser_token);
      }
    } else if (parser_token.is_end_tag) {
      var do_end_expand = false;
      do_end_expand = parser_token.start_tag_token && parser_token.start_tag_token.multiline_content;
      do_end_expand = do_end_expand || !parser_token.is_inline_element && !(last_tag_token.is_inline_element || last_tag_token.is_unformatted) && !(last_token.type === TOKEN.TAG_CLOSE && parser_token.start_tag_token === last_tag_token) && last_token.type !== "TK_CONTENT";
      if (parser_token.is_content_unformatted || parser_token.is_unformatted) {
        do_end_expand = false;
      }
      if (do_end_expand) {
        printer.print_newline(false);
      }
    } else {
      parser_token.indent_content = !parser_token.custom_beautifier_name;
      if (parser_token.tag_start_char === "<") {
        if (parser_token.tag_name === "html") {
          parser_token.indent_content = this._options.indent_inner_html;
        } else if (parser_token.tag_name === "head") {
          parser_token.indent_content = this._options.indent_head_inner_html;
        } else if (parser_token.tag_name === "body") {
          parser_token.indent_content = this._options.indent_body_inner_html;
        }
      }
      if (!(parser_token.is_inline_element || parser_token.is_unformatted) && (last_token.type !== "TK_CONTENT" || parser_token.is_content_unformatted)) {
        printer.print_newline(false);
      }
      this._calcluate_parent_multiline(printer, parser_token);
    }
  };
  Beautifier.prototype._calcluate_parent_multiline = function(printer, parser_token) {
    if (parser_token.parent && printer._output.just_added_newline() && !((parser_token.is_inline_element || parser_token.is_unformatted) && parser_token.parent.is_inline_element)) {
      parser_token.parent.multiline_content = true;
    }
  };
  var p_closers = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"];
  var p_parent_excludes = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  Beautifier.prototype._do_optional_end_element = function(parser_token) {
    var result = null;
    if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
      return;
    }
    if (parser_token.tag_name === "body") {
      result = result || this._tag_stack.try_pop("head");
    } else if (parser_token.tag_name === "li") {
      result = result || this._tag_stack.try_pop("li", ["ol", "ul"]);
    } else if (parser_token.tag_name === "dd" || parser_token.tag_name === "dt") {
      result = result || this._tag_stack.try_pop("dt", ["dl"]);
      result = result || this._tag_stack.try_pop("dd", ["dl"]);
    } else if (parser_token.parent.tag_name === "p" && p_closers.indexOf(parser_token.tag_name) !== -1) {
      var p_parent = parser_token.parent.parent;
      if (!p_parent || p_parent_excludes.indexOf(p_parent.tag_name) === -1) {
        result = result || this._tag_stack.try_pop("p");
      }
    } else if (parser_token.tag_name === "rp" || parser_token.tag_name === "rt") {
      result = result || this._tag_stack.try_pop("rt", ["ruby", "rtc"]);
      result = result || this._tag_stack.try_pop("rp", ["ruby", "rtc"]);
    } else if (parser_token.tag_name === "optgroup") {
      result = result || this._tag_stack.try_pop("optgroup", ["select"]);
    } else if (parser_token.tag_name === "option") {
      result = result || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]);
    } else if (parser_token.tag_name === "colgroup") {
      result = result || this._tag_stack.try_pop("caption", ["table"]);
    } else if (parser_token.tag_name === "thead") {
      result = result || this._tag_stack.try_pop("caption", ["table"]);
      result = result || this._tag_stack.try_pop("colgroup", ["table"]);
    } else if (parser_token.tag_name === "tbody" || parser_token.tag_name === "tfoot") {
      result = result || this._tag_stack.try_pop("caption", ["table"]);
      result = result || this._tag_stack.try_pop("colgroup", ["table"]);
      result = result || this._tag_stack.try_pop("thead", ["table"]);
      result = result || this._tag_stack.try_pop("tbody", ["table"]);
    } else if (parser_token.tag_name === "tr") {
      result = result || this._tag_stack.try_pop("caption", ["table"]);
      result = result || this._tag_stack.try_pop("colgroup", ["table"]);
      result = result || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"]);
    } else if (parser_token.tag_name === "th" || parser_token.tag_name === "td") {
      result = result || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]);
      result = result || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]);
    }
    parser_token.parent = this._tag_stack.get_parser_token();
    return result;
  };
  beautifier.Beautifier = Beautifier;
  return beautifier;
}
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml)
    return html.exports;
  hasRequiredHtml = 1;
  var Beautifier = requireBeautifier().Beautifier, Options = requireOptions().Options;
  function style_html(html_source, options2, js_beautify, css_beautify) {
    var beautifier2 = new Beautifier(html_source, options2, js_beautify, css_beautify);
    return beautifier2.beautify();
  }
  html.exports = style_html;
  html.exports.defaultOptions = function() {
    return new Options();
  };
  return html.exports;
}
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc)
    return src;
  hasRequiredSrc = 1;
  var js_beautify = requireJavascript();
  var css_beautify = requireCss();
  var html_beautify = requireHtml();
  function style_html(html_source, options2, js2, css2) {
    js2 = js2 || js_beautify;
    css2 = css2 || css_beautify;
    return html_beautify(html_source, options2, js2, css2);
  }
  style_html.defaultOptions = html_beautify.defaultOptions;
  src.js = js_beautify;
  src.css = css_beautify;
  src.html = style_html;
  return src;
}
(function(module) {
  function get_beautify(js_beautify, css_beautify, html_beautify) {
    var beautify2 = function(src2, config) {
      return js_beautify.js_beautify(src2, config);
    };
    beautify2.js = js_beautify.js_beautify;
    beautify2.css = css_beautify.css_beautify;
    beautify2.html = html_beautify.html_beautify;
    beautify2.js_beautify = js_beautify.js_beautify;
    beautify2.css_beautify = css_beautify.css_beautify;
    beautify2.html_beautify = html_beautify.html_beautify;
    return beautify2;
  }
  {
    (function(mod) {
      var beautifier2 = requireSrc();
      beautifier2.js_beautify = beautifier2.js;
      beautifier2.css_beautify = beautifier2.css;
      beautifier2.html_beautify = beautifier2.html;
      mod.exports = get_beautify(beautifier2, beautifier2, beautifier2);
    })(module);
  }
})(js);
var jsExports = js.exports;
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var cache;
var isWhitespace$1 = function isWhitespace(str) {
  return typeof str === "string" && regex().test(str);
};
function regex() {
  return cache || (cache = new RegExp('^[\\s	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$'));
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtendable = function isExtendable2(val) {
  return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
};
var isObject = isExtendable;
var extendShallow = function extend(o2) {
  if (!isObject(o2)) {
    o2 = {};
  }
  var len = arguments.length;
  for (var i = 1; i < len; i++) {
    var obj = arguments[i];
    if (isObject(obj)) {
      assign(o2, obj);
    }
  }
  return o2;
};
function assign(a, b) {
  for (var key in b) {
    if (hasOwn(b, key)) {
      a[key] = b[key];
    }
  }
}
function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer_1 = function(obj) {
  return obj != null && (isBuffer$1(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};
function isBuffer$1(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
}
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === "function" && typeof obj.slice === "function" && isBuffer$1(obj.slice(0, 0));
}
var isBuffer = isBuffer_1;
var toString = Object.prototype.toString;
var kindOf = function kindOf2(val) {
  if (typeof val === "undefined") {
    return "undefined";
  }
  if (val === null) {
    return "null";
  }
  if (val === true || val === false || val instanceof Boolean) {
    return "boolean";
  }
  if (typeof val === "string" || val instanceof String) {
    return "string";
  }
  if (typeof val === "number" || val instanceof Number) {
    return "number";
  }
  if (typeof val === "function" || val instanceof Function) {
    return "function";
  }
  if (typeof Array.isArray !== "undefined" && Array.isArray(val)) {
    return "array";
  }
  if (val instanceof RegExp) {
    return "regexp";
  }
  if (val instanceof Date) {
    return "date";
  }
  var type = toString.call(val);
  if (type === "[object RegExp]") {
    return "regexp";
  }
  if (type === "[object Date]") {
    return "date";
  }
  if (type === "[object Arguments]") {
    return "arguments";
  }
  if (type === "[object Error]") {
    return "error";
  }
  if (isBuffer(val)) {
    return "buffer";
  }
  if (type === "[object Set]") {
    return "set";
  }
  if (type === "[object WeakSet]") {
    return "weakset";
  }
  if (type === "[object Map]") {
    return "map";
  }
  if (type === "[object WeakMap]") {
    return "weakmap";
  }
  if (type === "[object Symbol]") {
    return "symbol";
  }
  if (type === "[object Int8Array]") {
    return "int8array";
  }
  if (type === "[object Uint8Array]") {
    return "uint8array";
  }
  if (type === "[object Uint8ClampedArray]") {
    return "uint8clampedarray";
  }
  if (type === "[object Int16Array]") {
    return "int16array";
  }
  if (type === "[object Uint16Array]") {
    return "uint16array";
  }
  if (type === "[object Int32Array]") {
    return "int32array";
  }
  if (type === "[object Uint32Array]") {
    return "uint32array";
  }
  if (type === "[object Float32Array]") {
    return "float32array";
  }
  if (type === "[object Float64Array]") {
    return "float64array";
  }
  return "object";
};
/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
var isWhitespace2 = isWhitespace$1;
var extend$1 = extendShallow;
var typeOf = kindOf;
var condenseNewlines = function(str, options2) {
  var opts = extend$1({}, options2);
  var sep = opts.sep || "\n\n";
  var min = opts.min;
  var re;
  if (typeof min === "number" && min !== 2) {
    re = new RegExp("(\\r\\n|\\n|\\u2424) {" + min + ",}");
  }
  if (typeof re === "undefined") {
    re = opts.regex || /(\r\n|\n|\u2424){2,}/g;
  }
  if (opts.keepWhitespace !== true) {
    str = str.split("\n").map(function(line) {
      return isWhitespace2(line) ? line.trim() : line;
    }).join("\n");
  }
  str = trailingNewline(str, opts);
  return str.replace(re, sep);
};
function trailingNewline(str, options2) {
  var val = options2.trailingNewline;
  if (val === false) {
    return str;
  }
  switch (typeOf(val)) {
    case "string":
      str = str.replace(/\s+$/, options2.trailingNewline);
      break;
    case "function":
      str = options2.trailingNewline(str);
      break;
    case "undefined":
    case "boolean":
    default: {
      str = str.replace(/\s+$/, "\n");
      break;
    }
  }
  return str;
}
/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var beautify = jsExports;
var condense = condenseNewlines;
var extend2 = extendShallow;
var defaults = {
  unformatted: ["code", "pre", "em", "strong", "span"],
  indent_inner_html: true,
  indent_char: " ",
  indent_size: 2,
  sep: "\n"
};
var pretty = function pretty2(str, options2) {
  var opts = extend2({}, defaults, options2);
  str = beautify.html(str, opts);
  if (opts.ocd === true) {
    if (opts.newlines)
      opts.sep = opts.newlines;
    return ocd(str, opts);
  }
  return str;
};
function ocd(str, options2) {
  return condense(str, options2).replace(/^\s+/g, "").replace(/\s+$/g, "\n").replace(/(\s*<!--)/g, "\n$1").replace(/>(\s*)(?=<!--\s*\/)/g, "> ");
}
const pretty$1 = /* @__PURE__ */ getDefaultExportFromCjs(pretty);
const render = ({ template, props, options: options2 }) => {
  const { html: html2 } = (
    // @ts-ignore
    template.render(props)
  );
  if (options2?.plainText) {
    return renderAsPlainText(html2);
  }
  const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
  const markup = html2;
  const document = `${doctype}${markup}`;
  if (options2?.pretty) {
    return pretty$1(document);
  }
  return document;
};
const renderAsPlainText = (markup) => {
  return convert(markup, {
    selectors: [
      { selector: "img", format: "skip" },
      { selector: "#__svelte-email-preview", format: "skip" }
    ]
  });
};
export {
  Container as C,
  Html as H,
  Preview as P,
  Section as S,
  Text$2 as T,
  Head as a,
  pxToPt as p,
  render as r,
  styleToString as s
};
