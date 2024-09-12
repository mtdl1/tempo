<template>
    <Weather />
    <FooterApp />
</template>

<script>
import FooterApp from "./components/layout/Footer.vue"
import Weather from './components/layout/Weather.vue'

export default{
  name: 'App',
  components: {
    FooterApp,
    Weather
  }
}
</script>
