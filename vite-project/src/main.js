import Handlebars from 'handlebars';
import templateSource from "../templates/country.hbs?raw";
Handlebars.registerHelper('eq', (a, b) => a === b);

const country_research = document.querySelector("#country_research_form_SearchField");
const country_list = document.querySelector("#country_research_countryList");


const template = Handlebars.compile(templateSource);


function get_data(name) {
    fetch(`https://countries.dev/name/${name}`).then((response) => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}).then((data) => {
    infoTake(data);
    console.log(data);
}).catch((error) => {
    console.log(error);
})
};

const num = [0,1,2,3,4,5,6,7,8,9,"=","/",".",",","'","_"]

function input_write(e) {
    let value = e.target.value
    for(let i = 0; i < num.length; i++) {
        if(value.length < 3) {
            if(value === "") {
                return
            }
            Toastify({
  text: "Too many matches found. Please enter a more specific query!",
  className: "info",
  style: {
    color:"black",
    background: "linear-gradient(to right, #fcc224, #ca0a0a)",
  }
}).showToast();

        return
        }else if(value.includes(num[i])) {
            Toastify({
  text: "Incorrect symbol",
  className: "alert",
  style: {
    color:"black",
    background: "linear-gradient(to right, #fc2424, #ca0a0a)",
  }
}).showToast();
            return
        }
    };
    country_list.style.display = "block"
    get_data(value)
};

function infoTake(data) {
    country_list.innerHTML = template(data);
}
country_research.addEventListener("input", _.debounce( input_write, 300));