


function validate(){
    

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch('http://localhost:8085/user/user-ms/v1/user/validate' ,{
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/plain, */* ',
        'content-type': 'application/json'
    },
    body: JSON.stringify({emailId:email,password:password,role:"user"})
    })
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        var status = data.status;

        if(status==200){

            localStorage.setItem("principle",email);
            window.location.href = "home.html";
        }else{
            document.getElementById("result").innerHTML= `${data.errorDescription}`;
        }

       
    })

}


function register(){
   

    let user = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let  phone = document.getElementById("phone").value;
    
    let password = document.getElementById("password1").value;
    let  repassword = document.getElementById("password2").value;

    

    console.log(user+" "+email+" "+phone);
    if(password==repassword){
        console.log("inside register...");

    fetch('http://localhost:8085/user/user-ms/v1/user' ,{
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
            var status = data.status;
            if(status==200){
                console.log(data);
                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth/2) - (width/2));
                 var top = parseInt((screen.availHeight/2) - (height/2));
                 var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                  left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                  myWindow = window.open("RegisteredSuccess.html", "subWind", windowFeatures);
                  setTimeout(function(){ window.location.href = "Login.html"; }, 3000);
                     
    
                
            }else{
                document.getElementById("result").innerHTML= `${data.errorDescription}`;
            }
            
    
           
        })

    }else{
        document.getElementById("result").innerHTML= "Passwords are not matching.";
    }


    


}
 


