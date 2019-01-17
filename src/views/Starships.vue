<template>
  <div class="l-page">
    <Loader
      v-if="starships.loading"
      :tiles="tiles"/>
    <div
      v-if="!starships.loading"
      class="l-flex">
      <template v-for="(starship, index) in getStarships()">
        <div
          v-if="index < max"
          :key="`strip_${index}`"
          class="l-flex__column l-flex__column--3">
          <Strip
            :index="index"
            animation="fade"
            :title="starship.name"
            handle="starships"
            :loading="isLoading(starship.id)"
            :link="`/planets/${starship.id}`"/>
        </div>
      </template>
    </div>

    <Popup
      v-if="!starship.loading && starship.data && isId()"
      :object="starship.data"
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
  name: 'Starships',
  components: {
    Strip,
    Popup,
    Loader,
  },
  data() {
    return {
      max: 5,
      fields: [
        'name',
        'model',
        'manufacturer',
        'crew',
        'passengers',
        'starship_class',
      ],
      tiles: [
        'black',
        'red',
        'yellow',
      ],
    };
  },
  computed: {
    ...mapState('starships', ['starships', 'starship']),
  },
  methods: {
    ...mapActions('starships', {
      fetchStarships: ActionTypes.FETCH_STARSHIPS,
      fetchStarship: ActionTypes.FETCH_STARSHIP,
    }),
    ...mapGetters('starships', ['getStarships']),
    isId() {
      return this.$route.params.id !== undefined;
    },
    isLoading(starshipId) {
      return this.starships.loading && this.$route.params.id === starshipId;
    },
    onClose() {
      this.starship.data = null;
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id) {
      this.fetchStarships(to.params.id);
    }

    next();
  },
  created() {
    if (this.$route.params.id) {
      this.fetchStarship(this.$route.params.id);
    }

    this.fetchStarships();
  },
};
</script>
