let currentPokemonId = 1;

async function fetchPokemonById(pokeid=null) {
    let id;
    if (pokeid === null) {
        id = document.getElementById('pokemon-id').value || currentPokemonId;
    } else {
        id = pokeid;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
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

