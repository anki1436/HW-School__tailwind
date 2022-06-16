
  
$(document).ready(function () {

    let options = {
      startAngle: -1.55,
      size: 100,
      value: 0.34,
      fill: {
        gradient: ['#841E25', '#841E25']
      }
    }
    $(".progressbar__circle .progressbar__bar").circleProgress(options).on('circle-animation-progress',
      function (event, progress, stepValue) {

        $(this).parent().find(".progressbar__percentage").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
    $(".js .progressbar__bar").circleProgress({
      value: 0.74,
      fill: {
        gradient: ['#70CE88', '#70CE88']
      }
    });
    $(".react .progressbar__bar").circleProgress({
      value: 0.44,
      fill: {
        gradient: ['#FFBA49', '#FFBA49']
      }
    }); });
    // $(".district.button").click(function(){

    //     $(".district.dropdown").show();
    //     // $(".dropdown").slideUp();

    //     });
    //     $(".eduService.button").click(function(){
    //         $(".eduService.dropdown").show();
    //         // $(".dropdown").slideUp();
    
    //         });
    //         $(".athelete.button").click(function(){
    //             $(".athelete.dropdown").show();
    //             // $(".dropdown").slideUp();
        
    //             });
    //             $(".more.button").click(function(){
    //                 $(".more.dropdown").slideToggle();
    //                 // $(".dropdown").slideUp();
            
    //                 });
                    $(".search.button").click(function(){
                        $(".search.dropdown").slideToggle();
                        // $(".dropdown").slideUp();
                
                        });
                        $("#search").click(function(){
                            // $(".dropdown").slideUp();
                            $("#searchModal").css("top", "0")
                            $("body").css("overflow","hidden")
                    
                        });
                        $("#searchClose").click(function(){
                            // $(".dropdown").slideUp();
                            $("#searchModal").css("top", "-100%")
                            $("body").css("overflow","auto")

                    
                        });




// const menuContainer =document.getElementById("menu");
// const menuBtn =document.getElementById("menubar")  ;
// menuBtn.onclick              
$('#menubar').click(function() {
    $("#navClose").css({"display":"block"})
    $('#menu').animate({
        'right': '0',
     
    });
});
$('#navClose').click(function() {
    $('#menu').animate({
        "right":"-100%",
        'position': 'static',    
    });
    $("#navClose").css({"display":"none"})

});
$('.lang-btn').click(function() {
$('.lang-dropdown').toggleClass("lang-on")

});


let newNmun= 25;
var hey=(temp,main)=>  { 
console.log(`"hey" + ${temp} + ${main}`);
}
hey("ankit",9);



const nav =document.getElementsByTagName("header");                                                                                                                                                   
let bannerTop=nav[0].clientHeight+"px";

// console.log(bannerTop)

$("body").css("padding-top",bannerTop);