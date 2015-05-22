/*get cookie. they're stored in javascript like this: name=value;name2=value2;...
so this is to append a ; to the beginning and split at the name to get the value*/
function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2){
		var c = decodeURIComponent(parts.pop().split(";").shift());
		return c.replace("+"," "); //just in case you need to return a timestamp, ensures proper formatting
	}
}

/*check for entry*/
function checkLogEntry(){
var xmlhttp;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
	document.getElementById("logged").value = xmlhttp.responseText; //populate hidden field with the response
	}
}

xmlhttp.open("GET","checklogentry.php",true); //async to true so none of the scripts hang
xmlhttp.send();
}

/*log shift*/
function logShift(){
var xmlhttp;
if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
	console.log(xmlhttp.responseText); //I didn't know what to put here so I just log the response in the console
	}
}

xmlhttp.open("GET","logshift.php",true);
xmlhttp.send();
}

//keep track of the hour
function getCurrHour(thisHour){
	switch(thisHour){
		case 0:
			document.cookie="hour="+2+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 1:
			document.cookie="hour="+3+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 2: 
			document.cookie="hour="+4+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 3:
			document.cookie="hour="+5+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 4:
			document.cookie="hour="+6+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 5: 
			document.cookie="hour="+7+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 6:
			document.cookie="hour="+8+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 7:
			document.cookie="hour="+1+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 8: 
			document.cookie="hour="+2+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 9:
			document.cookie="hour="+3+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 10:
			document.cookie="hour="+4+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 11: 
			document.cookie="hour="+5+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 12:
			document.cookie="hour="+6+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 13:
			document.cookie="hour="+7+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 14: 
			document.cookie="hour="+8+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 15:
			document.cookie="hour="+1+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 16:
			document.cookie="hour="+2+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 17: 
			document.cookie="hour="+3+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 18:
			document.cookie="hour="+4+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 19:
			document.cookie="hour="+5+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 20: 
			document.cookie="hour="+6+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 21:
			document.cookie="hour="+7+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 22:
			document.cookie="hour="+8+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
		case 23: 
			document.cookie="hour="+1+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			break;
	}
}


