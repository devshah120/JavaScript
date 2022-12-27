const courses = [
    {
        name: "Complete JavaScript course",
        price:"2.3"
    },
    {
        name: "Complete ReactJS course",
        price:"3.0"
    },
    {
        name: "Complete Angular course",
        price:"1.7"
    },
    {
        name: "Complete C++ course",
        price:"3.6"
    },
    {
        name: "Complete MERN course",
        price:"3.1"
    },
] 

{/* <ul>
<li class="list-group-item">Complete MERN course</li>
</ul>

<span class="float-right">$1.2</span>*/}
//console.log(course);

function generateList(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement("li")
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)

    })
}

// generateList();

window.addEventListener("load",generateList)

const abutton = document.querySelector(".asort-btn")
const dbutton = document.querySelector(".dsort-btn")

abutton.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    generateList();
})

dbutton.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateList();
})