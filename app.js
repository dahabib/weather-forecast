const apiKey = 'bf6469563a82df2403ea5a0473338f88';

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    // input field
    const cityInput = document.getElementById('city-input').value;
    callData(cityInput);
});

function callData(cityInput) {
    // const city = cityInput;
    // const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => displayData(data));
}


function displayData(data) {
    console.log(data);
    document.getElementById('city-name').innerText = data.name || "Unknown Location";
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('lead').innerText = data.weather[0].main;
    document.getElementById('icon').setAttribute('src', 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png');
    cityInput = "";

}
