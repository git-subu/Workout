<template>

    <div class="left-content">
      <SideBar />
          <router-view />
        <Nav msg=""></Nav>          
  </div>
  
</template>

<script>
import Nav from '@/components/Nav'
import SideBar from '@/components/SideBar'
export default {
  name: 'AdmiN',
  components: {Nav, SideBar}
}
</script>

<style>

</style>