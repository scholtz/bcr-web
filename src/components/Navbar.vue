<template>
  <nav
    id="navbar-main"
    class="
      navbar navbar-main navbar-expand-lg
      bg-white
      navbar-light
      position-sticky
      top-0
      shadow
      py-2
    "
  >
    <div class="container">
      <a class="navbar-brand mr-lg-5" href="#">
        <img src="../assets/img/pages/logo.jpg" />
        Blockchain Carbon Registry
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_global"
        aria-controls="navbar_global"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar_global">
        <div class="navbar-collapse-header">
          <div class="row" style="height: 80px">
            <div class="col-6 collapse-brand">
              <a href="./index.html">
                <img src="../assets/img/pages/logo.jpg" />
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbar_global"
                aria-controls="navbar_global"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item dropdown">
            <a
              href="https://doc.blockchaincarbonregistry.com/"
              class="nav-link"
              data-toggle="dropdown"
              role="button"
            >
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text font-weight-bold">Docs</span>
            </a>
          </li>
        </ul>

        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item d-none d-lg-block">
            <a
              href="/user/kyc"
              class="btn btn-primary btn-icon"
              @click="$router.push('/user/kyc')"
            >
              <span class="btn-inner--icon"> </span>
              <span class="nav-link-inner--text">Login</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              href="/user/kyc"
              target=""
              @click="$router.push('/user/kyc')"
            >
              <span class="nav-link-inner--text">Registration</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
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
              label: "KYC",
              icon: "pi pi-fw pi-user",
              to: "/user/kyc",
            },
            {
              label: "Request green certificates",
              icon: "pi pi-fw pi-user",
              to: "/plant/certificate",
            },
          ],
        },
        {
          label: "Carbon friendly person",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "KYC",
              icon: "pi pi-fw pi-user",
              to: "/user/kyc",
            },
            {
              label: "Request carbon neutrality certificate",
              icon: "pi pi-fw pi-user",
              to: "/carbonFriendly/CarbonFriendly",
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