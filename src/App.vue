<template>
  <div id="app">
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  background: url("../public/starter-code/assets/home/background-home-desktop.jpg");
  //margin-top: 50px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
html,
body,
* {
  margin: 0;
  padding: 0;
}
section {
  padding: 50px 25px;
  color: #fff;
}
</style>
