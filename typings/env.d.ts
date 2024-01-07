import { INSTALLED_KEY } from '@aymfx-ui/utils';
declare module 'vue' {
  export interface App {
    [INSTALLED_KEY]?: boolean;
  }
}

export {};
