# Vue-image-ratio

Small Vue.js component using a CSS `padding-bottom` hack for 16/9 images.

## Compatibility

| Vue Version | Support |
--------------|---------|
|2.x          | ❌      |
|3.x          | ✅      |

## Installation

```sh
npm i vue-image-ratio --save
```

## The component

The component can be use like so:

```vue
<template>
  <vue-image-ratio
    :attrs="{
      src: 'https://doge.com/doge.png',
      alt: 'Doge',
      class: 'rounded'
    }"
  >
    <figcaption>Doge</figcaption>
  </vue-image-ratio>
</template>

<script>
import VueImageRatio from 'vue-image-ratio'

export default {
  ...,
  components: {
    ...,
    VueImageRatio
  }
}
</script>
```

## Props

| Prop | Type | Description | Default |
--- | --- | --- | ---
|`attrs`|`Object`|An object repesenting the HTML attributes of the `<img>` element|`{ src: '...', alt: ''}`|
|`cover`|`Boolean`|If the `<img>` should be set to `object-fit: cover;`|`true`|

## Slot

The component has a default `<slot>` that can be used to place content inside of the `<figure>`, under the `<img>`.

## CSS classes

*Each of theses classes are prefixed with `vue-image-ratio-`*

| Name |
--- |
|`image-container`|
|`figure`|
|`img`|
