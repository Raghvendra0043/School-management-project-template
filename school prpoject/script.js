// form Password validation..........................

var psw=document.getElementById('password');
var flag=1;

function check(elem){
    


    if(elem.value.length>0){
        if(psw.value != elem.value){
            document.getElementById('err').innerText="* Confirm Password does not match";
            // document.getElementById('err').style.border="2px solid red";
            // document.getElementById('err').style.padding="3px";
            // // document.getElementById('err').style.="3px";
            // document.getElementById('err').style.margin="3px";
            flag=0;
        }else{
            document.getElementById('err').innerText="";
            flag=1;
        }
    }else{
        document.getElementById('err').innerText="* Please enter Confirm password";
        flag=0;
    }
}



// form number validation.......................

function num(elem){
    if(isNaN(elem.value)){
        document.getElementById('err').innerText="Please enter only number";
       // flag=0;
    }else{
        document.getElementById('err').innerText="";
        //flag=1;

        if(elem.value.length>10){
            document.getElementById('err').innerText="Please enter only 10 digit";
            //flag=0;
        }else{
            document.getElementById('err').innerText="";
            //flag=1;
        };
       
    };
    
    
};

function validate(){
    if(flag == 1){
        return true;
    }else{
        return false;
    }
}

// show password...................................


function togel(elem){
    var type= psw.getAttribute('type');
    if(type == "password"){
        psw.setAttribute('type','text')
        document.getElementById('showpassword').style.color="blue";

    }else{
        psw.setAttribute('type','password');
        document.getElementById('showpassword').style.color="#431a1a";
    }
};


// capsLock detection.................................

window.addEventListener('keyup',event => {
    var isCaps= event.getModifierState('CapsLock');

    if(isCaps){
        document.getElementById('erra').innerText="Warning! CapsLock is On";
    }else{
        document.getElementById('erra').innerText="";
    }
})

//widespace validation.................

var pattern=/\s/g;
var email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
//var Email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var ale=document.getElementById('err');

function white(data){
    var Space=pattern.test(data);

    var Email=email.test(data);
    if(Space){
        ale.innerText="Space is not allowed"
    }else{
        ale.innerText="";
    }


    if(Email){
        ale.innerText="Please enter valid email "
    }else{
        ale.innerText="";
    }
}