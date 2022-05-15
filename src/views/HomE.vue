<template>

  <div class="home flex items-center justify-center">
    <div
      class="text-red-600 text-3xl shadow-outline
     border-blue-700 w-1/2 main flex flex-col"
    >
      <h2 class="font-semibold">Parent</h2>
      <textarea
        class=" px-2 bg-gray-200 shadow-lg text-black
       block border-green-800 w-64 m-auto my-10"
        type="text"
        v-model="text"
      />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
       rounded-full w-56 m-auto outline-none"
        @click="send()"
      >
        Press Me
      </button>
      <Child :message="message" class="mt-10"></Child>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Child from "@/components/ChilD.vue";
// import Vue from "vue";
import { mapActions } from "vuex";

export default {
  name: "HomE",
  components: {
    Child
  },

  methods: {
    ...mapActions(["setMessage"]),
    send() {
      this.setMessage(this.text);
          }
  },

  data() {
    return {
      text: "",
      message: ""
    };
  }
};
</script>
<style scoped>
.main {
  height: 100%;
  padding-bottom: 40px;
}
*:focus {
  outline: none;
}
</style>