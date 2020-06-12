


function getSerachResults(){

    var location = document.getElementById("location").value;
    var name = document.getElementById("searchText").value;

    
    console.log(location);
    console.log(name);
    var count = 0;
    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/getdetails')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let output = `
            <div class="table-responsive">
            <table class="table table-hover">
                <caption>Theatre List</caption>
                <thead class="thead-dark">
                  <tr>
                    <th>Theatre Id</th>
                    <th>Theatre Name</th>
                    <th>Building Name</th>
                    <th>Area</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Total Screens</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>`;

            data.listOfTheatres.forEach(


                function (theatre) {

                    if (theatre.city == location&&theatre.theatreName==name) {

                        console.log(theatre);

                        output += `
                        <tr><td>${theatre.theatreId}</td>
                            <td>${theatre.theatreName}</td>
                            <td>${theatre.buildingName}</td>
                            <td>${theatre.area}</td>
                            <td>${theatre.city}</td>
                            <td>${theatre.state}</td>
                            <td>${theatre.totalScreens}</td>
                            <td> <button class="btn btn-warning"
                            onclick="updateTheatre(${theatre.theatreId},'${theatre.theatreName}'
                            ,'${theatre.buildingName}','${theatre.area}','${theatre.city}'
                            ,'${theatre.state}',${theatre.totalScreens});return false;">Edit</button>
                             <button class="btn btn-info" onclick="getScreens(${theatre.theatreId});return false;">Screens</button>
                             <button class="btn btn-danger" onclick="delTheatre(${theatre.theatreId});return false;">
                             Del</button>
                            </td>
                            </tr>

                        `;






                    } else {


                    }



                }
            );

            output += `</tbody> </table>`;
            document.getElementById("theatreList").innerHTML = output;

        }
        )






}




function getListOfTheatres() {
    

    var location = document.getElementById("location").value;



    console.log(location);
    console.log(name);
    var count = 0;
    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/getdetails')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let output = `
            <div class="table-responsive">
            <table class="table table-hover">
                <caption>Theatre List</caption>
                <thead class="thead-dark">
                  <tr>
                    <th>Theatre Id</th>
                    <th>Theatre Name</th>
                    <th>Building Name</th>
                    <th>Area</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Total Screens</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>`;

            data.listOfTheatres.forEach(


                function (theatre) {

                    if (theatre.city == location) {

                        console.log(theatre);

                        output += `
                        <tr><td>${theatre.theatreId}</td>
                            <td>${theatre.theatreName}</td>
                            <td>${theatre.buildingName}</td>
                            <td>${theatre.area}</td>
                            <td>${theatre.city}</td>
                            <td>${theatre.state}</td>
                            <td>${theatre.totalScreens}</td>
                            <td> <button class="btn btn-warning"
                            onclick="updateTheatre(${theatre.theatreId},'${theatre.theatreName}'
                            ,'${theatre.buildingName}','${theatre.area}','${theatre.city}'
                            ,'${theatre.state}',${theatre.totalScreens});return false;">Edit</button>
                             <button class="btn btn-info" onclick="getScreens(${theatre.theatreId});return false;">Screens</button>
                             <button class="btn btn-danger" onclick="delTheatre(${theatre.theatreId});return false;">
                             Del</button>
                            </td>
                            </tr>

                        `;






                    } else {


                    }



                }
            );

            output += `</tbody> </table>`;
            document.getElementById("theatreList").innerHTML = output;

        }
        )





}


function addTheatre() {

    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Add Theatre</h3>

  <form>
      <table class="table-borderless">
          <tr>
              <td>
                  <div class="form-group">
                      <label style="font-weight: bold;color:crimson;">Theatre Name</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="text" placeholder="IMAX" id="name"
                  style="width: 300px;border: solid 1px black;" required >
                  </div>
              </td>
              <td>
                  <div class="form-group">
                      <label style="margin-left: 40px;
                      font-weight: bold;color:crimson;">Number Of Screens</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="number" placeholder="2" id="screenNumbers"
                  style="width: 40px;border: solid 1px black;" required >
                  </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="form-group">
                      <label style="font-weight: bold;color:crimson;">Building Name</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="text" placeholder="ABC MALL" id="building"
                  style="width: 300px;border: solid 1px black;" required >
                  </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="form-group">
                      <label style="font-weight: bold;color:crimson;">Area</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="text" placeholder="Kazhakootam" id="area"
                  style="width: 300px;border: solid 1px black;" required >
                  </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="form-group">
                      <label style="font-weight: bold;color:crimson;">City</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="text" placeholder="Trivandrum" id="city"
                  style="width: 300px;border: solid 1px black;" required >
                  </div>
              </td>
          </tr>
          <tr>
              <td>
                  <div class="form-group">
                      <label style="font-weight: bold;color:crimson;">State</label>
                  </div>
              </td>
              <td> 
                  <div class="form-group" >
                  <input type="text" placeholder="Kerela" id="state"
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
                  onclick="postTheatre();return false;">Submit</button>
                  </div>
              </td>
          </tr>

      </table>

          

   </form>
   <p id="result" style="color:crimson;"> </p>
   <p id="result1" style="color:green;"> </p>

`;
    document.getElementById("theatreList").innerHTML = output;



}





