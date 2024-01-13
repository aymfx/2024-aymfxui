import { withInstall } from 'element-plus/es/utils';

import Button from './src/button.vue';

export const AuButton = withInstall(Button);
export default AuButton;

export * from './src/button';
export type { AuInstance } from './src/instance';
