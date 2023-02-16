import { createApp } from "vue";
import { createPinia } from 'pinia';

import router from "./router";
import App from "./App.vue";

import "./assets/main.css";
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import { getURLParameter } from '@/utils/params.util';

// @UM: 获取来源入口
window.H5SOURCESTORE = getURLParameter(window.location.href, 'h5source')
console.log(window.location.href)

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");