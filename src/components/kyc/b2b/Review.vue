<template>
  <div class="container">
    <div class="row">
      <h2>Review business information</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">// TODO</div>
      <div class="p-field my-3">
        <Button
          label="Submit for KYC verification check"
          @click="updateClick"
        />
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