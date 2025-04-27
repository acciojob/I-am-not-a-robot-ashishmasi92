

let main = document.querySelector("main")
console.log(main);


let imgUrl = ["img1","img2","img3","img4","img5"]
let randomindex = Math.floor(Math.random()*imgUrl.length)
imgUrl.push(imgUrl[randomindex])

let heading = document.createElement("h3")
    heading.id="h"
    heading.textContent ="Please click on the identical tiles to verify that you are not a robot";
    main.prepend(heading)
    
document.addEventListener("DOMContentLoaded",()=>{
    

    imageShuffle()

})

function imageShuffle(){
let url = [...imgUrl]
for(let i=url.length-1;i>=0;i--){
    let j= Math.floor(Math.random()*(i+1));

    [url[i],url[j]] = [url[j],url[i]]
}
console.log(url);


 
    for(let i=0;i<=url.length-1;i++){
        let img = document.createElement("img")
        img.className = url[i]
        img.addEventListener("click",verifyRobo)
        main.append(img)

    }
    
}




// heading that display an instruction of further action




function verifyRobo(e){
    let clickedImg = e.target;
    clickedImg.classList.add("selected")
    
    if(document.querySelector("#reset")==null){
        
        // a reset btn appear when you clicked a img
        let resetBtn = document.createElement("button")
        resetBtn.id = "reset"
        resetBtn.textContent = "Reset"
        resetBtn.addEventListener("click",reload)
        main.append(resetBtn)
        
    }
    
    let imgclick = document.querySelectorAll(".selected")
    console.log(imgclick.length);
    
    
    if(imgclick.length===2){
        if(document.querySelector("#verify")==null){
            
            let verifyBtn = document.createElement("button")
            verifyBtn.id="verify"
            verifyBtn.textContent = "verify"
            verifyBtn.addEventListener("click",identical)
            main.append(verifyBtn)
            
            
        }
    }
    else if(imgclick.length>2){
        document.querySelector("#verify").remove()
    }
}






// reload function
function reload(e){

    let selectedImg = document.querySelectorAll("img")
    
    for(let t of selectedImg){
        t.classList.remove("selected")
    }
if(document.querySelector("#verify")){
    
    document.querySelector("#verify").remove()
}

if(document.querySelector("#para")){
    document.querySelector("#para").remove()
}
    e.target.remove()
}





// verify images

function identical(){

let identicalImg = document.querySelectorAll(".selected")
    let p = document.createElement("p")
    p.id="para"




if(identicalImg[0].classList[0]==identicalImg[1].classList[0]){
    console.log("yes");
    
    p.innerHTML = "You are a human. Congratulations!"
}
else{
p.innerHTML = "We can't verify you as a human. You selected the non-identical tiles."
}

main.append(p)

}

