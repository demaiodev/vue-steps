<template>
  <div>
    <b-card no-body>
      <b-tabs pills card vertical nav-wrapper-class="w-25" v-model="currentTab">
        <b-tab v-for="(step, index) of steps" :key="index" :disabled="step.disabled">
          <template v-slot:title>
            {{step.tabTitle}}
            <b-icon-check-circle v-if="step.completed"></b-icon-check-circle>
          </template>
          <Card
            :currentStep="step"
            :currentIndex="index"
            @markStepComplete="markComplete"
            @nextTab="currentTab += 1"
          />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<style>
</style>

<script>
import Card from "@/components/Card";
import steps from "@/steps.js";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    Card
  },
  methods: {
    markComplete(index) {
      if (index !== this.totalSteps - 1) {
        this.steps[index + 1].disabled = false;
      } else {
        this.confettiTime();
      }
      this.steps[index].completed = true;
      this.$store.dispatch("completeStep", index);
    },
    confettiTime() {
      this.$confetti.start();
      setTimeout(() => {
        this.$confetti.stop();
      }, 5000);
    }
  },
  computed: {
    ...mapGetters(["progress", "totalSteps"])
  },
  data() {
    return {
      currentTab: 0,
      steps: steps
    };
  },
  mounted() {
    this.$store.dispatch("totalSteps", this.steps.length);
  }
};
</script>
