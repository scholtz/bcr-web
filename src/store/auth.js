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
  async register({ dispatch }, { user }) {
    console.log("data", user);
    const data = await dispatch(
      "axios/post",
      {
        url: `${this.state.config.obpApi}/obp/v4.0.0/users`,
        body: user,
      },
      { root: true }
    );
    if (data && data.code == 409) {
      throw data.message;
    }
    if (data && data.code == 400) {
      throw data.message;
    }
    if (data && data.code == 404) {
      throw data.message;
    }

    return await dispatch("authenticate", {
      user: user.username,
      pass: user.password,
    });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
