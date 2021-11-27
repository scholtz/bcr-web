<template>
  <Menubar :model="menuItems" />
</template>
<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: "Administrator",
          icon: "pi pi-fw pi-star",
          items: [
            {
              label: "User management",
              icon: "pi pi-fw pi-user",
            },
            {
              label: "Role management",
              icon: "pi pi-fw pi-user",
            },
          ],
        },
        {
          label: "Token issuer",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "KYC verification queue",
              icon: "pi pi-fw pi-user",
            },
            {
              label: "Token requests queue",
              icon: "pi pi-fw pi-user",
            },
            {
              label: "Transfer requests queue",
              icon: "pi pi-fw pi-user",
            },
          ],
        },
        {
          label: "Transfer confirmator",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Transfer requests queue",
              icon: "pi pi-fw pi-user",
            },
          ],
        },
        {
          label: "Solar power plant",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Registration",
              icon: "pi pi-fw pi-user",
            },
            {
              label: "Request green certificates",
              icon: "pi pi-fw pi-user",
            },
          ],
        },
        {
          label: "Carbon friendly person",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Registration",
              icon: "pi pi-fw pi-user",
            },
            {
              label: "Request carbon neutrality certificate",
              icon: "pi pi-fw pi-user",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
</style>