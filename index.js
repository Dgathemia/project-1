//eventListeners
 document.addEventListener('DOMContentLoaded', () =>{
 let formInput = documrnt.getElementById(ppty-form)
 formInput.addEventListener("submit", function (e){
    e.preventDefault()

    addPpty()

    formInput.rest()
 })

 function addPpty() {
    const pptyForm = document.getElementById("ppty-form")
    const test = document.createElement('p');
    test.textContent = "aded ppty procedures were done at: "
    test.style.fontWeight = "900";

    const title = document.createElement('h2');
    const location = document.createElement('h3')
    const address = document.createElement('h3');
   
    fetch(`http://localhost:3000/propertyData/${pptyForm.value}`)
    .then(response => response.json())
        .then(data => {
    
        
          
            title.innerText = data.title;

            description.innerText = data.description;
           
            bids.innerText = data.bids;
           
            });

            const fName = document.getElementById("fname").value
            const bloodTypeRadio = document.querySelector('input[name="bloodType"]:checked').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;

            alert(`Thank you for bidding ${fName}.Your information has been registered successfully.`)

        const container = document.createElement('div')
        container.setAttribute('id', 'container')
        
        const p1 = document.createElement('p')
        p1.textContent = `Full Name: ${fName}`
        p1.style.fontWeight = "900";

        const pelleven = document.createElement('p')
        pelleven.textContent = `Donated Before: ${decision}`
        pelleven.style.fontWeight = "900";

        const ptwelve = document.createElement('p')
        ptwelve.textContent = `Date Of initial Donation: ${date2}`
        ptwelve.style.fontWeight = "900";

        container.append(test,title,location,address,)
        
        const myDiv = document.getElementById("ppty-list")
        myDiv.append(container)
          }

        
    
})