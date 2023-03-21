//const request = new XMLHttpRequest();
//request.open('GET','https://restcountries.com/v2/name/india?fullText=true');
//request.send();

//const request = fetch('https://restcountries.com/v2/name/india?fullText=true');
//console.log(request);

/*
    Promise is a container for an asynchronously delivered value.
    Container for a future value.

    Eg.: Lottery Ticket:
    Its asynchronous:

    Life cycle: 
    PENDING -- > SETTLED => either FULFILLED or REJECTED.
    SETTLED ONLY ONCE.
*/

/*
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(function(response){
        //console.log(response);
        return response.json(); 
    })
    .then(function(data){
        console.log(data[0]);
    });
};

getCountryData('india');
*/

//The above function can also be simplified as:

const getCountryData = country => {
    fetch(`https://restcountries.com/v2/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(data =>{
        console.log(data[0])
        const borders = data[0].borders;
        if(borders){
            borders.map(value => {
                fetch(`https://restcountries.com/v2/alpha/${value}`)
                .then(response1 => response1.json())
                .then(data1 => console.log(data1) )    
            })
        }
        else{
            console.log(` ${data[0].name} is an isolated island..!!`)
        }
    });
}

//getCountryData('india');
//getCountryData('poland');
//getCountryData('australia');
//getCountryData('usa');
getCountryData('nepal');


//Like this promises gets rid of the callback hell

//Promise Chaining


//Handling Errors:

