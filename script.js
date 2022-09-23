function line() {
    
    const canvas = document.getElementById('myCanvas');

    var context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();



    var ox = parseInt(document.getElementById('ox_input').value);
    var oy = parseInt(document.getElementById('oy_input').value);
    var rx = parseInt(document.getElementById('rx_input').value);
    var ry = parseInt(document.getElementById('ry_input').value);

    var x = 0;
    var r = ox-rx;
    var y = r;
    var d = 3 - 2 * r;
    drawDot(ox, oy, x, y);
    console.log(y>=x)
    console.log(x,y)
    while (y >= x)
    {
        // for each pixel we will
        // draw all eight pixels
         
        x = x + 1;
 
        // check for decision parameter
        // and correspondingly
        // update d, x, y
        if (d > 0)
        {
            y = y - 1;
            d = d + 4 * (x - y) + 10;
        }
        else
            d = d + 4 * x + 6;
            drawDot(ox, oy, x, y);
        
    }

}
 
function drawDot(middle_x, middle_y, side_x, side_y){
    const canvas = document.getElementById('myCanvas');

    var context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();


    context.fillRect(middle_x + side_x, middle_y + side_y,1,1);
    context.fillRect(middle_x - side_x, middle_y + side_y,1,1);
    context.fillRect(middle_x + side_x, middle_y - side_y,1,1);
    context.fillRect(middle_x - side_x, middle_y - side_y,1,1);
    context.fillRect(middle_x + side_y, middle_y + side_x,1,1);
    context.fillRect(middle_x - side_y, middle_y + side_x,1,1);
    context.fillRect(middle_x + side_y, middle_y - side_x,1,1);
    context.fillRect(middle_x - side_y, middle_y - side_x,1,1);

}