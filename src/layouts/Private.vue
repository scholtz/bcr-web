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
      <Dialog :visible="true">
        <template #header>
          <h3>Please authenticate</h3>
        </template>
        <form @submit="authenticate">
          <div class="p-inputgroup my-1">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText v-model="user" placeholder="Username" />
          </div>
          <div class="p-inputgroup my-1">
            <span class="p-inputgroup-addon">
              <i class="pi pi-lock"></i>
            </span>
            <Password v-model="pass" />
          </div>
        </form>
        <template #footer>
          <Button
            label="Cancel"
            icon="pi pi-times"
            class="p-button-text"
            @click="$router.push('/')"
          />
          <Button
            label="Login"
            icon="pi pi-check"
            autofocus
            @click="authenticate"
          />
        </template>
      </Dialog>
    </div>
    <slot name="footer">
      <Footer />
    </slot>
  </div>
</template>

<script>
import Toast from "primevue/toast";
import Navbar from "../components/Navbar.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
    Toast,
  },
  data() {
    return {
      user: "",
      pass: "",
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
    authenticate() {
      console.log("Authenticate", this.user);
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