<template>
  <footer>
      <a href="https://www.dubovicky.com.br/" target="_blank">
        <p>Desenvolvido com ❤️‍🔥 e ☕ por Dubovicky.</p>
      </a>
  </footer>
</template>

<script>
export default {
  name: 'FooterApp'
}
</script>

<style scoped>
footer{
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
}

footer a{
  text-decoration: none;
}

footer p{
  color: #FFF;
  font-size: 12px;
}

/* responsivo */
@media (max-width: 768px){
  footer{
    position: unset;
    margin-top: 20px;
  }
}
</style>