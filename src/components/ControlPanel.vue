<template>
  <div class="control-panel">
    <div class="number-group">
      <div class="cell"><span>AC</span></div>
      <div class="cell"><span>C</span></div>
      <div class="cell"><span>+</span>/-</div>
      <div class="cell"><span>/</span></div>
      <div class="cell"><span>7</span></div>
      <div class="cell"><span>8</span></div>
      <div class="cell"><span>9</span></div>
      <div class="cell"><span>X</span></div>
      <div class="cell"><span>4</span></div>
      <div class="cell"><span>5</span></div>
      <div class="cell"><span>6</span></div>
      <div class="cell"><span>-</span></div>
      <div class="cell"><span>1</span></div>
      <div class="cell"><span>2</span></div>
      <div class="cell"><span>3</span></div>
      <div class="cell"><span>+</span></div>
      <div class="cell zero"><span>0</span></div>
      <div class="cell"><span>.</span></div>
      <div class="cell"><span>=</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ControlPanel'
}
</script>

<style scoped>
.number-group {
  display: grid;
  grid-template-rows: repeat(5, 100px);
  grid-template-columns: repeat(4, 1fr);
  align-content: center;
  justify-items: center;
  grid-gap: 0.2rem;
}

.zero {
  grid-column: span 2;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid;
  cursor: pointer;
}

.cell:hover {
  background: #eeeeee;
}
</style>