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
  async authenticate({ commit, dispatch }, { user, pass }) {
    const consumerKey = this.state.config.consumerKey;
    const data = await dispatch(
      "axios/post",
      {
        url: this.state.config.directLogin,
        authHeader: `DirectLogin username="${user}", password="${pass}", consumer_key="${consumerKey}"`,
      },
      { root: true }
    );
    if (data && data.token) {
      await commit("setToken", {
        token: data.token,
      });
      return true;
    }
    return false;
  },
  async logout({ commit }) {
    await commit("setToken", null);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
