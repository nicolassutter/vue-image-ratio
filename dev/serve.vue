<script lang="ts">
import { defineComponent } from 'vue';
import VueImageRatio from '@/vue-image-ratio.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    VueImageRatio
  }
});
</script>

<template>
  <div id="app">
    <vue-image-ratio />
  </div>
</template>
