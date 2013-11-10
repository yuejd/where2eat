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
$(document).ready(function(){
    $(".btn2").toggle();
    $(".btn1").click(function(){
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
