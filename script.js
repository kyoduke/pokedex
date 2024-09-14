let currentPokemonId = 1;

async function fetchPokemonById(pokeid=null) {
    idInput = document.querySelector('#pokemon-id')
    if (pokeid === null) {
        currentPokemonId = Number.parseInt(idInput.value || currentPokemonId);
    } else {
        currentPokemonId = Number.parseInt(pokeid);
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`);
    const pokemon = await response.json();
    displayPokemon(pokemon);
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    `;
    document.body.className = pokemon.types[0].type.name;
}

function nextPokemon() {
    console.log('next')
    currentPokemonId+=1;
    console.log(currentPokemonId)
    fetchPokemonById(currentPokemonId);
}

function previousPokemon() {
    console.log('previous')
    if (currentPokemonId > 1) {
        currentPokemonId--;
        fetchPokemonById(currentPokemonId);
    }
}

fetchPokemonById();

