<template>
  <PrivateLayout>
    <div class="container">
      <h1>KYC form</h1>
      <br />
      <div class="p-fluid">
        <div class="p-field">
          <label for="kyctype">Type of KYC registration</label>
          <Dropdown
            inputId="kyctype"
            v-model="kyctypeselection"
            :options="kyctypes"
            optionLabel="name"
            optionValue="code"
            placeholder="Select personal or business account registration"
          />
        </div>
        <div v-if="kyctypeselection == 'B2B'">
          <TabView>
            <TabPanel header="Business legal info">
              <B2BLegalInfo />
            </TabPanel>
            <TabPanel header="Business contact"> <B2BContact /></TabPanel>
            <TabPanel header="Beneficial owners"> <B2BBeneficial /> </TabPanel>
            <TabPanel header="Documents"> <B2BDocuments /> </TabPanel>
            <TabPanel header="Review"> <B2BReview /> </TabPanel>
          </TabView>
        </div>
        <div v-if="kyctypeselection == 'B2C'">
          <TabView>
            <TabPanel header="Business legal info">
              <B2CLegalInfo />
            </TabPanel>
            <TabPanel header="Business contact"> <B2CDocuments /> </TabPanel>
            <TabPanel header="Review"> <B2CReview /> </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  </PrivateLayout>
</template>

<script>
import { mapActions } from "vuex";
import PrivateLayout from "../layouts/Public.vue";
import B2BLegalInfo from "../components/kyc/b2b/LegalInfo.vue";
import B2BContact from "../components/kyc/b2b/Contact.vue";
import B2BBeneficial from "../components/kyc/b2b/Beneficial.vue";
import B2BDocuments from "../components/kyc/b2b/Documents.vue";
import B2CLegalInfo from "../components/kyc/b2c/LegalInfo.vue";
import B2CDocuments from "../components/kyc/b2c/Documents.vue";
import B2BReview from "../components/kyc/b2b/Review.vue";
import B2CReview from "../components/kyc/b2c/Review.vue";

export default {
  components: {
    PrivateLayout,
    B2BLegalInfo,
    B2BContact,
    B2BBeneficial,
    B2BDocuments,
    B2CLegalInfo,
    B2CDocuments,
    B2BReview,
    B2CReview,
  },
  data() {
    return {
      kyctypeselection: "",
      kyctypes: [
        { name: "Business account", code: "B2B" },
        { name: "Personal account", code: "B2C" },
      ],
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