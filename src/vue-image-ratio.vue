<template>
  <div class="vue-image-ratio-image-container">
    <figure class="vue-image-ratio-figure">
      <img
        class="vue-image-ratio-img"
        :class="classes"
        v-bind="attrs"
      />
      <slot></slot>
    </figure>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'ImageRatio',

  props: {
    /**
     * Object representing the img HTML attributes
     */
    attrs: {
      type: Object,
      default: {
        src: '...',
        alt: ''
      }
    },

    /**
     * If the img should have object-fit: cover;
     */
    cover: {
      type: Boolean,
      default: true
    }
  },

  setup({ cover }) {
    const classes = computed(() => ({ cover }))
    return { classes }
  }
})
</script>

<style>
.vue-image-ratio-image-container {
  position: relative;
  height: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  padding-bottom: 56.25%;
}

.vue-image-ratio-figure {
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.vue-image-ratio-img {
  height: 100%;
  width: 100%;
}

.vue-image-ratio-img.cover {
  object-fit: cover;
}
</style>