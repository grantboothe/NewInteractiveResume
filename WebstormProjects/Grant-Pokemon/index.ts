import {PokemonTrainer, Pokemon} from 'pokemon-ts/main'

class PokemonTrainerClass implements PokemonTrainer {
    name: string;
    numberofPokeballs:number;
    pokemon:Array<Pokemon>;
    gymBadges:string[];

    constructor(name: string, numberofPokeballs: number){
        this.name = name;
        this.numberofPokeballs = numberofPokeballs;

    }

    attack(pokemon:Pokemon, attackName:string) {
         return'${pokemon.name} attacks with ${attackName}';
    }
}

runAway():string{
    return 'Fleeing...';
}

healPokemon(pokemon:Pokemon){
    pokemon.heal();
}

var ekans = new Pokemon('ekans', 'Mario', 20);
var yoshi = new Pokemon('yoshi', 'Mario', 40);
var squirtle = new Pokemon('squirtle', 'Mario', 40);

var pokemon = [ekans, yoshi, squirtle];

var Mario = new PokemonTrainerClass('Mario', 10);

export function createMarioTrainer('Mario', 10){
    var ekans = new Pokemon('ekans', 'Mario', 20);
    var yoshi = new Pokemon('yoshi', 'Mario', 40);
    var squirtle = new Pokemon('squirtle', 'Mario', 40);

    var pokemon = [ekans, yoshi, squirtle];

    Mario.pokemon = pokemon;

    return mario;

}