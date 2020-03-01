<template>
  <b-container>
    <h4>{{fullPageTitle}}</h4>
    <div class="mt-4">
      <b-card :img-src="currentStep.imageUrl" fluid img-alt="Card image" img-left class="mb-3">
        <b-card-text>{{currentStep.pageContent}}</b-card-text>
        <div class="button-container">
          <b-button
            v-if="!currentStep.completed"
            @click="markComplete(currentIndex)"
            variant="success"
          >Finished!</b-button>
          <b-button
            v-if="currentIndex !== 9 && currentStep.completed"
            @click="nextTab()"
            variant="info"
            :disabled="!currentStep.completed"
          >Next Step ></b-button>
        </div>
      </b-card>
    </div>
  </b-container>
</template>

<style>
img {
  max-width: 50%;
  max-height: 50%;
}
.button-container {
  display: flex;
  justify-content: space-between;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<script>
export default {
  props: {
    currentStep: {
      type: Object,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    fullPageTitle() {
      return `${this.currentIndex + 1}). ${this.currentStep.pageTitle}`;
    }
  },
  methods: {
    markComplete(index) {
      this.$emit("markStepComplete", index);
    },
    nextTab() {
      this.$emit("nextTab");
    }
  }
};
</script>