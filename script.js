const input = document.getElementById('input')
const buscar = document.getElementById('search')
const container = document.getElementById('container')

const getData = async () => {
    try {
        const res = await fetch('https://dragonball-api.com/api/characters')
        const data = await res.json()
        console.log(data.items)
        return data.items
    } catch (error) {
        console.error('Tienes un error en el consumo de la API')
    }
}

const render = async () => {
    const data = await getData()
    console.log(data)

    data.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.backgroundImage = `url(${p.image})`;

        let personaje = `
            <div class="first-content">
                <span>${p.name}</span>
            </div>
            <div class="second-content">
                <span><img class="img" src="${p.image}" alt=""></span>
            </div>
        `;

        card.innerHTML = personaje;
        container.appendChild(card);
    });

}

render()