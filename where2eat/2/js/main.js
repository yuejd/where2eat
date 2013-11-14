function run_box(duration, select_box, box_num, stop, final_box) {
    var j = select_box - 1;
    $(".box:eq(" + j + ")").css({"border":"0px",
                                "width":"140px", "height":"140px"});
    $(".box:eq(" + select_box + ")").css({"border":"5px solid #ffff00",
                                "width":"130px", "height":"130px"});
    if(!stop) {
        if(duration > 50)
            duration  = duration - 40;
        else if(duration < 50 && final_box > 0){
            final_box = final_box - 1;
        } else 
           stop = true;
    } else {
        if(duration < 400)
            duration = duration + 40;
        else {
            var last_box = $(".box:eq(" + select_box + ")");
            setTimeout(function(){
                last_box.animate({height:"360px",width:"360px",
                                  top:"50px",left:"580px"},1260)
                        .css("z-index", 1);
                var pre_message = last_box.html();
                last_box.html("Finally<br>Let's Go <br>" + pre_message);
                last_box.css("color", "#FFFF00");
                $(".btn1").html("Over");
                $(".btn2").toggle();
            }, 600);
            return false;
        }
    }
    select_box = (select_box + 1) % box_num;
    setTimeout(run_box, duration, duration, select_box, box_num, stop, final_box);
}

function rebuildBox() {
    var i = 0;
    var tmpPlace;
    var placeCount;
    var placeArray = new Array();
    while(tmpPlace = $(".place_name:eq(" + i +")").html()) {
        placeArray[i] = tmpPlace;
        i++;
    }
    i = 0;
    var boxTop = 100;
    var boxLeft = 320;
    var re_timer = setInterval(function(){
        placeCount = placeArray.length;
        var j = Math.floor(Math.random()*placeCount);
        var tmpBox = $($(".box")[i]);
        tmpBox.html(placeArray.splice(j, 1)[0]);
        tmpBox.show();
        if(i == 11) {
            clearInterval(re_timer);
        }
        if(i<6) {
            tmpBox.animate({"top": boxTop+"px", "left":boxLeft+"px",
                            "height":"140px", "width":"140px",
                            "fontSize":"30px", "lineHeight":"45px"}, 130);
            boxLeft += 145;
        }
        else if( i > 5 ) {
            boxLeft -= 145;
            boxTop = 245;
            tmpBox.animate({"top": boxTop+"px", "left":boxLeft+"px",
                            "height":"140px", "width":"140px",
                            "fontSize":"30px", "lineHeight":"45px"}, 130);
        }
        i++;
    }, 150);
}

function refreshBox() {
    var i = 0;
    var hi = 50;
    var re_timer = setInterval(function(){
       $( $('.box')[i] ).animate({top:"30px", left:"150px",
                                  width:"40px", height:"40px",
                                  fontSize:"10px", lineHeight:"10px"}, 130, 
                                  function(){ 
                                      var tmp_box = $( $('.box')[i] ); 
                                      tmp_box.css({"border":"0px", "top":hi+"px", 
                                                   "left":"40px", "z-index":-1,
                                                   "color":"#00ff00",});
                                      $("#box0").html(tmp_box.html());
                                      tmp_box.hide();
                                      hi += 20;
                                      if(i<11) {
                                          i++;
                                      }
                                      else {
                                          clearInterval(re_timer);
                                          rebuildBox();
                                      }
                                  });
    }, 170);
}

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".btn2").toggle();
        $(".btn1").attr("disabled", true);
        $(this).html("counting...");
        var count = $(".box").length;
        var final_box = Math.floor(Math.random()*count) + 60;
        var duration_tm = 400;
        var i = 0;
        var stop = false;
        setTimeout(run_box, duration_tm, duration_tm, i, count, stop, final_box);
    });
    $(".btn2").click(function(){
        $(this).toggle();
        $(".btn1").attr("disabled", false);
        $(".btn1").html("开始摇号");
        refreshBox();
        $(this).toggle();
    });
    $(".sub_btn").click(function(){
        $.get("../operate_place.php",{"method":"add","place_name":$(".input_area").val()}, function(data,textStatus){
            if(data == 'false')
                alert("this place exists here");
            else {
                var div_data = "<div class='inner_box'><div class='place_name'>" + data + "</div>"; 
                var button_del = "<button class='delete_btn'></button></div>"
                $(".tiny_box").append( div_data + button_del );
                $(".inner_box:last").mouseover(function(){
                   $(this).children("button").css({"visibility":"visible"});
                });
                $(".inner_box:last").mouseout(function(){
                    $(this).children("button").css({"visibility":"hidden"});
                });
                $(".inner_box:last").click(function(){
                   var place_name = $(this).children(".place_name").html();
                   $.get("../operate_place.php", {"method":"delete", "place_name":place_name}, function(data, textStatus){
                        $(".inner_box:last").remove();
                   });
                });
            }
        });
    });
   $(".inner_box").each(function(i, elem){
       if(i>13){
           $(elem).mouseover(function(){
               $(this).children("button").css({"visibility":"visible"});
           });
       }
   });
   $(".inner_box").each(function(i, elem){
       if(i>13){
           $(elem).mouseout(function(){
               $(this).children("button").css({"visibility":"hidden"});
           });
       }
   });
   $(".delete_btn").each(function(i, elem){
       if(i>13){
           $(elem).click(function(){
               var place_name = $(this).prev().html();
               $.get("../operate_place.php", {"method":"delete", "place_name":place_name}, function(data, textStatus){
                    $(elem).parent().remove();
               });
           });
       }
   });
   $(".btn3").click(function(){
   
   });
});
