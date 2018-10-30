import html from './html.js';

const tableBody = document.getElementById('pokemon-body');

function makeRow(pokemon) {
    return html`<tr>
        <td>${pokemon.pokemon}</td>
        <td>${pokemon.type_1}</td>
        <td>${pokemon.type_2}</td>
        <td>${pokemon.attack}</td>
        <td>${pokemon.ability_1}</td>
        <td>${pokemon.egg_group_1}</td>
</tr>`;
}

const pokemonTable = {
    init(pokemon) {
      // array method???
      // contacts.forEach(function(contact) {
      //     const tr = makeRow(contact);
      //     tableBody.appendChild(tr);
      // });

        for(let i = 0; i < pokemon.length; i++) {
            const tr = makeRow(pokemon[i]);
            tableBody.appendChild(tr);
        }
    }
}; 

export default pokemonTable;