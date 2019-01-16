<template>
  <div class="l-page">
    <div
      v-if="!people.loading"
      class="l-flex">
      <template v-for="(character, index) in getPeople()">
        <div
          v-if="index < max"
          :key="`strip_${index}`"
          class="l-flex__column l-flex__column--3">
          <Strip
            :index="index"
            animation="fade"
            :title="character.name"
            handle="people"
            :link="`/people/${character.id}`"/>
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
  name: 'People',
  components: {
    Strip,
  },
  data() {
    return {
      max: 4,
    };
  },
  computed: {
    ...mapState('people', ['people']),
  },
  methods: {
    ...mapActions('people', {
      fetch: ActionTypes.FETCH_CHARACTERS,
    }),
    ...mapGetters('people', ['getPeople']),
  },
  created() {
    this.fetch();
  },
};
</script>
