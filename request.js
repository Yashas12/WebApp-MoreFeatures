const key = 'e5bd1f579f58e660d03392b3e546f145';
/*const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=e5bd1f579f58e660d03392b3e546f145'

//http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=e5bd1f579f58e660d03392b3e546f145

fetch(baseURL)
    .then((data)=>{console.log('response',data.json())})
    .catch((error)=>{
        console.log(error);
    })*/

    const requestCity = async (city)=>{
        const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
        const query = '?q='+city+'&appid='+key;

        //const query = '?q=${city}&appid=${key}';

        //make fetch call (promise call)
        const response = await fetch(baseURL + query);

        //promise data
        const data = await response.json();
        return data;
    }
    //requestCity('Abuja');
