<template>
  <div class="container">
    <div class="row">
      <h2>Business legal information</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">
        <div class="p-field my-2">
          <label for="name">Business name</label>
          <InputText id="name" type="text" v-model="info.name" />
        </div>
        <div class="p-field my-2">
          <label for="country">Country of registration</label>
          <InputText id="country" type="text" v-model="info.country" />
        </div>
        <div class="p-field my-2">
          <label for="companyid">Company identifier</label>
          <InputText id="companyid" type="text" v-model="info.companyid" />
        </div>
        <div class="p-field my-2">
          <label for="vat">VAT identifier</label>
          <InputText id="vat" type="text" v-model="info.vat" />
        </div>
        <div class="p-field my-2">
          <label for="basecapital">Base capital</label>
          <InputText id="basecapital" type="text" v-model="info.basecapital" />
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