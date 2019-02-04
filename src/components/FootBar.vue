<template>
  <footer id="footer">
    <div class="wrapper">
      <div class="content">
        <div class="columns">
          <div class="column">
            <p>Made with<v-icon name="heart"/>by <a href="https://kfields.netlify.com">Kurtis Fields</a>
            </p>
          </div>
        </div>
        <small>
          <p>The source code is licensed under
            <a target="_blank">MIT</a>.
          </p>
          <p>The website content is licensed under
            <a target="_blank">CC ANS 4.0</a>.
          </p>
        </small>
      </div>
    </div>
  </footer>
</template>
<script>
import 'vue-awesome/icons/heart'

export default {
  name: "FootBar",
  props: [],
  components: {
  },
  data() {
    return {
      svg: ""
    };
  },
  mounted() {}
};
</script>
<style>
</style>