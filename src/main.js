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

export default function (Vue, context) {
  const { head, isClient } = context
  // Add Web App manifest
  head.link.push({
    rel: 'manifest',
    href: '/manifest.json'
  })
  head.meta.push({
    name: 'theme-color',
    content: '#355e3b'
  })

  if(isClient) {
    require('./pwa/register-worker')
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
