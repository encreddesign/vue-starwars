<template>
  <div class="c-split">
    <router-link :to="link">
      <div
        v-if="logos[handle]"
        class="c-split__image"
        v-html="logos[handle]"/>
      <h2 class="c-split__title">{{ title }}</h2>
    </router-link>
  </div>
</template>

<script>
import logos from '../config/logos';

export default {
  name: 'Strip',
  props: {
    title: String,
    handle: String,
    link: String,
  },
  data() {
    return {
      logos,
    };
  },
};
</script>
