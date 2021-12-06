<template>
  <PublicLayout>
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
              <a href="" class="btn btn-primary btn-icon">
                <span class="btn-inner--icon"> </span>
                <span class="nav-link-inner--text">Login</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-primary" href="" target="">
                <span class="nav-link-inner--text">Registration</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="wrapper">
      <div class="section section-hero section-shaped">
        <div class="shape shape-style-1 shape-primary">
          <span class="span-150"></span>
          <span class="span-50"></span>
          <span class="span-50"></span>
          <span class="span-75"></span>
          <span class="span-100"></span>
          <span class="span-75"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
          <span class="span-50"></span>
          <span class="span-100"></span>
        </div>
        <div class="page-header">
          <div
            class="container shape-container d-flex align-items-center py-lg"
          >
            <div class="col px-0">
              <div class="row align-items-center justify-content-center">
                <div
                  class="font-weight-bold col-lg-10 text-center"
                  style="font-weight: 900"
                >
                  <img src="" style="width: 200px" class="img-fluid" />
                  <h1 class="text-white">
                    <span class="text-warning">BCR</span> is world's first
                    blockchain based
                    <span class="text-success">Emissions Trading System</span>
                  </h1>
                  <p class="lead text-white">
                    BCR is blockchain smart contract platform and solution for
                    Verified emission reductions build on Ethereum Smart
                    contracts.
                  </p>
                  <div class="btn-wrapper mt-5">
                    <a href="" class="btn btn-warning btn-icon mt-3 mb-sm-0">
                      <span class="btn-inner--icon"
                        ><i class="ni ni-button-play"></i
                      ></span>
                      <span class="btn-inner--text">Start HERE</span>
                    </a>
                  </div>
                  <div class="mt-5">
                    <small class="font-weight-bold mb-0 mr-2 text-white"
                      >*proudly created by Team BCR</small
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="separator separator-bottom separator-skew zindex-100">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              class="fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <div
        class="section"
        style="background-image: url('./assets/img/ill/1.svg')"
      >
        <div class="container py-md">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 mb-lg-auto">
              <div class="rounded overflow-hidden transform-perspective-left">
                <div
                  id="carousel_example"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carousel_example"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#carousel_example" data-slide-to="1"></li>
                    <li data-target="#carousel_example" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="img-fluid"
                        src="..\assets\img\pages\slide1.png"
                        alt="First slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img class="img-fluid" src="" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                      <img class="img-fluid" src="" alt="Third slide" />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carousel_example"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carousel_example"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mb-5 mb-lg-0">
              <h1 class="font-weight-light">
                Tokenizing and providing liquidity to Emission Markets
              </h1>
              <p class="lead mt-4">
                BCR was built to help multinational organizations and
                governments to create and maintain platforms and schemes for
                reduction of carbon emissions. BCR helps to connect polluters
                and renewable energy producers in order to neutralize negative
                effects of carbon emissions.
              </p>
              <a
                href="https://doc.blockchaincarbonregistry.com/fundamentals/how-it-works"
                class="btn btn-white mt-4"
                >See How it Works</a
              >
            </div>
          </div>
        </div>
      </div>
      <section class="section section-lg section-shaped">
        <div class="shape shape-style-1 shape-default">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container py-md">
          <div class="row row-grid justify-content-between align-items-center">
            <div class="col-lg-6">
              <h3 class="display-3 text-white">
                <span class="text-white">How can BCR help ?</span>
              </h3>
              <p class="lead text-white">
                BCR is blockchain platform which helps organizations and
                governments issue their own carbon offset tokens for producers
                of clean energy. These can be used for buyers as oil, gas or
                chemical producers that wants to offset their carbon footprint.
              </p>

              <div class="btn-wrapper">
                <a
                  href="https://doc.blockchaincarbonregistry.com/general/use-cases"
                  class="btn btn-success"
                  >See our use cases</a
                >
              </div>
            </div>
            <div class="col-lg-5 mb-lg-auto">
              <div class="transform-perspective-right">
                <div class="card bg-secondary shadow border-0">
                  <ul>
                    <li>
                      <h6>
                        <b>Savings on infrastructure</b> Governments and NGOs
                        can face substantial capital expenditure to work on
                        their own Emission reductions scheme and build a working
                        market around that. That is where blockchain technology
                        can help.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <b> Easily build emissions scheme</b> - Government of EL
                        Salvador or environmental organization can easily use
                        BCR platform and issue their own token to be used for
                        emission reductions. They can issue coins based on
                        productions of renewable producers and issue these token
                        to producers. On other hand it can issue polluters to
                        buy these tokens in amount defined by coefficients.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        <b> Liquid market from day one</b> - Environmental
                        organizations and governments can easily create market
                        for tokens as these are tradable on any centralized or
                        decentralized blockchain exchange. Tokens that were used
                        for production will be registered back in this platform
                        and burned so they cannot be used further.
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- SVG separator -->
        <div class="separator separator-bottom separator-skew">
          <svg
            x="0"
            y="0"
            viewBox="0 0 2560 100"
            preserveAspectRatio="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              class="fill-white"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>

      <div class="section features-1">
        <div class="container">
          <div class="row">
            <div class="col-md-8 mx-auto text-center">
              <span class="badge badge-primary badge-pill mb-3">BCR</span>
              <h3 class="display-3">KEY BENEFITS</h3>
              <p class="lead">
                With BCR tokens anybody can build their own emission trading
                scheme without much costs. Governments or environmental
                organizations can easily issue their own token which they can
                distribute to companies producing clean energy or just to
                generate state budget for energy transformations.
              </p>
            </div>
          </div>
          <h1>&nbsp;</h1>
          <div class="row">
            <div class="col-md-3">
              <div class="info">
                <div
                  class="
                    icon icon-lg icon-shape icon-shape-primary
                    shadow
                    rounded-circle
                  "
                >
                  <i class="ni ni-settings-gear-65"></i>
                </div>
                <h6 class="info-title text-uppercase text-primary">
                  Built-in Liquidity provision
                </h6>
                <p class="description opacity-8">
                  current solutions of Verified emission reduction face issues
                  with liquidity without proper marketplace or exchange where
                  they can be traded. Our emission tokens can be traded on any
                  centralized or decentralized exchange
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div
                  class="
                    icon icon-lg icon-shape icon-shape-success
                    shadow
                    rounded-circle
                  "
                >
                  <i class="ni ni-atom"></i>
                </div>
                <h6 class="info-title text-uppercase text-success">
                  Blockchain solution and fully transparent
                </h6>
                <p class="description opacity-8">
                  can fully replace database registry with highly secured tokens
                  build on Ethereum smart contracts. Blockchain solution enables
                  tracking emissions use in real-time
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div
                  class="
                    icon icon-lg icon-shape icon-shape-warning
                    shadow
                    rounded-circle
                  "
                >
                  <i class="ni ni-world"></i>
                </div>
                <h6 class="info-title text-uppercase text-warning">
                  Easily implemented accross industries.
                </h6>
                <p class="description opacity-8">
                  Solution can be used for oil, gas , chemical and even maritime
                  industry. We can finally deliver carbon neutral cargoes around
                  world
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="info">
                <div
                  class="
                    icon icon-lg icon-shape icon-shape-warning
                    shadow
                    rounded-circle
                  "
                >
                  <i class="ni ni-map-big"></i>
                </div>
                <h6 class="info-title text-uppercase text-warning">
                  KYC complaint and secure
                </h6>
                <p class="description opacity-8">
                  we take KYC very seriously and whole system is built with
                  provided off-chain solutions for KYC/AML procedures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-typography">
        <div class="container">
          <!-- Images -->
          <h1 class="mt-lg mb-5 text-center">TEAM</h1>
          <div class="row">
            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
              <h4 class="d-block text-uppercase font-weight-bold mb-4">Ludo</h4>
              <img
                src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
                alt="Raised circle image"
                class="img-fluid rounded-circle shadow-lg"
                style="width: 150px"
              />
            </div>
            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
              <h4 class="d-block text-uppercase font-weight-bold mb-4">
                Michael
              </h4>
              <img
                src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
                alt="Raised circle image"
                class="img-fluid rounded-circle shadow-lg"
                style="width: 150px"
              />
            </div>
            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
              <h4 class="d-block text-uppercase font-weight-bold mb-4">
                Charlene
              </h4>
              <img
                src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
                alt="Raised circle image"
                class="img-fluid rounded-circle shadow-lg"
                style="width: 150px"
              />
            </div>
            <div class="col-sm-3 col-6 mt-5 mt-sm-0">
              <h4 class="d-block text-uppercase font-weight-bold mb-4">Guru</h4>
              <img
                src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"
                alt="Raised circle image"
                class="img-fluid rounded-circle shadow-lg"
                style="width: 150px"
              />
            </div>
          </div>
        </div>
      </div>

      <section class="section section-lg">
        <div class="container">
          <div class="row row-grid justify-content-center">
            <div class="col-lg-12 text-center">
              <h2 class="display-9">
                OUR TECHNOLOGIES
                <span class="text-success"
                  >DREM is build on core DE-FI instruments</span
                >
              </h2>

              <div class="text-center">
                <h4 class="display-4 mb-5 mt-5">
                  Available on these technologies
                </h4>
                <div class="row justify-content-center">
                  <div class="col-lg-2 col-4">
                    <a
                      href="m"
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="Bootstrap 4 - Most popular front-end component library"
                    >
                      <img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a
                      href=" m"
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="Vue.js - The progressive javascript framework"
                    >
                      <img
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a
                      href=" r"
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="RSKs"
                    >
                      <img
                        src="https://pbs.twimg.com/profile_images/1154497281682477056/eYbpSlw0_400x400.jpg"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a
                      href=" "
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="Airnode"
                    >
                      <img
                        src="https://miro.medium.com/max/400/1*vfjYLDoXNs9OAdS_bk23RQ.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a
                      href=" m"
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="OBP"
                    >
                      <img
                        src="https://demo.openbankproject.com/media/images/logo.png"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-lg-2 col-4">
                    <a
                      href=" "
                      target="_blank"
                      data-toggle="tooltip"
                      data-original-title="Bitcoin"
                    >
                      <img
                        src="https://cdn.dribbble.com/users/81899/screenshots/1411041/attachments/205810/bitcoin.png?compress=1&resize=400x300"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </PublicLayout>
