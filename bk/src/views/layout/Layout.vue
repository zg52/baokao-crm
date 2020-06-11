<template>
  <div class="layout">
    <Navbar></Navbar>
    <div class="flex">
      <SlideBar></SlideBar>
      <Appmain></Appmain>
    </div>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
import SlideBar from './components/SlideBar'
import Appmain from './components/Appmain'
export default {
  name: 'Layout',
  components: {
    Navbar,
    SlideBar,
    Appmain
  }
}
</script>
<style scoped>
.flex {
  display: flex;
}
</style>
