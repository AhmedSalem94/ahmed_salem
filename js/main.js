
// start slider

let headerImg = document.querySelectorAll(".main-header img");
function interval(){
let randm = Math.floor(Math.random() * headerImg.length);
 for(let i = 0; i < headerImg.length; i++  ){
		headerImg[i].classList.remove('open');
 }
 headerImg[randm].setAttribute('class','open');
}
interval();
let man= setInterval(interval,10000);

// end slider

//header ul 
let buttonUl = document.querySelector('.show');
let listUl = document.querySelector('.main');

buttonUl.onclick = function(){
	if(listUl.classList.contains('none')){
	listUl.classList.remove('none');
	
	}else{
		listUl.classList.add('none');
	}
	
	
}
		
//start scroll

window.onscroll= function x(){

//start features

let features = document.querySelectorAll('.features section');
	

	
	if(window.pageYOffset >= 300){
	features[0].classList.add("open");
	features[1].classList.add("open");
	features[2].classList.add("open");
	features[3].classList.add("open");
	features[4].classList.add("open");
		
	}else{
	
	features[0].classList.remove('open');
	features[1].classList.remove('open');
	features[2].classList.remove('open');
	features[3].classList.remove('open');
	features[4].classList.remove('open');
		
		}

//end features

//start creative

let creative = document.querySelector('.creative');
	
	if(window.pageYOffset >= 700){
	
	creative.classList.add('open');
	
	}else{
	
	creative.classList.remove('open');
		
		}

//start creative

//start finished

let finished = document.querySelectorAll('.finished section');

	if(window.pageYOffset >= 1250){
	
	finished[0].classList.add('open');
	finished[1].classList.add('open');
	finished[2].classList.add('open');
	finished[3].classList.add('open');
	
			
		

	
	}else{
	
	finished[0].classList.remove('open');
	finished[1].classList.remove('open');
	finished[2].classList.remove('open');
	finished[3].classList.remove('open');
	
		}

//end finished

//end skill
let skill =document.querySelectorAll('.skill-skill span');
	
	if(window.pageYOffset >= 2300){
	
	skill[0].classList.add('open');
	skill[1].classList.add('open');
	skill[2].classList.add('open');
	skill[3].classList.add('open');
	skill[4].classList.add('open');
	
	}else{
	skill[0].classList.remove('open');
	skill[1].classList.remove('open');
	skill[2].classList.remove('open');
	skill[3].classList.remove('open');
	skill[4].classList.remove('open');		
	}
	
	//end skill

}
//start scroll
	
	
	