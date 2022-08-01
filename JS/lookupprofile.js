let contacts = [
    {
        "firstname": "Arun",
        "lastname": "Shah",
        "mobile": "1234567890",
    },
    {
        "firstname": "Laxmi",
        "lastname": "Giri",
        "mobile": "12347890",
    },
    {
        "firstname": "Amit",
        "lastname": "Prajapati",
        "mobile": "1567890",
        
    }
];

function lookupprofile(name , prop){
    for (let i=0; i<contacts.length; i++){
if (contacts[i].firstname === name){
return contacts[i][prop] || "no such property";
}    
}
return "no such contact";
}
$(document).ready(()=>{
   $('.button1').on('click',()=>{
        let data = lookupprofile("Laxmi", "lastname");
        alert(data)
    })
})
