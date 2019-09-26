<template>
  <div class="FrontCover">
    <router-link to="/HitMouse">
      <div class="FrontCoverImg">
        <img
          src="..\..\static\img\frontCover.jpg"
          width="300px"
          height="300px"
          @click="clickToStart"
        />
      </div>
      <div class="FrontCoverBtn">
        <el-button @click="clickToStart">Click to play!</el-button>
      </div>
    </router-link>
  </div>
</template>

<script>
// import router from "./router";
export default {
  name: "FrontCover",
  data() {
    return {};
  },
  methods: {
    clickToStart() {
      this.$router.push({ path: "/HitMouse" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FrontCover {
  width: 800px;
  height: 800px;
  margin: auto;
  /* background-color: white; */
  /* border-radius: 5px; */
  /* border: 2px solid black;
  box-shadow: 8px 8px 30px 5px gray; */
}
.FrontCoverImg {
  width: 300px;
  height: 300px;
  margin: auto;
}
.FrontCoverBtn {
  width: 122px;
  height: 44px;
  margin: auto;
}
</style>
