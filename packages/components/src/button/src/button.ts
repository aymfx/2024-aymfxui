import { buttonProps } from 'element-plus'

import type { ExtractPropTypes, PropType } from 'vue'
import type { DebounceSettings, ThrottleSettings } from 'lodash-es'

export const ButtonProps = {
  ...buttonProps,
  throttleWait: {
    type: Number
  },
  throttleSetting: {
    type: Object as PropType<ThrottleSettings>,
    default: () =>
      ({
        leading: true
      } as ThrottleSettings)
  },
  debounceWait: {
    type: Number
  },
  debounceSetting: {
    type: Object as PropType<DebounceSettings>
  }
}

export type AuButtonProps = ExtractPropTypes<typeof ButtonProps>
