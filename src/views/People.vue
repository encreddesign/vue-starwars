<template>
  <div class="l-page">
    <Loader
      v-if="people.loading"
      :tiles="tiles"/>
    <div
      v-if="!people.loading"
      class="l-flex">
      <template v-for="(char, index) in getPeople()">
        <div
          v-if="index < max"
          :key="`strip_${index}`"
          class="l-flex__column l-flex__column--3">
          <Strip
            :index="index"
            animation="fade"
            :title="char.name"
            handle="people"
            :loading="isLoading(char.id)"
            :link="`/people/${char.id}`"/>
        </div>
      </template>
    </div>

    <Popup
      v-if="!character.loading && character.data && isId()"
      :object="character.data"
      :filter="fields"
      :onClose="onClose"/>
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
import Popup from '../components/Popup.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'People',
  components: {
    Strip,
    Popup,
    Loader,
  },
  data() {
    return {
      max: 4,
      fields: [
        'name',
        'height',
        'mass',
        'hair_color',
        'birth_year',
        'gender',
      ],
      tiles: [
        'black',
        'red',
        'yellow',
      ],
    };
  },
  computed: {
    ...mapState('people', ['people', 'character']),
  },
  methods: {
    ...mapActions('people', {
      fetchPeople: ActionTypes.FETCH_CHARACTERS,
      fetchCharacter: ActionTypes.FETCH_CHARACTER,
    }),
    ...mapGetters('people', ['getPeople']),
    isId() {
      return this.$route.params.id !== undefined;
    },
    isLoading(characterId) {
      return this.character.loading && this.$route.params.id === characterId;
    },
    onClose() {
      this.character.data = null;
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id) {
      this.fetchCharacter(to.params.id);
    }

    next();
  },
  created() {
    if (this.$route.params.id) {
      this.fetchCharacter(this.$route.params.id);
    }

    this.fetchPeople();
  },
};
</script>
