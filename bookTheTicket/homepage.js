function myFunction() {
   
    getMovieDetails();
    getTheatreDetails();
    localStorage.setItem("location",document.getElementById("location").value);


}

 function locChange(){
    localStorage.setItem("location",document.getElementById("location").value);
     getTheatreDetails();
    
}
 
 





function getTheatreDetails(){

    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/getdetails')
    .then(response => response.json())
    .then((data) =>

    {console.log(data);
        let output = `  <br><div class="d-flex flex-row flex-nowrap overflow-auto">`;

            
        

    
         data.listOfTheatres.forEach(
       function(theatre){

        if(theatre.city==document.getElementById("location").value){
                 
        output+= `<div class="card card-block mx-3" >
        
        <a href="#" class="btn btn-fix text-left" onclick="getTheatreByIdonly(${theatre.theatreId})" style="border:none;outline:none;">
        <div class="card-body">
        
        <h4 class="card-title" style="color:crimson;font-weight:bold;">${theatre.theatreName.toUpperCase()}</h4>
        <p class="card-text" style="font-weight:bold;" > 
        ${theatre.buildingName.toUpperCase()},
        <br>${theatre.area.toUpperCase()},
        <br>${theatre.city.toUpperCase()}. 
        </p>
        
        </div>
        </a>
        </div>`;
            
        }
       
    
         }
         );
        document.getElementById("theatre-card").innerHTML=output+"</div>";
        document.getElementById("div7").innerHTML= `<h5>Theatres near you!</h5>`;

    
    
     }
    )

}

function getMovieDetails(){

    fetch('http://localhost:8085/movie/movie-ms/v1/movie/getdetails')
    .then(response => response.json())
    .then((data) =>

    {console.log(data);
        let output = ` <h5>Trending movies!</h5> <div class="d-flex flex-row flex-nowrap overflow-auto">`;


        

    
         data.listOfMovies.forEach(
       function(movie){
            
    	   
        var movieName = movie.movieName;
        output+= `<div class="card card-block mx-2" >
        
        <a href="#" class="btn btn-fix text-left" onclick="doMovieCardClick(${movie.movieId},
           '${movieName}'  )" style="border:none;outline:none;">
        <div class="card-body">
        
        <h4 class="card-title" style="color:crimson;font-weight:bold;">${movie.movieName.toUpperCase()}</h4>
        <p class="card-text" style="font-weight:bold;" > 
        ${movie.language.toUpperCase()}  | Rating:
        <span style="font-weight:bold;color:green;"> ${movie.rating} </span>
        <br>${movie.genre.toUpperCase()} |
        <span style="font-weight:bold;"> (${movie.censorCertificate.toUpperCase()}) </span>
        
        </p>
        
        </div>
        </a>
        </div>`;
    
         }
         );
        document.getElementById("movies-card").innerHTML=output+"</div>";
    
    
     }
    )


}


 
function goToSignUp(){
    console.log("Register")
    window.location.href = "register.html";

}

function goToSignIn(){
    console.log("Sing In")
    window.location.href = "Login.html";

}

function homepage(){
    //localStorage.clear();
    window.location.href = "home.html";
}

function logout(){
    localStorage.clear();
    window.location.href = "welcome.html";
}


function myBookings(){

    window.location.href = "MyBookings.html";


}

function getTheUserBookings(){



}

function getSerachResults(){
   
   var choice= document.getElementById("MorT").value;
   var searchText=document.getElementById("searchText").value;
   var loc= document.getElementById("location").value;

    if(choice=="Movies"){
        getMovieDetailsForSearch(searchText);
    }else{
        getTheatreDetailsForSearch(loc,searchText);
    }

    

}



function getMovieDetailsForSearch(movie){

    console.log("insdie search movie;")

    fetch("http://localhost:8085/movie/movie-ms/v1/movie/name/"+movie+"/getdetails")
    .then(response => 
        
        {
            if (response.status == 200) {
                return response.json();
              } else {
                throw Error(response.statusText);
              }
            }   )  

    .then((data) =>

    {console.log(data);
        let output = ` <div class="d-flex flex-row flex-nowrap overflow-auto">`;
         data.listOfMovies.forEach(
       function(movie){

            
        var movieName = movie.movieName;
        output+= `<div class="card card-block mx-2" >
        
        <a href="#" class="btn btn-fix text-left" onclick="doMovieCardClick(${movie.movieId},
           '${movieName}'  )" style="border:none;outline:none;">
        <div class="card-body">
        
        <h4 class="card-title" style="color:crimson;font-weight:bold;">${movie.movieName.toUpperCase()}</h4>
        <p class="card-text" style="font-weight:bold;" > 
        ${movie.language.toUpperCase()}  | Rating:
        <span style="font-weight:bold;color:green;"> ${movie.rating} </span>
        <br>${movie.genre.toUpperCase()} |
        <span style="font-weight:bold;"> (${movie.censorCertificate.toUpperCase()}) </span>
        
        </p>
        
        </div>
        </a>
        </div>`;
    
         }
         );
        document.getElementById("movies-card").innerHTML=output+"</div>";
        document.getElementById("theatre-card").innerHTML="";
        document.getElementById("div7").innerHTML= ``;
    
    
     }
    ).catch((error) => {
        document.getElementById("movies-card").innerHTML="<h5>No Movies Found :(</h5>"
        document.getElementById("theatre-card").innerHTML="";
        document.getElementById("div7").innerHTML= ``;


    });

}


function getTheatreDetailsForSearch(location,name){

    console.log(location);
    console.log(name);
    var count=0;
    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/getdetails')
    .then(response => response.json())
    .then((data) =>

    {console.log(data);
        let output = `  <br><div class="d-flex flex-row flex-nowrap overflow-auto">`;


        

    
         data.listOfTheatres.forEach(
       function(theatre){

        if(theatre.city==location && theatre.theatreName==name){
            output+= `<div class="card card-block mx-3" >
        
            <a href="#" class="btn btn-fix text-left" onclick="getTheatreByIdonly(${theatre.theatreId})" style="border:none;outline:none;">
            <div class="card-body">
            
            <h4 class="card-title" style="color:crimson;font-weight:bold;">${theatre.theatreName.toUpperCase()}</h4>
            <p class="card-text" style="font-weight:bold;" > 
            ${theatre.buildingName.toUpperCase()},
            <br>${theatre.area.toUpperCase()},
            <br>${theatre.city.toUpperCase()}. 
            </p>
            
            </div>
            </a>
            </div>`; 
            count++;
        }else{

            
        }
            
        
    
         }
         );

         if(count==0){
            document.getElementById("movies-card").innerHTML="<h5>No Theatres Found..</h5>";
            document.getElementById("theatre-card").innerHTML="";
            document.getElementById("div7").innerHTML= ``;

         }else{
            document.getElementById("movies-card").innerHTML=output+"</div>";
            document.getElementById("theatre-card").innerHTML="";
            document.getElementById("div7").innerHTML= ``;
         }
      

    
    
     }
    )

}



