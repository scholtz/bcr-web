<template>
  <div class="container">
    <div class="row">
      <h1>Registration</h1>
    </div>
    <br />
    <form @submit="registerClick">
      <div class="p-fluid">
        <div class="p-field">
          <label for="firstname">First name</label>
          <InputText id="firstname" type="text" v-model="user.first_name" />
        </div>
        <br />
        <div class="p-field">
          <label for="lastname">Last name</label>
          <InputText id="lastname" type="text" v-model="user.last_name" />
        </div>
        <br />
        <div class="p-field">
          <label for="username">Username</label>
          <InputText id="username" type="text" v-model="user.username" />
        </div>
        <br />
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" type="email" v-model="user.email" />
        </div>
        <br />
        <div class="p-field">
          <label for="password">Password</label>
          <Password id="password" v-model="user.password" />
        </div>
      </div>
      <br />
      <Button label="Register" @click="registerClick" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    ...mapActions({
      openError: "toast/openError",
      register: "auth/register",
    }),
    async registerClick() {
      try {
        var ret = await this.register({ user: this.user });
        if (!ret || ret.error) {
          if (ret.error) {
            this.openError(ret.error);
          } else {
            this.openError("Error occured while registration process");
          }
        }
        this.$router.push("/admin/user-management");
      } catch (e) {
        this.openError(e);
      }
    },
  },
};
</script>