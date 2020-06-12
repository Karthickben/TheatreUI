

function getReports(){

    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var location= document.getElementById("location").value;
    var movie=document.getElementById("movie").value;

    //var d1 = new delTheatre(fro)

    var fromDate;
    var toDate;

    if(from<=to){
      fromDate=from;
      toDate=to;
    }else{
      fromDate=to;
      toDate=from;
    }
    
   // 

   fetch('http://localhost:8085/booking/booking-ms/v1/booking/reports/'+fromDate+'/'+toDate+'/genreport')
   .then(response => response.json())
   .then((data) => {
      let output =``;
       console.log(data);
          
         output = `
       <div class="table-responsive">
       <table class="table table-hover">
           <thead class="thead-dark">
             <tr>
               <th>Location</th>
               <th>Movie</th>
               <th>From Date</th>
               <th>To Date</th>
               <th>Ticekt Status</th>
               <th>Total Ticket Count</th>
               <th>Total Ticket Cost</th>
             </tr>
           </thead>
           <tbody>`;

      

       var cancelledTicketCount=0;
       var confirmedTicketCount=0;
       var cancelledTicketCost=0;
       var confirmedTicketCost=0;



      

       data.listOfBookingDetails.forEach(

      


           function (booking) {

            console.log(booking.status+"Outside");


            if(location===""&&movie===""){

               

               if(booking.status=="Confirmed"){
                  console.log(booking.status+" Inside Confirmed");
                  confirmedTicketCount+=booking.totalSeatsBoooked;
                  confirmedTicketCost+=booking.totalPrice;

               }else{
                  cancelledTicketCount+= booking.totalSeatsBoooked;
                  cancelledTicketCost+= booking.totalPrice;
                  console.log(booking.status+" Inside Cancelled");

               }


                  
          
             }else if(location!==""&&movie===""){

               

                 if(booking.theatrAddress===location){

                  if(booking.status=="Confirmed"){
                     confirmedTicketCount+=booking.totalSeatsBoooked;
                     confirmedTicketCost+=booking.totalPrice;
   
                  }else{
                     cancelledTicketCount+= booking.totalSeatsBoooked;
                     cancelledTicketCost+= booking.totalPrice;
   
                  }



                 }
               
                
      
             }else if(location===""&&movie!==""){ 

               if(booking.movieName===movie){

                  if(booking.status=="Confirmed"){
                     confirmedTicketCount+=booking.totalSeatsBoooked;
                     confirmedTicketCost+=booking.totalPrice;
   
                  }else{
                     cancelledTicketCount+= booking.totalSeatsBoooked;
                     cancelledTicketCost+= booking.totalPrice;
   
                  }



                 }
              
      
             }else if(location!==""&&movie!==""){
              
             }

             if(booking.movieName===movie){

               if(booking.status=="Confirmed"&&booking.theatrAddress===location){
                  confirmedTicketCount+=booking.totalSeatsBoooked;
                  confirmedTicketCost+=booking.totalPrice;

               }else if(booking.status!="Confirmed"&&booking.theatrAddress===location){
                  cancelledTicketCount+= booking.totalSeatsBoooked;
                  cancelledTicketCost+= booking.totalPrice;

               }

            }

           }
       );

       if(location===""){
          location="-";
       }

       if(movie===""){
          movie="-";
       }

       output += `
            <tr>
            `;
       output+= '<td>'+location+'</td>';
       output+= '<td>'+movie+'</td>';
       output +='<td>'+fromDate+'</td>';
        output +='<td>'+toDate+'</td>';
        output+='<td>Confirmed</td>';
        output+='<td>'+confirmedTicketCount+'</td>';
        output+='<td>'+confirmedTicketCost+'</td></tr>';
        output+= '<tr><td>'+location+'</td>';
        output+= '<td>'+movie+'</td>';
        output +='<td>'+fromDate+'</td>';
         output +='<td>'+toDate+'</td>';
         output+='<td>Cancelled</td>';
         output+='<td>'+cancelledTicketCount+'</td>';
         output+='<td>'+cancelledTicketCost+'</td></tr>';
         output += `</tbody> </table>`;

      
       document.getElementById("reports").innerHTML = output;


})

}