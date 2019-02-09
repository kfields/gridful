// import { Field, Control, Icon, Help } from 'buefy'
import Buefy from 'buefy'
import '~/assets/index.scss'

import DefaultLayout from '~/layouts/Default.vue'
import NavBar from '~/components/NavBar.vue'
import FootBar from '~/components/FootBar.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import Articles from '~/components/Articles.vue'
//import SimpleIcon from '~/components/SimpleIcon.vue'
import Fluid from '~/components/Fluid.vue'
import Icon from 'vue-awesome/components/Icon'

const isProd = process.env.NODE_ENV === 'production'
export default function (Vue, context) {
  const { head, isClient } = context
  // Add Web App manifest
  if(isProd) {
    head.link.push({
      rel: 'manifest',
      href: '/manifest.json'
    })
  }
  head.meta.push({
    name: 'theme-color',
    content: '#18453B' //MSU Green
  })
  //todo:fix so this won't run in dev mode
  /*if(isClient) {
    console.log('registering worker from main.js')
    require('./pwa/register-worker')
  }*/
  if (isClient && isProd && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }

  console.log('main.js - context')
  console.log(context)
  Vue.use(Buefy)
  /*
  Vue.component('Field', Field)
  Vue.component('Control', Control)
  Vue.component('Icon', Icon)
  Vue.component('Help', Help)
  */
  //
  Vue.component('Layout', DefaultLayout)
  Vue.component('NavBar', NavBar)
  Vue.component('FootBar', FootBar)
  Vue.component('ArticlePreview', ArticlePreview)
  Vue.component('Articles', Articles)
  //Vue.component('SimpleIcon', SimpleIcon)
  Vue.component('v-icon', Icon)
  Vue.component('Fluid', Fluid)
}
