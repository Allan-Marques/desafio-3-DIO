// app.js
import * as SystemJS from 'systemjs';

SystemJS.config({
  paths: {
    "app": "app.js",
    "jogo": "jogo.js"
  },
  deps: ["app"]
});

SystemJS.import("app").then((module) => {
  // Utilize o módulo app
  const heroi = new module.Heroi("Jogador", 50, 50, module.TipoHeroi.Guerreiro);
});

// Enumerações para representar os tipos de heróis e os tipos de ações
export const TipoHeroi = {
  Guerreiro: 0,
  Mago: 1,
  Monge: 2,
  Ninja: 3
};

export const TipoAcao = {
  Atacar: 0,
  Defender: 1
};

// Restante do código...



// Enumerações para representar os tipos de heróis e os tipos de ações

export const TipoAcao = {
  Atacar: 0,
  Defender: 1
};

// Classe para representar um herói
export class Heroi {
  // Propriedades
  nomeHeroi;
  xp;
  ataqueHeroi;
  defesa;
  tipo;
  defendendo;

  // Construtor
  constructor(nomeHeroi, ataqueHeroi, defesa, tipo) {
    // Inicializa as propriedades
    this.nomeHeroi = nomeHeroi;
    this.xp = 100;
    this.ataqueHeroi = ataqueHeroi;
    this.defesa = defesa;
    this.tipo = tipo;
    this.defendendo = false;
  }

  // Métodos

  // Ataca o oponente
  atacarHeroi(oponente) {
    // Restante do código
  }

  // Se defende do ataque do oponente
  defenderHeroi() {
    // O herói não pode se defender mais de uma vez
    this.defendendo = true;
  }

  // Função para gerar o texto de saída
  static gerarTextoSaida(vencedor, derrotado) {
    // Restante do código
  }
}

// Funções para retornar o tipo do herói e o ataque do herói
export function tipoDoHeroi(tipo) {
  // Restante do código
}

export function ataqueDoHeroi(tipo) {
  // Restante do código
}

// Função para escolher um herói
export const escolherJogador = () => new Promise((resolve, reject) => {
  const tiposDeHerois = [TipoHeroi.Guerreiro, TipoHeroi.Mago, TipoHeroi.Monge, TipoHeroi.Ninja];

const oponente = Math.floor(Math.random() * 4);

return new Promise((resolve, reject) => {
  resolve(new Heroi("Jogador", 100, 100, tiposDeHerois[oponente]));
});

  // Restante do código
});

// Função para sortear um oponente
export const sortearOponente = () => new Promise((resolve, reject) => {
  // Restante do código
});

// Função para atacar o oponente
export async function atacar(heroi) {
  // Restante do código
}

// Variáveis globais
let heroi = null;
let oponente = null;

// Inicialização
export async function iniciarJogo() {
  // Restante do código
}



































































































































































































































































































































































































































































































































































































































































































