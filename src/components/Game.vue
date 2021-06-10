<template>
  <div class="game">
    <div class="game__wrapp">
      <Chest v-for="(c, index) in chestAmount" :key="c.index" :id="index + 1"/>
      <Controls />
      <ResultPopup />
    </div>
  </div>
</template>

<script>
  import Chest from '@/components/Chest';
  import Controls from '@/components/Controls';
  import ResultPopup from '@/components/ResultPopup';
  import { mapState } from 'vuex';

  export default {
    name: "Game",
    components: {
      ResultPopup,
      Chest,
      Controls
    },

    computed: {
      ...mapState(['chestAmount'])
    }
  }
</script>

<style scoped lang="scss">
  .game{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100vh;
  }
  .game__wrapp{
    width: 340px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: solid 2px #000;
    border-radius: 4px;
  }
</style>