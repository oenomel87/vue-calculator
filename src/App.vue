<template>
  <section class="section">
    <div class="container calculator">
      <Output :input-value="inputValue" :result="result" />
      <ControlPanel />
    </div>
  </section>
</template>

<script>
import Output from './components/Output.vue';
import ControlPanel from './components/ControlPanel.vue';

export default {

  components: {
    Output, ControlPanel
  },

  data() {
    return {
      inputValue: 0,
      result: null
    };
  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
}
</style>