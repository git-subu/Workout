<template>
  <form @submit.prevent="submit" >
       <input type="text" name="title" v-model="title"                
    />
       <input type="text" name="image" v-model="image" 
    />
    <button>Add Product</button>
</form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    name: "ProductCreate",
    setup() {
       const title = ref(''); 
       const image = ref('');
       const router = useRouter();

       const submit = async () => {
           await fetch('http://localhost:3000/products', {
               method: 'POST',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   title: title.value,
                 
                })
           });

           await router.push('/admin/products');
       }
       
       return {title, image, submit}
    }
    
}
</script>

<style>

</style>