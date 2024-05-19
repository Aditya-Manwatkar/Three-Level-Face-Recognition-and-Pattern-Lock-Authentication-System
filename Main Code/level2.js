const faceio = new faceIO("<Your Public ID here");
enroll.addEventListener("click", async () => {
    let response = await faceio.enroll({
        locale: "auto",
        payload: {
            email: "example@gmail.com",
            pin: "12345",
        },
    });

    console.log(` Unique Facial ID: ${response.facialId}
    Enrollment Date: ${response.timestamp}
    Gender: ${response.details.gender}
    Age Approximation: ${response.details.age}`);
});
authenticate.addEventListener("click", async () => {
    let response = await faceio.authenticate({
        locale: "auto",
    });

    console.log(` Unique Facial ID: ${response.facialId}
        PayLoad: ${response.payload}
        `);
});
var dots=9;
	var trues=new Array(dots);
	var rects=new Array(dots);
	var lines=[];
	var pattern=new Array(dots);
	var cpattern=new Array(dots);
	var ink="rgb(255,144,0)";
	var success="#8BDC50";
	var spaint="#03A9F4";
	var end,start,index=1,stroke=10;
	var startx,starty,endx,endy,enddx,enddy,width,height;
	var c,ctx,radius=10,ind;
	var timer,interval;
	var patternSet=false,settingPattern=false,patternCorrect=false,drawing=false;
	//////// Assign The Components Here //////////////
	var canvasid="#mycanvas";
	var changeBtnId="#change";
	var outputId="#pattern";

$(document).ready(function(){
	c=document.getElementById(canvasid.substr(1));
////////////////////////Assigning Event Listeners/////////////////////////////////////////
	$(changeBtnId).on('click',function(){
		settingPattern=true;
	});
	$(canvasid).on('mousedown',function(e){
		if(timer){
			clearTimeout(timer);
		}
		resetScreen();
		startx=e.offsetX;
		starty=e.offsetY;
		index=1;
		for(i=0;i<dots;++i){
			if(rects[i].contains(new Point(startx,starty))){
				startx=rects[i].getCenterX();
				starty=rects[i].getCenterY();
				endx=startx;
                endy=starty;
                trues[i]=true;
                pattern[i]=index;
                start=i;
                drawing=true;
                break;
			}
		}
	});
	$(canvasid).on('mouseup',function(e){
		drawing=false;
		printPattern();
		if(settingPattern==true){
			for(i=0;i<dots;++i){
				cpattern[i]=pattern[i];
			}
		}else{
			if(patternCheck()==true){
				patternCorrect=true;
			}
		}
		timer=setTimeout(function(){
			if(patternCorrect==true){
				clearInterval(interval);
			}
			settingPattern=false;
			patternCorrect=false;
			resetScreen();
		},1500);
	});
	$(canvasid).on('mousemove',function(e){
		if(drawing==true){
			endx=e.offsetX;
			endy=e.offsetY;
			for(i=0;i<rects.length;++i){
				if(trues[i]!=true){
					if(rects[i].contains(new Point(endx,endy))){
						index+=1;
						enddx=rects[i].getCenterX();
						enddy=rects[i].getCenterY();
						lines.push(new Line(startx, starty, enddx, enddy));
						startx=enddx;
						starty=enddy;
						end=i;
						if((start==0&&end==2)||(start==2&&end==0)){
							if(trues[1]==false){
                            trues[1]=true;pattern[1]=index;index+=1;}}
                        if((start==3&&end==5)||(start==5&&end==3)){
                            if(trues[4]==false){
                            trues[4]=true;pattern[4]=index;index+=1;}}
                        if((start==6&&end==8)||(start==8&&end==6)){
                            if(trues[7]==false){
                            trues[7]=true;pattern[7]=index;index+=1;}}
                        if((start==0&&end==6)||(start==6&&end==0)){
                            if(trues[3]==false){
                            trues[3]=true;pattern[3]=index;index+=1;}}
                        if((start==1&&end==7)||(start==7&&end==1)){
                            if(trues[4]==false){
                            trues[4]=true;pattern[4]=index;index+=1;}}
                        if((start==2&&end==8)||(start==8&&end==2)){
                            if(trues[5]==false){
                            trues[5]=true;pattern[5]=index;index+=1;}}
                        if((start==0&&end==8)||(start==8&&end==0)){
                            if(trues[4]==false){
                            trues[4]=true;pattern[4]=index;index+=1;}}
                        if((start==2&&end==6)||(start==6&&end==2)){
                            if(trues[4]==false){
                            trues[4]=true;pattern[4]=index;index+=1;}}
                            start=i;
                            trues[i]=true;
                            pattern[i]=index;
                            break;
                        }
                    }
                }
            }
	});

	//////////////////// Setting Interval For Repainting The Screen ///////////////////////////
	interval=setInterval(paint,25/2);
});

