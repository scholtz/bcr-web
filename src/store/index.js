import { createStore } from "vuex";
import config from "./config";
import axios from "./axios";
import toast from "./toast";

const debugStrict = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    axios,
    config,
    toast,
  },
  strict: debugStrict,
});
