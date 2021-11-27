const state = () => ({
  token: "",
});
const mutations = {
  setToken(state, value) {
    state.token = value;
  },
};
const actions = {
  async setToken({ commit }, { token }) {
    await commit("setToken", {
      token,
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
