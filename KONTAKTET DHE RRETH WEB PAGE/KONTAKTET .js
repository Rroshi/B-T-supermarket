function send(){
            var a = document.forms["sherbim"]["Emer Mbiemer"].value;
            var b = document.forms["sherbim"]["Email"].value;
            var c = document.forms["sherbim"]["Numer Telefoni"].value;
            var d = document.forms["sherbim"]["Mesazhi"].value;
                if(a=="" || b=="" || c=="" || d==""){
        alert("Ju lutem plotesoni te gjitha fushat e kerkuara per te derguar kerkesen tuaj qe deshironi");
                    document.getElementById("formId").method="get";
            }
                else{
                    document.getElementById("formId").style.visibility='hidden';
                    document.getElementById("info3").style.visibility='hidden';
                    document.getElementById("after").style.display='block';
                    document.getElementById("formId").action="mailto:supermarket.buyandtaste@gmail.com";
                    document.getElementById("formId").method="post";
                }
            }
            if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
function shfaq(){
    document.getElementById("Sfoto").style.visibility="visible";
}
function fsheh(){
    document.getElementById("Sfoto").style.visibility="hidden";
}
function shfaq2(){
    document.getElementById("Sfoto").style.visibility="visible";
}
function fsheh2(){
    document.getElementById("Sfoto").style.visibility="hidden";
}
function PintShfaq(){
    document.getElementById("PintShow").style.visibility="visible";
}
function PintFsheh(){
    document.getElementById("PintShow").style.visibility="hidden";
}
function shfaqFb(){
        document.getElementById("facebookShow").style.visibility="visible";
}
function fshehFb(){
        document.getElementById("facebookShow").style.visibility="hidden";
}
function InShfaq(){
    document.getElementById("LinkedInShow").style.visibility="visible";
}
function InFsheh(){
    document.getElementById("LinkedInShow").style.visibility="hidden";
}
function twittShfaq(){
    document.getElementById("twittShow").style.visibility="visible";
}
function twittFsheh(){
    document.getElementById("twittShow").style.visibility="hidden";
}
function instaShfaq(){
    document.getElementById("instagramShow").style.visibility="visible";
}
function instaFsheh(){
    document.getElementById("instagramShow").style.visibility="hidden";
}


