<template>
  <div class="wrapper">
    <h2>Recent articles</h2>
    <ul class="article-list">
      <li v-for="edge in $static.posts.edges" :key="edge.id">
        <ArticlePreview :article="edge.node" />
      </li>
    </ul>
  </div>
</template>
<static-query>
  query HomeQuery {
    posts: allContentfulBlogPost {
      edges {
        node {
          title
          description
          slug
          publishDate(format: "MMMM Do, YYYY")
          tags
          heroImage {
            path
            slug
            file {
              fileName
              url
            }
          }
          description
        }
      }
    }
  }
</static-query>
<script>

export default {
  components: {
  },
};
</script>
