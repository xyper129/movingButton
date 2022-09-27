
let btnSend = document.getElementById('send').addEventListener("click", message);
let cardBody = document.querySelector(".card-body");
let inputs = [];

    function message(){
        // if(userInput == ''){
        //     alert('Send something');
        // }else{
        //     inputs.push(chatInput);
        //     return x;
        // }
    
        let userInput = document.querySelector("#input").value;
        inputs.unshift(userInput);
        if (userInput === "") {
        alert("write something");
        inputs.pop(userInput);
        }else{
            for( let i = 0; i < inputs.length; i++){
            
                // console.log(inputs[i]);
                // let cardBody = document.querySelectorAll('.card-body');
                // let pop = document.createElement('p');
                // pop.innerText = inputs[i];
                // document.body.appendChild(pop);
                // let body = document.getElementsByClassName('card-body');  
                // let pop = document.getElementsByClassName('pop').value = inputs[i];
                // document.createElement('p')
                
                //  let div = document.createElement("div");
                //  div.className = "pop";
                //  let pop = document.createElement('p');
                //  pop.innerText = inputs[i];
                //  let cardBody = document.querySelector(".card-body");

                // let div = document.getElementsByClassName('pop').createElement('div');
                // cardBody.
                //  document.body.appendChild(div);

                //  let cardBody = document.querySelector('.card-body');

                
                // let cardBodyDiv = document.querySelector('.pop');
                // let cardBodyDivP = document.querySelectorAll('.pop p');
                let createNewPop = document.createElement('div');
                createNewPop.className = 'pop';
                createNewPop.style.transform = 'translate(20px, -50px)';
                createNewPop.style.lineHeight = "25px";
                // createNewPop.style.displayDirection = "column";
                createNewPop.innerHTML ='<h1>'+inputs[i]+'</h1>'
                inputs.shift(userInput);
                cardBody.insertAdjacentElement("beforeend", createNewPop);
                console.log(createNewPop);
                document.getElementById('input').value = '';
            }
        }
        
    }

    let blockBtn = document.querySelector('.block').addEventListener("click", blockMessage);
    function blockMessage() {
        let blockArray = [];
        let btnUnblock = document.getElementById('block-span').innerHTML = 'Unblock';
            let createBlockMessage = document.createElement("div");
            createBlockMessage.className = "block-message";
            createBlockMessage.style.transform = "translate(3px, -50px)";
            createBlockMessage.style.lineHeight = "25px";
            createBlockMessage.innerHTML = "<h1> You block messages and calls from Xyper's account</h1>";
            cardBody.insertAdjacentElement("beforeend", createBlockMessage);
            console.log(createBlockMessage);
    }

// let emojis = document.querySelector('#emoji').addEventListener('click', showEmojiTab);
// emojiToggle = true;
// function showEmojiTab(){
    // let emojiTab = document.getElementById('emojies');
    // let emoji = document.createElement('div');
    // emoji.className = 'emojies';
    // emoji.style.height = '150px';
    // emoji.style.width = "100%";
    // emoji.style.position = "relative";
    // emoji.style.backgroundColor = "#000";
    // emojiTab.insertAdjacentElement("beforeend", emoji);
    // console.log(emojiTab);

//     let emojiTab = document.getElementById("emoji");
  
//     if(emojiToggle === true){
//         emojiTab.style.backgroundColor = '#eee';
//         emojiTab.style.position = "absolute";
//         emojiTab.style.display = "flex";
//         emojiTab.style.flex = "wrap";
//         emojiTab.style.height = "100%";
//         emojiTab.style.width = "100%";
//         emojiToggle = false;
//     }
//     else{
//         emojiTab.style.backgroundColor = "#eee";
//         emojiTab.style.position = "absolute";
//         emojiTab.style.display = "flex";
//         emojiTab.style.flex = "wrap";
//         emj.style.visibility = "hidden";
//     }
// }
