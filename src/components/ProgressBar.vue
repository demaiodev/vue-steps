<template>
  <div v-if="progress">
    <b-progress :max="totalSteps" height="1.5rem" width="1rem" striped variant="success">
      <b-progress-bar
        class="ProgessBar__Bar"
        :value="progress"
        :label="`${progress} out of ${totalSteps}`"
        style="text-align: center;"
      ></b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ProgressBar",
  computed: {
    ...mapGetters(["progress", "totalSteps"])
  }
};
</script>
<style scoped>
.progress {
  border-radius: 0px;
}
</style>