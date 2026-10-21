const country_research = document.querySelector("#country_research_form_SearchField");


const countries_API = `https://countries.dev/name/france`;

function get_data(name) {
    fetch(`https://countries.dev/name/${name}`).then((response) => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}).then((data) => {
    console.log(data);
})
};

function input_write() {
    let value = country_research.value
    get_data(value)
}
country_research.addEventListener("input", _.debounce( input_write, 100))