let canvas = document.getElementById( "Canvas" );
let context = canvas.getContext( "2d" );
var GRAPH_TOP = 25;
var GRAPH_BOTTOM = 375;
var GRAPH_LEFT = 25;
var GRAPH_RIGHT = 475;

var GRAPH_HEIGHT = 400;
var GRAPH_WIDTH = 500;

function drawbase() {
    context.clearRect( 0, 0, 500, 400 );
    context.beginPath();

    context.moveTo( GRAPH_RIGHT, GRAPH_HEIGHT/2 );
    context.lineTo( GRAPH_LEFT, GRAPH_HEIGHT/2 );
    context.moveTo( GRAPH_WIDTH/2, GRAPH_BOTTOM );
    context.lineTo( GRAPH_WIDTH/2, GRAPH_TOP ); 
    context.stroke();
}

drawbase();


let sqrt_button = document.getElementById("sqrt-button");
let degree_button = document.getElementById("degree-button");
let draw_button = document.getElementById("draw-button");
let text_field = document.getElementById("function");

function add_sqrt() {
    text_field.innerHTML = text_field.innerHTML + "√";
}

function draw() {
    drawbase();
    let textFunc = text_field.innerHTML;
    
    context.moveTo( GRAPH_RIGHT, GRAPH_HEIGHT/2 );
    context.beginPath();
    for(let x=GRAPH_LEFT;x<=GRAPH_RIGHT; ++x){
        if (eval(textFunc)+175 <= GRAPH_TOP && eval(textFunc)+175 >= GRAPH_BOTTOM) {
            context.strokeStyle = 'gray';
            context.lineTo(x, eval(textFunc)+175);
        }
        else {
            context.strokeStyle = 'black';
            context.moveTo(x, GRAPH_HEIGHT/2);
        }
    }
    context.stroke();

}

sqrt_button.addEventListener('click', add_sqrt);
draw_button.addEventListener('click', draw);
