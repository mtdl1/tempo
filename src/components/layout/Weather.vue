<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      api: "",
      axios: axios,
      respostaapi: [],
      respostaapigeral: [],
      clima: "",
      temperatura: "",
      cidade: "Campinas",
      cidadeexibida: "",
      dia: "",
      vento: "",
      umidade: "",
      precipitacao: "",
      sizePrevisao: 16,
      weightPrevisao: "duotone",
      idIconeClima: "",
    };
  },
  methods: {
    getList() {
      this.api =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        encodeURIComponent(this.cidade) +
        "&cnt=5&appid=f2a5d824858cd289581d71f53b51e973";
      this.axios
        .get(this.api)
        .then((response) => {
          // notificacao de cidade encontrada com toast mas não exibir a primeira vez
          if (this.cidade != "") {
            const toast = useToast();
            toast.success(`Cidade "${this.cidade}" encontrada`);
          }

          this.respostaapi = response.data;
          this.respostaapigeral = response.data.list;

          this.clima = response.data.list[0].weather[0].main;
          console.log(this.clima);
          this.idIconeClima = response.data.list[0].weather[0].icon;
          this.temperatura = response.data.list[0].main.temp;

          // adicionar o país da cidade após ela
          this.cidade = this.cidade + " - " + response.data.city.country;

          // informar o dia da semana

          this.dia = response.data.list[0].dt_txt;
          this.vento = response.data.list[0].wind.speed;
          this.umidade = response.data.list[0].main.humidity;

          // usar pop para precipitacao
          this.precipitacao = response.data.list[0].pop;

          // converter temperatura em celsius
          (this.temperatura = this.temperatura - 273), 15;

          // arredondar temperatura
          this.temperatura = Math.round(this.temperatura) + "°C";

          // formata a data
          this.dia = this.dia.split(" ");
          this.dia = this.dia[0].split("-");
          this.dia = this.dia[2] + "/" + this.dia[1] + "/" + this.dia[0];

          // converte o vento em km/h
          this.vento = this.vento * 3.6;

          // arredonda o vento
          this.vento = Math.round(this.vento) + "km/h";

          // converte a umidade em %
          this.umidade = this.umidade + "%";

          // converte a precipitacao em %
          this.precipitacao = this.precipitacao * 100 + " %";

          // remover casa decimal da precipitacao
          this.precipitacao = this.precipitacao.split(".");
          this.precipitacao = this.precipitacao[0];

          // limpa o input
          this.cidadeexibida = this.cidade;
          this.cidade = "";

          // switch para o clima
          switch (this.clima) {
            case "Clear":
              this.clima = "Céu limpo";
              break;
            case "Clouds":
              this.clima = "Nublado";
              break;
            case "Rain":
              this.clima = "Chuva";
              break;
            case "Drizzle":
              this.clima = "Garoa";
              break;
            case "Thunderstorm":
              this.clima = "Tempestade";
              break;
            case "Snow":
              this.clima = "Neve";
              break;
            case "Mist":
              this.clima = "Névoa";
              break;
            case "Smoke":
              this.clima = "Fumaça";
              break;
            case "Haze":
              this.clima = "Neblina";
              break;
            case "Dust":
              this.clima = "Poeira";
              break;
            case "Fog":
              this.clima = "Névoa";
              break;
            case "Sand":
              this.clima = "Areia";
              break;
            case "Ash":
              this.clima = "Cinzas";
              break;
            case "Squall":
              this.clima = "Rajada";
              break;
            case "Tornado":
              this.clima = "Tornado";
              break;
            default:
              this.clima = "Clima não identificado";
              break;
          }
        })

        .catch((error) => {
          const toast = useToast();
          if (error.response && error.response.status === 404) {
            // Use a referência ao toast
            toast.error(`Cidade "${this.cidade}" não encontrada`);
          } else {
            console.error("Erro na requisição:", error);
            toast.error(`Erro ao buscar dados.`);
          }
        });
    },

    kelvinToCelsius(kelvin) {
      return Math.round(kelvin - 273.15);
    },

    horasPrevisao(data) {
      data = data.split(" ");
      data = data[1].split(":");
      return data[0] + ":" + data[1];
    },
  },
  mounted() {
    document.title = "Seeather - Dubovicky";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Previsão de Tempo desenvolvido por Dubovicky com Vue.js 3 e OpenWeather API"
      );
    // Chama getList quando o componente é montado
    this.getList();
  },
};
</script>

