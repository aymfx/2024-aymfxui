# aymfx-ui

基于 Element Plus 组件库二次封装

## 准备工作

项目中需要先安装[Vue3](https://cn.vuejs.org/)、[Element Plus](https://element-plus.org/zh-CN/guide/design.html)

## 安装

```bash
pnpm i aymfx-ui
```

## 使用

- 在入口文件中导入样式

```js
import 'aymfx-ui/es/style.css'
```

- 示例

```vue
<template>
  <AuButton type="primary" :debounceWait="2000" @click="handleClick">
    防抖按钮
  </AuButton>
  <div>点击{{ count }}次</div>
</template>

<script setup lang="ts">
import { AuButton } from 'aymfx-ui'
import { ref } from 'vue'

const count = ref(0)

const handleClick = () => {
  count.value++
}
</script>
```
