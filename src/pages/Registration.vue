<template>
  <PublicLayout>
    <div class="container">
      <div class="row">
        <h1>Registration</h1>
      </div>
      <br />

      <div class="p-fluid">
        <div class="p-field">
          <label for="firstname">First name</label>
          <InputText id="firstname" type="text" />
        </div>
        <br />
        <div class="p-field">
          <label for="lastname">Last name</label>
          <InputText id="lastname" type="text" />
        </div>
        <br />
        <div class="p-field">
          <label for="username">Username</label>
          <InputText id="username" type="text" />
        </div>
        <br />
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" type="email" />
        </div>
        <br />
        <div class="p-field">
          <label for="password">Password</label>
          <InputText id="password" type="password" />
        </div>
      </div>
      <br />
      <Button label="Register" />
    </div>
  </PublicLayout>
</template>

<script>
import PublicLayout from "../layouts/Public.vue";
export default {
  components: {
    PublicLayout,
  },
};
</script>