<template>
  <section id="BlogPage">
    <h1 class="heading-text">Welcome</h1>
    <div class="parent-container">
      <div class="Card-body">
        <Content
          title="Introduction to CSS"
          content="CSS is a stylesheet language used to style the structure of our document"
          @displayData="fetchData($event)"
        />
      </div>
      <div class="Card-body">
        <Content
          title="What is $Emit in Vue Js"
          content="Vue $emit is a function that lets us emit, or send, custom events "
          @displayData="fetchData($event)"
        />
      </div>
      <div class="Card-body">
        <Content
          title="Understanding Currying"
          content="Currying simply means evaluating functions with multiple arguments"
          @displayData="fetchData($event)"
        />
      </div>
      </div>
      <h4 class="result-text">Result: {{ result }}</h4>
   
  </section>
 
</template>
<script>
import Content from "../components/Content.vue";
export default {
  name: "BlogPage",
  components: {
    Content,
  },
  data: () => ({
    result: "",
  }),
  methods: {
    fetchData(data) {
      this.result = data;
    },
  },
};
</script>
      
 