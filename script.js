if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(() => {
            console.log('Service Worker Registered');
        });
    });
}

document.getElementById('fetchBtn').addEventListener('click', async () => {
    const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs range from 1 to 898
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    document.getElementById('pokemonImage').src = data.sprites.front_default;
    document.getElementById('pokemonName').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
  });
