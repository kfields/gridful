<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt class="nav-logo" src="/logos/logo-circle-normal.svg">
        <span style="font-size: 1.5em">Gridful</span>
      </a>
      
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <g-link class="navbar-item" to="/blog">Blog</g-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <g-link class="navbar-item" to="/about">About</g-link>
            <g-link class="navbar-item" to="/contact">Contact</g-link>
            <hr class="navbar-divider">
            <a class="navbar-item" href="https://github.com/kfields/gridful/issues">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a href="https://github.com/kfields/gridful">
            <v-icon name="brands/github" scale="2"/>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<!--
<static-query>
query Home {
  metaData {
    siteName
  }
}
</static-query>
-->
<script>
import "vue-awesome/icons/brands/github";

export default {
  name: "NavBar",
  props: [],
  components: {},
  data() {
    return {};
  },
  mounted: function() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>