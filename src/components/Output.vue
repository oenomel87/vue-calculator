<template>
  <div class="output">
    <p class="formatted calculate-result">{{ calculateResult }}</p>
    <p class="formatted input-value">
      <span>{{ formattedInput }}</span>
      <a class="delete is-small"></a>
    </p>
  </div>
</template>

<script>
import formatNumber from '../utils/NumberFormatter.js';

export default {
  name: 'Output',

  props: {
    inputValue: {
      type: Number,
      default: 0
    },

    result: {
      type: Number,
      required: false
    }
  },

  computed: {
    formattedInput() {
      return formatNumber(this.inputValue);
    },

    calculateResult() {
      return formatNumber(this.result);
    }
  }
}
</script>

<style scoped>
.output {
  width: 100%;
  padding: 0.8rem 0;
}

.formatted {
  text-align: right;
}

.calculate-result {
  font-size: 0.8rem;
}

.input-value {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.input-value span {
  padding: 0 .8rem;
  font-size: 1.5rem;
}
</style>