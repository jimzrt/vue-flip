<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col>
          <b-button @click="toggleAll" variant="primary">Flip all!</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <label for="range-2">animation time: {{animationTime}}ms</label>
          <b-form-input id="range-2" v-model="animationTime" type="range" min="100" max="2000"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="no-gutters d-flex">
        <b-col md="auto">
          <FlipCard v-model="actives[0].value" :animationTime="animationTimeNumber" class="gradient">
            <template slot="front">
              <div class="d-flex flex-column card-content">
                <span class="card-top p-2">
                  <alert-icon :size="32"></alert-icon>
                </span>
                <div
                  class="d-flex justify-content-center align-self-center align-items-center flex-fill"
                >
                  <div class="d-flex flex-column align-items-center">
                    <p>
                      <bed-icon :size="96"></bed-icon>
                    </p>
                    <p>Schlafen</p>
                  </div>
                </div>
                <span class="card-bottom p-2">
                  <div class="float-left">
                    <clock-icon :size="32" class="mr-1"></clock-icon>00:38 - 06:33
                  </div>
                  <div class="float-right">
                    <sand-icon :size="32" class="mr-1"></sand-icon>256 min
                  </div>
                </span>
              </div>
            </template>
            <template slot="back">
              <div class="d-flex flex-column">
                <div class="p-2">Flex item 1</div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
              </div>
            </template>
          </FlipCard>
        </b-col>
        <b-col md="auto">
          <FlipCard v-model="actives[1].value" :animationTime="animationTimeNumber"  class="gradient">
            <template slot="front">
              <div class="d-flex flex-column card-content">
                <span class="card-top p-2">
                  <alert-icon :size="32"></alert-icon>
                </span>
                <div
                  class="d-flex justify-content-center align-self-center align-items-center flex-fill"
                >
                  <div class="d-flex flex-column align-items-center">
                    <p>
                      <bed-icon :size="96"></bed-icon>
                    </p>
                    <p>Schlafen</p>
                  </div>
                </div>
                <span class="card-bottom p-2">
                  <div class="float-left">
                    <clock-icon :size="32" class="mr-1"></clock-icon>00:38 - 06:33
                  </div>
                  <div class="float-right">
                    <sand-icon :size="32" class="mr-1"></sand-icon>256 min
                  </div>
                </span>
              </div>
            </template>
            <template slot="back">
              <div class="d-flex flex-column">
                <div class="p-2">Flex item 1</div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
              </div>
            </template>
          </FlipCard>
        </b-col>
        <b-col md="auto">
          <FlipCard v-model="actives[2].value" :animationTime="animationTimeNumber"  class="gradient">
            <template slot="front">
              <div class="d-flex flex-column card-content">
                <span class="card-top p-2">
                  <alert-icon :size="32"></alert-icon>
                </span>
                <div
                  class="d-flex justify-content-center align-self-center align-items-center flex-fill"
                >
                  <div class="d-flex flex-column align-items-center">
                    <p>
                      <bed-icon :size="96"></bed-icon>
                    </p>
                    <p>Schlafen</p>
                  </div>
                </div>
                <span class="card-bottom p-2">
                  <div class="float-left">
                    <clock-icon :size="32" class="mr-1"></clock-icon>00:38 - 06:33
                  </div>
                  <div class="float-right">
                    <sand-icon :size="32" class="mr-1"></sand-icon>256 min
                  </div>
                </span>
              </div>
            </template>
            <template slot="back">
              <div class="d-flex flex-column">
                <div class="p-2">Flex item 1</div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
              </div>
            </template>
          </FlipCard>
        </b-col>
        
        <b-col md="auto">
          <FlipCard v-model="actives[3].value" :animationTime="animationTimeNumber"  class="gradient">
            <template slot="front">
              <div class="d-flex flex-column card-content">
                <span class="card-top p-2">
                  <alert-icon :size="32"></alert-icon>
                </span>
                <div
                  class="d-flex justify-content-center align-self-center align-items-center flex-fill"
                >
                  <div class="d-flex flex-column align-items-center">
                    <p>
                      <bed-icon :size="96"></bed-icon>
                    </p>
                    <p>Schlafen</p>
                  </div>
                </div>
                <span class="card-bottom p-2">
                  <div class="float-left">
                    <clock-icon :size="32" class="mr-1"></clock-icon>00:38 - 06:33
                  </div>
                  <div class="float-right">
                    <sand-icon :size="32" class="mr-1"></sand-icon>256 min
                  </div>
                </span>
              </div>
            </template>
            <template slot="back">
              <div class="d-flex flex-column">
                <div class="p-2">Flex item 1</div>
                <div class="p-2">Flex item 2</div>
                <div class="p-2">Flex item 3</div>
              </div>
            </template>
          </FlipCard>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FlipCard from "./components/FlipCard";

export default {
  name: "App",
  components: {
    FlipCard
  },
  data() {
    return {
      //    active: true,
      animationTime: "600",
      actives: [
        { value: true },
        { value: true },
        { value: true },
        { value: true }
      ]
    };
  },
  computed: {
    animationTimeNumber: {
      get: function() {
        return Number(this.animationTime);
      },
      set: function(newValue) {
        this.animationTime = newValue.toString();
      }
    }
  },
  methods: {
    toggleAll() {
      const allInactive = this.actives.every(v => v.value === false);
      this.actives.map(active => (active.value = allInactive));
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.card-content {
  position: relative;
  height: 300px;
}
.card-content .card-top {
  position: absolute;
  top: 0px;
  right: 0px;
}
.card-content .card-bottom {
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 15px;
}

.gradient {
background-attachment: fixed!important;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#3bbadd+0,427ef7+100 */
  background: rgb(59, 186, 221); /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    rgba(59, 186, 221, 1) 0%,
    rgba(66, 126, 247, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(59, 186, 221, 1) 0%,
    rgba(66, 126, 247, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(59, 186, 221, 1) 0%,
    rgba(66, 126, 247, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3bbadd', endColorstr='#427ef7',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
</style>
