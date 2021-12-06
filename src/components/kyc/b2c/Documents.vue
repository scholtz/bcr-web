<template>
  <div class="container">
    <div class="row">
      <h2>Personal documents</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">
        <div class="p-field my-2">
          <label for="directoridfront"
            >Please upload your government id with photo - front side</label
          >
          <Input id="directoridfront" type="file" class="form-control" />
        </div>
        <div class="p-field my-2">
          <label for="directoridback"
            >Please upload your government id with photo - back side</label
          >
          <Input id="directoridback" type="file" class="form-control" />
        </div>
        <div class="p-field my-2">
          <label for="addressproof">Please upload your address proof</label>
          <Input id="addressproof" type="file" class="form-control" />
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