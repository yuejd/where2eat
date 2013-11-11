<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Where 2 eat</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="find where to eat lunch">
    <meta name="author" content="jdyue">
    <link href="stylesheets/bootstrap.min.css" rel="stylesheet">
    <link href="stylesheets/bootstrap-responsive.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="stylesheets/main.css" media="all" />
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
        <script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body>
    <div id="box_cont">
        <div class="box" id="box1">永和豆浆</div>
        <div class="box" id="box2">沁芥兰</div>
        <div class="box" id="box3">全家</div>
        <div class="box" id="box4">勾魂面</div>
        <div class="box" id="box5">A1</div>
        <div class="box" id="box6">沈小福</div>
        <div class="box" id="box7">一点味</div>
        <div class="box" id="box8">龙抄手</div>
        <div class="box" id="box9">牛牛鱼面</div>
        <div class="box" id="box10">蜀人蜀食</div>
        <div class="box" id="box11">宜宾燃面</div>
        <div class="box" id="box12">巷子肥肠</div>
    </div>
    <button class="btn btn-primary btn1">开始摇号</button>
    <button class="btn btn-primary btn2">Reset</button>
    <form class="place_form">
        <p class="p-block">Add more places...</p>
        <input type="text" class="" placeholder="please input the name of place...">
        <br><button type="submit" class="btn btn_pos">Submit</button>
    </form>
    <div class="tiny_box">
    <?php 
		require_once "func/func.php";
		get_all_places();
    ?>
    </div>
    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</body>
</html>
