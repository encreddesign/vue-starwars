<template>
  <div :class="`c-split ${getAnimation()}`">
    <div
      v-if="logos[handle]"
      class="c-split__image"
      v-html="logos[handle]"/>
    <h2 class="c-split__title">{{ title }}</h2>
    <div class="c-split__button">
      <router-link
        :to="link"
        class="c-button">
        <span>View</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import logos from '../config/logos';

export default {
  name: 'Strip',
  props: {
    index: Number,
    title: String,
    handle: String,
    link: String,
    animation: String,
  },
  data() {
    return {
      logos,
    };
  },
  methods: {
    getAnimation() {
      return this.animation === 'fade' ? `c-split--fade${this.index}` : `c-split--${this.animation}`;
    },
  },
};
</script>
