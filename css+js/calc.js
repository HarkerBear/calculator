function init(){
	var monitor=document.getElementById("monitor");
	monitor.value=0;
	monitor.disabled="disabled";
	var btns=document.getElementsByTagName("input");
	var method;
	for(var i=0;i<btns.length;i++){
		btns[i].onclick=function(){
			if(!isNaN(this.value)){
				monitor.value=(monitor.value+this.value)*1;
			}else{
				var char=this.value;
				switch(char){
					case "DEL":
						monitor.value="0";
						break;
					case "AC":
						monitor.value="0";
						method="";
						break;
					case ".":
						if(monitor.value.indexOf(".")==-1){
							monitor.value+=".";
						}
						break;
					case "←":
						if(monitor.value!="0" && monitor.value.length!=1){
							monitor.value=monitor.value.substring(0,monitor.value.length-1);
						}else{
							monitor.value=0;
						}
						break;
					case "+/-":
						monitor.value=monitor.value*(-1);
						break;
					case "=":
						switch(method){
							case("+"):
								monitor.value=monitor.value*1+pre*1;
								pre=monitor.value;
								break;
							case("-"):
								monitor.value=pre*1-monitor.value*1;
								pre=monitor.value;
								break;
							case("*"):
								monitor.value=(monitor.value*1)*(pre*1);
								pre=monitor.value;
								break;
							case("/"):
								if(monitor.value==0){
									monitor.value="Error! Can't Divide 0."
								}else{
									monitor.value=(pre*1)/(monitor.value*1);
									pre=monitor.value;
								}
								break;
						}
						break;
					default:
						method=char;
						pre=monitor.value;
						monitor.value=0;
						break;
				}
			}
		}
	}
}
