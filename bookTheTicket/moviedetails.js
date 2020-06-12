

function doMovieCardClick(movieNum,movieName){
    
    localStorage.setItem("movieId",movieNum);
    localStorage.setItem("movieName",movieName);
    window.location.href = "moviedetails.html";
    
    
    
}



function getMovieDetailsbyId(){
    
    getTheatreDetailsByNameAndLocation();
    console.log(localStorage.getItem("movieId"));
    console.log(localStorage.getItem("movieName"));

    fetch('http://localhost:8085/movie/movie-ms/v1/movie/id/'+localStorage.getItem("movieId")+'/getdetails')
    
    .then(response => response.json())
    .then((movie) =>

    {console.log(movie)
    
    	count=0;
     let output = 
        
        `<div class="card" style="width:500px;height: 500px;">
        <img class="card-img-top" src="movieThumbnail.jfif" alt="Card image" style="height: 200px;">
        <div class="card-body">
        <table>
        <tr><td><h3 class="card-title" style="color: maroon;">${movie.movieName} </h3></td>
        <td style="color:green;font-weight: bold;">|${movie.language}</td>
        <td style="color:green;font-weight: bold;">|${movie.censorCertificate}</td>
        
        </tr>
        </table>
          
 
          <p class="card-text">  <span style="font-weight: bold;">Description:</span> ${movie.description} 
             <br>
              <span style="font-weight: bold;">Cast:</span> 
              ${movie.cast}<br>
                 <span style="font-weight: bold;">Director:</span> 
                 ${movie.director}<br>
                      <span style="font-weight: bold;">Music:</span> 
                      ${movie.musicDirector} <br>
                      <span style="font-weight: bold;">Duration:</span> 
                      ${movie.duration} hrs<br>
                         <span style="font-weight: bold;">Rating:</span> 
                         ${movie.rating} <br>
                          <span style="font-weight: bold;">No Of Ratings:</span> 
                          ${movie.numberOfRatings}</p>


        </div>
      </div>`

      document.getElementById("moviedetails").innerHTML=output;
 
    
    }
    
    )


    function getTheatreDetailsByNameAndLocation(){

        fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/movie/'+
        localStorage.getItem("movieName")+'/location/'+localStorage.getItem("location")+'/getdetails')
        .then(response => response.json())
        .then((data) =>
    
        {console.log(data);
            let output ="";
    
    
             var count=0;
    
        
             data.listOfTheatre.forEach(
           function(theatre){
        	   console.log(theatre.screenId);

            if(theatre.city==localStorage.getItem("location")){
            	count++;
              output+= `<div class="card " style="width:400px;margin-left:50px;height:170px;" >
            
            
              <div class="container">
              
              <h4 class="card-title" style="color:crimson;font-weight:bold;">${theatre.theatreName.toUpperCase()}</h4>
              <table>
              <tr>
              <td style="width:150px;">
              <p class="card-text"> 
               <span style="font-weight: bold;">Movie:</span> ${theatre.movieName}
              <br><span style="font-weight: bold;">Screen:</span> ${theatre.screenName} 
              <br><span style="font-weight: bold;">Location:</span>${theatre.area},${theatre.city}. 
              <br>
              </p>
              </tr>
              <tr>
              <td>
              <a href="#" class="btn btn-danger" onclick="getTheatreDetailsById(${theatre.theatreId}
                  ,${theatre.screenId})";> Details</a>
              </td>
              </tr>
              </table>
              
              </div>
              </div>`
              ;
          


            }
                
           
             }
             );
             if(count!=0){
            	 document.getElementById("theatreDetailsByMovie").innerHTML=output; 
             }else{
            	 document.getElementById("theatreDetailsByMovie").innerHTML="<h3 Style='color:white;'>" +
            	 		"No Shows Availble</h3>";
             }
            
    
    
        
        
         }
        )

}

}