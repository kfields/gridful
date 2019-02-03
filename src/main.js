import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '~/assets/base.scss'
import DefaultLayout from '~/layouts/Default.vue'
import NavBar from '~/components/NavBar.vue'
import ArticlePreview from '~/components/ArticlePreview.vue'
import RecentArticles from '~/components/RecentArticles.vue'
import SimpleIcon from '~/components/SimpleIcon.vue'

export default function (Vue) {
  Vue.use(Buefy)
  Vue.component('Layout', DefaultLayout)
  Vue.component('NavBar', NavBar)
  Vue.component('ArticlePreview', ArticlePreview)
  Vue.component('RecentArticles', RecentArticles)
  Vue.component('SimpleIcon', SimpleIcon)
}