<template>
  <div class="container">
    <!-- Seção de Busca -->
    <div class="busca-cidade">
      <input class="pesquisa-cidade" type="text" v-model="cidade" placeholder="Digite a cidade:" @keyup.enter="getList" />
      <button @click="getList">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"></path></svg>Pesquisar
      </button>
    </div>

    <div class="titulo">
      <h1>Tempo em {{ cidadeexibida }}: {{ clima }}</h1>
    </div>

    <div class="total-info row">
      <div class="col temperatura row">
          <iframe v-if="clima === 'Céu limpo'" src="https://lottie.host/embed/73df8d5c-a9cf-425c-a4ea-38db99662783/LW8Yc0SJ0g.json"></iframe>
          <iframe v-if="clima === 'Nublado'" src="https://lottie.host/embed/0e865f3a-390a-4cd4-818e-d3816cc54431/WSIutDe5zh.json"></iframe>
          <img v-if="clima != 'Céu limpo' & clima != 'Nublado'" :src="'https://openweathermap.org/img/wn/' + idIconeClima + '@4x.png'" alt="Ícone do Clima" />
          <p class="temperatura">{{ temperatura }}</p>
      </div>
      <div class="col complementos row">
        <div class="vento bento-card">
          <ph-wind :size="32" :weight="weightPrevisao" color="#0d47a3" />
          <p>Vento:</p>
          <p>{{ vento }}</p>
        </div>
        <div class="umidade bento-card">
          <ph-drop :size="32" :weight="weightPrevisao" color="#0d47a3" />
          <p>Umidade:</p>
          <p>{{ umidade }}</p>
        </div>
        <div class="box-chuva bento-card full-width">
          <ph-umbrella :size="32" :weight="weightPrevisao" color="#0d47a3" />
          <p>Chuva:</p>
          <p>{{ precipitacao }} mm</p>
        </div>
      </div>
    </div>

    <!-- Seção de Previsão para os Próximos Dias -->
    <!-- <div class="proximos-dias row">
      <div
        class="box-previsao bento-card"
        v-for="dia in respostaapigeral"
        :key="dia.dt"
      >
        <p>
          <ph-clock-countdown
            :size="sizePrevisao"
            :weight="weightPrevisao"
            color="#0d47a3"
          />
          {{ horasPrevisao(dia.dt_txt) }}
        </p>
        <p>
          <ph-thermometer
            :size="sizePrevisao"
            :weight="weightPrevisao"
            color="#0d47a3"
          />
          {{ kelvinToCelsius(dia.main.temp) }}°C
        </p>
        <p>
          <ph-wind
            :size="sizePrevisao"
            :weight="weightPrevisao"
            color="#0d47a3"
          />
          {{ dia.wind.speed }} km/h
        </p>
        <p>
          <ph-drop
            :size="sizePrevisao"
            :weight="weightPrevisao"
            color="#0d47a3"
          />
          {{ dia.main.humidity }}%
        </p>
        <p>
          <ph-cloud-rain
            :size="sizePrevisao"
            :weight="weightPrevisao"
            color="#0d47a3"
          />
          {{ dia.pop }}%
        </p>
      </div>
    </div> -->

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

* {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    max-width: 100%;
}

body {
    margin: 0;
    padding: 0;
    height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #60a5fa 0%, #2563eb 100%);
}

.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.05); /* bg-white/20 */
    backdrop-filter: blur(1rem); /* backdrop-blur-lg */
    border-radius: 1.5rem; /* rounded-3xl */
}

.busca-cidade {
  display: flex;
  gap: 0.5rem; /* equivalente a gap-2 do Tailwind */
}

.pesquisa-cidade {
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.3); /* bg-white/30 */
  color: #ffffff; /* text-white */
  border: none;
  padding: 0.5rem 1rem; /* padding-top e padding-bottom equivalentes a py-2 e padding-left e padding-right equivalentes a px-4 */
  border-radius: 9999px; /* rounded-full */
}

.pesquisa-cidade::placeholder {
  color: rgba(255, 255, 255, 0.7); /* placeholder-white/70 */
}

.pesquisa-cidade:focus {
  outline: none; /* focus:outline-none */
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5); /* focus:ring-2 focus:ring-white/50 */
  backdrop-filter: blur(4px); /* backdrop-blur-sm */
}

button {
  background-color: #ffffff; /* bg-white */
  color: #1e40af; /* text-blue-600 */
  border: none;
  padding: 0.5rem 1rem; /* padding-top e padding-bottom equivalentes a py-2 e padding-left e padding-right equivalentes a px-4 */
  border-radius: 9999px; /* rounded-full */
  cursor: pointer;
  display: flex;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.9); /* bg-white/90 */
}

button .search-icon {
  width: 1rem; /* w-4 */
  height: 1rem; /* h-4 */
  margin-right: 0.5rem; /* mr-2 */
}

.row {
    display: flex;
}

.temperatura{
  flex-wrap: wrap;
  justify-content: center;
}

.temperatura p{
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-align: center;
}

.total-info {
    gap: 20px;
}

.col{
  background-color: rgba(255, 255, 255, 0.02); /* bg-white/20 */
  backdrop-filter: blur(1rem); /* backdrop-blur-lg */
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 2rem; /* p-8 */
  /* igualar altura */
}

h1{
  text-align: center;
  font-size: 2.125rem; /* text-lg */
  font-weight: 700; /* font-semibold */
  letter-spacing: 1px;
  color: white; /* text-white */
}

iframe{
  border: 0;
  /* zoom scale */
  transform: scale(1.6);
  width: 100%;
}

iframe svg{
  width: 200px!important;
}

.bento-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.full-width {
  flex: 0 0 100%;
}

.complementos {
  display: flex;
  flex-wrap: wrap;
}

.vento, .umidade {
  flex: 1 1 45%; /* Ajuste para dividir o espaço igualmente */
}

.box-chuva {
  flex: 1 1 100%; /* Ocupa 100% do espaço */
}

p{
  word-wrap: break-word;
  color: white;
}

/* responsivo */
@media (max-width: 768px) {
  .container{
    padding: 0.5rem;
    max-width: 90%;
    margin: 0 auto;
  }
  .row{
    flex-wrap: wrap;
  }
  .temperatura{
    width: 100%;
  }
  iframe{
    max-height: 100px;
    width: 100%;
  }
  h1{
    font-size: 1rem;
  }
  .col{
    padding: 1rem;
  }
}

</style>