function pollServer(){
var xmlhttp;
var currTime = new Date(); //current timestamp

if (window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
	//console.log(xmlhttp);
}
else{
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
	var obj = JSON.parse(xmlhttp.responseText);
	//console.log(obj);
	ctime = parseFloat(getCookie('ctime')); //standard cycle time
	actime = parseFloat(obj.actime); //actual cycle time
	
	//update status bar depending on the cycle time 

	/*

	The logic says to if actual cycle time is > 0, then check if actual
	cycle time is less than of equal to cycle time.
	
	*/
		if(actime > 0){
			if(actime <= ctime){
			document.getElementById("status").style.backgroundColor='green';
			document.getElementById("status").style.color = "white";
			document.getElementById("label").innerHTML = "At or above cycle.";
			}
			else{
				document.getElementById("status").style.backgroundColor='yellow';
				document.getElementById("status").style.color = "black";
				document.getElementById("label").innerHTML = "Below cycle.";
			}
		}
		else{
			document.getElementById("status").style.backgroundColor='white';
			document.getElementById("status").style.color = "black";
			document.getElementById("label").innerHTML = "Idle.";
		}	
		
		//display alert if the machine is put in manual
		if(obj.manual == "no"){
		el = document.getElementById("in manual");
		el.style.visibility = "visible";
		}
		
		var currHour = currTime.getHours();
		getCurrHour(currHour); //track the hour
		
		//track the shift
		if(currHour >= 0 && currHour < 7){
			document.cookie="shift="+3+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		else if(currHour >= 7 && currHour < 15){
			document.cookie="shift="+1+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		else if(currHour >= 15 && currHour < 23){
			document.cookie="shift="+2+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		
		if(currTime.getMinutes() == 59 || getCookie("jobcomplete") == "yes"){
			checkLogEntry();
			if(document.getElementById("logged").value == "none found"){
				if(parseFloat(getCookie("act_h")) < parseFloat(getCookie("pla_h"))){
					el = document.getElementById("slow");
					el.style.visibility = "visible";
				}
				else{
					//update database
					logShift();
						
					//populate table
					var table = document.getElementById("shiftlog");

					var row = table.insertRow(-1);

					var hr = row.insertCell(0);
					var partnum = row.insertCell(1);
					var planned = row.insertCell(2);
					var actual = row.insertCell(3);
					var earned = row.insertCell(4);
					var status = row.insertCell(5);
					var reason = row.insertCell(6);
					var ac = parseFloat(getCookie("act_c"));
					var pc = parseFloat(getCookie("pla_c"));
					
					ac += parseFloat(getCookie("act_h"));
					pc += parseFloat(getCookie("pla_h"));
					
					hr.innerHTML = getCookie("hour");
					partnum.innerHTML = getCookie("pnum");
					planned.innerHTML = getCookie("pla_h") + "/" + pc;
					actual.innerHTML = getCookie("act_h") + "/" + ac;
					earned.innerHTML = parseFloat(getCookie("act_h"))/parseFloat(getCookie("pla_h"));
					status.innerHTML = "green";
					status.style.backgroundColor = "green";
					reason.innerHTML = "none";
				}
			}
			
		}
			
		}
		
    
}

xmlhttp.open("GET","getvalues.php",true);
xmlhttp.send();
}


/*same as above, minus the status bar code and updating the table.
this is for the other pages that still need to track the job */
function pollServer2(){
var xmlhttp;
var currTime = new Date();

if (window.XMLHttpRequest){
	xmlhttp=new XMLHttpRequest();
}
else{
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 && xmlhttp.status==200){
	var obj = JSON.parse(xmlhttp.responseText);
	ctime = parseFloat(getCookie('ctime'));
	actime = parseFloat(obj.actime);	
		
		if(obj.manual == "no"){
		el = document.getElementById("inmanual");
		el.style.visibility = "visible";
		}
		
		var currHour = currTime.getHours();
		getCurrHour(currHour);
		
		if(currHour >= 0 && currHour < 7){
			document.cookie="shift="+3+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		else if(currHour >= 7 && currHour < 15){
			document.cookie="shift="+1+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		else if(currHour >= 15 && currHour < 23){
			document.cookie="shift="+2+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
		}
		
		if(currTime.getMinutes() == 59 || getCookie("jobcomplete")=="yes"){
			checkLogEntry();
			if(document.getElementById("logged").value == "none found"){
				if(parseFloat(getCookie("act_h")) < parseFloat(getCookie("pla_h"))){
					el = document.getElementById("slow");
					el.style.visibility = "visible";
				}
				else{
					logShift();
				}
			}
		}
			
		}
		
}

xmlhttp.open("GET","getvalues.php",true);
xmlhttp.send();
}

/*countdown*/
function countdown(){
			var cav = parseFloat(getCookie("cav")); //get the cavitation
			var pps = cav/actime; //parts per second 
			var parts = parseFloat(getCookie("partsmade")) + pps; //increment parts
			var partsleft = parseFloat(getCookie("partsleft")) - pps; //decrement parts left
			var act_h = parseFloat(getCookie("act_h")) + pps; //increment parts made that hour
			
				//current time is the amount of time needed to make the rest of the parts (number of cycles)
				var currval = (actime)*(partsleft/cav);
				//update progressbar
				var prog = document.getElementById("prog");
				prog.max = parseFloat(getCookie("qty"));
				prog.value = partsleft;
				
				//update cookies
				document.cookie="act_h="+act_h+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
				document.cookie="partsmade="+parts+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
				document.cookie="partsleft="+partsleft+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
				
				//if there are no parts left to make, default to zero and complete the job
				if(partsleft <= 0){
					document.cookie="partsleft="+0+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
					document.cookie="jobcomplete=yes; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
					currval = 0;
					clearInterval(window.clearvar); //stop the countdown script from executing
				}

				//update the countdown
				var h,m,s;
				h = parseInt(currval / 3600);
				currval = currval % 3600;
     
				m = parseInt(currval / 60);
				s = parseInt(currval % 60);
				
				document.getElementById('countdown').innerHTML = "Running part: "+getCookie("pnum")+" "+h + "h:" + m + "m:" + s + "s remaining";

}

/*countdown for other pages. it's the same, minus the progressbar*/
function countdown2(){

			var cav = parseFloat(getCookie("cav"));
			var pps = cav/actime;
			var parts = parseFloat(getCookie("partsmade")) + pps;
			var partsleft = parseFloat(getCookie("partsleft")) - pps;
			var act_h = parseFloat(getCookie("act_h")) + pps;
			
			var currval = (actime)*(partsleft/cav);		
			
			document.cookie="act_h="+act_h+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			document.cookie="partsmade="+parts+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			document.cookie="partsleft="+partsleft+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
			
			if(partsleft > 0){
				document.cookie="partsleft="+0+"; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
				document.cookie="jobcomplete=yes; expires=Wed, 18 Dec 2024 12:00:00 GMT; path=/web";
				currval = 0;
				clearInterval(window.clearvar);
			}
				
			var h,m,s;
			h = parseInt(currval / 3600);
			currval = currval % 3600;
     
			m = parseInt(currval / 60);
			s = parseInt(currval % 60);
				
			document.getElementById('countdown').innerHTML ="Running part: "+getCookie("pnum")+"<br/>"+ h + "h:" + m + "m:" + s + "s remaining";

}

function page(ID)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200){
	//hide the 'select a technician to page' box if it's visible
	el = document.getElementById("techalert");
	el.style.visibility = "hidden";
	
	//display success/failure and add close button to inner div of popup
    document.getElementById("message").innerHTML=xmlhttp.responseText+"<br/><br/><a href='javascript:exit()'>close</a>";
	
	//make containing div visible
	el2 = document.getElementById("confirm");
	el2.style.visibility = "visible";
    }
  }
var params = "type="+ID;
xmlhttp.open("POST","getvalues2.php",true); //post instead of get for sending data
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded"); //specify form headers
xmlhttp.send(params); //pass page type to function
}

function techalert() 
{
	el = document.getElementById("techalert");
	el.style.visibility = "visible";
 }


function exit() 
{ 
	el = document.getElementById("confirm");
	el.style.visibility = "hidden";

}
