debugger;
var canvas = document.getElementById("bg-canvas"),
    ctx = canvas.getContext('2d'),
    triangles = [],
    colors = ["#EFA580", "#9D5184", "#47183A", "#B42842","#2E1432"];

var resize = function ()
{
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientWidth;
}
window.addEventListener('resize', resize);
resize();
function Triangle()
{
    
        this.coords = [{}, {}, {}];
        this.pos = {};

    this.init = function init()
    {
        this.pos.x = Math.random() * canvas.width;
        this.pos.y = Math.random() * canvas.height;
        this.coords[0].x =  Math.random() * 10;
        this.coords[0].y =  20 + Math.random() * 80;
        this.coords[1].x =  20 + Math.random() * 80;
        this.coords[1].y =  Math.random() * 10;
        this.coords[2].x =  50 + Math.random() * 100;
        this.coords[2].y =  50 + Math.random() * 100;
    }

    this.draw = function ()
    {
        ctx.beginPath();
        ctx.moveTo(this.coords[0].x + this.pos.x, this.coords[0].y + this.pos.y);
        ctx.lineTo(this.coords[1].x + this.pos.x, this.coords[1].y + this.pos.y);
        ctx.lineTo(this.coords[2].x + this.pos.x, this.coords[2].y + this.pos.y);
        ctx.closePath();
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.fill();
    };
    this.animate = function ()
    {
        var i;
        for (i = 0; i < config.length; i++) {

            var star = config.stars[i];

            if (star.y < 0 || star.y > canvas.height) {
                star.vx = star.vx;
                star.vy = - star.vy;
            } else if (star.x < 0 || star.x > canvas.width) {
                star.vx = - star.vx;
                star.vy = star.vy;
            }

            star.x += star.vx;
            star.y += star.vy;
        }
    };
 
}

function draw()
{
    
    for (var i = 0; i < 15; i++)
    {
        var t = new Triangle();
        t.init();
        triangles.push(t);
        triangles[i].draw();
    }
        
}