function postTheatre() {




    var tName = document.getElementById("name").value;
    var noOfScreens = document.getElementById("screenNumbers").value;
    var building = document.getElementById("building").value;
    var area = document.getElementById("area").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;


    console.log(tName + " " + noOfScreens + " " + building + " " + area + " " + state + " " + city);

    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            theatreName: tName,
            buildingName: building,
            area: area,
            city: city,
            state: state,
            theatreType: "default",
            totalScreens: noOfScreens,
            theatreStatus: "default",
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
                setTimeout(function () { getListOfTheatres(); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })

}



function updateTheatre(theatreId, theatreName, buildingName, area, city, state, totalScreens) {


    console.log(theatreId + " " + theatreName + " " + buildingName + " " + area + " " + state + " " + city + " " + totalScreens);

    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Update Theatre</h3>

    <form>
        <table class="table-borderless">
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Theatre Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="IMAX" id="name" value="${theatreName}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
                <td>
                    <div class="form-group">
                        <label style="margin-left: 40px;
                        font-weight: bold;color:crimson;">Number Of Screens</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="number" placeholder="2" id="screenNumbers" value="${totalScreens}"
                    style="width: 40px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Building Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="ABC MALL" id="building" value="${buildingName}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Area</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="Kazhakootam" id="area" value="${area}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">City</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="Trivandrum" id="city" value="${city}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">State</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="Kerela" id="state" value="${state}"
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
                    onclick="putTheatre(${theatreId});return false;">Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
  
            
  
     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
    document.getElementById("theatreList").innerHTML = output;





}


function putTheatre(theatreId) {


    var theatreName = document.getElementById("name").value;
    var totalScreens = document.getElementById("screenNumbers").value;
    var buildingName = document.getElementById("building").value;
    var area = document.getElementById("area").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/' + theatreId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            theatreName: theatreName,
            buildingName: buildingName,
            area: area,
            city: city,
            state: state,
            theatreType: "default",
            totalScreens: totalScreens,
            theatreStatus: "default",
            adminId: "admin1"

        })
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
                myWindow = window.open("updateSuccess.html", "subWind", windowFeatures);
                setTimeout(function () { getListOfTheatres(); }, 3000);
                //setTimeout(getListOfTheatres(), 6000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }

        })






}


function delTheatre(theatreId) {


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/' + theatreId + '/delete', {
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
                setTimeout(function () { getListOfTheatres(); }, 4000);
                //setTimeout(getListOfTheatres(), 6000);

            } else {


                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("screenExsists.html", "subWind", windowFeatures);
                //setTimeout(function () { getListOfTheatres(); }, 4000);
                console.log(data.errorDescription);
            }

        })


}


//-----------------------------Screens----------------------------------

