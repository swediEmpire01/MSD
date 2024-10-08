
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

function sendEmail() {
    const message= document.getElementById("mmessage");
    const name= document.getElementById("name") + " " + document.getElementById("surename");
    const email= "husseniswedi2@gmail.com"
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.set('Authorization', 'Basic ' + btoa('bfe5c145ea962c7778a2a4a252b25cb9'+":" +'1135eea87a60ee3aab695ca423316629'));
  
    const data = JSON.stringify({
      "Messages": [{
        "From": {"Email": "vanluke19@gmail.com", "Name": "Morning Studio Client"},
        "To": [{"Email": email, "Name": name}],
        "Subject": "Client Request From Website",
        "TextPart": message
      }]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
    };
  
    fetch("https://api.mailjet.com/v3.1/send", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }