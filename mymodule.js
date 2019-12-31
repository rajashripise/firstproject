fs=require("fs");
exports.addition=function(a,b){
     return parseInt(a)+parseInt(b);
}

exports.writedatafile=function(nm,skills){
	data=nm+",";
	for(i=0;i<skills.length;i++){
		data=data+skills[i]+",";
		
	}
	fs.appendFile("userdata.txt",data);
}