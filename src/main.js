// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from 'vue-toastification';
import PhosphorIcons from "@phosphor-icons/vue"

import 'vue-toastification/dist/index.css';

const app = createApp(App);

// Adicione as opções desejadas aqui ou remova completamente se não precisar de configurações específicas
const options = {
  position: "bottom-center",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__slideBlurred",
  maxToasts: 20,
  newestOnTop: true
};

// Use o plugin Toast com as opções fornecidas
app.use(Toast, options);
app.use(router);
app.use(PhosphorIcons);


app.mount('#app');