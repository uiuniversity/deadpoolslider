jQuery(document).ready(function($){
    $(document).on('click', '.next-btn', function(){
        $(this).toggleClass('active');
        $('.herosection').toggleClass('blackpanther');

        $('h1').text('Black Panther');
    });

    $(document).on('click', '.next-btn.active', function(){

        $('h1').text('DEEDPOOL');
    });
});