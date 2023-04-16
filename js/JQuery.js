#mensaje {
    padding: 20px;
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    cursor: pointer;
    display: none;
}

$(document).ready(function() {
    $("#mensaje").click(function() {
        $(this).fadeOut(500, function() {
            $(this).fadeIn(500);
        });
    });
});

$(document).ready(function() {
    function cambiarColorDeFondo() {
      $(this).css('background-color', 'red');
    }
    
    $('p').click(cambiarColorDeFondo);
  });