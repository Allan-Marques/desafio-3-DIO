// jogo.js

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
    // Calcula o dano baseado no tipo do herói e do oponente
    let dano = 0;
    switch (this.tipo) {
      case TipoHeroi.Guerreiro:
        // O guerreiro causa 50% do xp do oponente de dano
        dano = oponente.xp * 0.5;
        break;
      case TipoHeroi.Mago:
        // O mago causa 70% do xp do oponente de dano
        dano = oponente.xp * 0.7;
        break;
      case TipoHeroi.Monge:
        // O monge causa 20% do xp do oponente de dano
        dano = oponente.xp * 0.2;
        break;
      case TipoHeroi.Ninja:
        // O ninja causa 40% do xp do oponente de dano
        dano = oponente.xp * 0.4;
        break;
    }

    // Se o oponente estiver se defendendo, o dano é reduzido pela defesa do oponente
    if (oponente.defendendo) {
      dano = dano * (1 - oponente.defesa);
    }

    // Arredonda o dano para o inteiro mais próximo
    dano = Math.round(dano);

    // Subtrai o dano do xp do oponente
    oponente.xp -= dano;

    // Se o xp do oponente ficar menor ou igual a zero, lança um erro com o nome do vencedor e do derrotado
    if (oponente.xp <= 0) {
      throw new Error(`${this.nomeHeroi} ganhou usando ${tipoDoHeroi(this.tipo)} e ${oponente.nomeHeroi} perdeu usando ${tipoDoHeroi(oponente.tipo)}`);
    }
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

// app.js

// Importa as enumerações e a classe Heroi de jogo.js
import { TipoHeroi, TipoAcao, Heroi } from './jogo.js';

// Variáveis globais
let heroi = null;
let oponente = null;

// Função para escolher um herói
export const escolherJogador = () => {
  // Cria um array com os tipos de heróis
  const tiposDeHerois = [TipoHeroi.Guerreiro, TipoHeroi.Mago, TipoHeroi.Monge, TipoHeroi.Ninja];

  // Sorteia um índice aleatório entre 0 e 3
  const indice = Math.floor(Math.random() * 4);

  // Retorna um novo herói com o tipo sorteado
  return new Heroi("Jogador", 100, 100, tiposDeHerois[indice]);
};

// Função para sortear um oponente
export const sortearOponente = () => {
  // Cria um array com os tipos de heróis
  const tiposDeHerois = [TipoHeroi.Guerreiro, TipoHeroi.Mago, TipoHeroi.Monge, TipoHeroi.Ninja];

  // Sorteia um índice aleatório entre 0 e 3
  const indice = Math.floor(Math.random() * 4);

  // Retorna um novo herói com o tipo sorteado
  return new Heroi("Oponente", 100, 100, tiposDeHerois[indice]);
};

// Função para atacar o oponente
export function atacar(heroi) {
  // Tenta executar a função atacarHeroi do herói
  try {
    heroi.atacarHeroi(oponente);
  } catch (erro) {
    // Se ocorrer um erro, significa que o oponente ficou sem xp
    // Mostra a mensagem de erro com o nome do vencedor e do derrotado
    console.log(erro.message);
  }
}

// Inicialização
export function iniciarJogo() {
  // Escolhe um herói para o jogador
  heroi = escolherJogador();

  // Sorteia um oponente para o jogador
  oponente = sortearOponente();

  // Mostra as informações dos heróis
  console.log(`Você é o ${heroi.nomeHeroi} e usa ${tipoDoHeroi(heroi.tipo)}`);
  console.log(`O seu oponente é o ${oponente.nomeHeroi} e usa ${tipoDoHeroi(oponente.tipo)}`);
}

// Carrega o arquivo app.js como um módulo nativo do JavaScript
<script type="module" src="app.js"></script>










































































































































































































