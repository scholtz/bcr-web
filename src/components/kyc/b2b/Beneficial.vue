<template>
  <div class="container">
    <div class="row">
      <h2>Business beneficial owners</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">
        <div class="p-field my-2">
          <label for="ben">Please describe benefinal owners structure</label>
          <Textarea
            id="ben"
            v-model="info.ben"
            :autoResize="true"
            aria-rowcount="20"
            rows="20"
          />
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