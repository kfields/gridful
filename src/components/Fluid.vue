<template>
<picture>
  <source :srcset="srcset" sizes="sizes">
  <!-- <img alt="" :src="imgSrc" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 0.5s ease 0s;"> -->
  <!-- <img alt="" :src="imgSrc" style="opacity: 1; transition: opacity 0.5s ease 0s;"> -->
  <img :alt="alt" :src="imgSrc" style="width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 0.5s ease 0s;">
</picture>
</template>
<script>
const genSrc = function (src, w, h, q, fit) {
  return `${src}?w=${w}&h=${h}&q=${q}&fit=${fit} ${w}w`
}
const resolutions = [480, 1024, 1920, 2560]
const calcHeight = function (w) {
  return Math.floor(w * (9/16))
}
export default {
  name: 'Fluid',
  props: {
    alt: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    fit: {
      type: String,
      default: 'fill'
    },
    width: {
      type: Number,
      default: 480
    }
  },
  components: {
  },
  data () {
    return {
      srcset: '',
      imgSrc: '',
      sizes: ''
    }
  },
  mounted () {
    const src = this.src
    let w = 0, h = 0
    const fit=this.fit
    for(let i=0; i<resolutions.length;i++) {
      w =resolutions[i]
      h = calcHeight(w)
      this.srcset += genSrc(src, w, h, 50, fit)
      if(i < resolutions.length - 1) {
        this.srcset += ','
      }
    }
    w = this.width
    h = calcHeight(w)
    this.imgSrc = genSrc(src, w, h, 50, fit)

    this.sizes = `(max-width: ${w}px) 100vw, ${w}px`
  }
}
</script>
<style>
</style>

<!--
fit attribute =

pad: Resize the image to the specified dimensions, padding the image if needed.

fill: Resize the image to the specified dimensions, cropping the image if needed.

scale: Resize the image to the specified dimensions, changing the original aspect ratio if needed.

crop: Crop a part of the original image to fit into the specified dimensions.

thumb: Create a thumbnail from the image.
-->