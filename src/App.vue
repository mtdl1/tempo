<template>
  <div>
    <div class="busca-cidade">
      <input class="pesquisa-cidade" type="text" v-model="cidade" placeholder="Pesquisar..." @keyup.enter="getList">
    </div>
    <main>
      <h1> Tempo em {{ cidadeexibida }}</h1>
      <!-- <p>{{ respostaapi }}</p> -->
      <div class="box-temperatura">
        <!-- impot image nuvem-sol.png -->
        <img src="./assets/nuvem-sol.png" alt="nuvem com sol">
        <p class="temperatura">{{ temperatura }}</p>
      </div>
      <div class="box-vento-umidade">
        <div class="vento">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
            <g filter="url(#filter0_ddi_1_45)">
              <path d="M4.4375 8.3125C4.19589 8.3125 4 8.50837 4 8.75C4 8.99163 4.19589 9.1875 4.4375 9.1875H14.7341C14.5852 9.44489 14.5 9.74375 14.5 10.0625C14.5 11.029 15.2835 11.8125 16.25 11.8125C17.2165 11.8125 18 11.029 18 10.0625C18 9.09599 17.2165 8.3125 16.25 8.3125H4.4375Z" fill="#C01B3C"/>
              <path d="M13.9558 6.93501C13.8963 7.16711 14.0366 7.40736 14.2753 7.42787C14.7065 7.46491 15.1426 7.39493 15.5438 7.22107C16.0784 6.98937 16.5208 6.58636 16.8012 6.07554C17.0815 5.56471 17.184 4.97512 17.0923 4.39966C17.0007 3.8242 16.7202 3.29559 16.295 2.89713C15.8698 2.49867 15.3241 2.25301 14.7439 2.19886C14.1637 2.14471 13.582 2.28515 13.0905 2.59805C12.5989 2.91094 12.2254 3.37851 12.0288 3.92707C11.8814 4.3387 11.8398 4.77837 11.9047 5.20625C11.9406 5.44315 12.1895 5.56755 12.4172 5.49312C12.645 5.41869 12.7634 5.17263 12.7469 4.93359C12.7303 4.6929 12.7633 4.44979 12.8457 4.21975C12.9773 3.85252 13.2273 3.53951 13.5564 3.33004C13.8855 3.12057 14.2749 3.02655 14.6633 3.0628C15.0517 3.09905 15.417 3.26351 15.7017 3.53026C15.9863 3.79701 16.1741 4.15088 16.2354 4.53612C16.2968 4.92136 16.2282 5.31607 16.0405 5.65804C15.8528 6.00001 15.5567 6.26981 15.1987 6.42492C14.9745 6.52208 14.7341 6.57078 14.4928 6.56979C14.2532 6.56882 14.0153 6.70291 13.9558 6.93501Z" fill="#C01B3C"/>
              <path d="M5.75 7C5.75 6.75838 5.94588 6.5625 6.1875 6.5625H14.5V7.4375H6.1875C5.94588 7.4375 5.75 7.24163 5.75 7Z" fill="#C01B3C"/>
              <path d="M6.625 10.5C6.625 10.2584 6.82088 10.0625 7.0625 10.0625H11.4375C11.6791 10.0625 11.875 10.2584 11.875 10.5C11.875 10.7416 11.6791 10.9375 11.4375 10.9375H7.0625C6.82088 10.9375 6.625 10.7416 6.625 10.5Z" fill="#C01B3C"/>
              <path d="M9.6875 5.6875C10.4124 5.6875 11 5.09988 11 4.375C11 3.65012 10.4124 3.0625 9.6875 3.0625C8.96262 3.0625 8.375 3.65012 8.375 4.375C8.375 4.52841 8.40128 4.67565 8.44966 4.8125H4.4375C4.19589 4.8125 4 5.00837 4 5.25C4 5.49163 4.19589 5.6875 4.4375 5.6875H9.6875Z" fill="#C01B3C"/>
            </g>
            <defs>
              <filter id="filter0_ddi_1_45" x="-1.25" y="0.4375" width="24.5" height="20.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="0.875"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.717647 0 0 0 0 0.0941176 0 0 0 0 0.203922 0 0 0 0.4 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_45"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="3.5"/>
                <feGaussianBlur stdDeviation="2.625"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.752941 0 0 0 0 0.105882 0 0 0 0 0.235294 0 0 0 0.38 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_1_45" result="effect2_dropShadow_1_45"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_45" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-0.875" dy="-0.875"/>
                <feGaussianBlur stdDeviation="0.4375"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1_45"/>
              </filter>
            </defs>
          </svg>
          <p>{{ vento }}</p>
        </div>
        <div class="umidade">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_ddii_1_52)">
            <path d="M8.5281 14.2959C6.70785 12.4756 6.70785 9.52439 8.5281 7.70414L11 5.23224L13.4719 7.70414C15.2922 9.52439 15.2922 12.4756 13.4719 14.2959C12.1067 15.6611 9.89329 15.6611 8.5281 14.2959Z" fill="#379ADC"/>
            </g>
            <defs>
            <filter id="filter0_ddii_1_52" x="-5.88803" y="-1.29324" width="33.7761" height="36.1894" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="6.52548"/>
            <feGaussianBlur stdDeviation="6.52548"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.282353 0 0 0 0 0.517647 0 0 0 0 0.933333 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_52"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="3"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.258824 0 0 0 0 0.627451 0 0 0 0 0.941176 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="effect1_dropShadow_1_52" result="effect2_dropShadow_1_52"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_52" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="1.63137"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect3_innerShadow_1_52"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-1.63137"/>
            <feGaussianBlur stdDeviation="1.63137"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect3_innerShadow_1_52" result="effect4_innerShadow_1_52"/>
            </filter>
            </defs>
          </svg>
          <p>{{ umidade }}</p>
        </div>
      </div>
      <div class="box-chuva">
        <img src="./assets/precipitacao.png" alt="precipitacao">
        <p>{{ precipitacao }}</p>
      </div>
    </main>

  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from "vue-toastification";

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      // api: 'http://api.openweathermap.org/data/2.5/forecast?q=Campinas&cnt=5&appid=f2a5d824858cd289581d71f53b51e973',
      // api com cidade sendo variavel
      api: '',
      axios: axios,
      respostaapi: [],
      temperatura: '',
      cidade: 'Campinas',
      cidadeexibida: '',
      dia: '',
      vento: '',
      umidade: '',
      precipitacao: '',
    }
  },
  methods: {
    getList() {
      this.api = 'https://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(this.cidade) + '&cnt=5&appid=f2a5d824858cd289581d71f53b51e973'
      this.axios.get(this.api)
      .then((response) => {
        // console.log(response.data)
        // informar com o toast que a cidade foi encontrada
        const toast = useToast();
        toast.success(`Cidade "${this.cidade}" encontrada`);
        this.respostaapi = response.data
        this.temperatura = response.data.list[0].main.temp
        // adicionar o país da cidade após ela
        this.cidade = this.cidade + ' - ' + response.data.city.country
        // this.cidade = response.data.city.name
        // informar o dia da semana

        this.dia = response.data.list[0].dt_txt
        this.vento = response.data.list[0].wind.speed
        this.umidade = response.data.list[0].main.humidity
        // usar pop para precipitacao
        this.precipitacao = response.data.list[0].pop

        // converter temperatura em celsius
        this.temperatura = this.temperatura - 273,15
        // arredondar temperatura
        this.temperatura = Math.round(this.temperatura) + '°C'
        // formata a data
        this.dia = this.dia.split(' ')
        this.dia = this.dia[0].split('-')
        this.dia = this.dia[2] + '/' + this.dia[1] + '/' + this.dia[0]
        // converte o vento em km/h
        this.vento = this.vento * 3.6
        // arredonda o vento
        this.vento = Math.round(this.vento) + 'km/h'
        // converte a umidade em %
        this.umidade = this.umidade + '%'
        // corrige precipitacao de 0.20 para 20% e de 20.999 para 21%
        this.precipitacao = this.precipitacao * 100 + '%'
        // limpa o input
        this.cidadeexibida = this.cidade
        this.cidade = ''
      })
      .catch((error) => {
        const toast = useToast();
        if (error.response && error.response.status === 404) {
            // Use a referência ao toast
            toast.error(`Cidade "${this.cidade}" não encontrada`);
          } else {
            console.error("Erro na requisição:", error);
            alert('Erro ao buscar dados. Por favor, tente novamente mais tarde.');
          }
      })
    }
  },
  mounted() {
    // Chama getList quando o componente é montado
    this.getList();
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Overpass&display=swap');
*{
  font: inherit;
}
*, *::before, *::after {
  box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  min-height: 100dvh;
  background-color: #47BFDF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Overpass', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  text-wrap: balance;
  margin: 0;
}
p{
  text-wrap: pretty;
  color: #333;
  font-weight: bold;
}
img, video, svg, object, embed {
  max-width: 100%;
  height: auto;
  display: block;
}
.box-tempo{
  width: fit-content;
  background: #ffffff34;
  /* adiciona blur 4.64 */
  backdrop-filter: blur(4.64px);
  border-radius: 10px;
  padding: 30px;
}

h1{
  text-align: center;
  font-size: larger;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #FFF;
}

input{
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 20px;
  background-color: transparent;
  color: #fff;
  border-bottom: 1px solid #fff;
}

input::placeholder{
  color: #FAFAFA;
}

input:focus {
  outline: none;
  caret-color: #FFF;
}

/* input com icon search unicode after */
.pesquisa-cidade{
  background-image: url(./assets/search.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 20px;
}

button{
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ffffff34;
  /* adiciona blur 4.64 */
  backdrop-filter: blur(4.64px);
  margin-bottom: 10%;
}

.condicao-tempo{
  display: flex;
  justify-content: center;
  align-items: center;
}

.condicao-tempo svg{
  width: 300px;
  height: 170px;
}

.temperatura {
    text-align: center;
    font-size: 60px;
    text-shadow: -3.709px 7.417px 46.357px rgba(0, 0, 0, 0.10);
    color: #FFF;
    margin: 0;
}

.box-temperatura {
    background-color: rgb(255 255 255 / 50%);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    padding: 30px 100px;
    display: flex;
    gap: 150px;
    align-items: center;
}

.box-vento-umidade {
    display: flex;
    gap: 20px;
    margin-top: 20px
}

.vento, .umidade, .box-chuva {
    background-color: hsl(0deg 0% 100% / 50%);
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.vento svg, .umidade svg {
    width: 50px;
    height: 50px;
}

.box-chuva {
    width: 100%;
    margin-top: 20px;
}

.box-chuva img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.Vue-Toastification__toast.Vue-Toastification__toast--error.bottom-center {
    display: flex!important;
    flex-wrap: wrap;
    align-items: center;
}

button.Vue-Toastification__close-button {
    width: 24px;
    height: 24px;
    margin: 0;
}
</style>
