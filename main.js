canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");// first we get the refrence for canvas and store inside variable
nasa_mars_images_array = ["nasa_img1.jpg","nasa_img2.jpg","nasa_img3.jpg","nasa_img4.jpg"];
random_number= Math.floor(Math.random() * 4);
background_image = nasa_mars_images_array[random_number];

rover_width = 100;// create a var that store the width of rover as 100 which should be less than the canvas width(800)
rover_height = 90;// var height 90 so that it wont look big on canvas(300)

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;// define x and y coordinates of rover or we set them
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variableUPLoad the background 
	//function automatically
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0 , 0, canvas.width, canvas.height);//var name(IMGTag)x value y value we have set value to 00 so that it comes
}//draw() draws the image on canvas	(9 end  and 10)

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);//ref to canvas draw image is a function rover width is 100 nad h is 90 alreday set
}
//live test

window.addEventListener("keydown", my_keydown);//keydown will get the value of key we press n my_keydown
//window = means whole screen
function my_keydown(e)
{
	keyPressed = e.keyCode;// every key has ASCII value will get the infirmation of the key we pressed  keyboard by using e.keycode
	//e.keycode will fetch you the kwy value and saved in the variable keypressed
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
	if(rover_y >=0)
	{
		rover_y -=10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	