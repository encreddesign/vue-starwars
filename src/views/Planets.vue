<template>
  <div class="l-page">
    <Loader
      v-if="planets.loading"
      :tiles="tiles"/>
    <div
      v-if="!planets.loading"
      class="l-flex">
      <template v-for="(planet, index) in getPlanets()">
        <div
          v-if="index < max"
          :key="`strip_${index}`"
          class="l-flex__column l-flex__column--3">
          <Strip
            :index="index"
            animation="fade"
            :title="planet.name"
            handle="planets"
            :loading="isLoading(planet.id)"
            :link="`/planets/${planet.id}`"/>
        </div>
      </template>
    </div>

    <Popup
      v-if="!planet.loading && planet.data && isId()"
      :object="planet.data"
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
  name: 'Planets',
  components: {
    Strip,
    Popup,
    Loader,
  },
  data() {
    return {
      max: 6,
      fields: [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'terrain',
        'surface_water',
      ],
      tiles: [
        'black',
        'red',
        'yellow',
      ],
    };
  },
  computed: {
    ...mapState('planets', ['planets', 'planet']),
  },
  methods: {
    ...mapActions('planets', {
      fetchPlanets: ActionTypes.FETCH_PLANETS,
      fetchPlanet: ActionTypes.FETCH_PLANET,
    }),
    ...mapGetters('planets', ['getPlanets']),
    isId() {
      return this.$route.params.id !== undefined;
    },
    isLoading(planetId) {
      return this.planet.loading && this.$route.params.id === planetId;
    },
    onClose() {
      this.planet.data = null;
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id) {
      this.fetchPlanet(to.params.id);
    }

    next();
  },
  created() {
    if (this.$route.params.id) {
      this.fetchPlanet(this.$route.params.id);
    }

    this.fetchPlanets();
  },
};
</script>
