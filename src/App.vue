<template>
    <SidebarMenu />
    <RouterView />
    <FooterApp />
</template>

<script>
import SidebarMenu from "./components/layout/sidebar-menu.vue"
import FooterApp from "./components/layout/footer-app.vue"

export default{
  name: 'App',
  components: {
    SidebarMenu,
    FooterApp
  }
}
</script>

<style>

</style>
