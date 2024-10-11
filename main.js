
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

// code useed to send an email 

const button= document.getElementById("session-pointer");
button.addEventListener("click", (event) => {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
    const message= document.getElementById("mmessage").value;
    const name= document.getElementById("name").value + " " + document.getElementById("surename").value;
    const contact= document.getElementById("contact").value;

    emailjs.send("service_zqmy47w","template_ttscy6c",{
      to_name: "MorningStudio",
      from_name:  `${name}  :  ${contact}`,
      message: message,
      }).then(
        (response) => {
          alert('Message succesfully sent!');
        },
        (error) => {
          alert('FAILED...', JSON.stringify(error));
        },
      );;
  }

// code used to go to whatsapp when a buttin in the merch section is clicked
const merchSection= document.getElementById("merch");

merchSection.addEventListener("click", e=>{
  if(e.target.tagName === "BUTTON"){
    window.open("https://wa.me/message/6R6Z7XZ2D7I6N1");
  }
})