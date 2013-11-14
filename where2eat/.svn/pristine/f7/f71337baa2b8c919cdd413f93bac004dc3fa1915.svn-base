$(document).ready(function(){
    $(".btn2").toggle();
    $(".btn1").click(function(){
        $(".btn1").attr("disabled", true);
        $(this).html("counting...");
        var timer = setInterval(function(){
            var count = $(".box").length;
            var first_box = Math.floor(Math.random()*count);
            if (count != 1){
                $(".box:eq("+first_box+")")
                                       .animate({height:"146px",width:"146px",
                                                top:"-=3px",left:"-=3px"},160)
                                       .animate({height:"140px",width:"140px",
                                                top:"+=3px",left:"+=3px"},120)
                                       .animate({height:"360px",width:"360px",
                                                top:"50px",left:"580px"},200)
                                       .animate({height:"5px",width:"5px",
                                                top:"20px",left:"730px",
                                                opacity:"0"},120)
                                       .css("z-index",1)
                var timer2rm = setInterval(function(){
                    $(".box:eq("+first_box+")").remove();
                    clearInterval(timer2rm);},600);
            } else {
                clearInterval(timer);
                var last_box = $(".box:eq("+first_box+")")
                                       .animate({height:"360px",width:"360px",
                                                top:"50px",left:"580px"},160)
                                       .animate({height:"370px",width:"370px",
                                                top:"-=5px",left:"-=5px"},220)
                                       .animate({height:"360px",width:"360px",
                                                top:"+=5px",left:"+=5px"},220);
                var pre_message = last_box.html();
                last_box.html("Finally<br>Let's Go <br>" + pre_message);
                last_box.css("color", "#FFFF00");
                $(".btn1").html("Over");
                $(".btn2").toggle();
            }
        },650);
    });
    $(".btn2").click(function(){
        $(this).toggle();
        $(".btn1").attr("disabled", false);
        $(".btn1").html("开始摇号");
        $("#box_cont").html("\
                <div class='box' id='box1'>永和豆浆</div>\
        		<div class='box' id='box2'>沁芥兰</div>\
        		<div class='box' id='box3'>全家</div>\
       	 		<div class='box' id='box4'>勾魂面</div>\
        		<div class='box' id='box5'>A1</div>\
        		<div class='box' id='box6'>沈小福</div>\
        		<div class='box' id='box7'>一点味</div>\
        		<div class='box' id='box8'>龙抄手</div>\
        		<div class='box' id='box9'>牛牛鱼面</div>\
        		<div class='box' id='box10'>蜀人蜀食</div>\
        		<div class='box' id='box11'>宜宾燃面</div>\
                <div class='box' id='box12'>巷子肥肠</div>"
            );
    });
});
