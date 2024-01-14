import { withInstall } from '@aymfx-ui/utils';

import Button from './src/button.vue';

export const AuButton = withInstall(Button);
export default AuButton;

export * from './src/button'
export type { ButtonInstance } from './src/instance'