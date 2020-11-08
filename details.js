const resultsContainer = document.querySelector(".results");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);


const id = params.get("id");
console.dir(id);

const url = "https://rickandmortyapi.com/api/character/" + id;

async function fetchCharacter() {
    try {
        const response = await fetch(url);
        const details = await response.json();
        console.dir(details);

        createHtml(details);
    }
    catch (error) {
        console.dir("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
    finally {
        console.log("finally");
    }

}

fetchCharacter();

function createHtml(details) {
    resultsContainer.innerHTML = `<div class="result">
            <h1>${details.name}</h1>
            <img src="${details.image}" alt="${details.name}" />
            <div class="details.description">${details.gender}</div>
            <div class="details.description">${details.species}</div>
            <div class="details.description">${details.status}</div> 
                                  </div> `;
    document.title = `${details.name}`;

}