/**
* The Paint Function Draws The Dots
*/

function paint(){
	ctx=c.getContext("2d");
	width=c.width;
	height=c.height;
	ctx.clearRect(0,0,width,height);
	ctx.fillStyle="red";
	ctx.lineWidth=radius*2;
	ctx.lineJoin="round";
	ctx.lineCap="round";
	ctx.strokeStyle=ink;
	ctx.shadowColor = "rgb(0, 0, 0)"; 
	ctx.shadowBlur = radius/4;
	ctx.shadowOffsetX = 0;
	ctx.shadowOffsetY = 0;
	if(settingPattern==true){
		ctx.strokeStyle=spaint;
	}
	if(patternCorrect==true){
		ctx.strokeStyle=success;
	}
	for(i=0;i<lines.length;++i){
		lines[i].draw();
	}
	if(drawing==true){
		new Line(startx,starty,endx,endy).draw();
	}
	ind=0;
	for(i=width/6;i<width;i+=width/3){
		for(j=height/6;j<height;j+=height/3){
			fillCircle(i,j);
			if(trues[ind]==true){
				ctx.lineWidth=2;
				ctx.strokeStyle="red";
				strokeCircle(i,j);
			}
			rects[ind]=new Rectangle(i-radius,j-radius,radius*2,radius*2); 
			ind++;
		}
	}
}

/**
* This Function Resets The Pattern
*/

function resetScreen(){
	while(lines.length>0){
		lines.pop();
	}
	for(i=0;i<trues.length;++i){
		trues[i]=false;
		pattern[i]=0;
	}
}

/**
* Checks If The Pattern Is Correct Or Not
*@return Returns True If Pattern Is Correct Else False
*/

function patternCheck(){
	var correct=true;
	for(i=0;i<dots;++i){
		if(cpattern[i]!=pattern[i]){
			correct=false;
			break;
		}
	}
	return correct;
}

/**
* Prints The Pattern On The Component
*/

function printPattern(){
	$(outputId).html("Pattern="+pattern);
}

//////////////// The Line Class ////////////////////////
function Line(startx,starty,endx,endy){
	this.startx=startx;
	this.starty=starty;
	this.endx=endx;
	this.endy=endy;
	this.draw=function(){
		ctx.beginPath();
 		ctx.moveTo(this.startx,this.starty);
 		ctx.lineTo(this.endx,this.endy);
 		ctx.stroke();
 		ctx.closePath();
	}
}

/**
* It Draws And Fills The Circle With Centres(i,j)
*/

function fillCircle(i,j){
		ctx.beginPath();
 		ctx.arc(i,j,radius,(Math.PI/180)*0,(Math.PI/180)*360,false);
 		ctx.fill();
 		ctx.closePath();
}

/**
* It Draws The Circle With Centres(i,j)
*/

function strokeCircle(i,j){
		ctx.beginPath();
 		ctx.arc(i,j,radius*3,(Math.PI/180)*0,(Math.PI/180)*360,false);
 		ctx.stroke();
 		ctx.closePath();
}

/////////////// The Rectangle Class ////////////////////////////
function Rectangle(x,y,width,height){
	this.x=x;
	this.y=y;
	this.width=width;
	this.height=height;
	this.contains=function(point){
		if(point.x>=this.x&&point.x<=(this.x+this.width)&&point.y>=this.y&&point.y<=(this.y+this.height)){
			return true;
		}
		return false;
	}

	this.getCenterX=function(){
		return this.x+this.width/2;
	}

	this.getCenterY=function(){
		return this.y+this.height/2;
	}
}

/////////////// The Point Class //////////////////////////
function Point(x,y){
	this.x=x;
	this.y=y;
}