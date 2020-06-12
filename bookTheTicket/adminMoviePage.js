


function getTheMovieList(){


    fetch('http://localhost:8085/movie/movie-ms/v1/movie/getdetails')
    .then(response => response.json())
    .then((data) =>

    {console.log(data);
        let output = `
        <div class="table-responsive">
        <table class="table table-hover">
            <caption>Movie List</caption>
            <thead class="thead-dark">
              <tr>
                <th>Movie Name</th>
                <th>Language</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Cast</th>
                <th>Director</th>
                <th>Music Director</th>
                <th>Duration</th>
                <th>Censor Certificate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>`;

        data.listOfMovies.forEach(
       function(movie){
           console.log(movie);
        output += `
        <tr>
            <td>${movie.movieName}</td>
            <td>${movie.language}</td>
            <td>${movie.description}</td>
            <td>${movie.genre}</td>
            <td>${movie.cast}</td>
            <td>${movie.director}</td>
            <td>${movie.musicDirector}</td>
            <td>${movie.duration}</td>
            <td>${movie.censorCertificate}</td>
            <td> <button class="btn btn-warning"
            onclick="updateMovie(${movie.movieId}
                ,'${movie.movieName}'
                ,'${movie.language}'
                ,'${movie.description}'
                ,'${movie.genre}'
                ,'${movie.cast}'
                ,'${movie.director}'
                ,'${movie.musicDirector}'
                ,'${movie.duration}'
                ,'${movie.censorCertificate}'
                );return false;">Edit</button>
             <button class="btn btn-danger" onclick="delMovie(${movie.movieId});return false;">
             Delete</button>
            </td>
            </tr>
            

        `;

         }
         );
        
        
         document.getElementById("movieList").innerHTML=output+"</tbody></table></div>";
    
    
     }
    )







}

function getSerachResults(){

    var name = document.getElementById("searchText").value;


    fetch('http://localhost:8085/movie/movie-ms/v1/movie/getdetails')
    .then(response => response.json())
    .then((data) =>

    {console.log(data);
        let output = `
        <div class="table-responsive">
        <table class="table table-hover">
            <caption>Search Result-</caption>
            <thead class="thead-dark">
              <tr>
                <th>Movie Id</th>
                <th>Movie Name</th>
                <th>Language</th>
                <th>Description</th>
                <th>Genre</th>
                <th>Cast</th>
                <th>Director</th>
                <th>Music Director</th>
                <th>Duration</th>
                <th>Censor Certificate</th>
                <th>Rating </th>
                <th>Action</th>
                <th>  </th>
              </tr>
            </thead>
            <tbody>`;

        data.listOfMovies.forEach(
       function(movie){

        if(movie.movieName===name){

            output += `
            <tr><td>${movie.movieId}</td>
                <td>${movie.movieName}</td>
                <td>${movie.language}</td>
                <td>${movie.description}</td>
                <td>${movie.genre}</td>
                <td>${movie.cast}</td>
                <td>${movie.director}</td>
                <td>${movie.musicDirector}</td>
                <td>${movie.duration}</td>
                <td>${movie.censorCertificate}</td>
                <td>${movie.rating}</td>
                <td> <button class="btn btn-warning"
                onclick="updateMovie(${movie.movieId}
                    ,'${movie.movieName}'
                    ,'${movie.language}'
                    ,'${movie.description}'
                    ,'${movie.genre}'
                    ,'${movie.cast}'
                    ,'${movie.director}'
                    ,'${movie.musicDirector}'
                    ,'${movie.duration}'
                    ,'${movie.censorCertificate}'
                    );return false;">Edit</button>
                 <button class="btn btn-danger" onclick="delMovie(${movie.movieId});return false;">
                 Delete</button>
                </td>
                </tr>
    
            `;

        }
       

         }
         );
        document.getElementById("movieList").innerHTML=output+"</div>";
    
    
     }
    )


}



function addMovie(){

        
    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Add Movie</h3>

    <form>
        <table class="table-borderless">
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Movie Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="name"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px; ">Music Director</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="text" id="music"
                style="width: 300px;border: solid 1px black;" required >
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Language</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <select class="form-control" id="language" style="font-weight: bold;color:white;
                    background-color:white;color: black;border: solid 1px black;">
                       <option value="English">English</option>
                       <option value="Malayalam">Malayalam</option>
                       <option value="Hindhi">Hindhi</option>
                       <option value="Tamil">Tamil</option>
                       <option value="Telegu">Telegu</option>
                       <option value="Kanada">Kanada</option>
                    </select>
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Censor Certificate</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <select class="form-control" id="censor" style="font-weight: bold;color:white;
                background-color:white;color: black;border: solid 1px black;">
                   <option value="U/A">U/A</option>
                   <option value="U">U</option>
                   <option value="A">A</option>
                </select>
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Description</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="description"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Duration</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="text"  id="duration"
                style="width: 300px;border: solid 1px black;" required >
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Cast</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" id="cast"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Genre</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <select class="form-control" id="genre" style="font-weight: bold;color:white;
                background-color:white;color: black;border: solid 1px black;">
                   <option value="Action">Action</option>
                   <option value="Comedy">Comedy</option>
                   <option value="Adventure">Adventure</option>
                   <option value="Crime">Crime</option>
                   <option value="Animation">Animation</option>
                   <option value="Fiction">Fiction</option>
                   <option value="Thriller">Thriller</option>
                   <option value="Drama">Drama</option>
                   <option value="Epic">Epic</option>
                   <option value="Family">Family</option>
                   <option value="Biography">Biography</option>
                   <option value="Historical">Historical</option>
                   <option value="Epic">Epic</option>
                </select>
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Director</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="director"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
  
            <tr>
                <td>
                    <div class="form-group">
                        
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <button class="btn btn-danger" style="width: 300px;"
                    onclick="postMovie();return false;">Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
      document.getElementById("movieList").innerHTML = output;
  
  



    }

