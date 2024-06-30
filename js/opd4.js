console.log("--- Page 4 ---");

const nintendoAPI = "../data/nintendo.json";

const container = document.querySelector(".container");

fetch(nintendoAPI)
.then(myData => myData.json())
.then(jsonData => inconsole(jsonData));
//  vertonnen in console
function inconsole(nintendoAPI) {
    for (let i = 0; i < nintendoAPI.length; i++) {
        const nintendo = nintendoAPI[i];
        console.log(nintendo);
    // weergeven in container 
        container.innerHTML += generateNintendoCard(nintendo);
    }
}

//use this function to generate the card for the product
function generateNintendoCard(nintendo) {
	const card = `
        <div class="card-nintendo">
            <div class="card-top">
                <h2>${nintendo.name}</h2>
            </div>
            <div class="card-image">
                <img src="${nintendo.image}" alt="product" srcset="" width="60" height="60">
            </div>
            <div class="card-bottom">
                <p>${nintendo.character}</p>
            </div>
        </div>
    `;
	return card;
}
