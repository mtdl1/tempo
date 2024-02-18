<template>
  <div class="sidebar-menu" :class="{ativo: estado}">
    <header>
      <div class="titulo" v-show="!estado">
        <h2>Tempo Dubovicky</h2>
      </div>
      <div class="icon">
        <ph-arrow-line-right :size="30" color="#FFFFFF" @click="estadoMenu" v-show="estado"/>
        <ph-arrow-line-left :size="30" color="#FFFFFF" @click="estadoMenu" v-show="!estado"/>
      </div>
    </header>
    <div class="menu" v-show="!estado">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      estado: true
    }
  },
  methods: {
    estadoMenu() {
      this.estado = !this.estado
      console.log(this.estado)
    }
  }
}
</script>

<style scoped>
.sidebar-menu {
  background-color: #ffffff17;
  backdrop-filter: blur(4.64px);
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  margin: 0;
  transition: 0.5s;
}

.sidebar-menu.ativo {
  width: 50px;
  padding: 10px;
  margin: 0;
  background-color: unset;
  transition: 0.5s;
  height: unset;
}

header {
    display: flex;
    align-items: center;
    gap: 10px;
}

header h2 {
    margin: 0;
    color: #FFF;
    font-size: large;
}

header {
    display: flex;
    align-items: center;
    gap: 10px;
}

header h1 {
    margin: 0;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}

.menu a {
    text-decoration: none;
    color: #FFF;
    border-bottom: 1px solid transparent;
    transition: 0.5s;
}

.menu a:hover {
    border-bottom: 1px solid white;
    transition: 0.5s;
}

.icon svg {
    transition: 0.5s;
}

.icon svg:hover {
    transform: scale(1.1);
    transition: 0.5s;
}

/* responsivo */
@media (max-width: 768px) {
  .sidebar-menu{
    height: unset;
    z-index: 9999;
  }
}
</style>