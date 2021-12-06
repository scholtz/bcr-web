<template>
  <PrivateLayout>
    <h1>User management</h1>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="username" header="User name"></Column>
      <Column field="firstname" header="First name"></Column>
      <Column field="lastname" header="Last name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role"></Column>
    </DataTable>
  </PrivateLayout>
</template>

<script>
import PrivateLayout from "../../layouts/Private.vue";
export default {
  components: {
    PrivateLayout,
  },
};
</script>