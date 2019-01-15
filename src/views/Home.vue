<template>
  <div class="l-page">
    <div
      v-if="!resources.loading"
      class="l-flex">
      <template v-for="(strip, index) in getResources()">
        <div
          v-if="types.indexOf(strip.handle) !== -1"
          :key="`strip_${index}`"
          class="l-flex__column l-flex__column--3">
          <Strip
            :title="strip.name"
            :handle="strip.handle"
            :link="strip.link"/>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters,
} from 'vuex';
import ActionTypes from '../store/types/action.types';
import Strip from '../components/Strip.vue';

export default {
  name: 'Home',
  components: {
    Strip,
  },
  data() {
    return {
      types: [
        'people',
        'planets',
        'starships',
      ],
    };
  },
  computed: {
    ...mapState('home', ['resources']),
  },
  methods: {
    ...mapActions('home', {
      fetch: ActionTypes.FETCH_CHARACTERS,
    }),
    ...mapGetters('home', ['getResources']),
  },
  created() {
    this.fetch();
  },
};
</script>