function getScreens(theatreId) {


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/' + theatreId
        + '/getdetails')
        .then(response => response.json())
        .then((theatre) => {
            console.log(theatre);

            let output = `
                <div style="margin-bottom:10px;margin-top:20px;margin-left:20px;">
                <button class="btn btn-success" onclick="addScreen(${theatreId});return false;">Add Screen </button>
                <button class="btn btn-dark" onclick="getListOfTheatres();return false;">Back </button>
                </div> 
                <div class="table-responsive">
                <table class="table table-hover">
                    <caption>Screen Details</caption>
                    <thead class="thead-dark">
                      <tr>
                        <th>Screen Id</th>
                        <th>SCreen Name</th>
                        <th>Seating Rows</th>
                        <th>Seating Columns</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>`;

            localStorage.setItem("theatre", JSON.stringify(theatre));



            theatre.screens.forEach(
                function (screen) {
                    console.log(screen);




                    output += `
                <tr><td>${screen.screenId}</td>
                    <td>${screen.screenName}</td>
                    <td>${screen.noOfSeatingRows}</td>
                    <td>${screen.noOfSeatingColumns}</td>
                    <td> <button class="btn btn-warning"
                    onclick="updateScreen(${theatre.theatreId},${screen.screenId}
                    ,'${screen.screenName}',${screen.noOfSeatingRows},${screen.noOfSeatingColumns}
                    );return false;">Edit</button>
                     <button class="btn btn-info" onclick="getShows(${theatre.theatreId},${screen.screenId});return false;">
                     View Show</button>
                     <button class="btn btn-danger" onclick="delScreen(${theatre.theatreId},${screen.screenId});return false;">
                     Del</button>
                    </td>
                    </tr>

                `;




                })

            output += `</tbody> </table>`;
            document.getElementById("theatreList").innerHTML = output;

        }


        );

}


function getShows(theatreId, screenId) {

    console.log(theatreId);
    var theatre = JSON.parse(localStorage.getItem("theatre"));
    console.log(theatre)



    let output = `
    <div style="margin-bottom:10px;margin-top:20px;margin-left:20px;">
    <button class="btn btn-success" onclick="addShows(${theatreId},${screenId});return false;">Add Show </button>
    </div>
    <div class="table">
    <table class="table table-hover">
        <caption>Show Details</caption>
        <thead class="thead-dark">
          <tr>
            <th>Show Id</th>
            <th>Movie Id</th>
            <th>Movie Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>`;


    theatre.screens.forEach(
        function (screen) {
            if (screen.screenId == screenId && screen.showId != 0) {
                console.log(screen.screenId + ":" + screen.screenName);

                output += `
                <tr><td>${screen.showId}&nbsp &nbsp &nbsp &nbsp &nbsp</td>
                    <td>${screen.movieId}&nbsp &nbsp &nbsp &nbsp &nbsp</td>
                    <td>${screen.runningMovie}&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp &nbsp &nbsp &nbsp</td>
                    <td>
                     <button class="btn btn-info" onclick="getShowTimes(${theatre.theatreId},${screen.screenId},${screen.showId});return false;">
                     Scheduled shows</button>
                    </td>
                    </tr>

                `;




            }

            output += `</tbody> </table>`;
            document.getElementById("theatreList").innerHTML = output;



        })
}


function getShowTimes(theatreId, screenId, showId) {

    console.log(theatreId);
    var theatre = JSON.parse(localStorage.getItem("theatre"));
    console.log(theatre)



    let output = `
    <div style="margin-bottom:10px;margin-top:20px;margin-left:20px;">
    <button class="btn btn-success"
    onclick="newSchedule(${theatreId},${screenId},${showId});return false;"> New Schedule  </button>
    </div>
    <div class="table-responsive">
    <table class="table table-hover" style="margin-left:50px;">
        <caption> Scheduled Shows</caption>
        <thead class="thead-dark">
          <tr>
            <th>Show Time Id</th>
            <th>Show Date</th>
            <th>Show Time</th>
            <th>ticketPrice </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>`;


    theatre.screens.forEach(
        function (screen) {
            if (screen.screenId == screenId && showId == screen.showId) {
                console.log(screen.screenId + ":" + screen.screenName);

                screen.upcomingShows.forEach(
                    function (showTimes) {

                        output += `
                    <tr><td>${showTimes.showTimeId}</td>
                        <td>${showTimes.date}</td>
                        <td>${showTimes.showTime}</td>
                        <td>${showTimes.ticketPrice}</td>
                        <td> <button class="btn btn-warning"
                         <button class="btn btn-danger" onclick="delShow(${theatre.theatreId},${screen.screenId},
                            ${screen.showId},${showTimes.showTimeId});return false;" disabled>
                         Del</button>
                        </td>
                        </tr>
    
                    `;


                    }


                )





            }

            output += `</tbody> </table>`;
            document.getElementById("theatreList").innerHTML = output;



        })







}

//------------------------------------------------------------------------------------




