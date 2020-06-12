


function getMyBookings(){

    var user = localStorage.getItem("principle");
    console.log(user);
    var url = 'http://localhost:8085/booking/booking-ms/v1/booking/report/user/'+user+'/genreport';
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then((report) =>
    
        {console.log(report);

            //localStorage.setItem("theatre",JSON.stringify(theatre));

            let output2 ="";
            
        
           report.listOfBookingDetails.forEach(
           function(booking){
            console.log(booking);
            var button="";
            if(booking.status=="Cancelled"){
              button+= ` <button type="submit" class="btn btn-warning"
                            disabled>
                            Already Cancelled</button>`
            }else{
            	
            	
            	   var d = new Date();
            	   
            	    month = '' + (d.getMonth() + 1),
            	    day = '' + d.getDate(),
            	    year = d.getFullYear();

            	if (month.length < 2) 
            	    month = '0' + month;
            	if (day.length < 2) 
            	    day = '0' + day;

            	   var currentDate=[year, month, day].join('-');
            	   
            	   if(booking.showDate<currentDate){
            		   button+= ` <button type="submit" class="btn btn-success"
            		   disabled>
                           Expired</button>`
            	   }else{
            		   button+= ` <button type="submit" class="btn btn-danger" onclick="cancelTicket(${booking.bookingId})">
                           Cancel</button>`
            	   }

               
            }

            output2+=`
            <div class="card" style="max-width: 440px;height:260px;background-color:ivory;">
                    <div class="card-body">
           <h5 class="card-title" style="color: crimson; margin: 0px;">Id: ${booking.bookingId}</h5>
                        <p class="card-text"  > 
                         <span style="font-weight: bold;">Movie:</span> ${booking.movieName}<br>
                         <span style="font-weight: bold;">Theatre:</span> ${booking.theatreName}<br>
                         <span style="font-weight: bold;">SeatNumbers:</span> ${booking.seatNumbers}<br>
                         <span style="font-weight: bold;">Date:</span> ${booking.showDate}<br>
                         <span style="font-weight: bold;">showTime:</span> ${booking.showTime}<br>
                         <span style="font-weight: bold;">Price:</span> rs ${booking.totalPrice}<br>
                         <span style="font-weight: bold;">Location:</span> ${booking.theatrAddress}<br>
                         ${button}
                        </p>
                        
                    </div>
                </div>`;

           })
        
           document.getElementById("myBookings").innerHTML=output2;
           
        }
        
        
        );
         

}


function cancelTicket(bookingId){
    console.log(bookingId);

    var url = `http://localhost:8085/booking/booking-ms/v1/booking/`+bookingId+`/cancel`;

    fetch(url ,{
        method: 'PUT',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'content-type': 'application/json'
        },
        //body: JSON.stringify({})
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
            myWindow = window.open("BookigCancelled.html", "subWind", windowFeatures);
            setTimeout(function(){ window.location.href = "MyBookings.html"; }, 2000);
    
        })

        

}