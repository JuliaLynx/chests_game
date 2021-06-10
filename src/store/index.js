import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chestAmount: 6,
    gameEnd: false,
    gameStart: false,
    choosenChestId: null,
    winnerId: null,
    isBonus: null,
    winAmount: 500,
    winAmountBonus: 1000
  },

  actions: {
    /**
     * @param {function} commit
     * @param {number} chestId
     */
    createGameEnd({commit}, chestId) {
      commit('changeGameEnd', chestId);
    },

    /**
     * @param {function} commit
     * @param {function} dispatch
     */
    createGameStart({commit, dispatch}) {
      commit('changeGameStart');
      dispatch('setWinner');
      dispatch('setBonus');
    },

    /**
     * @param {function} commit
     */
    tryAgain({commit}) {
      commit('changeTryAgain');
    },

    /**
     * @param {function} commit
     */
    setWinner({commit}) {
      let setWinnerId = Math.floor(Math.random() * 6 ) + 1;
      commit('changeIsWinner', setWinnerId);
    },

    /**
     * @param {function} commit
     */
    setBonus({commit}) {
      let setBonus = Math.round(Math.random() );
      commit('changeIsBonus', setBonus);
    }
  },

  mutations: {
    /**
     * @param {object} state
     * @param {number} chestId
     */
    changeGameEnd(state, chestId) {
      state.gameEnd = true;
      state.gameStart = false;
      state.choosenChestId = chestId;
    },

    /**
     * @param {object} state
     */
    changeGameStart(state) {
      state.gameStart = true;
      state.gameEnd = false;
    },

    /**
     * @param {object} state
     */
    changeTryAgain(state) {
      state.gameEnd = false;
      state.gameStart = false;
      state.choosenChestId = 0;
    },

    /**
     * @param {object} state
     * @param {number} setWinnerId
     */
    changeIsWinner(state, setWinnerId) {
      state.winnerId = setWinnerId;
    },

    /**
     * @param {object} state
     * @param {number} setBonus
     */
    changeIsBonus(state, setBonus){
      state.isBonus = setBonus;
    }
  }
})
