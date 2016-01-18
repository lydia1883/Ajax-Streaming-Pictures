// JavaScript Document

  
		   //打开浏览器
	function ajax(method,url,data,success){	  
		 
		   var xhr=null;
		  if(window.XMLHttpRequest){
		  
		   xhr=new XMLHttpRequest();
		  
		  }else{
			  
			xhr=new ActiveXObject('Microsoft.XMLHTTP') 
			  
			  }
		   //在地址栏输如入地址
		   
		   if(method=='get' && data){
			   
			  url+='?'+data; 
			   
		   }
		 
		   xhr.open(method,url,true);
		   
		   //提交
		 
		 if(method=='get'){
		 
		   xhr.send();  
		 
		 }else{
			
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded'); 
			
			xhr.send(data);    
			 
			 }
		   //等待服务器
		   xhr.onreadystatechange=function(){
			   
			  if(xhr.readyState==4){
					  
				    if(xhr.status==200){
	
						if(success){
						success(xhr.responseText);
						}
					}else{
							
					alert("出错了，Err:"+xhr.status);		
							
						}
				  } 

			   
			   }
			   
	   }