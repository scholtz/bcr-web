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
              to: "/admin/user-management",
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
              label: "Basic information",
              icon: "pi pi-fw pi-apple",
              to: "/plant/info",
            },
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
        {
          label: "Quit",
          icon: "pi pi-fw pi-power-off",
          to: "/logout",
        },
      ],
    };
  },
};
</script>
<style>
</style>