// halaman login

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
// selesai halaman login





// navbar

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// selesai navbar



// textarea menjawab dan bertanya di forum

function charCount(){
    let element = document.getElementById('textarea').value.length;
    document.getElementById('textarea_count').innerHTML=element + "/10 (Min Character 10).";
	
	if(element >= 10){
		document.getElementById('textarea_count').innerHTML = element + " complete";
		document.getElementById('textarea_count').style.color = 'green';
	} else{
		document.getElementById('textarea_count').style.color = 'red';
	}

}


// selesai textarea menjawab dan bertanya di forum