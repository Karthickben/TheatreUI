function getTheatreDetailsById(theatreId,screenId){

    localStorage.setItem("theatreId",theatreId);
    localStorage.setItem("screenId",screenId);

        console.log(theatreId);
        console.log(screenId);

       window.location.href = "theatredetailsbymovie.html";
    
}
var myWindow;

function selectSeat(){

    
    console.log("----------Select Seat-----------------")
    window.location.href = "chooseSeatandbookticket.html";
  
}


function getTheatreById(){

    var d = new Date();
  
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

   var currentDate=[year, month, day].join('-');

    console.log(localStorage.getItem("theatreId"));
    console.log(localStorage.getItem("screenId"));
    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/'+localStorage.getItem("theatreId")
        +'/getdetails')
        .then(response => response.json())
        .then((theatre) =>
    
        {console.log(theatre);
            var count=0;
            localStorage.setItem("theatre",JSON.stringify(theatre));
            let output2 ="";
            let output1 =`
            <h3 style="color: white;text-align: center;margin-top: 10px;">${theatre.theatreName}</h3>
                <h4 style="color: white;text-align:center;">${theatre.area},${theatre.city}</h4>`;
            
        
                theatre.screens.forEach(
           function(screen){
        	  
        	   console.log(screen.screenId);
            if(localStorage.getItem("screenId")==screen.screenId){
            	count++;

                console.log("ScreenID: "+screen.screenId);
            output2+=`
            <div class="card" style="max-width: 440px;height:130px;background-color:ivory;">
                    <div class="card-body">
           <h5 class="card-title" style="color: crimson; margin: 0px;">Screen: ${screen.screenName}</h5>
                        <p class="card-text"  > 
                         <span style="font-weight: bold;">Movie:</span> ${screen.runningMovie}
                         <div class="form-group">
                             <label style="font-weight: bold;">Show Date:</label>
                            <input type="date" id="showDate"  min="${currentDate}"/>
                            <button type="submit" class="btn btn-danger" onclick="getShows(${screen.screenId})"> get shows</button>
                         </div>
                        </p>
                    </div>
                </div>`;

            }
            

            screen.upcomingShows.forEach(
                function(show){
                    // console.log(show);
                }
            )


           })
           
           document.getElementById("theatreDetails1").innerHTML=output1;
           document.getElementById("screenDetails").innerHTML=output2;
           
        }
        
        
        );
         

}

function getShows(screenID){
    console.log("getShows");
    console.log(document.getElementById("showDate").value);
    console.log("-------------------------------------------------------------");
    
    var theatre= JSON.parse(localStorage.getItem("theatre"));
    console.log(theatre)

    let output="";


    var count =0;
    theatre.screens.forEach(
        function(screen)
        {
        	
            if(screen.screenId==screenID){
                    console.log(screen.screenId+":"+screen.screenName);
                    
                    screen.upcomingShows.forEach(
                        function(showTime){
                        
                        if(showTime.date==document.getElementById("showDate").value){
                            console.log(showTime.showTime);
                            count++;
                            output+=`<button type="button" class="btn  btn-success" style
                            ="margin-left:10px;" onclick="getShowTimeDetails('${showTime.showTime}',${screen.screenId})
                            ">${showTime.showTime} </button>`;
                           
                           
                        }
                                
                        }

                    )

            }



        })
        
        if(count==0){
        	document.getElementById("availableShows").innerHTML="<p style='color:white'>No shows are availble" +
        			" for the selected date:(<p>";
        }else{
        	document.getElementById("availableShows").innerHTML=output;
        }
        

        

}


function getShowTimeDetails(stime,screenId){




    var theatre= JSON.parse(localStorage.getItem("theatre"));
    console.log("Stime "+stime);
    console.log(screenId);

    let output2="";

    theatre.screens.forEach(
        function(screen)
        {
            if(screen.screenId==screenId){
                    console.log(screen.screenId+":"+screen.screenName);
                    
                    screen.upcomingShows.forEach(
                        function(show){
                        if(show.date==document.getElementById("showDate").value){
                            console.log("<<<"+show.showTime);
                            
                            if(show.showTime==stime){
            
                                console.log(">>>>"+show.showTime);
                                console.log(show.ticketPrice);

                                localStorage.setItem("movieName",screen.runningMovie);
                                localStorage.setItem("price",show.ticketPrice);
                                localStorage.setItem("showTimeId",show.showTimeId);
                                localStorage.setItem("screenId",screen.screenId);

                                // --------------------------------------------------
                                output2=`
                                <div class="card" style="max-width: 400px;height:200px;background-color:ivory;
                                margin-left:50px;margin-top:50px;">
                                        <div class="card-body">
                               <h5 class="card-title" style="color: crimson; margin: 0px;">Show Time: ${show.showTime}</h5>
                                            <p class="card-text"  > 
                                             <span style="font-weight: bold;">Movie:</span> ${screen.runningMovie}<br>
                                             <span style="font-weight: bold;">Date:</span> ${show.date}<br>
                                             <span style="font-weight: bold;">Price:</span> ${show.ticketPrice}<br>
                                             <div class="form-group">
                                                <button type="submit" class="btn btn-danger" onclick="selectSeat()"
                                                >Choose Seats</button>
                                             </div>
                                            </p>
                                            
                                        </div>
                                    </div>`;

                            // ----------------------------------------------------------------

                            }
                           
                           
                        }
                                
                        }

                    )

            }



        })

        document.getElementById("ShowTimeDetails1").innerHTML=output2;

}



function getTheatreByIdonly(theatreId){
    localStorage.setItem("theatreId",theatreId);

    

    window.location.href = "theatredetailsbyId.html";

}

function getTheatreByIdForTheatreDetails(){

    console.log(localStorage.getItem("theatreId"));
    
    var d = new Date();
    
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

   var currentDate=[year, month, day].join('-');
   

    fetch('http://localhost:8085/theatre/theatre-ms/v1/theatre/'+localStorage.getItem("theatreId")
        +'/getdetails')
        .then(response => response.json())
        .then((theatre) =>
    
        {console.log(theatre);

            localStorage.setItem("theatre",JSON.stringify(theatre));
            let output2 ="";
            let output1 =`
            <h3 style="color: white;text-align: center;margin-top: 10px;">${theatre.theatreName}</h3>
                <h4 style="color: white;text-align:center;">${theatre.area},${theatre.city}</h4>`;
            
        
                theatre.screens.forEach(
           function(screen){
            console.log(screen);
            if(screen.runningMovie!==null){
            	
            	 output2+=`
                     <div class="card" style="max-width: 440px;height:130px;background-color:ivory;">
                             <div class="card-body">
                    <h5 class="card-title" style="color: crimson; margin: 0px;">Screen: ${screen.screenName}</h5>
                                 <p class="card-text"  > 
                                  <span style="font-weight: bold;">Movie:</span> ${screen.runningMovie}
                                  <div class="form-group">
                                      <label style="font-weight: bold;">Show Date:</label>
                                     <input type="date" id="showDate" min="${currentDate}"/>
                                     <button type="submit" class="btn btn-danger" onclick="getShows(${screen.screenId})"> get shows</button>
                                  </div>
                                 </p>
                             </div>
                         </div>`;
            	
            }
           


            screen.upcomingShows.forEach(
                function(show){
                    console.log(show);
                }
            )


           })
           document.getElementById("theatreDetails1").innerHTML=output1;
           document.getElementById("screenDetails").innerHTML=output2;
           
        }
        
        
        );
         

}