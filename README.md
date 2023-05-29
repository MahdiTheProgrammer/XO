<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="xo.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
</head>
<body>
    
    <div class="container">
        <div class="button-container">
            <button id="cp" onclick="change_chice('computer')" id="button-computer" style="margin-right: 0.5vw;">COMPUTER</button>
            <button id="fr"onclick="change_chice('friend')" id="button-online"> Online</button>
        </div>
        <div class="grid-container">
            <div id="0" class="grid-item" style="border-top: 0px;border-left: 0px;"  ></div>
            <div id="1" class="grid-item" style="border-top: 0px" ></div>
            <div id="2" class="grid-item" style="border-top: 0px;border-right: 0px;" ></div>  
            <div id="3" class="grid-item" style="border-left: 0px" ></div>
            <div id="4" class="grid-item" ></div>
            <div id="5" class="grid-item" style="border-right: 0px" ></div>  
            <div id="6" class="grid-item" style="border-bottom: 0px; border-left:0px;" ></div>
            <div id="7" class="grid-item" style="border-bottom: 0px" ></div>
            <div id="8" class="grid-item" style="border-bottom: 0px; border-right: 0px;" ></div>  
        </div>
        <div id="popup" class="popup">
            <h2 id="msg">mamad</h2>
            <button class="button-restart" onclick="reset()">Restart</button>
        </div>

    </div>
      <script src="xo.js"></script>

</body>
</html>
