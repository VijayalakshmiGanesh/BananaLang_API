var translateText = document.querySelector("#textToTrans");
var translatedText = document.querySelector("#translatedText");
var btn = document.querySelector("#translate");

var URL = "https://api.funtranslations.com/translate/minion.json";

btn.addEventListener("click", clickHandler)

function clickHandler() {
    var input = translateText.value;

    fetch(responseURL(input))
        .then(response => response.json()).then(json => {
            var res = json.contents.translated;
            translatedText.innerText = res
        })
        .catch(errorHandler) //Calling server



};

function errorHandler(error) {
    console.log("Error Occured ... " + error)
    alert("Something is wrong! Try again later")
};

function responseURL(input) {
    console.log("inside response URL")
    return URL + "?text=" + input
}