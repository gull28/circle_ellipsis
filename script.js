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
    if(r <= 0){
        r = r * -1
    }
    var y = r;
    var d = 3 - 2 * r;
    drawDot(ox, oy, x, y);
    console.log(y>=x)
    console.log(x,y)
    while (y >= x)
    {
         
        x = x + 1;

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

function line2(){

    const canvas = document.getElementById('myCanvas');

    var context = canvas.getContext("2d");

    const rect = canvas.getBoundingClientRect();



    var xc = parseInt(document.getElementById('elipse_ox_input').value);
    var yc = parseInt(document.getElementById('elipse_oy_input').value);
    var rx = parseInt(document.getElementById('elipse_offset_x').value);
    var ry = parseInt(document.getElementById('elipse_offset_y').value);


    var dx, dy, d1, d2, x, y;
    var x = 0;
    var y = ry;

    var d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    var dx = 2 * ry * ry * x;
    var dy = 2 * rx * rx * y;

    while (dx < dy){

        context.fillRect(x + xc, y + yc,1,1);
        context.fillRect(-x + xc, y + yc,1,1);
        context.fillRect(x + xc, -y + yc,1,1);
        context.fillRect(-x + xc, -y + yc,1,1);



        if (d1 < 0){
            x++;
            dx = dx + (2 * ry * ry);
            d1 = d1 + dx + (ry * ry);
        }
        else{
            x++;
            y--;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d1 = d1 + dx - dy + (ry * ry);
        }
    }

    d2 = ((ry * ry) * ((x + 0.5) * (x + 0.5))) + ((rx * rx) * ((y - 1) * (y - 1))) - (rx * rx * ry * ry);

    while (y >= 0){

        context.fillRect(x + xc, y + yc,1,1);
        context.fillRect(-x + xc, y + yc,1,1);
        context.fillRect(x + xc, -y + yc,1,1);
        context.fillRect(-x + xc, -y + yc,1,1);

        if (d2 > 0){
            y--;
            dy = dy - (2 * rx * rx);
            d2 = d2 + (rx * rx) - dy;
        }
        else{
            y--;
            x++;
            dx = dx + (2 * ry * ry);
            dy = dy - (2 * rx * rx);
            d2 = d2 + dx - dy + (rx * rx);
        }
        }
}