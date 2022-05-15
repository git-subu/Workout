<template>
  <section id="Example for emit-parent">
    <h1 class="title-text">{{ title }}</h1>
    <p class="content-text">{{ content }}</p>
  <button v-on:click="displayContent" class="text-link">See More</button>
  
  </section>
</template>
// JS File
<script>
export default {
  name: "BlogContent",
  props: ["title", "content"],
   data() {},
  methods: {
    displayContent() {
      this.$emit("displayData", this.title);
    },
  },

};

</script>