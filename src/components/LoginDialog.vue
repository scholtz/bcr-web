<template>
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
        label="Register"
        icon="pi pi-plus"
        class="p-button-text"
        @click="setRegistrationClick"
      />
      <Button
        label="Login"
        icon="pi pi-check"
        autofocus
        @click="authenticate"
      />
    </template>
  </Dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: "",
      pass: "",
    };
  },
  methods: {
    ...mapActions({
      openError: "toast/openError",
      authAuthenticate: "auth/authenticate",
    }),
    setRegistrationClick() {
      this.$emit("setRegistration");
    },
    async authenticate() {
      console.log("Authenticate", this.user);
      const isAuth = await this.authAuthenticate({
        user: this.user,
        pass: this.pass,
      });
      if (!isAuth) {
        this.openError("Error while authentication");
      }
    },
  },
};
</script>