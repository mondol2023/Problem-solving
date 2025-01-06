const apiKey='f00c38e0279b7bc85480c3fe775d518c';


document.getElementById('getWeather').addEventListener('click',function() {
    const city = document.getElementById('city').Value;
    if (city) {
        getWeather(city) ;
    }
    else {
        alert('please enter a city name');
    }
});

function getWeather(city) {
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q= ${city}&appid${apiKey}&units=metric';

    fetch (url)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('not found');
        }
        return Response.jason();
    })
    .then(data => {
        displayWeather(data);
    })
    .catch(Error => {
        document.getElementById('weatherResult').innerHTML='<p>${error.message}</p>';
    });
}
function displayWeather(data) 
{
    const weatherResult = document.getElementById('weatherResult');
    const temperature = data.main.temp;
    const discription = data.weather[0].discription;
    const city = data.name;

    weatherResult.innerHTML = '
    <h2> Weather in the ${city} </h2>
    <p>Temperature: ${temperature} C</p>
    <p>Description : ${description}</p>
    ';
}