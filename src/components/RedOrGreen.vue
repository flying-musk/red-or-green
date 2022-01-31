<template>
  <div id="red_or_green" class="r-outer">
    <h1>Red Or Green</h1>
    <p>
      Identify new or old, <span class="title-red">new</span> --->
      <b class="title-red">RED</b>, <span class="title-green">old</span> --->
      <b class="title-green">GREEN</b>.
    </p>
    <div class="r-main">
      <svg class="svg" fill="none" stroke="black">
        <path :d="value" />
      </svg>
    </div>
    <div class="r-space"></div>
    <div class="r-buttons">
      <div class="buttons-button" data-color="red"></div>
      <div class="buttons-button" data-color="green"></div>
    </div>
  </div>
</template>

<script>
import { generatePath } from '../generate.js';
export default {
  name: 'RedOrGreen',
  data() {
    return { value: generatePath() };
  },
};
</script>

<style scoped lang="scss">
.r-outer {
  display: flex;
  flex-direction: column;
}
.r-main {
  align-self: center;
  border: solid 1px #e6e6e6;
  border-radius: 4px;
  width: 400px;
  height: 400px;
  display: flex;
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
.title-red {
  color: #cc0000;
}
.title-green {
  color: #008000;
}
.r-space {
  align-self: center;
  width: 16px;
  height: 16px;
}
.svg {
  flex-grow: 1;
}
</style>
