<template>
  <div id="red_or_green" class="r-outer">
    <h1>Red Or Green</h1>
    <p>
      Identify new or old, <span class="title-red">new</span> --->
      <b class="title-red">RED</b>, <span class="title-green">old</span> --->
      <b class="title-green">GREEN</b>.
    </p>
    <p>Score: {{ currentScore }} / {{ items.length }}</p>
    <p>{{ items[0].new }}</p>
    <div class="r-main" :data-error="error">
      <svg class="svg" fill="none" stroke="black">
        <path :d="currentValue" />
      </svg>
    </div>
    <div class="r-space"></div>
    <div class="r-buttons">
      <div
        class="buttons-button"
        data-color="red"
        @click="buttonClick(true)"
      ></div>
      <div
        class="buttons-button"
        data-color="green"
        @click="buttonClick(false)"
      ></div>
    </div>
  </div>
</template>

<script>
import { generatePath } from '../generate.js';
export default {
  name: 'RedOrGreen',
  data() {
    return {
      newItemFlag: Math.random(),
      items: [],
      currentScore: 0,
      currentType: '',
      currentValue: '',
      error: false,
    };
  },
  watch: {
    newItemFlag: {
      immediate: true,
      handler() {
        let newItem = { type: 'path', value: generatePath(), new: true };
        this.items.push(newItem);
        this.items.sort(() => Math.random() - 0.5);
        this.currentType = this.items[0].type;
        this.currentValue = this.items[0].value;
      },
    },
  },
  methods: {
    buttonClick(userResponse) {
      if (userResponse !== this.items[0].new) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 360);
      } else {
        this.currentScore++;
      }
      this.items[0].new = false;
      this.newItemFlag = Math.random();
    },
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
  transition: 0.24s ease-out;
  border: solid 1px #e6e6e6;
  border-radius: 4px;
  width: 400px;
  height: 400px;
  display: flex;
}
.r-main[data-error='true'] {
  border: solid 1px #fde8e9;
  box-shadow: 0px 4px 15px rgba(204, 0, 0, 0.36);
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
