<template>
  <div class="container">
    <div class="row">
      <h2>Personal legal information</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">
        <div class="p-field my-2">
          <label for="name">Your name</label>
          <InputText id="name" type="text" v-model="info.name" />
        </div>
        <div class="p-field my-2">
          <label for="ssn">SSN</label>
          <InputText id="ssn" type="text" v-model="info.ssn" />
        </div>
        <div class="p-field my-2">
          <label for="country">Country of residence</label>
          <InputText id="country" type="text" v-model="info.country" />
        </div>
        <div class="p-field my-2">
          <label for="address">Address</label>
          <InputText id="address" type="text" v-model="info.address" />
        </div>
      </div>
      <div class="p-field my-3">
        <Button label="Continue" @click="updateClick" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      info: {},
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