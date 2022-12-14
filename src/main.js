import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

loadFonts()

createApp(App).use(Quasar, quasarUserOptions).use(router)
  .use(vuetify)
  .mount('#app')
