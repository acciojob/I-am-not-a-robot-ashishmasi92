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
	 let clickImg = e.target.className ="selected"

count++
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


	


	
	
