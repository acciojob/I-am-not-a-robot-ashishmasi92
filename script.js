

let main = document.querySelector("main")
console.log(main);


let imgUrl = ["img1","img2","img3","img4","img5"]
let randomindex = Math.floor(Math.random()*imgUrl.length)
imgUrl.push(imgUrl[randomindex])


document.addEventListener("DOMContentLoaded",()=>{
    let heading = document.createElement("h3")
    heading.classList.add("h")
    heading.textContent ="Please click on the identical tiles to verify that you are not a robot";
    main.prepend(heading)

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
    
    
    if(imgclick.length=="2"){
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












    













































































// //your code here
// let main = document.querySelector("main")

// let classNameArr= ["img1","img2","img3","img4","img5"]

// let randomindex = parseInt(Math.random()*classNameArr.length)

// classNameArr.push(classNameArr[randomindex])




// classNameArr.sort((a,b)=> 0.5 - Math.random())



// for(let t of classNameArr){
//     let img = document.createElement("img");
//     img.className=t;
//     main.append(img)
// img.addEventListener("click",verifyRobo)
    
// }




// let h1 = document.createElement("h1")
// h1.innerText="I'm not a robot"
// // h1.id="h"
// h1.setAttribute("id","h")
// main.prepend(h1)




// let para = document.createElement("p")
// para.innerText="Please click on the identical tiles to verify that you are not a robot."
// para.setAttribute("id","para")

// main.append(para)




// function verifyRobo(e){
// let imgClick = e.target
// imgClick.classList.add("selected")


// if(imgClick.getElementsByClassName(".selected").length==1){

//     return;
// }





// // console.log("hello");


// if(document.getElementById("reset")==null){
//     let btn = document.createElement("button")
//     btn.id="reset"
//     btn.innerText="Reset"
//     main.append(btn)
//     btn.addEventListener("click",reload)
// }
// else if(document.querySelectorAll(".selected").length  <3){

//     let btn = document.createElement("button")
//     btn.id="verify"
//     btn.innerText="verify"
//     main.append(btn)
//     btn.addEventListener("click",verifyImage)
// }



// }





// function reload(e){
    
//     let selectedImg = document.querySelectorAll("img");
   

//     for(let t of selectedImg){

//         t.classList.remove("selected")

//     }

// e.target.remove()

// let verifyBtn =document.querySelector("#verify")

// verifyBtn.remove()

    
// }



// function verifyImage(){


//     let selected = document.querySelectorAll(".selected")

// if(selected[0].classList[0]==selected[1].classList[0]){
// h1.innerText= "You are not a robot"
// }
// else{
//     h1.innerText="You are a robot"
// }

// }






=======
//your code here
let para = document.createElement("p")

let main = document.querySelector("main")
main.append(para)
let arr = ["img1","ing2","img3","img4","img5"]

let randomIndex = Math.floor(Math.random()*arr.length)
	arr.push(arr[randomIndex])



for(let t of arr){
	let img = document.createElement("img")
	img.classList.add(t)
	main.append(img)
	img.addEventListener("click",clickImg)
}

let h3 = document.createElement("h3")
h3.innerText = "Please click on the identical tiles to verify that you are not a robot."
h3.id="h"

main.prepend(h3)

let count=0
 function clickImg(e){
	 if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        count++;
    }


	 if(document.querySelector("#reset")==null){
		 
	 let resetBtn = document.createElement("button")
	 resetBtn.innerText = "Reset"
		 resetBtn.id="reset"
	 main.append(resetBtn)
		 resetBtn.addEventListener("click",reload)
		


	 }
if(document.querySelector("#verify")==null){
	if(document.querySelectorAll(".selected").length==2){
		let verifyBtn = document.createElement("button")
	 verifyBtn.innerText = "Verify"
		 verifyBtn.id="verify"
	 main.append(verifyBtn)
		verifyBtn.addEventListener("click", verifyimages)
}
	
	}

	 if(document.querySelectorAll(".selected").length>2){
		 document.querySelector("#verify").disabled =true
	 }
	 


	 
}


arr.sort((a,b)=> 0.5 - Math.random())

function reload(){

let images = document.querySelectorAll("img")
for(let t of images){
	t.classList.remove("selected")
}
let verifyBtnRemove = document.querySelector("#verify")
	verifyBtnRemove.remove()
	let resetBtnRemove = document.querySelector("#reset")
resetBtnRemove.remove()
}


function verifyImages(){
	let selectedImg = document.getElementsByClassName("selected")

	if(selectedImg[0].classList[0]==selectedImg[1].classList[0]){
		para.innerText="You are a human. Congratulations!"
	}
	else{
		para.innerText = "We can't verify you as a human. You selected the non-identical tiles."
	}
}


	


	
	
>>>>>>> 38365131b128d27e8742082565d3cbb331f00f45
