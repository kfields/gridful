<template>
  <Layout>
    <article>
      <div class="hero">
        <div class="heroImage">
          <Fluid alt :src="$page.post.heroImage.file.url.src" :width="1920"/>
        </div>
      </div>
      <div class="wrapper">
        <div>
          <h1>{{$page.post.title}}</h1>
          <p style="display: block">{{$page.post.publishDate}}</p>
        </div>
        <div v-html="markdown"/>
      </div>
    </article>
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
import marked from "marked";
export default {
  name: "Contentful",
  // props: [''],
  // components: {},
  data() {
    return {
      markdown: ""
    };
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{ name: "description", content: this.$page.post.description }]
    };
  },
  mounted: function() {
    console.log("BlogPost.vue");
    console.log(this);

    this.markdown = marked(this.$page.post.body);
  }
};
</script>
<style>
article .wrapper {
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
}
article ul {
  list-style: disc inside;
  margin-bottom: 1rem;
}
article ul li {
  margin-bottom: 1rem;
}

</style>