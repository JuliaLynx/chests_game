<template>
  <div class="controls">
    <button @click="createGameStart" class="controls__play" :disabled="gameStart">Play</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: "Controls",
    computed: {
      ...mapState(['gameStart'])
    },
    methods: {
      ...mapActions(['createGameStart'])
    }
  }
</script>

<style scoped lang="scss">
  .controls{
    width: 100%;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .controls__play{
    width: 150px;
    height: 40px;
    font-size: 20px;
    border: solid 2px #000;
    border-radius: 4px;
    display: block;
    text-align: center;
    padding: 10px;
    margin: 0px auto;
    line-height: 1px;
    color: white;
    background-color: seagreen;
  }
  .controls__play[disabled='disabled']{
    border: solid 2px rgba(#000, 0.3);
    background-color: rgba(seagreen, 0.3);
  }
</style>