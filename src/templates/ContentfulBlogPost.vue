<template>
  <Layout>
    <div class="hero">
      <div class="heroImage">
        <!-- <g-image alt={$page.post.title} :src="$page.post.heroImage.file.url.src"/> -->
        <Fluid alt="" :src="$page.post.heroImage.file.url.src" :width=1920 />
      </div>
    </div>
    <div class="wrapper">
      <h1 class="section-headline">{{$page.post.title}}</h1>
      <p style="display: block">
        {{$page.post.publishDate}}
      </p>
      <div v-html="markdown"/>
    </div>
  </Layout>
</template>

<page-query>
query BlogPostByPath($path: String!) {
  post: contentfulBlogPost(path: $path ) {
    title
    publishDate(format: "MMMM Do, YYYY")
    description
    body
    heroImage {
      file {
        url
      }
    }
  }
}
</page-query>

<script>
 import marked from 'marked'
export default {
  name: 'Contentful',
  // props: [''],
  // components: {},
  data () {
    return {
      markdown: ""
    }
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'description', content: this.$page.post.description }
      ]
    }
  },
  mounted: function () {
    console.log('BlogPost.vue')
    console.log(this)

    this.markdown = marked(this.$page.post.body)
  }
};
</script>