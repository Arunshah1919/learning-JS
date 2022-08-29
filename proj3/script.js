const courses = [
    {
        name : "React JS course",
        price : "2.4",
    },
    {
        name : "Node JS course",
        price : "2.2",
    },
    {
        name : "Angular JS course",
        price : "2.8",
    },
    {
        name : " JavaScript course",
        price : "2.6",
    },
]
function generateList(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
    
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);
        li.appendChild(span);

        ul.appendChild(li);
        
    }); 
};
generateList()

const button = document.querySelector(".sort-btn");
button.addEventListener("click", function(){
    courses.sort((a, b) => a.price - b.price);
    generateList();
})
