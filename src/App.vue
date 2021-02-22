<template>
  <div id="app">
    <Chart
      :val="[timeoutTime - now, now - startTime]"
      :width="100"
      :height="100"
    />
    {{ Math.floor((timeoutTime - now) / 1000 / 60) }}:{{
      Math.floor(((timeoutTime - now) / 1000) % 60)
    }}<br />
    <input type="number" v-model="timemin" min="0" max="59" />:
    <input type="number" v-model="timesec" min="0" max="59" />
    <button
      @click="startTimer"
      v-if="this.timerStatus == 0 || this.timerStatus == 1"
    >
      Start
    </button>
    <button @click="stopTimer" v-if="this.timerStatus == 2">Stop</button>
    <button @click="resetTimer">Reset</button>
    <audio
      ref="entersound"
      src="finish.mp3"
      preload="auto"
      :muted="false"
    ></audio>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Chart from "./components/Chart.vue";

enum TimerStatus {
  Stop = 0,
  Pause = 1,
  Running = 2
}

const tickInterval = 100;

@Component({
  components: {
    Chart
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private timerStatus = TimerStatus.Stop;

  private timerID = -1;
  private timesec = 0;
  private timemin = 1;
  private startTime = 0;
  private timeoutTime = 1;
  private now = 0;
  public startTimer() {
    if (this.timerID != -1) {
      clearInterval(this.timerID);
      this.timerID = -1;
    }
    if (this.timerStatus == TimerStatus.Stop) {
      this.playSound(true);
      const time = this.timesec * 1 + this.timemin * 60;
      this.now = new Date().getTime();
      this.startTime = this.now;
      this.timeoutTime = this.now + time * 1000;
    } else {
      const oldnow = this.now;
      this.now = new Date().getTime();
      this.startTime += this.now - oldnow;
      this.timeoutTime += this.now - oldnow;
    }
    this.timerStatus = TimerStatus.Running;
    this.timerID = setInterval(() => {
      this.tick();
    }, tickInterval);
  }
  public stopTimer() {
    if (this.timerID != -1) {
      clearInterval(this.timerID);
      this.timerID = -1;
    }
    this.timerStatus = TimerStatus.Pause;
  }
  public resetTimer() {
    this.stopTimer();
    this.timerStatus = TimerStatus.Stop;
    this.now = 0;
    this.startTime = 0;
    this.timeoutTime = 1;
  }
  private playSound(mute: boolean) {
    // eslint-disable-next-line
    const aud = this.$refs["entersound"] as any;
    if (typeof aud.currentTime != "undefined") {
      aud.currentTime = 0;
    }
    aud.muted = mute;
    return aud.play();
  }
  private tick() {
    this.now = new Date().getTime();
    if (this.timeoutTime <= this.now) {
      this.resetTimer();
      this.playSound(false).then(() => {
        alert("終了！");
      });
      return;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
