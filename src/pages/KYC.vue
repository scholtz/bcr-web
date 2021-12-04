<template>
  <PrivateLayout>
    <h1>KYC form</h1>
    <PersonalInformation
      v-if="state == 'PersonalInformation'"
      @setKYCState="setKYCState"
    />
    <div v-else>Thank you for your KYC</div>
  </PrivateLayout>
</template>

<script>
import { mapActions } from "vuex";
import PrivateLayout from "../layouts/Private.vue";
import PersonalInformation from "../components/kyc/PersonalInformation.vue";
export default {
  components: {
    PrivateLayout,
    PersonalInformation,
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