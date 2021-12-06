<template>
  <PrivateLayout>
    <div class="container">
      <h1>Carbon Friendly Person</h1>
      <br />
      <div class="p-fluid">
        <div class="p-field">
          <label for="token">Name</label>
          <InputText id="firstname" type="text" />
          <label for="token">Energy usage</label>
          <InputText id="firstname" type="text" />
          <p>Token value :</p>
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