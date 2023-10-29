import './assets/main.css'

import { createApp, ref} from 'vue'
import App from './App.vue'
import router from './router'
import EditProjectModal from './views/EditProjectModal.vue';

const app = createApp(App);

app.use(router);

const isModalOpen = ref(false);
const selectedProject = ref(null);

app.component('EditProjectModal', EditProjectModal);

app.config.globalProperties.isModalOpen = isModalOpen;
app.config.globalProperties.selectedProject = selectedProject;

app.mount('#app');