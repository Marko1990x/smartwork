$(document).ready(function(){
   
    $('#formButton').on('click', function(){
        /********
         * AJAX *
         ********/

        /*---Ajax with JSON Stringify---*/

        var customer = 'cust=' + 
            JSON.stringify({ 
                FirstName: $('#FirstNameTB').val(),
                LastName: $('#LastNameTB').val()
            });
        console.log('Customer',customer);
        $.ajax({
            url: 'http://doitfred.somee.com/jQuery/CustomerService.svc/InsertCustomer',
            data: customer,
            dataType: 'json',
            /*
            success: function(data, status, xhr) {
                $('#outputDiv').html('Insert status: ' + data.d.Status + '<br/>' + data.d.Message);
            },
            error: function(xhr, status, error) {
                alert('Error occurred: ' + status);
            }
            */
        })
        .done(function(data, status, xhr) {
             console.log('Data',data);
             $('#outputDiv').html('Insert status: ' + data.d.Status + '<br/>' + data.d.Message);
        })
        .fail(function(xhr, status, error) {
             alert('Error occurred: ' + status);
        });
    });
});