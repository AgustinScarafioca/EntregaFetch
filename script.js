const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '845b66f506msh862a6697bb97598p16f553jsn1516f47f3f7b',
		'X-RapidAPI-Host': 'airport-info.p.rapidapi.com'
	}
};

fetch('https://airport-info.p.rapidapi.com/airport?iata=EZE', options)
	.then(response => response.json())
	.then(data => {
        let aeropuerto = document.getElementById("aeropuerto")
        aeropuerto.innerHTML = `
        <p>Nombre de aeropuerto: ${data.name}</p>
        <p>Dirección: ${data.street}</p>
        <p>Pais: ${data.location}</p>
        `
        console.log(data)
    })
	.catch(err => console.error(err));

    fetch('https://airport-info.p.rapidapi.com/airport?iata=AEP', options)
	.then(response => response.json())
	.then(data => {
        let aeropuerto = document.getElementById("aeropuerto2")
        aeropuerto.innerHTML = `
        <p>Nombre de aeropuerto: ${data.name}</p>
        <p>Dirección: ${data.street}</p>
        <p>Pais: ${data.location}</p>
        `
        console.log(data)
    })
	.catch(err => console.error(err));