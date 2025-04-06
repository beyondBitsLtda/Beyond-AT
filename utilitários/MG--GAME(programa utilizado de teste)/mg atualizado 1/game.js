// Variáveis globais
let jogadores = [];
let perguntas = [
    { pergunta: "O JavaScript é uma linguagem de programação?", resposta: true },
    { pergunta: "DevOps é uma prática de desenvolvimento ágil?", resposta: true },
    { pergunta: "MySQL é um sistema de banco de dados NoSQL?", resposta: false },
    { pergunta: "A linguagem Python foi criada por Guido van Rossum?", resposta: true },
    { pergunta: "Docker é uma ferramenta de virtualização?", resposta: false },
    { pergunta: "O Git é usado para controle de versão de código?", resposta: true },
    { pergunta: "O SQL é utilizado para gerenciar bancos de dados relacionais?", resposta: true },
    { pergunta: "O Node.js permite usar JavaScript no backend?", resposta: true },
    { pergunta: "Terraform é uma ferramenta para desenvolvimento de aplicativos?", resposta: false },
    { pergunta: "O Kubernetes é usado para orquestrar contêineres?", resposta: true },
    { pergunta: "O HTML é uma linguagem de marcação?", resposta: true },
    { pergunta: "O CSS é usado para estilizar páginas web?", resposta: true },
    { pergunta: "O React é uma biblioteca JavaScript para construção de interfaces de usuário?", resposta: true },
    { pergunta: "O Angular é um framework JavaScript?", resposta: true },
    { pergunta: "O Vue.js é uma biblioteca para construção de interfaces de usuário?", resposta: false },
    { pergunta: "O PHP é uma linguagem de programação?", resposta: true },
    { pergunta: "O Ruby on Rails é um framework para desenvolvimento web?", resposta: true },
    { pergunta: "O Java é uma linguagem de programação?", resposta: true },
    { pergunta: "O C++ é uma linguagem de programação?", resposta: true },
    { pergunta: "O Swift é usado para desenvolvimento de aplicativos iOS?", resposta: true },
    { pergunta: "O Kotlin é usado para desenvolvimento de aplicativos Android?", resposta: true },
    { pergunta: "O PostgreSQL é um sistema de banco de dados relacional?", resposta: true },
    { pergunta: "O MongoDB é um sistema de banco de dados NoSQL?", resposta: true },
    { pergunta: "O Redis é um sistema de banco de dados em memória?", resposta: true },
    { pergunta: "O Elasticsearch é usado para busca e análise de dados?", resposta: true },
    { pergunta: "O Jenkins é uma ferramenta de integração contínua?", resposta: true },
    { pergunta: "O Ansible é uma ferramenta de automação de TI?", resposta: true },
    { pergunta: "O Puppet é uma ferramenta de gerenciamento de configuração?", resposta: true },
    { pergunta: "O Chef é uma ferramenta de automação de infraestrutura?", resposta: true },
    { pergunta: "O Prometheus é uma ferramenta de monitoramento?", resposta: true },
    { pergunta: "O Grafana é usado para visualização de dados?", resposta: true },
    { pergunta: "O Nagios é uma ferramenta de monitoramento?", resposta: true },
    { pergunta: "O Splunk é usado para análise de logs?", resposta: true },
    { pergunta: "O Apache Kafka é uma plataforma de streaming de dados?", resposta: true },
    { pergunta: "O RabbitMQ é um broker de mensagens?", resposta: true },
    { pergunta: "O Nginx é um servidor web?", resposta: true },
    { pergunta: "O Apache HTTP Server é um servidor web?", resposta: true },
    { pergunta: "O Tomcat é um servidor de aplicações Java?", resposta: true },
    { pergunta: "O Spring Boot é um framework para desenvolvimento de aplicações Java?", resposta: true },
    { pergunta: "O Hibernate é uma ferramenta de mapeamento objeto-relacional?", resposta: true },
    { pergunta: "O JUnit é uma biblioteca para testes unitários em Java?", resposta: true },
    { pergunta: "O Mocha é uma biblioteca para testes em JavaScript?", resposta: true },
    { pergunta: "O Jest é uma biblioteca para testes em JavaScript?", resposta: true },
    { pergunta: "O Selenium é uma ferramenta para automação de testes de navegador?", resposta: true },
    { pergunta: "O Cypress é uma ferramenta para automação de testes de navegador?", resposta: true },
    { pergunta: "O Vagrant é uma ferramenta para criação e configuração de ambientes de desenvolvimento?", resposta: true },
    { pergunta: "O VirtualBox é uma ferramenta de virtualização?", resposta: true },
    { pergunta: "O AWS é um provedor de serviços de nuvem?", resposta: true },
    { pergunta: "O Azure é um provedor de serviços de nuvem?", resposta: true },
    { pergunta: "O Google Cloud Platform é um provedor de serviços de nuvem?", resposta: true }
];
let perguntaAtual = 0;
let pontuacoes = {};
let jogadoresCadastro = [];
let gameOver = false; // Controla se o jogo acabou

// Tela de Cadastro
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegando os valores dos jogadores
    let player1 = document.getElementById('player1').value.trim();
    let player2 = document.getElementById('player2').value.trim();
    let player3 = document.getElementById('player3').value.trim();
    let player4 = document.getElementById('player4').value.trim();

    // Verificar nomes únicos
    if (new Set([player1, player2, player3, player4]).size !== 4) {
        alert("Os nomes dos jogadores não podem ser repetidos.");
        return;
    }

    jogadoresCadastro = [player1, player2, player3, player4];
    jogadores = [...jogadoresCadastro];
    jogadores.forEach(jogador => pontuacoes[jogador] = 0); // Jogadores começam com 0 pontos

    // Esconde a tela de cadastro e mostra a tela de instruções
    document.getElementById('cadastro').style.display = 'none';
    document.getElementById('instrucoes').style.display = 'block';
});

