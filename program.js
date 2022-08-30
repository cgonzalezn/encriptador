
let inputParagraph = document.getElementById('input1'); 
let answerParagraph = document.getElementById('answer');
let foto=document.getElementById('fotoPrincipal');
let btnCopiar=document.getElementById('copyButton');


function btnEncrypt(){
    let textEncript ="";
    if (inputParagraph.value=="") {
        answerParagraph.innerHTML = "No message found. Try again!";
        
    } else {
        textEncript = encryptFunction(inputParagraph.value);
        answerParagraph.innerHTML = textEncript;
    }
    
    

    
}
 
function btnDecrypt(){
    let textDecript ="";
    
    if (inputParagraph.value=="") {
        answerParagraph.innerHTML = "No message found. Try again!";
        
    } else {
        textDecript = decryptFunction(inputParagraph.value);
        answerParagraph.innerHTML = textDecript;
    }
 
}  
 
function btnCopy(){
    let msm = document.getElementById('answer').innerHTML; //get the element
    
}      
  


   
    function encryptFunction(toEncrypt){
        var encrypt = "";
           
        for(var i=0;i<toEncrypt.length; i++){ // This funcion encrypt the word
       
            switch (toEncrypt.charAt(i)) {      
                case "a":                         
                	encrypt = encrypt.concat("ant");          
                	break;
                case "b":                         
                	encrypt = encrypt.concat("bee"); 
                	break;
                case "c":                         
                	encrypt = encrypt.concat("cat"); 
                	break;
                case "d":                         
                	encrypt = encrypt.concat("dog"); 
                	break;
                case "e":                         
                	encrypt = encrypt.concat("egg"); 
                	break;
                case "f":                         
                	encrypt = encrypt.concat("fan"); 
                	break;
                case "g":                         
                	encrypt = encrypt.concat("get"); 
                	break;
                case "h":                         
                	encrypt = encrypt.concat("hat"); 
                	break;
                case "i":                         
                	encrypt = encrypt.concat("idol"); 
                	break;
                case "j":                         
                	encrypt = encrypt.concat("jog"); 
                	break;
                case "k":                         
                	encrypt = encrypt.concat("kite"); 
                	break;
                case "l":                         
                	encrypt = encrypt.concat("lab"); 
                	break;
                case "m":                         
                	encrypt = encrypt.concat("man"); 
                	break;
                case "n":                         
                	encrypt = encrypt.concat("nut"); 
                	break;
                case "o":                         
                	encrypt = encrypt.concat("one"); 
                	break;
                case "p":                         
                	encrypt = encrypt.concat("pie"); 
                	break;
                case "q":                        
                	encrypt = encrypt.concat("quit"); 
                	break;
                case "r":                         
                	encrypt = encrypt.concat("rat"); 
                	break;
                case "s":                         
                	encrypt = encrypt.concat("sat"); 
                	break;
                case "t":                         
                	encrypt = encrypt.concat("tap"); 
                	break;
                case "u":                         
                	encrypt = encrypt.concat("unit"); 
                	break;
                case "v":                         
                	encrypt = encrypt.concat("van"); 
                	break;
                case "w":                         
                	encrypt = encrypt.concat("win"); 
                	break;
                case "x":                         
                	encrypt = encrypt.concat("xenon"); 
                	break;
                case "y":                         
                	encrypt = encrypt.concat("yawn"); 
                	break;
                case "z":                         
                	encrypt = encrypt.concat("zoo"); 
                	break;
                case " ":                         
                	encrypt = encrypt.concat(" "); 
                	break;
                	
                default:                        
                    foto.style.display="inline-flex";
                    btnCopiar.style.display="none";
                	return "you have made a mistake, try again!";
            } 
        }


        foto.style.display="none";
        btnCopiar.style.display="inline";
        return encrypt;
        
        
    }
    
    
    function decryptFunction(toDecrypt){
        
        let decrypt="";
        

               
        for(var i=0;(i<toDecrypt.length); i++){ // This funcion decrypt the word

            var test = toDecrypt.charAt(i);   

            if (test==" "){

                test=" ";
            } else {
                test = test+toDecrypt.charAt(i+1)+toDecrypt.charAt(i+2);
            }

            

         
            switch (test) {      
                case "ant":                         
                	decrypt = decrypt.concat("a");
                	i=i+2;
                	break;
                case "bee":                         
                	decrypt = decrypt.concat("b");
                	i=i+2;
                	break;
                case "cat":                         
                	decrypt = decrypt.concat("c");
                	i=i+2;
                	break;
                case "dog":                         
                	decrypt = decrypt.concat("d");
                	i=i+2;
                	break;
                case "egg":                         
                	decrypt = decrypt.concat("e");
                	i=i+2;
                	break;
                case "fan":                         
                	decrypt = decrypt.concat("f");
                	i=i+2; 
                	break;
                case "get":                         
                	decrypt = decrypt.concat("g"); 
                	i=i+2;
                	break;
                case "hat":                         
                	decrypt = decrypt.concat("h");
                	i=i+2;
                	break;
                case "ido":                         
                	decrypt = decrypt.concat("i");
                	i=i+3;
                	break;
                case "jog":                         
                	decrypt = decrypt.concat("j"); 
                	i=i+2;
                	break;
                case "kit":                         
                	decrypt = decrypt.concat("k"); 
                	i=i+3;
                	break;
                case "lab":                         
                	decrypt = decrypt.concat("l"); 
                	i=i+2;
                	break;
                case "man":                         
                	decrypt = decrypt.concat("m"); 
                	i=i+2;
                	break;
                case "nut":                         
                	decrypt = decrypt.concat("n"); 
                	i=i+2;
                	break;
                case "one":                         
                	decrypt = decrypt.concat("o"); 
                	i=i+2;
                	break;
                case "pie":                         
                	decrypt = decrypt.concat("p"); 
                	i=i+2;
                	break;
                case "qui":                        
                	decrypt = decrypt.concat("q"); 
                	i=i+3;
                	break;
                case "rat":                         
                	decrypt = decrypt.concat("r"); 
                	i=i+2;
                	break;
                case "sat":                         
                	decrypt = decrypt.concat("s"); 
                	i=i+2;
                	break;
                case "tap":                         
                	decrypt = decrypt.concat("t"); 
                	i=i+2;
                	break;
                case "uni":                         
                	decrypt = decrypt.concat("u"); 
                	i=i+3;
                	break;
                case "van":                         
                	decrypt = decrypt.concat("v"); 
                	i=i+2;
                	break;
                case "win":                         
                	decrypt = decrypt.concat("w"); 
                	i=i+2;
                	break;
                case "xen":                         
                	decrypt = decrypt.concat("x"); 
                	i=i+4;
                	break;
                case "yaw":                         
                	decrypt = decrypt.concat("y"); 
                	i=i+3;
                	break;
                case "zoo":                         
                	decrypt = decrypt.concat("z"); 
                	i=i+2;
                	break;
                case " ":                         
                	decrypt = decrypt.concat(" "); 
                	break;
                	
                default:                        
                	foto.style.display="inline-flex";
                    btnCopiar.style.display="none";
                    return "It can't be decrypted, check your spelling"
                    //i=toDecrypt.length;
                    //break;
            } 
        }
   
        foto.style.display="none";
        btnCopiar.style.display="inline";
        return decrypt;
        
        
    }

