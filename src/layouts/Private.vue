<template>
  <div class="d-flex flex-column h-100">
    <div class="version">
      <a href="https://docs.blockchaincarbonregistry.com" target="_blank">
        You are using TestNet version
      </a>
    </div>
    <slot name="header">
      <Navbar />
    </slot>
    <Toast />
    <div class="d-flex flex-column flex-grow-1" v-if="$store.state.auth.token">
      <slot></slot>
    </div>
    <div class="d-flex flex-column flex-grow-1" v-else>
      <div v-if="!isRegistration">
        <LoginDialog @setRegistration="setRegistration" />
      </div>
      <div v-else>
        <Registration />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Toast from "primevue/toast";
import Navbar from "../components/Navbar.vue";
import LoginDialog from "../components/LoginDialog.vue";
import Registration from "../components/Registration.vue";
export default {
  components: {
    Navbar,
    Toast,
    LoginDialog,
    Registration,
  },
  data() {
    return {
      isRegistration: false,
    };
  },
  created() {
    this.setVM({ _vm: this });
  },
  mounted() {
    this.setVM({ _vm: this });
  },
  methods: {
    ...mapActions({
      setVM: "toast/setVM",
    }),
    setRegistration() {
      console.log("parent setRegistration");
      console.log("this.isRegistration", this.isRegistration);
      this.isRegistration = true;
      console.log("this.isRegistration", this.isRegistration);
    },
  },
};
</script>
<style scoped>
.version {
  min-height: 16px;
  line-height: 12px;
  background: orange;
  color: white;
  margin: 0;
  width: 100%;
  overflow: hidden;
}
.version a {
  margin: 0;
  padding: 1px 10px;
  font-size: 10px;
  line-height: 10px;
  background: orange;
  color: white;
  white-space: nowrap;
  text-decoration: none;
  max-width: 100%;
}
</style>