function postMovie(){

    var name = document.getElementById("name").value;
    var lang = document.getElementById("language").value;
    var description = document.getElementById("description").value;
    var cast = document.getElementById("cast").value;
    var censorCertificate = document.getElementById("censor").value;
    var director = document.getElementById("director").value;
    var musicDirector = document.getElementById("music").value;
    var duration= document.getElementById("duration").value;
    var genre=document.getElementById("genre").value;

    //console.log(name+" "+lang+" "+description+" "+cast+" "+censorCertificate+" "+director+" "+musicDirector+" "+duration);



    //----------------------------
    fetch('http://localhost:8085/movie/movie-ms/v1/movie', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            movieName:name,
            language:lang,
            description:description,
            genre: genre,
            cast: cast,
            director: director,
            musicDirector: musicDirector,
            duration: duration,
            censorCertificate:censorCertificate,
            adminId: "admin1"

        })
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            var status = data.status;
            if (status == 200) {
                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("addedSuccess.html", "subWind", windowFeatures);
                setTimeout(function () { getTheMovieList(); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })
//-----------------------------------------

} 



function updateMovie(movieId,movieName,language,description,genre,cast,director,
    musicDirector,duration,censorCertificate){

        let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Add Movie</h3>

    <form>
        <table class="table-borderless">
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Movie Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="name" value="${movieName}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px; ">Music Director</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="text" id="music" value="${musicDirector}"
                style="width: 300px;border: solid 1px black;" required >
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Language</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <select class="form-control" id="language"  value="${language}"
                    style="font-weight: bold;color:white;
                    background-color:white;color: black;border: solid 1px black;">
                       <option value="English">English</option>
                       <option value="Malayalam">Malayalam</option>
                       <option value="Hindhi">Hindhi</option>
                       <option value="Tamil">Tamil</option>
                       <option value="Telegu">Telegu</option>
                       <option value="Kanada">Kanada</option>
                    </select>
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Censor Certificate</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <select class="form-control" id="censor" style="font-weight: bold;color:white;
                background-color:white;color: black;border: solid 1px black;" value="${censorCertificate}">
                   <option value="U/A">U/A</option>
                   <option value="U">U</option>
                   <option value="A">A</option>
                </select>
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Description</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="description" value="${description}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Duration</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="text"  id="duration"
                style="width: 300px;border: solid 1px black;" value="${duration}" required >
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Cast</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" id="cast"
                    style="width: 300px;border: solid 1px black;" value="${cast}" required >
                    </div>
                </td>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;margin-left:30px;">Genre</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <select class="form-control" id="genre"  value="${genre}"
                style="font-weight: bold;color:white;
                background-color:white;color: black;border: solid 1px black;">
                   <option value="Action">Action</option>
                   <option value="Comedy">Comedy</option>
                   <option value="Adventure">Adventure</option>
                   <option value="Crime">Crime</option>
                   <option value="Animation">Animation</option>
                   <option value="Fiction">Fiction</option>
                   <option value="Thriller">Thriller</option>
                   <option value="Drama">Drama</option>
                   <option value="Epic">Epic</option>
                   <option value="Family">Family</option>
                   <option value="Biography">Biography</option>
                   <option value="Historical">Historical</option>
                   <option value="Epic">Epic</option>
                </select>
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Director</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text"  id="director" value="${director}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
  
            <tr>
                <td>
                    <div class="form-group">
                        
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <button class="btn btn-danger" style="width: 300px;"
                    onclick="putMovie(${movieId});return false;">Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
      document.getElementById("movieList").innerHTML = output;
  


}



function putMovie(movieId){

    var name = document.getElementById("name").value;
    var lang = document.getElementById("language").value;
    var description = document.getElementById("description").value;
    var cast = document.getElementById("cast").value;
    var censorCertificate = document.getElementById("censor").value;
    var director = document.getElementById("director").value;
    var musicDirector = document.getElementById("music").value;
    var duration= document.getElementById("duration").value;
    var genre=document.getElementById("genre").value;

    //console.log(name+" "+lang+" "+description+" "+cast+" "+censorCertificate+" "+director+" "+musicDirector+" "+duration);
    //----------------------------
    fetch('http://localhost:8085/movie/movie-ms/v1/movie/'+movieId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            movieName:name,
            language:lang,
            description:description,
            genre: genre,
            cast: cast,
            director: director,
            musicDirector: musicDirector,
            duration: duration,
            censorCertificate:censorCertificate,
            adminId: "admin1"

        })
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            var status = data.status;
            if (status == 200) {
                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("updateSuccess.html", "subWind", windowFeatures);
                setTimeout(function () { getTheMovieList(); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })
//-----------------------------------------

} 


function delMovie(movieId) {


    fetch('http://localhost:8085/movie/movie-ms/v1/movie/' + movieId , {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            var status = data.status;
            if (status == 200) {
                // document.getElementById("result1").innerHTML="Theatre has been updated sucessfully."

                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("deleteSuccess.html", "subWind", windowFeatures);
                setTimeout(function () { getTheMovieList(); }, 3000);
                //setTimeout(getListOfTheatres(), 6000);

            } else {
                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("MovieHasBeenReffred.html", "subWind", windowFeatures);
                //setTimeout(function () { getTheMovieList(); }, 3000);


                //document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }

        })

}
