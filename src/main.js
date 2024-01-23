// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

// Adicione as opções desejadas aqui ou remova completamente se não precisar de configurações específicas
const options = {
  position: 'bottom-center',
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: false,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
};

// Use o plugin Toast com as opções fornecidas
app.use(Toast, options);

app.mount('#app');