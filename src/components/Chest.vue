<template>
  <div class="chest">
    <button
        class="chest__btn"
        :class="{'choosen': id === choosenChestId}"
        @click="createGameEnd(id)"
        :disabled="!gameStart"
    >
      Chest
    </button>
  </div>
</template>

<script>
  import { mapState, mapActions} from "vuex";

  export default {
    name: "Chest",
    props:['id'],

    computed: {
      ...mapState(['gameStart', 'gameEnd', 'choosenChestId'])
    },

    methods: {
      ...mapActions(['createGameEnd'])
    }
  }
</script>

<style scoped lang="scss">
  .chest__btn{
    width: 150px;
    height: 40px;
    font-size: 20px;
    border: solid 2px #000;
    border-radius: 4px;
    display: block;
    text-align: center;
    padding: 10px;
    margin: 10px;
    line-height: 1px;
    background-color: #fff;
  }
  .chest__btn[disabled='disabled']{
    border: solid 2px rgba(#000, 0.3);
  }
  .choosen[disabled='disabled']{
    border: solid 2px seagreen;
  }
</style>