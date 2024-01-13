<script setup lang="ts">
import './styles.scss';
import type { ButtonProps } from './button';
import { ElButton } from 'element-plus';

const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});
defineOptions({
  name: 'AuButton',
});
</script>
<template>
  <el-button>好事成双</el-button>
  <button class="au-button" :type="nativeType">
    <slot></slot>
  </button>
</template>
