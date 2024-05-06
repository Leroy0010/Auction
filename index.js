var names = [];
var bids = [];

function toTitle(name) {
    var result = "";
    result = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
    return result;
}

$("#save").on("click", function (){
    if ($("#name").val().length > 0 && $("#amount").val().length > 0) {
        var nameInput = $("#name").val();
        var bidInput = parseFloat($("#amount").val());
        names.push(nameInput);
        bids.push(bidInput);
        nameInput = "";
        bidInput = "";
        $("input:text").val("");
        $("#save").addClass('pressed')
        setTimeout(function (){
            $("#save").removeClass('pressed')
        }, 200);
    }
    
});

$("button").hover(function () {
    $(this).css("background-color", "antiquewhit");
    $(this).css("opacity", "0.7");

    setTimeout(function () {
        $("button").css("background-color", "");
        $("button").css("opacity", "1");
    }, 1000);

});



$("#declare").on("click", function() {
    var maxAmount = bids[0];
    var winner = names[0];
    for (var index = 0; index < bids.length; index++){
           if (bids[index] > maxAmount) {
                maxAmount = bids[index];
                winner = names[index];
           }
    }
    
    // alert("The winner is " + winner + " with a bid amount of $" + maxAmount.toFixed(2));

    $(".body").html("<div style='background-image: url(./con2.png); width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; font-family: cursive; flex-direction: column;'><h1 style='width: 90%; color: yellowgreen; text-align: center;'></h1> <img src='./auc3.jpg' alt='' style='height: 30%; width: 25%;'></div>");

    $(".body h1").text("The winner is " + toTitle(winner) + " with a bid of $" + maxAmount.toFixed(2));
});

    



