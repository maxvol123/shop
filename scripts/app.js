let nav = document.querySelector('.nav')
let sort = document.querySelector('.sort')
let cart_menu = document.querySelector('.cart_menu')
let clear_cart = document.querySelector('.clear_cart')
let length=nav.children.length
let i = 0

let foto = [
    "/img/ASUS.jfif",
    "/img/HP.jfif",
    "/img/SAMSUNG.jfif",
    "/img/LENOVO.jfif"
]
while (i<length) {
    nav.children[i].innerHTML+=`<img src=${foto[i]} class="foto">`
    nav.children[i].innerHTML+=`<span class="price">${nav.children[i].getAttribute("price")}</span>`
    nav.children[i].innerHTML+=`<button class='buy' type="button" onclick="addtocart(this.parentNode)">Add to cart</button>`
    nav.children[i].setAttribute('id',i)
    i++
}
function After(element, refElement) {
    return refElement.parentNode.insertBefore(element, refElement.nextSibling)
}
function cheap() {
    for (let y = 0; y < length; y++) {
        for (let j = y; j < length; j++) {
            if (+nav.children[y].getAttribute("price")>+nav.children[j].getAttribute("price")) {
                replaceNode= nav.replaceChild(nav.children[j], nav.children[y])
                After(replaceNode, nav.children[y])
            }
        }        
    }
}
function expensive() {
    for (let y = 0; y < length; y++) {
        for (let j = y; j < length; j++) {
            if (+nav.children[y].getAttribute("price")<+nav.children[j].getAttribute("price")) {
                replaceNode= nav.replaceChild(nav.children[j], nav.children[y])
                After(replaceNode, nav.children[y])
            }
        }        
    }
}
sort.addEventListener('change',()=>{

    if (sort.value==2) {
        expensive() 
    }else{
        if (sort.value==3) {
            cheap() 
        }
    }
})

console.log(localStorage.getItem("a"));
if (localStorage.getItem("a")==null) {
    let a=1
    localStorage.setItem("a",a)
    console.log(15);
}
a=localStorage.getItem("a")
console.log(a);
function addtocart(id) {
    a=localStorage.getItem("a")
    a = Number(a);
    let number= id.getAttribute("id")
    let component= `${document.querySelector('.nav').children[number].children[0].textContent} ` 
    let z = 0
    while (z<length) {
        if (sort.value !=1) {
            document.querySelector('.nav').children[z].setAttribute('id', z)
        }
        
        z++
    }

    cart_menu.innerHTML+= component
    console.log(a);     
    localStorage.setItem(`id${a}`, component)
    a=a+1
    localStorage.setItem("a",a)
    
}
render()
function render() {
    let x = 1
        while (localStorage.length-1>=x) {
            cart_menu.innerHTML+=localStorage.getItem(`id${x}`); 
           x++  
        }
}
clear_cart.addEventListener('click', ()=>{
    
})