<template>
  <div id="red_or_green" class="r-outer">
    <h1>Red Or Green</h1>
    <p>Identify new or old, new ---> RED, old ---> GREEN.</p>
    <div class="r-buttons">
      <div class="buttons-button" data-color="red"></div>
      <div class="buttons-button" data-color="green"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RedOrGreen',
};
</script>

<style scoped lang="scss">
.r-outer {
  border: solid 1px #cccccc;
  display: flex;
  flex-direction: column;
}
.r-buttons {
  align-self: center;
  min-width: 64vw;
  display: flex;
  justify-content: space-between;
}
.buttons-button {
  border-radius: 50%;
  width: 96px;
  height: 96px;
}
.buttons-button:active {
  transform: translate(2px, 2px);
}
.buttons-button[data-color='red'] {
  background-color: #cc0000;
  box-shadow: #ffffff 4px 4px 0 0, #cc0000 4px 4px 0 1px;
}
.buttons-button[data-color='red']:active {
  box-shadow: #ffffff 2px 2px 0 0, #cc0000 2px 2px 0 1px;
}
.buttons-button[data-color='green'] {
  background-color: #008000;
  box-shadow: #ffffff 4px 4px 0 0, #008000 4px 4px 0 1px;
}
.buttons-button[data-color='green']:active {
  box-shadow: #ffffff 2px 2px 0 0, #008000 2px 2px 0 1px;
}
</style>
