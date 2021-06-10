<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
  import Game from '@/components/Game';

  export default {
    name: 'App',
    components: {
      Game
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  button{
    cursor: pointer;
  }
  button[disabled='disabled']{
    cursor: auto;
  }
</style>
