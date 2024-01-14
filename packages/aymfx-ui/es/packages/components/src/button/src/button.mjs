import { buttonProps as t } from "element-plus";
const o = {
  ...t,
  throttleWait: {
    type: Number
  },
  throttleSetting: {
    type: Object,
    default: () => ({
      leading: !0
    })
  },
  debounceWait: {
    type: Number
  },
  debounceSetting: {
    type: Object
  }
};
export {
  o as ButtonProps
};
