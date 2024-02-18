<template>
    <div class="sobre">
        <h1>Sobre o Projeto</h1>

        <h2>Bem-vindo ao aplicativo de consulta do tempo e previsão das horas seguintes!</h2>

        <p>Este aplicativo foi desenvolvido para fornecer a você informações precisas e atualizadas sobre o clima em qualquer lugar do mundo. Utilizando a API da OpenWeather, garantimos dados confiáveis sobre temperatura, umidade, velocidade do vento e condições meteorológicas em tempo real.</p>

        <p>Com uma interface intuitiva e fácil de usar, você pode simplesmente inserir o nome da cidade ou coordenadas geográficas para obter instantaneamente a previsão do tempo atual e das próximas horas. Além disso, para garantir que você esteja sempre informado sobre as buscas bem-sucedidas, implementamos notificações visuais utilizando o Vue Toastification, para indicar se a cidade foi encontrada com sucesso ou não.</p>

        <p>Navegue livremente pelo aplicativo utilizando o Vue Router, que permite uma navegação suave entre diferentes seções e funcionalidades. Além disso, para uma experiência visual agradável, integramos os belos ícones do Phosphor Icons, que adicionam um toque de estilo às informações meteorológicas exibidas.</p>

        <p>Combinando tecnologia moderna com uma abordagem amigável ao usuário, este aplicativo é perfeito para aqueles que desejam planejar suas atividades diárias com base nas condições climáticas. Espero que aproveite a experiência de usar este aplicativo e que ele o mantenha sempre preparado para enfrentar qualquer clima!</p>
    </div>
</template>

<script>
export default {
    name: 'AboutView'
}
</script>

<style scoped>
.sobre{
    padding: 20px;
    max-width: 40%;
    margin: 0 auto;
    background: #ffffff78;
    backdrop-filter: blur(4.64px);
    border-radius: 20px;
}
h1{
    font-size: 42px;
    margin-bottom: 60px;
}
h2{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
}

/* responsivo */
@media (max-width: 768px){
    .sobre{
        max-width: 100%;
    }
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 18px;
    }
}
</style>