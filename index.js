//eventListeners
document.addEventListener('DOMContentLoaded', () =>{
    let formInput = document.getElementById('ppty-form')
    formInput.addEventListener("submit", function (e){
        e.preventDefault()
        
   
       addPpty()
   
       formInput.reset()
    })
   
    function addPpty() {
        
        const title = document.createElement('h2');
        const img = document.createElement('div'); 
        const description = document.createElement('h3')
        const bids = document.createElement('h3');
        
      
       fetch(`http://localhost:3000/propertyData/${propertyTitle.value}`)
       .then(response => response.json())
           .then(data => {
           
       
           
             
               title.innerText = data.title;
   
               description.innerText = data.description;
   
               img.innerText=data.imageurl
              
               bids.innerText = data.bids;
              
               });
   
           const container = document.createElement('div')
           container.setAttribute('id', 'container')
           
           container.append(title,description,img,bids)
           
           const myDiv = document.getElementById("ppty-list")
           myDiv.append(container)
             }
   
           
       
   })