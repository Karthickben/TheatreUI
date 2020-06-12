



function getSeatingArrangemntsDetails(){

    var screenId = localStorage.getItem("screenId");
    var showTimeId = localStorage.getItem("showTimeId");
    
    console.log(screenId);
    console.log(showTimeId);

    var theatre= JSON.parse(localStorage.getItem("theatre"));
    var rows=0;
    var columns=0;
    theatre.screens.forEach(function(screen){

        if(screen.screenId==screenId){
        	console.log(screen);
            rows= screen.noOfSeatingRows;
            columns =screen.noOfSeatingColumns;
        }
    })


    var url = "http://localhost:8085/booking/booking-ms/v1/booking/screen/"+screenId 
    +"/showTime/"+ showTimeId+"/genseatingchart";

    console.log(url);
    let output =`<form class="form-group"><table><tr>`;

    fetch(url)
        .then(response => response.json())
        .then((seating) =>
        
        

        {console.log(seating);

            var s=1;

            
        
            seating.seatingChart.forEach(
           function(seat){
            console.log(seat.seatNumber+" "+seat.booked);
            
            if(seat.booked===true){
                output+=`<td><input  type="checkbox" name="checks" value="${seat.seatNumber}" disabled
                > <span style="font-weight:bold;">${seat.seatNumber}</span></td>`;
            }else{
                output+=`<td><input  type="checkbox" name="checks"
                 value="${seat.seatNumber}"><span style="margin:5px;font-weight:bold;"> 
                 ${seat.seatNumber} </span></td>`;
            }

            if(s%columns==0){
                output += `</tr><tr>`;

            }
            s++;

           })

           output+=`<table><button type="submit" class="btn btn-success" onclick="confirmtheseats();return false;">
           Confirm seats</button></form>`;

           document.getElementById("seatstatus").innerHTML=output;
           
        }

           
        
        
        );
       

}


function confirmtheseats(){

    var checks = document.forms[0];
    var numOfTickets =0;
             
    var txt = "";
    var i;
    for (i = 0; i < checks.length; i++) {

        if (checks[i].checked) {
         txt = txt + checks[i].value + ",";
         numOfTickets++;
        }
    }  


    if(numOfTickets==0){
        document.getElementById("confirmTheBookings").innerHTML= `<h4 style="color:white;margin:40px;">Please select the  Seats :(</h4>`;

    }else{
                      
   let output=`<h3 style="color: white;"> Ticket Deatils</h3><br>`;
   var theatre= JSON.parse(localStorage.getItem("theatre"));

   var rows=0;
   var columns=0;
   console.log("confrom seats");
   console.log(theatre);
   localStorage.setItem("theatreId",theatre.theatreId);

   theatre.screens.forEach(function(screen){
       console.log("---------------");
       console.log(screen);

       if(screen.screenId==localStorage.getItem("screenId")){
           var screenName = screen.screenName;
           console.log(screenName);
           localStorage.setItem("showId",screen.showId);
           screen.upcomingShows.forEach(
               function(sTime){

                   if(sTime.showTimeId==localStorage.getItem("showTimeId")){
                       var totalprice = sTime.ticketPrice*numOfTickets;

                       localStorage.setItem("showDate",sTime.date);
                       localStorage.setItem("showTime",sTime.showTime);
                       localStorage.setItem("ticketPrice",sTime.ticketPrice);
                       localStorage.setItem("seatNumbers",txt.slice(0, -1));
                       localStorage.setItem("numberOfSeatsBooked",numOfTickets);

                       console.log("inside showTime");
                       console.log(numOfTickets);
                       console.log(sTime.ticketPrice);
                       console.log(totalprice);
                       //--------------------------------------
                       output+=`<h4>Theatre: ${theatre.theatreName}</h4>
                       <h4>Location: ${theatre.area}</h4>
                       <h4>Screen: ${screenName}</h4>
                       <h4>Number of Ticekts: ${numOfTickets}</h4>
                       <h4>Seats: `+txt.slice(0, -1)+`</h4>
                       <h4>Price of ticket: ${sTime.ticketPrice}</h4>
                       <h4>Total Price: ${totalprice}</h4>
                       <button type="submit" class="btn btn-success" onclick="bookTicket()">Book Ticket</button>
                       `;



                       //----------------------------------------

                      
                   }
               }

           )
       
       }
       document.getElementById("confirmTheBookings").innerHTML= output;

   })

    }
  
    

  
}


function bookTicket() {

     console.log("--------------Book Ticket-------------------");
    var _theatreId=localStorage.getItem("theatreId");
    console.log(_theatreId);
    
    var _screenId=localStorage.getItem("screenId");
    console.log(_screenId);

    var _movieId=localStorage.getItem("movieId");
    console.log(_movieId);

    var _showId= localStorage.getItem("showId");
    console.log(_showId);

    var _showTimeId = localStorage.getItem("showTimeId");
    console.log(_showTimeId);

    var _showDate = localStorage.getItem("showDate");
    console.log(_showDate);

    var _showTime = localStorage.getItem("showTime");
    console.log(_showTime);

    var _ticketPrice = localStorage.getItem("ticketPrice");
    console.log(_ticketPrice);

    var _seatNumbers =localStorage.getItem("seatNumbers");
    console.log(_seatNumbers);

    var _numOfTickets = localStorage.getItem("numberOfSeatsBooked");
    console.log(_numOfTickets);

     var myWindow;

     //-------------------------
   
//-----------------------------------------------------------------//

    
     fetch('http://localhost:8085/booking/booking-ms/v1/booking' ,{
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
        userId:localStorage.getItem("principle"),
        theatreId:_theatreId,
        screenId:_screenId,
        movieId: _movieId,
        showId:_showId,
        showTimeId:_showTimeId,
        showDate:_showDate,
        showTime:_showTime,
        ticketPrice:_ticketPrice,
        seatNumbers:_seatNumbers,
        numberOfSeatsBooked: _numOfTickets
        })
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            var width = 300;
            var height = 200;
            var left = parseInt((screen.availWidth/2) - (width/2));
             var top = parseInt((screen.availHeight/2) - (height/2));
             var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" +
              left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
            if(data.status==200){
              
                 myWindow = window.open("BookigSucess.html", "subWind", windowFeatures);

                 setTimeout(function(){ window.location.href = "home.html"; }, 3000);
                 
            }else{
                //myWindow = window.open("Booki   gFailed.html", "subWind", windowFeatures);
                //setTimeout(function(){ window.location.href = "home.html"; }, 3000);
                
            }
            
            
           
        })





}
