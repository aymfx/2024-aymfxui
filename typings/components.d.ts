import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  AuButton: typeof import('../packages/aymfx-ui')['AuButton']
}
