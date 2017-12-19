$('.tab-link').click(function(){
    $('.tab-content[data-tab-id]').removeClass("active");
    $(this).addClass("active");
    $('.tab-link').removeClass("active");
    $(this).addClass("active");
});