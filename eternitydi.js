(function($, window){
    $(document).ready(function(){
        if($('#menutext').find('a:contains("Admin")')[0]){
            $('.nav .admin-nav').removeClass('hidden');
        }else{
            $('.nav .admin-nav').remove();
        }
    });
})(jQ, window); //this is so the javascript environment is isolated from the mess