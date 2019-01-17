<template>
  <div class="c-loader">
    <span
      v-for="(tile, index) in tiles"
      :key="`tile_${index}`"
      :style="`background-color: ${tile};`"></span>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    tiles: {
      type: Array,
      required: true,
    },
  },
};
</script>
