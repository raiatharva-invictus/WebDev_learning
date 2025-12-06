/* // HTML code used
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <style>
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 23px;
        }
        .box{
            height: 45px;
            width: 45px;
            border: 2px solid black;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
        <div class="box">Box</div>
    </div>
    <script src="random_color_assign.js"></script>
</body>
</html>

*/

let obj = {
    1 : "red",
    2 : "green",
    3 : "blue",
    4 : "black",
    5 : "yellow"
}

let a = (Math.random() * 5) + 1

document.body.firstElementChild.children[0].style.backgroundColor = obj[Math.floor(Math.random() * 5) + 1]
document.body.firstElementChild.children[1].style.backgroundColor = obj[Math.floor(Math.random() * 5) + 1]
document.body.firstElementChild.children[2].style.backgroundColor = obj[Math.floor(Math.random() * 5) + 1]
document.body.firstElementChild.children[3].style.backgroundColor = obj[Math.floor(Math.random() * 5) + 1]
document.body.firstElementChild.children[4].style.backgroundColor = obj[Math.floor(Math.random() * 5) + 1]
