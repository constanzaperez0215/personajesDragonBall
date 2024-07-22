const buscar = document.getElementById('search')
const container = document.getElementById('container')

buscar.addEventListener('input', (e) => {
    const search = e.target.value
    console.log(search)
    render(search)
  })

const getData = async (query = '') => {
    try {
        const res = await fetch(`https://dragonball-api.com/api/characters/?name=${query}`)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.error('Tienes un error en el consumo de la API')
    }
}

const render = async (query = '') => {
    container.innerHTML = ''
    const data = await getData(query)
    // const personajes = data
    

    let personajes = [];
    if (query === '') {
        personajes = data.items // Asume que `data.items` contiene todos los personajes cuando `query` está vacío
    } else {
        personajes = data // Asume que `data.item` contiene el personaje buscado cuando `query` no está vacío
    }

    console.log(personajes)

    personajes.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url(${p.image})`;

        let personaje = `
            <div class="first-content">
                <span>${p.name}</span>
            </div>
            <div class="second-content">
                <p>${p.description}</p>
            </div>
        `;

        card.innerHTML = personaje;
        container.appendChild(card);
    });

}

render()