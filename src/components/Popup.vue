<template>
  <div class="c-popup">
    <button
      class="c-popup__button c-button"
      @click="onClose">
      <span>
        <svg aria-hidden="true" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
      </span>
    </button>

    <div class="c-popup__container">
      <ul class="c-popup__list">
        <li
          v-for="(item, index) in getDataList(object)"
          :key="`list_item_${index}`">
          <span class="c-popup__list__item">{{ item.key }}</span>
          <span class="c-popup__list__item c-popup__list__item--value">{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    object: {
      type: Object,
      required: true,
    },
    filter: {
      type: Array,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
  methods: {
    getDataList(data) {
      const array = [];
      const keys = Object.keys(data);

      for (let keyI = 0; keyI < keys.length; keyI += 1) {
        const key = keys[keyI];
        const value = data[key];

        if (!Array.isArray(value) && this.filter.indexOf(key) !== -1) {
          array.push({ key, value });
        }
      }

      return array;
    },
  },
};
</script>
