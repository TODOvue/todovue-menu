<template>
  <tv-demo hideBackground :component="component" :variants="demos" />
</template>

<script>
import TvMenu from "@/component/TvMenu.vue";
import TvDemo from "todovue-demo";
import { shallowRef } from "vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoMenu",
  components: {
    TvDemo,
  },
  setup() {
    const component = shallowRef(TvMenu);
    return {
      component,
      demos,
    };
  },
};
</script>

<style></style>
