<template>
  <Layout>
    <!-- <HeroBanner/> -->
    <RecentArticles/>
  </Layout>
</template>

<script>
import HeroBanner from '~/components/HeroBanner'
export default {
  components: {
    HeroBanner
  },
  mounted () {
    console.log('Index.vue')
    console.log(this)
  },
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        { name: 'description', content: 'Home' }
      ]
    }
  }
};
</script>
