<template>
  <div class="container">
    <div class="row">
      <h2>Personal information</h2>
    </div>
    <br />
    <form @submit="updateClick">
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
      <Button label="Update information" @click="updateClick" />
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
    async updateClick() {
      try {
        this.$emit("setKYCState", "done");
      } catch (e) {
        this.openError(e);
      }
    },
  },
};
</script>