
const inp =document.querySelector(".email");
const rslt =document.querySelector(".result");
const btn =document.querySelector(".btnd");
const num=document.getElementById("number");
const output=document.getElementById("number-result");
const locate=document.getElementById("address");
const rsts=document.getElementById("address-result")
const enquire=document.getElementById("enquiries")
const reply=document.getElementById("enquiries-result")

function valid(){
	if(inp.value == ""){
		rslt.innerHTML="email cannot be blank";
	}else if(inp.value!==''){
		rslt.innerHTML='';
	}else if(inp.value!="@gmail.com"){
		rslt.innerHTML="email invalid";
	}

	if(num.value==""){
         output.innerHTML="number cannot be blank";
	}else if(num.value!==''){
		output.innerHTML='';
	}else if(num.value<=11){
		output.innerHTML="number invalid";
	}

	if(locate.value == ""){
		rsts.innerHTML="address cannot be blank";
	}else if(locate.value!==""){
		rsts.innerHTML="";
	}
	if(enquire.value=""){
		reply.innerHTML="enquiries is empty";
	}else if(enquire.value!==''){
		reply.innerHTML='';
	}

}

btn.onclick=function(){
	valid();
}





// function validate(){
// 	document.querySelector(".email-result").innerHTML="please enter email";
// }

