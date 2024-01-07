<script setup lang="ts">
import './styles.scss';
import type { ButtonProps } from './button';

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
defineOptions({
  name: 'AuButton',
});
</script>
<template>
  <button class="au-button" :type="nativeType">
    <slot></slot>
  </button>
</template>
