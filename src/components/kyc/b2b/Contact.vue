<template>
  <div class="container">
    <div class="row">
      <h2>Business contacts</h2>
    </div>
    <form @submit="updateClick">
      <div class="p-fluid">
        <div class="p-field my-2">
          <label for="dname">Director name</label>
          <InputText id="dname" type="text" v-model="info.dname" />
        </div>
        <div class="p-field my-2">
          <label for="demail">Director email</label>
          <InputText type="email" id="demail" v-model="info.demail" />
        </div>
        <div class="p-field my-2">
          <label for="dtel">Director phone</label>
          <InputText type="tel" id="dtel" v-model="info.dtel" />
        </div>
        <hr />
        <div class="p-field my-2">
          <label for="cname">Contact person name</label>
          <InputText id="cname" type="text" v-model="info.cname" />
        </div>
        <div class="p-field my-2">
          <label for="cemail">Contact person email</label>
          <InputText type="email" id="cemail" v-model="info.cemail" />
        </div>
        <div class="p-field my-2">
          <label for="ctel">Contact person phone</label>
          <InputText type="tel" id="ctel" v-model="info.ctel" />
        </div>
        <hr />
        <div class="p-field my-2">
          <label for="web">Business website</label>
          <InputText id="web" type="text" v-model="info.web" />
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