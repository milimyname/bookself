import "./utils.js";
import { U as UNDEFINED, N as NAN, P as POSITIVE_INFINITY, a as NEGATIVE_INFINITY, b as NEGATIVE_ZERO, H as HOLE, s as stringify } from "./stringify.js";
function parse(serialized, revivers) {
  return unflatten(JSON.parse(serialized), revivers);
}
function unflatten(parsed, revivers) {
  if (typeof parsed === "number")
    return hydrate(parsed, true);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Invalid input");
  }
  const values = (
    /** @type {any[]} */
    parsed
  );
  const hydrated = Array(values.length);
  function hydrate(index, standalone = false) {
    if (index === UNDEFINED)
      return void 0;
    if (index === NAN)
      return NaN;
    if (index === POSITIVE_INFINITY)
      return Infinity;
    if (index === NEGATIVE_INFINITY)
      return -Infinity;
    if (index === NEGATIVE_ZERO)
      return -0;
    if (standalone)
      throw new Error(`Invalid input`);
    if (index in hydrated)
      return hydrated[index];
    const value = values[index];
    if (!value || typeof value !== "object") {
      hydrated[index] = value;
    } else if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const type = value[0];
        const reviver = revivers?.[type];
        if (reviver) {
          return hydrated[index] = reviver(hydrate(value[1]));
        }
        switch (type) {
          case "Date":
            hydrated[index] = new Date(value[1]);
            break;
          case "Set":
            const set = /* @__PURE__ */ new Set();
            hydrated[index] = set;
            for (let i = 1; i < value.length; i += 1) {
              set.add(hydrate(value[i]));
            }
            break;
          case "Map":
            const map = /* @__PURE__ */ new Map();
            hydrated[index] = map;
            for (let i = 1; i < value.length; i += 2) {
              map.set(hydrate(value[i]), hydrate(value[i + 1]));
            }
            break;
          case "RegExp":
            hydrated[index] = new RegExp(value[1], value[2]);
            break;
          case "Object":
            hydrated[index] = Object(value[1]);
            break;
          case "BigInt":
            hydrated[index] = BigInt(value[1]);
            break;
          case "null":
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index] = obj;
            for (let i = 1; i < value.length; i += 2) {
              obj[value[i]] = hydrate(value[i + 1]);
            }
            break;
          default:
            throw new Error(`Unknown type ${type}`);
        }
      } else {
        const array = new Array(value.length);
        hydrated[index] = array;
        for (let i = 0; i < value.length; i += 1) {
          const n = value[i];
          if (n === HOLE)
            continue;
          array[i] = hydrate(n);
        }
      }
    } else {
      const object = {};
      hydrated[index] = object;
      for (const key in value) {
        const n = value[key];
        object[key] = hydrate(n);
      }
    }
    return hydrated[index];
  }
  return hydrate(0);
}
class SuperFormError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, SuperFormError.prototype);
  }
}
function mapErrors(obj, top = true) {
  const output = {};
  const entries = Object.entries(obj);
  if (entries.length === 1 && entries[0][0] === "_errors" && obj._errors.length) {
    return top ? obj : obj._errors;
  } else if (obj._errors.length) {
    output._errors = obj._errors;
  }
  for (const [key, value] of entries.filter(([key2]) => key2 !== "_errors")) {
    output[key] = mapErrors(value, false);
  }
  return output;
}
function findErrors(errors, path = []) {
  const entries = Object.entries(errors);
  return entries.flatMap(([key, value]) => {
    if (Array.isArray(value) && value.length > 0) {
      const currPath = path.concat([key]);
      return value.map((message) => ({ path: currPath, message }));
    } else {
      return findErrors(errors[key], path.concat([key]));
    }
  });
}
async function traversePathAsync(obj, path, modifier) {
  if (!path.length)
    return void 0;
  path = [...path];
  let parent = obj;
  while (path.length > 1) {
    const key2 = path[0];
    const value = modifier ? await modifier({
      parent,
      key: String(key2),
      value: parent[key2]
    }) : parent[key2];
    if (value === void 0)
      return void 0;
    else
      parent = value;
    path.shift();
  }
  const key = path[0];
  return {
    parent,
    key: String(key),
    value: parent[key]
  };
}
function traversePath(obj, path, modifier) {
  if (!path.length)
    return void 0;
  path = [...path];
  let parent = obj;
  while (path.length > 1) {
    const key2 = path[0];
    const value = modifier ? modifier({
      parent,
      key: String(key2),
      value: parent[key2]
    }) : parent[key2];
    if (value === void 0)
      return void 0;
    else
      parent = value;
    path.shift();
  }
  const key = path[0];
  return {
    parent,
    key: String(key),
    value: parent[key]
  };
}
async function traversePaths(parent, modifier, path = []) {
  for (const key in parent) {
    const value = parent[key];
    const pathData = {
      parent,
      key,
      value,
      path: path.map(String).concat([key])
    };
    const status = await modifier(pathData);
    if (status === "abort")
      return status;
    else if (status === "skip")
      continue;
    else if (typeof value === "object") {
      const status2 = await traversePaths(value, modifier, pathData.path);
      if (status2 === "abort")
        return status2;
    }
  }
}
function clone(data) {
  if ("structuredClone" in globalThis) {
    return structuredClone(data);
  }
  return parse(stringify(data));
}
export {
  SuperFormError as S,
  traversePaths as a,
  traversePathAsync as b,
  clone as c,
  findErrors as f,
  mapErrors as m,
  parse as p,
  traversePath as t
};
