//eventListeners

const data = document.getElementById('ppty-form')

data.addEventListener(
    'submit', (e) =>{
        e.preventDefault()

        let fname =document.getElementById('name').value
        let img =document.getElementById('img').value
        let description =document.getElementById('description').value
        //let list =document.getElementById('btn').value

        sendToServer ={
            Name: FileList,
            imageUrl: FileList,
            description: File
        }

        console.info(sendToServer)

    }

)
console.log('hello', data)






//dom render function
function renderOneProperty(ppty){
    //build ppty
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHtml = `
    <img src="${property.imageUrl}">
        <div class='content'>
            <h4>${property.name}</h4>
            <p>
                $<span class="bid-count">${property.bid}</span> bided
            </p>

            <p>${property.description}</p>
        </div> 

        <div class="buttons">
        <button> bid $50 </button>
        <button> condirmed </button>
        </div>
    `    
}

//add property to DOM
//document.querySelector('#ppty-list').appendChild(cards)


//fetch request
//get fetch for all animal resources
function getAllProperty(){
    fetch('http://localhost:3000/propertyData')
    //unpackage data
    .then(res => res.json())
    //run the unpackaged data
    .then(propertyData => propertyData.forEach(ppty => renderOneProperty(ppty)))
    console.log('before fetch returns')
}

// initial render
//get data and render our ppty to dom
function initialize(){
    getAllProperty()
   // propertyData.forEach(property => renderOneProperty(property))
}

initialize()