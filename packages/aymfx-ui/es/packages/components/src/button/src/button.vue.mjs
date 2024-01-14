import { defineComponent as u, openBlock as d, createBlock as m, unref as i, mergeProps as f, createSlots as p, withCtx as n, renderSlot as r, createCommentVNode as k } from "vue";
import { ElButton as h } from "element-plus";
import { ButtonProps as b } from "./button.mjs";
import g from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/throttle.mjs";
import S from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.mjs";
import W from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.mjs";
const w = /* @__PURE__ */ u({
  __name: "button",
  props: b,
  emits: ["click"],
  setup(l, { emit: e }) {
    const o = l, c = g(
      (t) => e("click", t),
      o.throttleWait,
      o.throttleSetting
    ), s = S(
      (t) => e("click", t),
      o.debounceWait,
      o.debounceSetting
    ), a = (t) => {
      o.throttleWait ? c(t) : o.debounceWait ? s(t) : e("click", t);
    };
    return (t, $) => (d(), m(i(h), f(
      i(W)(o, [
        "throttleSetting",
        "throttleWait",
        "debounceSetting",
        "debounceWait"
      ]),
      { onClick: a }
    ), p({
      default: n(() => [
        t.$slots.default ? r(t.$slots, "default", { key: 0 }) : k("", !0)
      ]),
      _: 2
    }, [
      t.$slots.loading ? {
        name: "loading",
        fn: n(() => [
          r(t.$slots, "loading")
        ]),
        key: "0"
      } : void 0,
      t.$slots.icon ? {
        name: "icon",
        fn: n(() => [
          r(t.$slots, "icon")
        ]),
        key: "1"
      } : void 0
    ]), 1040));
  }
});
export {
  w as default
};
