<template>
  <PrivateLayout>
    <div class="container">
      <h1>Request Certificate</h1>
      <br />
      <div class="p-fluid">
        <div class="p-field">
          <label for="token">Token amount</label>
          <InputText id="firstname" type="text" />
        </div>
        <br />
      </div>
      <Button label="Request certificate" />
    </div>
  </PrivateLayout>
</template>

<script>
import { mapActions } from "vuex";
import PrivateLayout from "../../layouts/Private.vue";
export default {
  components: {
    PrivateLayout,
  },
  data() {
    return {
      state: "PersonalInformation",
    };
  },
  async mounted() {},
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    setKYCState(state) {
      console.log("setKYCState", state);
      this.state = state;
    },
  },
};
</script>