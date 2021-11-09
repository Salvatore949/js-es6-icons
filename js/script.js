//Utilizzo il ciclo for per analizzare gli elementi presenti nell'array
// Creo delle costanti
// Utilizzo il query selector per collegare l'array con il div container
//Attraverso innerHTML stampo in pagina le varie car
//Utilizzo il filter per estrapolare e raggruppare dall'array gli elementi dello stesso colore diverso

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(icons)

for (let i = 0; i < icons.length; i++ ){
    const oggetto = icons[i];
    const nome = oggetto.name;
    const prefisso = oggetto.prefix;
    const tipo = oggetto.type;
    const famiglia = oggetto.family;
    const colore = oggetto.color;

    document.querySelector('.container').innerHTML += `
    <div class="card">
       <div id="content">        
            <i class = "${famiglia} ${prefisso}${nome} ${colore}" alt="${nome}"></i> 
            <span>${nome}</span>
       </div>
    </div>`  
}

const orange = icons.filter((oggetto) => {
   return oggetto.color === "blue" ;      
}
);

const green = icons.filter((oggetto) => {
    return oggetto.color === "green" ;      
 }
 );

 const blue = icons.filter((oggetto) => {
    return oggetto.color === "blue" ;      
 }
 );