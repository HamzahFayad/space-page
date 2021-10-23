<template>
  <div id="destination">
    ---Destination---
    <div v-for="(thedata, i) in myJson.destinations" :key="i">
      {{ thedata }}
    </div>
  </div>
</template>

<script>
import data from "../json/data.json";
export default {
  data() {
    return {
      myJson: data,
    };
  },
};
</script>

<style lang="scss">
#destination {
  position: absolute;
  left: 0;
  padding: 50px 30px;
}
</style>