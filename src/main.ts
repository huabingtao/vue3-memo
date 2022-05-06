import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Search, Field, Grid, GridItem, Switch, Icon } from 'vant';

const Vue = createApp(App)
window.document.documentElement.setAttribute( "data-theme", "dark" );
Vue.use(Grid).use(GridItem).use(Button).use(Search).use(Field).use(Switch).use(Icon)

Vue.use(store).use(router).mount('#app')
