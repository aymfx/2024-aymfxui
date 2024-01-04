<script lang="ts" setup>
import type { ButtonProps } from './type';
import { ref } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
console.log(props);

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>
<template>
  <button
    ref="_ref"
    class="au-button"
    :class="{
      [`au-button--${type}`]: type,
      [`au-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>
