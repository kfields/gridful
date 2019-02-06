<template>
  <div class="preview">
    <g-link :to="`/blog/${article.slug}`" >
      <div class="previewImage">
        <Fluid :alt="article.title" :src="article.heroImage.file.url.src"/>
      </div>
      <h3 class="previewTitle">
        {{article.title}}
      </h3>
      <p>
        {{article.description}}
      <p/>
    </g-link>
    <div class="previewDate">
      <small class="previewDate">{{article.publishDate}}</small>
    </div>
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
<style  lang="scss">
.preview {
  padding-top: 1vh;
}
.previewTitle {
  font-size: 1.5em;
  padding-top: 1vh;
}
.previewImage {
  max-height: 200px;
  overflow: hidden;
  display: block;
  width: 100%;
}
.previewDate {
  text-align: right;
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