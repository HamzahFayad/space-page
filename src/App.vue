<template>
  <div id="app">
    <section>
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <span class="line"></span>
      <div class="navi">
        <Nav />
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;700&display=swap");
@import "./styles/mixins.scss";

#app {
  font-family: "Zen+Odl+Mincho";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  background: url("../public/starter-code/assets/home/background-home-desktop.jpg")
    no-repeat center/cover;
  //margin-top: 50px 0;
  @include for-phone-only() {
    background: url("../public/starter-code/assets/home/background-home-mobile.jpg")
      no-repeat center/cover;
  }
}
html,
body,
* {
  margin: 0;
  padding: 0;
  line-height: 20px;
  letter-spacing: 2px;
  font-size: 16px;
}
section {
  padding: 50px 0;
  padding-left: 25px;
  color: #fff;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .logo {
    flex: 1;
    z-index: 10;
  }
  .nav {
    z-index: 10;
  }
  .line {
    position: absolute;
    transform: translate(20%, 50%);
    display: inline-block;
    width: 38vw;
    height: 0.5px;
    //background: rgba(255, 255, 255, 0.4);
    z-index: 1;
  }
}
</style>
