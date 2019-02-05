<template>
  <Layout>
    <RecentArticles/>
  </Layout>
</template>

<script>
export default {
  components: {
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
