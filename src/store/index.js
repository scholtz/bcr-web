import { createStore } from "vuex";
import config from "./config";
import auth from "./auth";
import axios from "./axios";
import toast from "./toast";

const debugStrict = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
    axios,
    config,
    toast,
  },
  strict: debugStrict,
});
