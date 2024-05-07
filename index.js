

var names = [];
var bids = [];

function toTitle(name) {
    var result = "";
    result = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
    return result;
}

$("#save").on("click", function (){
    if ($("#name").val().length < 3 && $("#amount").val().length === 0){
        alert("Name field must have at least 3 characthers.\nAnd Amount field can't be empty.");
    }
    else if($("#name").val().length < 3) {
        alert("Name field must have at least 3 characthers.");
    }
    else if($("#amount").val().length === 0){
        alert("And Amount field can't be empty.");
    }
    else if ($("#amount").val() < 100){
        alert("Bid can't be less than $100.00.");
    }
    else{
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
    }

});

$("button").hover(function () {
    $(this).css("background-color", "antiquewhite");
    $(this).css("opacity", "0.7");

    setTimeout(function () {
        $("button").css("background-color", "");
        $("button").css("opacity", "1");
    }, 200);

});


function isEmpty (){
    if ($("#name").val().length < 3 && $("#amount").val().length === 0){
        alert("Name field must have at least 3 characthers.\nAnd Amount field can't be empty.");
    }
    else if($("#name").val().length < 3) {
        alert("Name field must have at least 3 characthers.");
    }
    else if($("#amount").val().length === 0){
        alert("And Amount field can't be empty.");
    }
    else if ($("#amount").val() < 100){
        alert("Bid can't be less than $100.00.");
    }
}


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
    if(names.length > 0){
        $(".body").html("<div style='background-image: url(./on2.png); width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; font-size: 1.2rem; flex-direction: column;'><h1 style='width: 90%; color: yellowgreen; text-align: center;'></h1> <img src='./auc3-removebg-preview.png' alt='' style='height: 30%; width: 25%;'></div>");

        $(".body h1").text("The winner is " + toTitle(winner) + " with a bid of $" + maxAmount.toFixed(2));
        var conf = new Audio("./Voicy_Confetti sound effect 2.mp3");
        conf.play();

        
        setTimeout(function () {
            const jsConfetti = new JSConfetti();
            jsConfetti.addConfetti({
                confettiRadius: 8,
                confettiNumber: 1000,
              })
    
    
            jsConfetti.addConfetti();
        }, 500);
      
    }

    
});
