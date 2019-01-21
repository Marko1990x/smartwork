$(document).ready(function(){
    $('#myButton').on('click', function(){
        var $output = $('#outputDiv'),
            store = [];
        $output.text('Loading..');
        
        $.ajax({
            type:'GET',
            url:'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true',
            success: function(data){
                $output.text('');
                
                for(var i = 0, len = data.data.children.length; i < len; i++) {
                    var checkimg = data.data.children[i].data.url,
                    checkimgur = checkimg.substring(7,checkimg.length);
                    // console.log(checkimg.substring(7,9));
                    if((checkimg.substring(7,9) == 'im')){
                        checkimg = 'http://i.' + checkimgur + '.gif';
                    }
                    // console.log(checkimg);
                    store.push('<img src="' + checkimg + '" />');
                }
                // console.log(store);
                $output.append(store);
            },
            dataType: 'json'
        });
    });
});