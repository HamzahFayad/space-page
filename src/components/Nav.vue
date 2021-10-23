<template>
  <div id="nav">
    <nav>
      <ul>
        <li>
          <strong>00</strong>
          <router-link class="link" to="/"> Home</router-link>
        </li>
        <li>
          <strong>01</strong>
          <router-link class="link" to="/destination"> Destination</router-link>
        </li>
        <li>
          <strong>02</strong
          ><router-link class="link" to="/crew"> Crew</router-link>
        </li>
        <li>
          <strong>03</strong>
          <router-link class="link" to="/technology"> Technology</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../styles/mixins.scss";

nav {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  ul > li {
    display: inline-block;
    padding: 40px;

    @include for-tablet() {
      padding: 40px 10px;
    }
    @include for-phone-only() {
      display: none;
    }
  }
  .link {
    color: #fff;
    list-style-type: none;
    text-transform: uppercase;
    text-decoration: none;
  }
  strong {
    padding-right: 8px;
  }
}
</style>