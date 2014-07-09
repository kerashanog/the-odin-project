var numOfSquare = 16;
var gridWidth = 1000;
var sizeOfSquare = Math.round(gridWidth/numOfSquare)-13;

$(document).ready(function(){   

    //add square
    addSquare(numOfSquare);

    //change color square when hover
    $('.square').hover(
    function(){
        $(this).css('background-color','#f00');

    },
    function(){
        $(this).css('background-color','#3e3e3e');

    });

    //clear
    $('#clear').click(function(){
        $('.grid > div').remove();

    });

    //add new
    $('#new').click(function(){
        numOfSquare = prompt("Number of square?");
        addSquare(numOfSquare);
    });
});

var addSquare = function(numOfSquare){
    for (var i = 0;i<numOfSquare;i++){
        var add = '<div class="row">';
        $('.row').height(sizeOfSquare+4);
        for (var j = 0; j<numOfSquare; j++){
                add+='<div class="square"></div>';
                $('.square').width(sizeOfSquare);
                $('.square').height(sizeOfSquare);

        };
        add+='</div>';
        $('.grid').append(add);
    };  
};