function addScreen(theatreId) {


    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Add Screen</h3>

    <form>
        <table class="table-borderless">
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Screen Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="Screen One" id="name"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>

             </tr>
             <tr>
                <td>
                    <div class="form-group">
                        <label style="
                        font-weight: bold;color:crimson;">Number Of Seating Rows</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="number" placeholder="8" id="seatRows"
                    style="width: 40px;border: solid 1px black;" required >
                    </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;">Number Of Seating Columns</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="number" placeholder="11" id="seatColumns"
                style="width: 40px;border: solid 1px black;" required >
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
                    <button class="btn btn-danger" style="width: 200px;"
                    onclick="postScreen(${theatreId});return false;">Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
  
            
  
     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
    document.getElementById("theatreList").innerHTML = output;








}


function postScreen(theatreId) {

    var screenName = document.getElementById("name").value;
    var rows = document.getElementById("seatRows").value;
    var columns = document.getElementById("seatColumns").value;

    console.log(screenName + " " + rows + " " + columns);

    //http://localhost:8085/theatre/theatre-ms/v1/theatre-screen/110001/screen


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre-screen/' + theatreId + '/screen', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            theatreId: theatreId,
            screenName: screenName,
            screenStatus: "default",
            adminId: "admin1",
            noOfSeatingRows: rows,
            noOfSeatingColumns: columns

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
                setTimeout(function () { getScreens(theatreId); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })


}


function updateScreen(theatreId, screenId, screenName, noOfSeatingRows, noOfSeatingColumns) {


    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Update Screen</h3>

    <form>
        <table class="table-borderless">
            <tr>
                <td>
                    <div class="form-group">
                        <label style="font-weight: bold;color:crimson;">Screen Name</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="text" placeholder="Screen One" id="name" value="${screenName}"
                    style="width: 300px;border: solid 1px black;" required >
                    </div>
                </td>

             </tr>
             <tr>
                <td>
                    <div class="form-group">
                        <label style="
                        font-weight: bold;color:crimson;">Number Of Seating Rows</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input type="number" placeholder="8" id="seatRows" value=${noOfSeatingRows}
                    style="width: 40px;border: solid 1px black;" required >
                    </div>
                </td>
                </tr>
                <tr>
                <td>
                <div class="form-group">
                    <label style="font-weight: bold;color:crimson;">Number Of Seating Columns</label>
                </div>
            </td>
            <td> 
                <div class="form-group" >
                <input type="number" placeholder="11" id="seatColumns" value=${noOfSeatingColumns}
                style="width: 40px;border: solid 1px black;" required >
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
                    <button class="btn btn-danger" style="width: 200px;"
                    onclick="putScreen(${theatreId},${screenId});return false;">Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
  

     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
    document.getElementById("theatreList").innerHTML = output;



}

function putScreen(theatreId, screenId) {


    var screenName = document.getElementById("name").value;
    var rows = document.getElementById("seatRows").value;
    var columns = document.getElementById("seatColumns").value;

    console.log(screenName + " " + rows + " " + columns);

    //http://localhost:8085/theatre/theatre-ms/v1/theatre-screen/110001/screen


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre-screen/' + theatreId + '/screen/' + screenId, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            theatreId: theatreId,
            screenName: screenName,
            screenStatus: "default",
            adminId: "admin1",
            noOfSeatingRows: rows,
            noOfSeatingColumns: columns

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
                setTimeout(function () { getScreens(theatreId); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })


}


function delScreen(theatreId, screenId) {


    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre-screen/' + theatreId +
        '/screen/' + screenId + '/delete', {
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
                setTimeout(function () { getListOfTheatres(); }, 4000);
                //setTimeout(getListOfTheatres(), 6000);

            } else {


                var width = 300;
                var height = 200;
                var left = parseInt((screen.availWidth / 2) - (width / 2));
                var top = parseInt((screen.availHeight / 2) - (height / 2));
                var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
                    left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
                myWindow = window.open("scheduledShowsExsists.html", "subWind", windowFeatures);
                //setTimeout(function () { getListOfTheatres(); }, 4000);
                console.log(data.errorDescription);
            }

        })



}


