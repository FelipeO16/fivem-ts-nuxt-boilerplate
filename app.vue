<template>
  <div class="relative">
    <Play />
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      window.addEventListener("message", function (event) {});
    });
    return {};
  },
};
</script>
