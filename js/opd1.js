console.log("--- Page 1 ---");

/**
 * @param {[]} array
 */
// array van objecten van land en inwoners 
const arrayOfobjects =[
    {
        country: 'Marokko',
        inhabitants: 3784004416,

    },
    {
        country: 'Nederland',
        inhabitants: 17618299,
        
    },
    {
        country: 'Suriname',
        inhabitants: 62323718,
        
    },
    {
        country: 'Turkije',
        inhabitants: 8581619917,
        
    },
];
function createTable(array) {
	const table = document.querySelector(".custom-tbl");
	let rows = `
        <tr class="custom-th">
            <th>Country</th>
            <th>Inhabitants</th>
        </tr>
    `;
	array.forEach((obj) => {
		rows += `
        <tr class="custom-tr">
            <td>${obj.country}</td>
            <td>${obj.inhabitants}</td>
        </tr>
        `;
	});
	table.innerHTML += rows;
}
createTable(arrayOfobjects);
/**
 * @param {Object} obj object met de meeste inwoners
 */
function showCountry(obj) {
	const countryCard = `
        <article class="information [ card ]">
                <span class="tag">Geografisch weetje</span>
                <h2 class="title">${obj.country}</h2>
                <p class="info">Het land ${obj.country} heeft een aantal inwoners van ${obj.inhabitants}</p>
                <button class="button">
                    <span>Lees meer</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
                    </svg>
                </button>
            </article>
    `;

	const temp = document.querySelector(".cards");
	temp.innerHTML += countryCard;
}


let countryInhabitans  = arrayOfobjects[0];
for (let i = 1; i < arrayOfobjects.length; i++) {
 if(arrayOfobjects[i].country > countryInhabitans.country) {

 }
    
}
//  function aanroepen 
showCountry(countryInhabitans);