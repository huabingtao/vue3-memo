import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.scss'

import { Button, Search, Field, Grid, GridItem, Switch, Icon, Popup, CellGroup } from 'vant';

const Vue = createApp(App)

Vue.use(Grid).use(GridItem).use(Button).use(Search).use(Field).use(Switch).use(Icon).use(Popup).use(CellGroup)

Vue.use(store).use(router).mount('#app')
