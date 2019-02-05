<template>
  <div class="preview">
    <g-link :to="`/blog/${article.slug}`" >
      <div class="previewImage">
        <!-- <g-image alt="" :src="article.heroImage.file.url.src"/> -->
        <Fluid :alt="article.title" :src="article.heroImage.file.url.src"/>
      </div>
      <h3 class="previewTitle">
        {{article.title}}
      </h3>
      <p>
        {{article.description}}
      <p/>
    </g-link>
    <small>{{article.publishDate}}</small>
  </div>
</template>
<script>
export default {
  name: 'ArticlePreview',
  props: ['article'],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
<style>
.preview {
  padding-top: 1vh;
}
.previewTitle {
  font-size: 1.5em;
  padding-top: 1vh;
}
.previewImage {
  /*
    Ensure golden ratio for the hero size while limiting it to some extend to
    the viewport width
  */
  height: 16vh;
  max-height: 200px;
  overflow: hidden;
}
.tag {
  color: #A0A0A0;
  text-decoration: none;
  display: inline-block;
  padding: .33333rem .5rem;
  line-height: 1;
  border-radius: 2px;
  border: 1px solid #A0A0A0;
  margin-right: .5em;
}
</style>