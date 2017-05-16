$('#get-btn').on('click', function(){
    ajaxCall();
    $('.emp-details').fadeIn();
    $('#get-btn').fadeOut();
});

function ajaxCall (){
    $.ajax({
        type: 'GET',
        url: 'JSON/data.json',
        dataType: 'json',
        success: function (data) {
            $.each(data, function(key, element){
                $('.emp-data').append(
                    '<div class="row">'+
                        '<div class="col-md-2">'+
                            '<div class="image-placeholder pull-right"  style="width: 130px; height: auto">'+
                                '<img src="'+ element.prof_pic +'" class="img-responsive img-thumbnail" alt="">'+
                            '</div>	'+
                        '</div>'+
                        '<div class="col-md-10 text-left">'+
                            '<h3>'+ element.name + '</h3>'+
                            '<h4>' + element.org + '</h4>'+
                            '<h5><strong>' + element.profile + '</strong></h5>'+
                            '<p style="color: #999;">' + element.desc + '</p>'+
                        '</div>'+
                    '</div>'
                );
            })
        }
    });
}
