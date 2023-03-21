/*
    Synchronours:
    Line by line
    Each line waits for previous line to finish
    Long running operations block code execution - eg. Prompt

    setTimeout = run in the background - asynchronous.

    Asynchronous: Not occuring at the same time.
    code is executed after a task that runs in the background finishes.
    This code is non-blocking
    Execution doesn't wait for an asynchronous task to finish its work.

    AJAX - Allows us to communicate with remote web servers in asynchronous way without reloading the web page and use that data.

    API - Piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

*/

//const countries = document.querySelector(".country");
/*
const para = document.createElement("p");

const request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/name/india?fullText=true'); //Open a request
request.send(); //we cannot do result = request.send because its async


request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText); //destructuring
    //console.log(data);

    const html = document.createTextNode(`Hi I am Anish`);
    //para.insertAdjacentHTML('beforeend',"Hi");
    para.appendChild(html);
})
*/


/*
    https://restcoutries.com/rest/v3.1/name/india

    Domain Name: restcountries.com 
    DNS - Domain Name Server: Phonebooks of the internet.

    First step is to match server's IP with the help of DNS. google.com - 198.168.2.2:433 => eg.IP Address along with the port
    After DNS:
    URL becomes:
    https://198.168.2.2:433/rest/v3.1/name/india
*/
