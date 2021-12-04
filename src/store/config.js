const state = () => ({
  LOGO: "/img/bcr-logo.svg",
  directLogin:
    "https://obp-apisandbox.bancohipotecario.com.sv/my/logins/direct",
  obpApi: "https://obp-apisandbox.bancohipotecario.com.sv",
  consumerKey: "xhmg3p3j5qayqkrp3k4rycxqgbckjaiga23wuk2k",
  languages: ["en", "hu", "it", "nl", "sk", "cs"],
  noredirect: false, // redirect to account page after successfull login
});

const mutations = {
  setConfig(state, value) {
    if (value.LOGO) {
      state.LOGO = value.LOGO;
    }
    if (value.directLogin) {
      state.directLogin = value.directLogin;
    }
    if (value.languages) {
      state.languages = value.languages;
    }
  },
  setNoRedirect(state) {
    state.noredirect = true;
  },
};
const actions = {
  async getConfig({ dispatch, commit }) {
    try {
      const data = await dispatch(
        "axios/get",
        {
          url: "/config.json",
        },
        { root: true }
      );
      if (data) {
        await commit("setConfig", data);
        return data;
      }
    } catch (error) {
      dispatch("snackbar/openError", error.response, {
        root: true,
      });
    }
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
