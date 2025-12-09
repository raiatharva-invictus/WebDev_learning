
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacker's Terminal</title>
    <style>
        .container{
            height: 90vh;
            width: 90vw;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        
        .main{
            height: 500px;
            width: 700px;
            border: 2px solid gray;
            background-color: rgb(0, 0, 0);
        }
        .header h4{
            padding: 0;
            margin: 0;
        }
        .header{
            background-color: gray;
            padding: 3px;
            font-weight: bolder;
            display: flex;
            justify-content: space-between;
        }
        .header .window span{
            padding: 3px;
        }
        .terminal{
            padding: 5px;
            color: rgb(0, 255, 0);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="main">
            <div class="header"> <h4>Hacker's Terminal...</h4> <span class="window"><span>&#8212;</span><span>&#9744;</span><span>&#10005;</span></span></div>
            <div class="terminal">
            </div>
        </div>
    </div>
    <script src="hackers_terminal.js"></script>
</body>
</html>
*/
function randomDelay() {
    return (Math.floor((Math.random() * 7) + 1)) * 1000;
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function createLoadingStep(className, message) {
    let initialize = document.createElement("div");
    initialize.className = className;
    initialize.innerHTML = message;
    
    let loaded = document.createElement("span");
    
    let dotCount = 0;
    let interval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        loaded.innerHTML = '.'.repeat(dotCount);
    }, 500);
    
    document.querySelector(".terminal").append(initialize);
    document.querySelector(`.${className}`).append(loaded);
    
    await wait(randomDelay());
    
    clearInterval(interval);
    loaded.innerHTML = ' ✓';
}

async function initializing() {
    await createLoadingStep("initializer", "Initializing Hacking");
}

async function readingFiles() {
    await createLoadingStep("readingFiles", "Reading your files");
}

async function password() {
    await createLoadingStep("password", "Password files detected");
}

async function sending() {
    await createLoadingStep("send", "Sending files to Server");
}

async function cleanup() {
    await createLoadingStep("clean", "Cleaning up");
}

async function main() {
    await initializing();
    await readingFiles();
    await password();
    await sending();
    await cleanup();
}

main();