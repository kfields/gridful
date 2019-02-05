<template>
  <div class="hero-banner">
    <div class="">
      <h1>Gridful = Gridsome + Contentful</h1>
      <i>Supercharge your site</i>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HeroBanner',
  components: {
  }
}
</script>
<style>
.hero-banner {
  width: calc(100% - 10vmin);
  margin: 0 auto;
  /*padding: 5vmin 0;*/
  padding: 0 0 2vmin 0;
  /*color: white;
  background-color: #0d2538;*/
  text-align: center;
  /*
  border-radius: 1em;
  border-style: solid;
  border-color: gray;
  */
}
.hero-banner div {
  display: inline-block
}
</style>