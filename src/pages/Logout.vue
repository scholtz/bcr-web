<template>
  <PublicLayout>
    <h1>Logout in process</h1>
  </PublicLayout>
</template>

<script>
import { mapActions } from "vuex";
import PublicLayout from "../layouts/Public.vue";
export default {
  components: {
    PublicLayout,
  },
  async mounted() {
    await this.logout();
    this.$router.push("/");
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
  },
};
</script>