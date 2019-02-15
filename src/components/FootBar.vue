<template>
  <footer class="footer">
    <p>
      Made with
      <v-icon name="heart"/>by
      <a href="https://kfields.netlify.com">Kurtis Fields</a>
    </p>
    <small>
      <p>
        The source code is licensed under
        <a href="https://opensource.org/licenses/MIT">MIT</a>.
      </p>
      <p>
        The website content is licensed under
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
        >CC ANS 4.0</a>.
      </p>
    </small>
  </footer>
</template>
<script>
import "vue-awesome/icons/heart";

export default {
  name: "FootBar",
  props: [],
  components: {},
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