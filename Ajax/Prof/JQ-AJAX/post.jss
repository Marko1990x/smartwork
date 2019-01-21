$(document).ready(function(){
    $('#mojeDugme').on('click', function(){

       
        /*********
         *  POST *
         *********/

        /*---Basic post request with data---*/

 /*       $.post('http://doitfred.somee.com/jQuery/GetCustomers.aspx',
               {PageSize: 15}, 
               function(data) {
                  console.log("Data "+data);
                  $('#OutputDiv').html(data);
        });
*/
        /*---Post with type json---*/

      $.post('http://doitfred.somee.com/jQuery/CustomerService.svc/GetCustomers', 
              null, 
            function(data){
             //obratimo paznju na data.d
            var cust = data.d[0];
            console.log("Data",data);
            console.log("Data",data.d);
            $('#OutputDiv').html(cust.FirstName + ' ' + cust.LastName);
       }, 'json');

    });
});