import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router";
import store from "@/store/store";
import CollapseTransition from "@ivanv/vue-collapse-transition";
// import components from "@/components/";
const app = createApp(App);


// components.forEach(component =>{
//     app.component(component.name, component);
// })

app
    .use(store)
    .use(router)
    .use(CollapseTransition)
    .mount('#app')
