
    const apikey = "c8e6c18f5cc36f5bafbd642a4123728b";
    const apiurl = "https://api.openweathermap.org/geo/1.0/direct?&units=metric&q=karnal";

    async function checkWheather(){
        const response = await fetch(apiurl+`&appid=${apiKey}`+`&limit=5`);
        var data = await response.json();

        if(!data[0]){
        console.log(data);
        }
    }

    checkWheather();