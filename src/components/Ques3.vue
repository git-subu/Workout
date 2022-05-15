<template>
  <div>
    <p>Fetchingdata</p>

  <b-card no-body class="text-center">
    <div class="bg-secondary text-light">
   <p> {{ item.userId }}</p>
    </div>
    <div class="bg-secondary text-light">
       <p> {{ item.title }}</p>
    </div>
    <div class="bg-secondary text-light">
       <p> {{ item.completed}}</p>
    </div>
  </b-card>
        <button @click="redirect()">click</button>
  </div>
</template>

    <script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "employeeList",
  data() {
    return { list: undefined };
  },
  mounted() {
    Vue.axios
      .get("https://jsonplaceholder.typicode.com/todos")
            .then((resp) => {
        this.list = resp.data;
        console.log(resp.data);
      });
  },
  methods:{
    redirect()
    {
      Vue.axios
      .get("http://localhost:8080/#/call")
      .then((resp) => {
        this.list = resp.data;
        document.write(resp.data);
      });
    }
  }
};
</script>