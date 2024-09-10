
const closeMenu= ()=>{
    const Item= document.querySelector('aside');
    const shadow = document.querySelector('div.drk-side');
    Item.style.display= "none";
    shadow.style.display= "none";
}
const openMenu= ()=>{
    const Item= document.querySelector('aside');
    const shadow = document.querySelector('div.drk-side');
    Item.style.display= "flex";
    shadow.style.display= "block";
}

addEventListener('click', e =>{
    let trigger= e.target.tagName;
    if(trigger=== "A"){
        closeMenu()
    }
})