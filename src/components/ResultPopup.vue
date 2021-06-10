<template>
  <div class="popup" v-if="gameEnd">
    <div class="popup__container">
      <div class="popup__header">{{ isWinner ? 'You win !!!' : 'You loose =(' }}</div>
      <div class="popup__bonus" v-if="isBonusShow"> + Bonus </div>
      <div class="popup__win-amount" v-if ="isWinner">Win Amount: {{ isBonusShow ? winAmountBonus : winAmount}}$ </div>
      <button @click="tryAgain" class="popup__button">Try Again</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    name: "ResultPopup",
    computed: {
      ...mapState(['gameEnd', 'choosenChestId', 'winnerId', 'isBonus', 'winAmount', 'winAmountBonus']),

      isWinner() {
        return this.choosenChestId === this.winnerId;
      },
      isBonusShow() {
        return this.choosenChestId === this.winnerId && this.isBonus ? true : false;
      }
    },

    methods: {
      ...mapActions(['tryAgain'])
    }
  }
</script>

<style scoped lang="scss">
  .popup {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.65);
    transition: opacity 0.32s ease;
    z-index: 100;
    display: flex;
    align-items: center;
  }
  .popup__container {
    width: 350px;
    height: auto;
    min-height: 120px;
    background-color: #fff;
    border-radius: 7px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.40);
    margin: 0 auto;
    padding: 40px 30px;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .popup__header{
    margin-top: 0;
    color: seagreen;
    text-align: center;
    font-size: 28px;
  }
  .popup__bonus{
    margin-top: 0;
    color: darkorange;
    text-align: center;
    font-size: 28px;
  }
  .popup__button {
    width: 150px;
    height: 50px;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    background-color: seagreen;
    border: solid 1px #000;
    border-radius: 5px;
    font-size: 18px;
    color: white;
  }
  .popup__win-amount{
    color: black;
    text-align: center;
    font-size: 23px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>