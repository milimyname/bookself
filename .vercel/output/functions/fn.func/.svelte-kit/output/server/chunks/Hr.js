import { c as create_ssr_component, k as compute_rest_props, f as spread, g as escape_object, o as escape_attribute_value, d as add_attribute } from "./index3.js";
import { p as pxToPt, s as styleToString } from "./render.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "style", "pX", "pY", "target"]);
  let { href = "" } = $$props;
  let { style = {} } = $$props;
  let { pX = 0 } = $$props;
  let { pY = 0 } = $$props;
  let { target = "_blank" } = $$props;
  const y = pY * 2;
  const textRaise = pxToPt(y.toString());
  const buttonStyle = (style2) => {
    const paddingY = style2?.pY || 0;
    const paddingX = style2?.pX || 0;
    return {
      ...style2,
      lineHeight: "100%",
      textDecoration: "none",
      display: "inline-block",
      maxWidth: "100%",
      padding: `${paddingY}px ${paddingX}px`
    };
  };
  const buttonTextStyle = (style2) => {
    const paddingY = style2?.pY || 0;
    return {
      ...style2,
      maxWidth: "100%",
      display: "inline-block",
      lineHeight: "120%",
      textDecoration: "none",
      textTransform: "none",
      msoPaddingAlt: "0px",
      msoTextRaise: pxToPt(paddingY.toString())
    };
  };
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.pX === void 0 && $$bindings.pX && pX !== void 0)
    $$bindings.pX(pX);
  if ($$props.pY === void 0 && $$bindings.pY && pY !== void 0)
    $$bindings.pY(pY);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  return `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      {
        style: escape_attribute_value(styleToString(buttonStyle({ ...style, pX, pY })))
      }
    ],
    {}
  )}><span><!-- HTML_TAG_START -->${`<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%;mso-text-raise:${textRaise}" hidden>&nbsp;</i><![endif]-->`}<!-- HTML_TAG_END --></span>
	<span${add_attribute("style", styleToString(buttonTextStyle({ ...style, pX, pY })), 0)}>${slots.default ? slots.default({}) : ``}</span>
	<span><!-- HTML_TAG_START -->${`<!--[if mso]><i style="letter-spacing: ${pX}px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]-->`}<!-- HTML_TAG_END --></span></a>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let { style = {} } = $$props;
  const styleDefault = {
    width: "100%",
    border: "none",
    borderTop: "1px solid #eaeaea",
    ...style
  };
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `<hr${spread(
    [
      {
        style: escape_attribute_value(styleToString(styleDefault))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
export {
  Button as B,
  Hr as H
};
