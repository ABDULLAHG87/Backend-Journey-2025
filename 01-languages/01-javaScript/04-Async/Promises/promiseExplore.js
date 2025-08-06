

function getWeather(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Rain");
        }, 2000);
    })
}

function getWeatherIcon(weather){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            switch(weather){
                case 'Sunny':
                    resolve("Weather icon: 🚟");
                    break;
                case 'Rain':
                    resolve("Rain icon: 🚉");
                    break;
                default:
                    reject("Invalid Icon selected");
            }
        })
    }, 3000);
}

const promise = getWeather();

promise
    .then(
        function(data){
            console.log(data);
            return getWeatherIcon(data);
        }
    )
    .then(
        function(data){
            console.log(data);
        }
    )
    .catch(function(data){
        console.log(`Second Parameter ${data}`)
    })
