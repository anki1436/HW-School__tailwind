console.log("ii");
// const navOption =document.querySelectorAll(".nav-link")
// console.log(navOption);
// navOption.forEach(el,function(){
//     el.onCl
// })
// for(var i=0;i<navOption.length;i++){
//     navOption[i].addEventListener("click", function(){alert(i)}, false);   
//     console.log(navOption[i]);
// var school= document.getElementById("#school")
// // }
// // navOption.forEach(openOption);
// function openOption(){
//     // console.log(el);
//     // navOption
//     school.style.display="flex";
// $(".dropdown").slideUp();

$(document).ready(function(){

    $(".school.button").click(function(){
        $(".school.dropdown").show();
        $(".dropdown").slideToggle();

    });
    $(".school.button").blur(function(){
        $(".school.dropdown").hide();
    });

    $(".district.button").click(function(){
        $(".district.dropdown").show();
        $(".dropdown").slideUp();

    });
    $(".district.button").blur(function(){
        $(".district.dropdown").hide();
    });
    $(".eduService.button").click(function(){
        $(".eduService.dropdown").show();
        $(".dropdown").slideUp();

    });
    $(".eduService.button").blur(function(){
        $(".eduService.dropdown").hide();
    });
    $(".athelete.button").click(function(){
        $(".athelete.dropdown").show();
        $(".dropdown").slideUp();

    });
    $(".athelete.button").blur(function(){
        $(".athelete.dropdown").hide();
    });
    $(".more.button").click(function(){
        $(".more.dropdown").show();
        $(".dropdown").slideUp();

    });
    $(".more.button").blur(function(){
        $(".more.dropdown").hide();
    });
    // $(".school.button").blur(function(){
    //     $(".school.dropdown").hide();
    //     // $(".dropdown").slideUp();

    // });
    // $(".school.button").blur(function(){
    //     $(".school.dropdown").hide();
    //     // $(".dropdown").slideUp();

    // });
    
});
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


 