// JavaScript Document
function ajax(url,fnSucc,fnFaild)
{
	
	
				//1.创建ajax对象；
			if(window.XMLHttpRequest)
				{
					var oAjax=new XMLHttpRequest();
				}
			
			else
				{
					 var oAjax=new ActiveXObject("Microsoft.XMLHTTP");
				}
					
			
			//2,建立连接
			//open(method,url,true)	
				oAjax.open('GET',url,true);
			
			//3,发送请求
				oAjax.send();
			
			
			//4.接受返回
			
			oAjax.onreadystatechange=function()
			{
				
					if(oAjax.readyState==4)  //读取完成
					{
						if(oAjax.status==200) //成功
						   {
							fnSucc(oAjax.responseText);
							//alert('成功:'+oAjax.responseText);
							
							}
						else{
								if(fnFaild)
									{
										fnFaild(oAjax.status);
										
									}
							
							//alert('失败'+oAjax.status);
							}
						
					}
				
			};
			
	
}