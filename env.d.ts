/// <reference types="vite/client" />
declare module '*.vue' {
    import { defineComponent } from 'vue';
    export default defineComponent;
}

interface ImportMetaEnv {
  readonly VITE_ENV: 'dev'|'prod';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  aplus_queue: any[];
  aiTingWebClient: any;

  atGetIsLoginCallback: any;
  atGetOpenIdCallback: any;
  atGetIsVipCallback: any;
  atGetPayCallback: any;
  atShareCallback: any;
  atExitCallback: any;
  atShowExitCallback: any;
  H5SOURCESTORE: any;
}