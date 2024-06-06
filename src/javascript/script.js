document.querySelector('#search').addEventListener('submit', async (event) => {
    event.preventDefault()

    const cityName = document.querySelector('#city_name').value

    if(!cityName){
        return showAlert('Você precisa digitar uma cidade...')
    }

    const apiKey = 'b1fb29e623b32e54cc7a4f9b877e0bf6'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt-br`

    const results = await fetch(apiUrl)
    const json = await results.json()
})

function showAlert(msg){
    document.querySelector('#alert').innerHTML = msg
}