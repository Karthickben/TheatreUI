	


function validate(){
    

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;


    console.log(email+" "+password);

    fetch('http://localhost:8081/user-ms/v1/user/validate' ,{
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */* ',
        'content-type': 'application/json'
    },
    body: JSON.stringify({emailId:email,password:password,role:"suer"})
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        var status = data.status;
        if(status==200){
            window.location.href = "Welcome.html";
        }else{
            document.getElementById("result").innerHTML= `${data.errorDescription}`;
        }

       
    })

}


function register(){
    

    let user = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let  phone = document.getElementById("phone").value;
    let  repassword = document.getElementById("password2").value;
    let password = document.getElementById("password1").value;

    console.log(user+" "+email+" "+phone);
    if(password==repassword){
        console.log("inside register...");

    fetch('http://localhost:8081/user-ms/v1/user' ,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({emailId:email,userName:user,phoneNumber:phone,password:password})
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            document.getElementById("result").innerHTML= `${data.errorDescription}`;
    
           
        })

    }else{
        document.getElementById("result").innerHTML= "Passwords are not matching.";
    }


   


}

function goToSignUp(){
    console.log("Hello")
    window.location.href = "register.html";

}





