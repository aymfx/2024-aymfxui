<script setup lang="ts">
import './styles.scss';
import { ElButton } from "element-plus";
import type { ButtonProps } from './button';

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

defineOptions({
  name: 'AuButton',
});
</script>
<template>
  <el-button type="primary">
    <slot></slot>
  </el-button>
</template>
