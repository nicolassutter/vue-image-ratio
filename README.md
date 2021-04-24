# Vue-image-ratio

Small Vue.js component using a CSS `padding-bottom` hack for 16/9 images.

## The component

The component can be use like so:
```vue
<vue-image-ratio
  :attrs="{
    src: 'https://doge.com/doge.png',
    alt: 'Doge',
    class: 'rounded'
  }"
>
  <figcaption>Doge</figcaption>
</vue-image-ratio>
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