function addShows(theatreId, screenId) {

    console.log(theatreId + " " + screenId);



    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Add Show</h3>

        <form>
            <table class="table-borderless">
                 <tr>
                    <td>
                        <div class="form-group">
                            <label style="
                            font-weight: bold;color:crimson;">MovieName</label>
                        </div>
                    </td>
                    <td> 
                        <div class="form-group" >
                        <select class="form-control" id="movie" style="font-weight: bold;color:white;
                        background-color:white;color: black;border: solid 1px black;">
                            ${localStorage.getItem("movieNames")}
                        </select>
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
                        <button class="btn btn-danger" style="width: 200px;"
                         onclick="postShow(${theatreId},${screenId});return false;"
                        >Submit</button>
                        </div>
                    </td>
                </tr>
      
            </table>
      
                
      
         </form>
         <p id="result" style="color:crimson;"> </p>
         <p id="result1" style="color:green;"> </p>
      
      `;
     
    document.getElementById("theatreList").innerHTML = output;



}



function getMovieNames(){


    fetch('http://localhost:8085/movie/movie-ms/v1/movie/getdetails')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            let option="";
            
            data.listOfMovies.forEach(
                function (movie) {

                    var movieName = movie.movieName;
                    console.log(movieName);
                    option += `<option value="${movie.movieId}">${movieName}|<span style="color:green">${movie.language}</span></option>`;


                }

                
            );

            localStorage.setItem("movieNames",option);
        
        }
        )
       

}


function postShow(theatreId,screenId) {

    var movie = document.getElementById("movie").value;


    var today = new Date();
    
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(screenId + " " + movie + " " + theatreId+" "+date);


    
    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre-show/' + theatreId + '/screen/'
    +screenId+'/show', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            screenId:screenId,
            movieId:movie,
            effectiveDate:date,
            adminId:"admin1"
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
               setTimeout(function () { getShows(theatreId,screenId); }, 3000);

            } else {
                document.getElementById("result").innerHTML = `${data.errorDescription}`;
            }



        })


}



function newSchedule(theatreId,screenId,showId){


    var d = new Date();
  
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

   var currentDate=[year, month, day].join('-');

    console.log(currentDate);

    let output = ` <h3 style="text-align: center;font-weight: bold;font-family: Tahoma;"> Create Schedule</h3>

    <form>
        <table class="table-borderless">
             <tr>
                <td>
                    <div class="form-group">
                        <label style="
                        font-weight: bold;color:crimson;">Show Date</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input class="form-control" min="${currentDate}"
                    id="date"  type="date" style="color:Black;
                    background-color:white;border: solid 1px black;" />

                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <div class="form-group">
                        <label style="
                        font-weight: bold;color:crimson;">Show Time</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input class="form-control" id="time"  type="time" style="color:Black;
                    background-color:white;border: solid 1px black;"/>

                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <div class="form-group">
                        <label style="
                        font-weight: bold;color:crimson;">Ticket Price</label>
                    </div>
                </td>
                <td> 
                    <div class="form-group" >
                    <input class="form-control" id="price"  type="number" style="color:Black;
                    background-color:white;border: solid 1px black;"/>

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
                    <button class="btn btn-danger" style="width: 200px;"
                     onclick="postShowTime(${theatreId},${screenId},${showId});return false;"
                    >Submit</button>
                    </div>
                </td>
            </tr>
  
        </table>
  
    
     </form>
     <p id="result" style="color:crimson;"> </p>
     <p id="result1" style="color:green;"> </p>
  
  `;
 
document.getElementById("theatreList").innerHTML = output;






}



function postShowTime(theatreId,screenId,showId){


 var date = document.getElementById("date").value;
 var time = document.getElementById("time").value;
 var price = document.getElementById("price").value;

 
    
 fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre-showTime/' + theatreId + '/screen/'
 +screenId+'/show/'+showId+'/showtime', {
     method: 'POST',
     headers: {
         'Accept': 'application/json, text/plain, */* ',
         'content-type': 'application/json'
     },
     body: JSON.stringify({
         date:date,
         showTime:time,
         ticketPrice:price,
         status:"default",
         adminId:"admin1"
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
            setTimeout(function () { getShowTimes(theatreId, screenId, showId); }, 3000);

         } else {
             document.getElementById("result").innerHTML = `${data.errorDescription}`;
         }



     })



}






function goToTheatre(){

    window.location.href ="TheatreAdmin.html";
}


function goToMovies(){

    window.location.href ="MovieAdmin.html";
}


function goToReports(){

    window.location.href ="Reports.html";
}

function logoutAdmin(){
    
    
    localStorage.clear();
    window.location.href ="welcomeAdmin.html";
}

