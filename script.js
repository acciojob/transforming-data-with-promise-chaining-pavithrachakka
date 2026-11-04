//your JS code here. If required.
const ip=document.getElementById('ip');
const btn=document.getElementById('btn');
const output=document.getElementById('output');
btn.onclick=()=>{
	cont num=parseFloat(ip.value);
	output.innerHtml='';
	function delayPromise(value,time,transform,isFinal=false){
		return new Promise((resolve)=>{
			setTimeout(()=>{
				const result=transform(value);
				if(isFinal){
					output.innerHtml=`Final Result: ${result}`;
				}else{
					output.innerHtml=`Result: ${result}`;
				}
				resolve(result);
			},time);
		});
	}
	delayPromise(num,2000,(val)=>val)
	.then((val)=>delayPromise(val,1000,(v)=>v*2))
	.then((val)=>delayPromise(val,1000,(v)=>v-3))
	.then((val)=>delayPromise(val,1000,(v)=>v/2))
	.then((val)=>delayPromise(val,1000,(v)=>v+10,true));
};