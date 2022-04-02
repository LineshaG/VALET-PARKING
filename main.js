Canvas = document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

greencar_width = 80;
greencar_height = 150;

background = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 310;

function add() {
	background_Img = new Image();
    background_Img.onload = uploadBackground;
    background_Img.src = background;

	greencar_ImgTag = new Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencar_image;
}

function uploadBackground()
{
    ctx.drawImage(background_Img, 0, 0, Canvas.width, Canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}		
}

function up()
{
	if(greencar_y>=100)
	    {
		greencar_y= greencar_y-10;
		uploadBackground();
		uploadgreencar();
	    }	
}

function down()
{
	if(greencar_y<=350)     
	    {
		greencar_y= greencar_y+10;
	    uploadBackground(); 
		uploadgreencar();   
	    }
}

function left()
{  
	if(greencar_x>=0)  
        { 
		greencar_x= greencar_x-10;  
	    uploadBackground(); 
		uploadgreencar();     
	    } 
	}		

function right()
{
	if(greencar_x<=700)
		{
		greencar_x= greencar_x+10;
		uploadBackground();
		uploadgreencar();
		}
}	