// Tela de Instruções
document.getElementById('startGameBtn').addEventListener('click', function () {
    // Esconde a tela de instruções e mostra a tela de jogo
    document.getElementById('instrucoes').style.display = 'none';
    document.getElementById('jogo').style.display = 'block';

    // Exibe a primeira pergunta e a pontuação
    exibirPergunta();
    exibirPontuacoes();
});

function exibirPergunta() {
    const pergunta = perguntas[perguntaAtual % perguntas.length];
    document.getElementById('perguntaText').textContent = pergunta.pergunta;
    document.getElementById('respostaErrada').textContent = '';

    exibirJogadorAtual(); // Atualiza o jogador atual na tela
}

function exibirJogadorAtual() {
    const jogadorAtual = jogadores[perguntaAtual % jogadores.length]; // Alterna entre os jogadores
    document.getElementById('jogadorNome').textContent = jogadorAtual; // Exibe o nome do jogador atual
}

// Função para exibir pontuação
function exibirPontuacoes() {
    let scoreboard = '';
    jogadores.forEach(jogador => {
        scoreboard += `${jogador}: ${pontuacoes[jogador]} pontos<br>`;
    });
    document.getElementById('scoreboard').innerHTML = scoreboard;
}

// Verificar resposta
document.getElementById('trueBtn').addEventListener('click', function () {
    verificarResposta(true);
});

document.getElementById('falseBtn').addEventListener('click', function () {
    verificarResposta(false);
});

// Função para verificar a resposta e chamar o fim de jogo se necessário
function verificarResposta(respostaEscolhida) {
    if (gameOver) return; // Se o jogo acabou, não permite mais respostas

    const respostaCorreta = perguntas[perguntaAtual % perguntas.length].resposta;
    const jogadorAtual = jogadores[perguntaAtual % jogadores.length]; // Alterna entre jogadores a cada pergunta

    if (respostaEscolhida === respostaCorreta) {
        document.body.style.backgroundColor = '#00FF00'; // Fundo verde
        pontuacoes[jogadorAtual] += 100;
    } else {
        document.body.style.backgroundColor = '#FF0000'; // Fundo vermelho
        document.getElementById('respostaErrada').textContent = respostaCorreta ? "Resposta correta: Verdadeiro" : "Resposta correta: Falso";
    }

    perguntaAtual++;

    // Verifica se algum jogador alcançou 1000 pontos
    if (pontuacoes[jogadorAtual] >= 1000) {
        fimDeJogo(jogadorAtual); // Chama a função de fim de jogo passando o vencedor
    } else if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            document.body.style.backgroundColor = '#111'; // Reset fundo
            exibirPergunta();
            exibirPontuacoes();
        }, 1000);
    } else {
        // Caso chegue ao fim das perguntas sem vencedor
        fimDeJogo(); // Chama a função de fim de jogo sem vencedor
    }
}

// Função para exibir o vencedor e a pontuação final
function fimDeJogo() {
    gameOver = true; // Define que o jogo acabou

    // Função para reiniciar o jogo
    const verificarBtn = setInterval(() => {
        const btnReiniciar = document.getElementById("reiniciarBtn");
        if(btnReiniciar){
            console.log("true", btnReiniciar);
            btnReiniciar.addEventListener("click", () => {
                console.log("clicado")
                window.location.reload();
            });
            clearInterval(verificarBtn); //Para de procurar após encontrar o botão
        };
    }, 500); //Tempo de espera fixo para chamada

    // Verifica se há empate
    const maxPontuacao = Math.max(...Object.values(pontuacoes));
    const jogadoresEmpatados = jogadores.filter(jogador => pontuacoes[jogador] === maxPontuacao);
    if (jogadoresEmpatados.length > 1) {
        // Se houver empate, continua o jogo com os jogadores empatados
        jogadores = jogadoresEmpatados;
        perguntaAtual = 0;
        gameOver = false;
        exibirPergunta();
        exibirPontuacoes();
    } else {
        // Exibe a tela de fim de jogo
        document.getElementById('jogo').style.display = 'none'; // Esconde a tela do jogo
        document.getElementById('fimJogo').style.display = 'block'; // Mostra a tela de fim de jogo

        // Exibe a pontuação final dos jogadores
        exibirPontuacoesFinais();

        // Exibe a mensagem de vencedor
        exibirMensagemVencedor(jogadoresEmpatados[0]);
    }
}

// Função para exibir as pontuações no final do jogo
function exibirPontuacoesFinais() {
    let pontuacoesFinaisHTML = '<h3>Pontuação Final:</h3>';

    // Exibe as pontuações de todos os jogadores
    jogadoresCadastro.forEach(jogador => {
        pontuacoesFinaisHTML += `<p>${jogador}: ${pontuacoes[jogador]} pontos</p>`;
    });

    document.getElementById('pontuacoesFinais').innerHTML = pontuacoesFinaisHTML;
}

// Função para exibir a mensagem de vencedor
function exibirMensagemVencedor(vencedor) {
    document.getElementById('fimJogo').innerHTML += `<h2>Parabéns, ${vencedor}! Você venceu!</h2>`;
}