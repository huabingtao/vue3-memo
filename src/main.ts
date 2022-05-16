import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store,key} from './store'
import '@/assets/style/index.scss'

import { Button, Search, Field, Grid, GridItem, Switch, Icon, Popup, Cell, CellGroup, Checkbox,CheckboxGroup, Empty } from 'vant';

const Vue = createApp(App)

Vue.use(Grid).use(GridItem).use(Button).use(Search).use(Field).use(Switch).use(Icon).use(Popup).use(Cell).use(CellGroup).use(Checkbox).use(Empty).use(CheckboxGroup)

Vue.use(store,key).use(router).mount('#app')
