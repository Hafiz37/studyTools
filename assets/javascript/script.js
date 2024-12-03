


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






// input foto profil di form pendaftran


const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//jika pengguna mengarahkan kursor ke img div 

imgDiv.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});

//jika kita mengarahkan kursor keluar dari img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});



//ketika memilih foto untuk dikirm

file.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); 

        reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(choosedFile);
    }
});


// selesai input foto profil di form pendaftran










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
    let btn = document.getElementById('btnKirim')

    document.getElementById('textarea_count').innerHTML=element + "/10 (Min Character 10).";
	
	if(element >= 10){
		document.getElementById('textarea_count').innerHTML = element + " complete";
		document.getElementById('textarea_count').style.color = 'green';
        btn.disabled = false
	} else{
		document.getElementById('textarea_count').style.color = 'red';
        btn.disabled = true
	}

}


// selesai textarea menjawab dan bertanya di forum

