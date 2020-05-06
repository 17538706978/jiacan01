//app.js 全局的js交互部分 js交互是全局的；对于所有界面文件都适用
App({
  onLaunch: function () {
    console.log("app.js中的钩子函数onlaunch");
    console.log("App加载完成");
  },
  onShow:function(){
    console.log("打开小程序");
  },
  onHide(){
    console.log("退出小程序，进入后台");
  },
  // 设置全局的状态，可以让多个页面共享数据，key随意设置
  globalData:{
    shops:["香蕉","苹果","梨子"],
    price:9
  },
  // 封装网络请求的方法  ---  全局
  // url:请求参数
  // data：接收传递的参数
  // method：请求方式post或者get
  // callback：网络请求成功，执行的回调函数
  // error：网络请求失败，执行的回调函数
  // succOrErr:无论成功失败调用的函数
  reqHttp(url,data,method,callback,error,succOrErr){
    // 网络请求
    wx.request({
      url:url,
      data:data,
      method:method,
      header:{
         'content-type':method == "GET" ? "json" : "application/x-www-form-urlencoded"
        // 'content-type':"application/x-www-form-urlencoded"
      },
      dataType:"json",
      success:(res)=>{//网络请求成功，返回的数据res
          callback(res);//回调函数
      },
      fail:(res)=>{
        error(res);
      },
      complete:()=>{
         succOrErr();
      }
    })
  }
})