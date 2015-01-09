(function() {
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");

    window.onresize = function() {
        setCanvas(window.innerHeight, window.innerWidth);
        draw(window.innerHeight, window.innerWidth);
    };

    var setCanvas = function(height, width) {
        canvas.height = height;
        canvas.width = width;
    };

    var draw = function(height, width) {
        ctx.fillStyle = "rgb(250, 173, 114)";
        ctx.strokeStyle = "rgb(236, 250, 114)";
        ctx.fillRect(0, 0, width, height);

        ctx.beginPath();
        ctx.arc(width/2 + 50, height/2, 100, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width/2, height/2 + 50, 100, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width/2 - 50, height/2, 100, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width/2, height/2 - 50, 100, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(width/2, height/2, 100, 0, 2*Math.PI, true);
        ctx.stroke();
    };

    setCanvas(window.innerHeight, window.innerWidth);
    draw(window.innerHeight, window.innerWidth);
})();