let contentEl = document.getElementById("content");

function onDecrement(){
    let counter = contentEl.textContent;
    let newCounter = parseInt(counter);
    contentEl.textContent = newCounter-1
    if (parseInt(contentEl.textContent)<0){
        contentEl.style.color = "red";
    }
    else if(parseInt(contentEl.textContent)>0){
        contentEl.style.color ="green";
    }
    else{
        contentEl.style.color ="black";
    }
}


function onzero(){
    console.log("onzero running")
    contentEl.textContent = "0";
    if(parseInt(contentEl.textContent)===0){
        contentEl.style.color = "black";
        // counter.style.color = "black";
    }
}


function onIncrement(){
    let counter = contentEl.textContent;
    let newCounter = parseInt(counter);
    contentEl.textContent = newCounter+1
    if (parseInt(contentEl.textContent)<0){
        contentEl.style.color = "red";
    }
    else if(parseInt(contentEl.textContent)>0){
        contentEl.style.color ="green";
    }
    else{
        contentEl.style.color ="black";
    }
}