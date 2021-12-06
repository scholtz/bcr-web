<template>
  <PrivateLayout>
    <div class="container">
      <h1>KYC form</h1>
      <br />
      <div class="p-fluid">
        <div class="p-field">
          <label for="lastname">Type of KYC registration</label>
          <Dropdown
            inputId="kyctype"
            v-model="selectedState"
            :options="kyctypes"
            optionLabel="kyctype"
            placeholder="Select"
          />
        </div>
        <br />
        <div class="p-field">
          <label for="firstname">Name of the user/ organization</label>
          <InputText id="firstname" type="text" />
        </div>
        <br />
        <div class="p-field">
          <label for="firstname">Tax Identification number</label>
          <InputText id="firstname" type="text" />
        </div>
        <br />
        <div class="p-field">
          <label for="firstname">KYC Document</label>
          <br />
          <Input id="firstname" type="file" />
        </div>
        <br />
        <div class="p-field">
          <label for="lastname">Type of KYC document</label>
          <Dropdown
            inputId="kyctype"
            v-model="selectedState"
            :options="kyctypes"
            optionLabel="kyctype"
            placeholder="Select"
          />
        </div>
      </div>
    </div>
  </PrivateLayout>
</template>

<script>
import { mapActions } from "vuex";
import PrivateLayout from "../layouts/Private.vue";
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