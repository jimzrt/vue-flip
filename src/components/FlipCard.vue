<template>
  <div class="flip-card" v-bind:class="{ back: !value }" @click="flip">
    <div class="flip-content" :style="transformStyle">
      <div class="flip-front" :style="transformStyleHalf">
        <slot name="front">Front!</slot>
      </div>
      <div class="flip-back" :style="transformStyleHalf">
        <slot name="back">Back!</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flipcard",
  data() {
    return {
      // back: false
    };
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    animationTime: {
      type: Number,
      default: 200
    }
    // width: {
    //   type: Number,
    //   default: 300
    // },
    // height: {
    //   type: Number,
    //   default: 300
    // },
    // direction: {
    //   type: String,
    //   default: 'horizontal'
    // },
    // zoffset: {
    //   type: Number,
    //   default: 0
    // },
    // disable: {
    //   type: Boolean,
    //   default: false
    // }
  },
  //   mounted: function(){
  //   },

  computed: {
    transformStyle() {
      return { transition: "transform " + this.animationTime + "ms" };
    },
    transformStyleHalf() {
      return {
        transition:
          "visibility " +
          this.animationTime / 2 +
          "ms, transform " +
          this.animationTime +
          "ms"
      };
    }
  },
  methods: {
    flip() {
      this.$emit("input", !this.value);
    }
  }
};
</script>
<style scoped>
.flip-card {
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.flip-content {
  width: 100%;
  height: 300px;
  /* perspective: 500px; */
  transform-style: preserve-3d;
  transition: transform 1s;
}

.flip-front,
.flip-back {
  position: absolute;
  height: 100%;
  width: 100%;
  background: transparent;
  /* line-height: 300px; */
  color: white;
  font-weight: bold;
  /* text-align: center; */
  font-size: 18px;
  backface-visibility: hidden;
  border-style: solid;
  border-width: 1px;
}

.flip-front {
  transition: visibility 0.5s, transform 1s;
}

.flip-card.back .flip-front {
  visibility: hidden;
  transform: rotateY(180deg);
}

.flip-back {
  background: transparent;
  color: white;
  transform: rotateY(-180deg);
  transition: visibility 0.5s, transform 1s;
}

.flip-card.back .flip-back {
  transform: rotateY(0deg);
}
</style>
