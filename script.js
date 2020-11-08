
const url = "https://rickandmortyapi.com/api/character";
const resultsContainer = document.querySelector(".results");

async function fetchCharacter() {
    try {
        const response = await fetch(url);

        const result = await response.json();
        console.dir(result);

        const characterInfo = result.results;
        resultsContainer.innerHTML = "";

        for (let i = 0; i < characterInfo.length; i++) {
            console.dir(characterInfo[i].name);
            console.dir()

            if (i === 18) {
                break;
            }
            resultsContainer.innerHTML += `<a href="details.html?id=${characterInfo[i].id}" class="result">
            <h2 class="title">${characterInfo[i].name}</h2>
            <img class="img-index" src="${characterInfo[i].image}"alt="${characterInfo[i].name}"/>
            <p class="type">Gender: ${characterInfo[i].gender}</p>
             <p class="type">Species: ${characterInfo[i].species}</p>
              <p class="type">Status: ${characterInfo[i].status}</p>
            </a>`;
        }
    } catch (error) {
        console.dir("An error occurred");
        resultsContainer.innerHTML = displayError("An error occurred when calling the API");
    }
    finally {
        console.dir("finally");
    }
}

fetchCharacter();
