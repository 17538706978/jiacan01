// 功能一:添加cookie
function addCookie(cookieKey,cookieValue,overSeconds){
	document.cookie = cookieKey + "="+cookieValue+";max-age=" + overSeconds;
}
// 功能二:删除cookie
function deleteCookie(cookieKey){
	// document.cookie = cookieKey + "=;max-age=-1";
	// 或者
	addCookie(cookieKey,"",-1);
}
// 功能三:获取cookie的值 --- 某个key对应的value值 key=value
function getCookie(cookieKey){
	// document.cookie
	// QQ=934993422; pw=234567; name=zhangcan; count=18
	// 获取所有的cookie,通过;分隔符进行分割
	var arr = document.cookie.split(";");
	for (var i = 0;i < arr.length;i++) {
		 var arr2 = arr[i].split("=");//以=作为分隔符，继续分割
		 // 遍历出来的arr2[0]存储的是此时的key,arr2[1]存储的是key对应的value值;找到此时的key,就可以返回对应的value;trim()去除字符串的首尾空格
		 if (arr2[0].trim() == cookieKey) {
		 	return arr2[1].trim();//返回该key对应的value值
		 }
	}
}

// 功能四:判断cookiekey之前是否存在
function isCookieKey(cookieKey){
	
		// document.cookie
		// QQ=934993422; pw=234567; name=zhangcan; count=18
		// 获取所有的cookie,通过;分隔符进行分割
		var arr = document.cookie.split(";");
		for (var i = 0;i < arr.length;i++) {
			 var arr2 = arr[i].split("=");//以=作为分隔符，继续分割
			 // 遍历出来的arr2[0]存储的是此时的key,arr2[1]存储的是key对应的value值;找到此时的key,证明之前存在；
			 if (arr2[0].trim() == cookieKey) {
			 	return true;
			 }
		}
		return false;//不存在
}




