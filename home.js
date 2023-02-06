/*menu function*/
function togglemenu(){

}
/*slide bar*/

var i = 0; 			// Start Point
var images = [19];	// Images Array
var time = 3000;	// Time Between Switch

// Image List
images[0] = "suite5.jpg";
images[1] = "dresss1.jpg";
images[2] = "honeymoon1.jpg";
images[3] = "venue1.jpg";
images[4] = "suite2.jpg";
images[5] = "dresss5.jpg";
images[6] = "honeymoon2.jpg";
images[7] = "venue2.jpg";
images[8] = "suite3.jpg";
images[9] = "dresss6.jpg";
images[10] = "honeymoon3.jpg";
images[11] = "venue3.jpg";
images[12] = "suite4.webp";
images[13] = "dresss7.jpg";
images[14] = "download (3).jpg";
images[15] = "5.jpg";
images[16] = "suite6.jpg";
images[17] = "dresss8.jpg";
images[18] = "209205952.jpg";
images[19] = "3.jpg";
images[16] = "suite7.jpeg";
images[17] = "dresss9.jpg";
images[18] = "Four-Seasons-George-V-LUXURY.jpg";
images[19] = "167862986.jpg";

// Change Image
function changeImg(){
document.slide.src = images[i];

// Check If Index Is Under Max
if(i < images.length - 1){
// Add 1 to Index
i++; 
} else { 
// Reset Back To O
i = 0;
}

// Run function every x seconds
setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;
function check()
{  
 var email = document.getElementById("email").Value;

var password=document.getElementById("password").Value;

var admin_mail="admin@gmail.com";

var admin_pass="Abc_123";  
if(email==="")
{
    alert("email is empty");
}
else if(password==="")
{
    alert("password is empty");
}
else if(email===""&&password==="")
{
    alert("email and password are empty");
}
else if(admin_mail===email && admin_pass===password)
{
    
   window.location.href="https://www.w3schools.com";
}
else if(email==="user@gmail.com"&& password==="Abc_321")
{
    window.location.href="https://www.w3schools.com";  
}
else
{
    alert("wrong email or password!");
}
}