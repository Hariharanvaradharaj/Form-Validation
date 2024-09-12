const nameInput=document.querySelector ("#name");
const number=document.querySelector ("#number");
const email=document.querySelector ("#email");
const password=document.querySelector ("#password");
const message=document.querySelector ("#message");
const success=document.querySelector ("#success");

const errorNodes=document.querySelectorAll (".error");

function validateForm()
{

    clearMessage();
    let errorFlag=false;

    if(nameInput.value =="")
    {
        errorNodes[0].innerText="Name cannot be blank";
        errorFlag=true;
        // setError(nameInput)
    }
    // else{
    //     setsucess(nameInput)
    // }

    if(number.value == ""){
        errorNodes[1].innerText="Please Enter your Number";
        errorFlag=true;
        // setError(number)

    }
       else if(numberIsValid(number.value)==false){
            errorNodes[1].innerText="Please Enter 10-Digit number";
            errorFlag=true;
            // setError(number)

        }
        // else{
        //     setsucess(number)
        // }

      
    if(email.value == ""){
        errorNodes[2].innerText="Please Enter your Email";
        errorFlag=true;
        // setError(email)

        
}
      else if(!emailIsvalid(email.value)==false)
       {
        errorNodes[2].innerText="invaild email";
        errorFlag=true;
        // setError(email)
       }
    //    else{
    //     setsucess(email)
    //    }
       
    if(password.value == ""){
        errorNodes[3].innerText="Please Enter Password";
        errorFlag=true;
        // setError(password)
    }
     else if(!passwordIsvalid(password.value)==false){
        errorNodes[3].innerText="(Atleast 1 upper case,lower case,One Number,Special charactor, Atleast 8 Length)"
        errorFlag=true;
        // setError(password)
      }
      else{
        // setsucess(password)
      }



    if(message.value == ""){
        errorNodes[4].innerText="Please Enter Valid Message";
        errorFlag=true;
    }


    if (errorFlag==false)
    {
        success.innerHTML= "Form Validation Success"
        nameInput.value = " ";
        number.value = " ";
        email.value = " ";
        password.value = " ";
        message.value = " ";


    
    }

} 

function clearMessage()
{
    for(let i=0;i<errorNodes.length;i++)
    {
        errorNodes[i].innerText="";
    }
}


function emailIsvalid(k1)
{

    let pattern=/\s+@\s+\.\s+/;
    return pattern.test(k1);

}

function numberIsValid(n1){
    let pattern=/^\d{10}$/;
    return pattern.test(n1);
}

function passwordIsvalid(p1){
    let pattern=/^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,})+s/;
    return pattern.test(p1);
}