</template> 

<script>
import PublicLayout from "../layouts/Public.vue";
export default {
  components: {
    PublicLayout,
  },
};
</script>
<style scoped>
.size-icon {
  font-size: 20px;
  cursor: pointer;
  vertical-align: -4px !important;
}
.navbar-brand img {
  height: 50px;
  margin: 5px;
}

@media (min-width: 768px) {
  .section-hero {
    min-height: 500px;
  }
}
.section-shaped {
  position: relative;
  overflow: hidden;
}
.section-shaped.section-hero:before {
  top: 680px;
}
.section-shaped .stars-and-coded {
  margin-top: 8rem;
}
.section-shaped .shape {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.section-shaped .shape span {
  position: absolute;
}
.section-shaped .shape + .container {
  position: relative;
  height: 100%;
}
.section-shaped .shape.shape-skew + .container {
  padding-top: 0;
}
.section-shaped .shape.shape-skew + .container .col {
  margin-top: -100px;
}
.section-shaped .shape.shape-skew + .shape-container {
  padding-top: 18rem;
  padding-bottom: 19rem;
}
.section-shaped .shape-skew {
  transform: skewY(-4deg);
  transform-origin: 0;
}
.section-shaped .shape-skew span {
  transform: skew(4deg);
}
.section-shaped .shape-primary {
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
}
.section-shaped .shape-primary :nth-child(1) {
  background: #53f;
}
.section-shaped .shape-primary :nth-child(2) {
  background: #4553ff;
}
.section-shaped .shape-primary :nth-child(3) {
  background: #4f40ff;
}
.section-shaped .shape-primary :nth-child(4) {
  background: #25ddf5;
}
.section-shaped .shape-primary :nth-child(5) {
  background: #1fa2ff;
}
.section-shaped .shape-default {
  background: linear-gradient(150deg, #7795f8 15%, #6772e5 70%, #555abf 94%);
}
.section-shaped .shape-default :nth-child(1) {
  background: #7795f8;
}
.section-shaped .shape-default :nth-child(2) {
  background: #7b9aff;
}
.section-shaped .shape-default :nth-child(3) {
  background: #6f8ff8;
}
.section-shaped .shape-default :nth-child(4) {
  background: #76eea7;
}
.section-shaped .shape-default :nth-child(5) {
  background: #6adaff;
}
.section-shaped .shape-light {
  background: linear-gradient(
    150deg,
    shapes-light-color("step-1-gradient-bg") 15%,
    shapes-light-color("step-2-gradient-bg") 70%,
    shapes-light-color("step-3-gradient-bg") 94%
  );
}
.section-shaped .shape-light :nth-child(1) {
  background: shapes-light-color("span-1-bg");
}
.section-shaped .shape-light :nth-child(2) {
  background: shapes-light-color("span-2-bg");
}
.section-shaped .shape-light :nth-child(3) {
  background: shapes-light-color("span-3-bg");
}
.section-shaped .shape-light :nth-child(4) {
  background: shapes-light-color("span-4-bg");
}
.section-shaped .shape-light :nth-child(5) {
  background: shapes-light-color("span-5-bg");
}
.section-shaped .shape-dark {
  background: linear-gradient(150deg, #32325d 15%, #32325d 70%, #32325d 94%);
}
.section-shaped .shape-dark :nth-child(1) {
  background: #2e2e57;
}
.section-shaped .shape-dark :nth-child(2) {
  background: #2b2b58;
}
.section-shaped .shape-dark :nth-child(3) {
  background: #25254d;
}
.section-shaped .shape-dark :nth-child(4) {
  background: #d782d9;
}
.section-shaped .shape-dark :nth-child(5) {
  background: #008169;
}
.section-shaped .shape-style-1 span {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
.section-shaped .shape-style-1 .span-200 {
  height: 200px;
  width: 200px;
}
.section-shaped .shape-style-1 .span-150 {
  height: 150px;
  width: 150px;
}
.section-shaped .shape-style-1 .span-100 {
  height: 100px;
  width: 100px;
}
.section-shaped .shape-style-1 .span-75 {
  height: 75px;
  width: 75px;
}
.section-shaped .shape-style-1 .span-50 {
  height: 50px;
  width: 50px;
}
.section-shaped .shape-style-1 :nth-child(1) {
  left: -4%;
  bottom: auto;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(2) {
  right: 4%;
  top: 10%;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(3) {
  top: 280px;
  right: 5.66666%;
  background: rgba(255, 255, 255, 0.3);
}
.section-shaped .shape-style-1 :nth-child(4) {
  top: 320px;
  right: 7%;
  background: rgba(255, 255, 255, 0.15);
}
.section-shaped .shape-style-1 :nth-child(5) {
  top: 38%;
  left: 1%;
  right: auto;
  background: rgba(255, 255, 255, 0.05);
}
.section-shaped .shape-style-1 :nth-child(6) {
  width: 200px;
  height: 200px;
  top: 44%;
  left: 10%;
  right: auto;
  background: rgba(255, 255, 255, 0.15);
}
.section-shaped .shape-style-1 :nth-child(7) {
  bottom: 50%;
  right: 36%;
  background: rgba(255, 255, 255, 0.04);
}
.section-shaped .shape-style-1 :nth-child(8) {
  bottom: 70px;
  right: 2%;
  background: rgba(255, 255, 255, 0.2);
}
.section-shaped .shape-style-1 :nth-child(9) {
  bottom: 1%;
  right: 2%;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(10) {
  bottom: 1%;
  left: 1%;
  right: auto;
  background: rgba(255, 255, 255, 0.05);
}
@media (max-width: 991.98px) {
  .section-shaped .shape-style-1 span {
    height: 120px;
  }
}
@media (max-width: 767.98px) {
  .section-shaped .shape-style-1 span {
    height: 90px;
  }
}
.section-shaped .shape-style-1.shape-primary {
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
}
.section-shaped .shape-style-1.shape-default {
  background: linear-gradient(150deg, #7795f8 15%, #6772e5 70%, #555abf 94%);
}
.section-shaped .shape-style-1.shape-light {
  background: linear-gradient(
    150deg,
    shapes-light-color("step-1-gradient-bg") 15%,
    shapes-light-color("step-2-gradient-bg") 70%,
    shapes-light-color("step-3-gradient-bg") 94%
  );
}
.section-shaped .shape-style-1.shape-dark {
  background: linear-gradient(150deg, #32325d 15%, #32325d 70%, #32325d 94%);
}
.section-shaped .shape-style-2 span {
  height: 190px;
}
.section-shaped .shape-style-2 .span-sm {
  height: 100px;
}
.section-shaped .shape-style-2 :nth-child(1) {
  width: 33.33333%;
  top: 0;
  left: -16.66666%;
}
.section-shaped .shape-style-2 :nth-child(2) {
  width: 33.33333%;
  top: 0;
  left: 16.66666%;
  right: auto;
}
.section-shaped .shape-style-2 :nth-child(3) {
  width: 33.33333%;
  left: 49.99999%;
  bottom: auto;
}
.section-shaped .shape-style-2 :nth-child(4) {
  width: 33.33333%;
  top: 55%;
  right: -16.66666%;
}
.section-shaped .shape-style-2 :nth-child(5) {
  width: 33.33333%;
  bottom: 0;
}
@media (max-width: 991.98px) {
  .section-shaped .shape-style-2 span {
    height: 120px;
  }
}
@media (max-width: 767.98px) {
  .section-shaped .shape-style-2 span {
    height: 90px;
  }
}
.section-shaped .shape-style-3 span {
  height: 140px;
}
.section-shaped .shape-style-3 .span-sm {
  height: 100px;
}
.section-shaped .shape-style-3 :nth-child(1) {
  width: 66%;
  left: -16.66666%;
  bottom: auto;
}
.section-shaped .shape-style-3 :nth-child(2) {
  width: 40%;
  top: 54%;
  right: -16.66666%;
}
.section-shaped .shape-style-3 :nth-child(3) {
  width: 33.33333%;
  top: 34%;
  left: -16.66666%;
  right: auto;
}
.section-shaped .shape-style-3 :nth-child(4) {
  width: 60%;
  bottom: 0;
  right: -16.66666%;
  opacity: 0.6;
}
.section-shaped .shape-style-3 :nth-child(5) {
  width: 33.33333%;
  bottom: 0;
}
@media (max-width: 991.98px) {
  .section-shaped .shape-style-3 span {
    height: 120px;
  }
}
@media (max-width: 767.98px) {
  .section-shaped .shape-style-3 span {
    height: 90px;
  }
}
</style>