const apiKey='f00c38e0279b7bc85480c3fe775d518c';


document.getElementById('getWeather').addEventListener('click',function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city) ;
    }
    else {
        alert('please enter a city name');
    }
});

function getWeather(city) {
    const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}&units=metric`;

    fetch (url)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('not found');
        }
        return Response.json();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(Error => {
        document.getElementById('weatherResult').innerHTML=`<p>${error.message}</p>`;
    });
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const city = data.name;

    weatherResult.innerHTML = `
    <h2> Weather in the ${city} </h2>
    <p>Temperature: ${temperature}</p>
    <p>Description : ${description}</p>
    `;
}
