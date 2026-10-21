// import template from "../vite-project/templates/country.hbs";

const country_research = document.querySelector("#country_research_form_SearchField");
const county_list = document.querySelector("#country_research_countryList");


const countries_API = `https://countries.dev/name/france`;

function get_data(name) {
    fetch(`https://countries.dev/name/${name}`).then((response) => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}).then((data) => {
    // infoTake(data)
    console.log(data);
})
};

const num = [0,1,2,3,4,5,6,7,8,9]

function input_write(e) {
    let value = e.target.value
    for(let i = 0; i < num.length; i++) {
        if(value.length < 1 || value.includes(num[i]) ) {
        return
        }};

    get_data(value)
};

function infoTake(data) {
    county_list.innerHTML = template({data})
}
country_research.addEventListener("input", _.debounce( input_write, 300));