$(function()){
    $("#right_arrow").click(function()){
        $(".slider img").css{
            "transform":"translateX(-100%)"
        };
    };
};

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
}