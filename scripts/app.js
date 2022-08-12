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
function addtocart(id) {
    console.log(document.querySelector('.nav').children[0]);

    let z = 0
    while (z<length) {
        console.log(z);
        if (sort.value !=1) {
            document.querySelector('.nav').children[z].setAttribute('id', z)
        }
        z++
    }

    console.log(document.querySelector('.nav').children[0] );
    let number= id.getAttribute("id")
    console.log(document.querySelector('.nav').children[number].children[0].textContent);
    cart_menu.innerHTML+=`${document.querySelector('.nav').children[number].children[0].textContent} `
}

clear_cart.addEventListener('click',()=>{
    cart_menu.innerHTML=""
    console.log(123);
})