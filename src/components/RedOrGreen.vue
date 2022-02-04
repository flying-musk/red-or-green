<template>
  <div id="red_or_green" class="r-outer">
    <h1>Red Or Green</h1>
    <p>
      Identify new or old, <span class="title-red">new</span> --->
      <b class="title-red">RED</b> <span class="title-red">(F)</span>,
      <span class="title-green">old</span> --->
      <b class="title-green">GREEN</b> <span class="title-green">(J)</span>.
    </p>
    <p>Score: {{ currentScore }} / {{ items.length }}</p>
    <div class="r-main" :data-error="error">
      <svg v-if="currentType === 'path'" class="svg" fill="none" stroke="black">
        <path :d="currentValue" />
      </svg>
      <div v-else class="r-title">{{ currentValue }}</div>
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
    <div class="r-space"></div>
    <div class="r-count">{{ count }}</div>
  </div>
</template>

<script>
import {
  generatePath,
  generateNumber,
  generateString,
  generateLicensePlate,
  generateEquation,
} from '../generate.js';
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
      count: 0,
      intervalId: 0,
    };
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'f') {
        this.buttonClick(true);
      }
      if (e.key === 'j') {
        this.buttonClick(false);
      }
    });
  },
  computed: {
    newItemType: function () {
      return Math.floor(this.newItemFlag * 5);
    },
  },
  watch: {
    newItemFlag: {
      immediate: true,
      handler() {
        let newItem =
          this.newItemType === 0
            ? { type: 'path', value: generatePath(), new: true }
            : this.newItemType === 1
            ? { type: 'number', value: generateNumber(), new: true }
            : this.newItemType === 2
            ? { type: 'string', value: generateString(), new: true }
            : this.newItemType === 3
            ? { type: 'licensePlate', value: generateLicensePlate(), new: true }
            : { type: 'equation', value: generateEquation(), new: true };
        this.items.push(newItem);
        this.items.sort(() => Math.random() - 0.5);
        this.currentType = this.items[0].type;
        this.currentValue = this.items[0].value;
        this.initInterval();
      },
    },
  },
  methods: {
    buttonClick(userResponse) {
      if (userResponse !== this.items[0].new) {
        this.showError();
      } else {
        this.currentScore++;
      }
      this.showNewItem();
    },
    initInterval() {
      this.count = 0;
      this.intervalId = setInterval(() => {
        this.count += 1;
        if (this.count === 4) {
          this.showError();
          this.showNewItem();
        }
      }, 1000);
    },
    showNewItem() {
      clearInterval(this.intervalId);
      this.items[0].new = false;
      this.newItemFlag = Math.random();
    },
    showError() {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 200);
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
  transition: 0.16s ease-out;
  border: solid 1px #e6e6e6;
  border-radius: 4px;
  width: 400px;
  height: 400px;
  display: flex;
}
.r-main[data-error='true'] {
  border: solid 1px #fde8e9;
  box-shadow: 0px 4px 15px rgba(204, 0, 0, 0.24);
}
.r-title {
  flex-grow: 1;
  align-self: center;
  font-size: 72px;
  text-align: center;
}
.r-buttons {
  align-self: center;
  min-width: 640px;
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
.r-count {
  align-self: center;
  font-size: 40px;
}
@media (max-width: 1000px) {
  .r-buttons {
    min-width: 64vw;
  }
}
</style>
