

// var theme =0;
// document.querySelector('.change').addEventListener("click", function(){


// 	if (theme === 0) {
// 		document.querySelector("nav").classList.add('noir');
// 		document.querySelector("#un").classList.add('noir');
// 		document.querySelector("#deux").classList.add('noir');
// 		document.querySelector("#trois").classList.add('noir');
// 		document.querySelector("#quatre").classList.add('noir');
// 		document.querySelector("#cinq").classList.add('noir');
// 		document.querySelector(".un").classList.add('un2');
// 		document.querySelector(".deux").classList.add('deux2');
// 		document.querySelector(".trois").classList.add('trois2');
// 		document.querySelector(".quatre").classList.add('quatre2');
// 		document.querySelector(".cinq").classList.add('cinq2');
// 		document.querySelector("nav li").classList.add('noir');
// 		 document.querySelector("body").classList.add('noir');
// 		 document.querySelector(".wave").style.color="white";
// 		 document.querySelector(".langage h1").style.color="black";
// 		 document.querySelector(".div1 span").style.backgroundColor="black";
// 		document.querySelector(".div2 span").style.backgroundColor="black";
// 		document.querySelector(".div3 span").style.backgroundColor="black";
// 		document.querySelector(".div4 span").style.backgroundColor="black";

// 		document.querySelector(".div1 span").style.color="white";
// 		document.querySelector(".div2 span").style.color="white";
// 		document.querySelector(".div3 span").style.color="white";
// 		document.querySelector(".div4 span").style.color="white";

// 		document.querySelector("#change").innerHTML ="☀️";
// 		localStorage.setItem("noir","10");
// 		theme++;
		

// 	}
// 	else{
// 		document.querySelector("nav").classList.remove('noir');
// 		document.querySelector("#un").classList.remove('noir');
// 		document.querySelector("#deux").classList.remove('noir');
// 		document.querySelector("#trois").classList.remove('noir');
// 		document.querySelector("#quatre").classList.remove('noir');
// 		document.querySelector("#cinq").classList.remove('noir');
// 		document.querySelector(".un").classList.remove('un2');
// 		document.querySelector(".deux").classList.remove('deux2');
// 		document.querySelector(".trois").classList.remove('trois2');
// 		document.querySelector(".quatre").classList.remove('quatre2');
// 		document.querySelector(".cinq").classList.remove('cinq2');
// 		document.querySelector("nav li").classList.remove('noir');
// 		document.querySelector("body").classList.remove('noir');
// 		document.querySelector(".wave").style.color="white";
// 		document.querySelector(".langage h1").style.color="white";
// 		document.querySelector(".div1 span").style.backgroundColor="white";
// 		document.querySelector(".div2 span").style.backgroundColor="white";
// 		document.querySelector(".div3 span").style.backgroundColor="white";
// 		document.querySelector(".div4 span").style.backgroundColor="white";
// 		document.querySelector(".div1 span").style.color="black";
// 		document.querySelector(".div2 span").style.color="black";
// 		document.querySelector(".div3 span").style.color="black";
// 		document.querySelector(".div4 span").style.color="black";
// 		document.querySelector("#change").innerHTML ="🌕";
// 		localStorage.removeItem("noir");
// 		theme--;
// 	}
// })

// if(localStorage.hasOwnProperty('noir')){
// 	document.querySelector("nav").classList.add('noir');
// 		document.querySelector("#un").classList.add('noir');
// 		document.querySelector("#deux").classList.add('noir');
// 		document.querySelector("#trois").classList.add('noir');
// 		document.querySelector("#quatre").classList.add('noir');
// 		document.querySelector("#cinq").classList.add('noir');
// 		document.querySelector(".un").classList.add('un2');
// 		document.querySelector(".deux").classList.add('deux2');
// 		document.querySelector(".trois").classList.add('trois2');
// 		document.querySelector(".quatre").classList.add('quatre2');
// 		document.querySelector(".cinq").classList.add('cinq2');
// 		document.querySelector("nav li").classList.add('noir');
// 		document.querySelector("body").classList.add('noir');
// 		document.querySelector(".wave").style.color="white";
// 		document.querySelector(".langage h1").style.color="black";
// 		document.querySelector(".div1 span").style.backgroundColor="black";
// 		document.querySelector(".div2 span").style.backgroundColor="black";
// 		document.querySelector(".div3 span").style.backgroundColor="black";
// 		document.querySelector(".div4 span").style.backgroundColor="black";
// 		document.querySelector(".div1 span").style.color="white";
// 		document.querySelector(".div2 span").style.color="white";
// 		document.querySelector(".div3 span").style.color="white";
// 		document.querySelector(".div4 span").style.color="white";
// 		document.querySelector("#change").innerHTML ="☀️";
// 		theme++;
// }


//ne pas enlever ca en commentaire
// var rideaux =0;
// document.getElementById('change').addEventListener("click", function(){


// 	if (rideaux === 0) {

// 		document.querySelector("body").classList.add('noir');
// 		document.querySelector("#rideaux-change").innerHTML ="☀️";
// 		rideaux++;
		

// 	}
// 	else{
		
// 		document.querySelector("body").classList.remove('noir');
// 		document.querySelector("#rideaux-change").innerHTML ="🌕";
// 		rideaux--;
// 	}
// })









var text =document.querySelector('#text');


new Typewriter(text, {
	deletespeed: 20
})
.typeString('AURIAT Tristan  ')
.typeString('Etudiant')
.pauseFor(300)
.deleteChars(8)
.typeString('Développeur')
.start()

document.querySelector(".nav-toggler").addEventListener("click", function(){
    document.querySelector(".nav-toggler").classList.toggle("active");
	document.querySelector(".rideaux").classList.toggle("active");

})

