let app = getApp();
import urlList from "../common/common.js";

// pages/wrap/wrap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
         Gus:"",
         Hot:[],
         groups:{}
  },
  clickNext(e){
    console.log(e);
    var i = e.target.dataset.arrobj.name;
    let obj = JSON.stringify(i);
    console.log(i);
    console.log(obj);
    wx.navigateTo({
      url: '../shousuo/shousuo?city=' + obj,
    })
  },
  //定位城市
  gerCitys(){
     app.reqHttp(urlList.hotClick,{
       type:"guess"
     },"GET",this.citiesData,this.citiesErr,function(){

     })
  },
  citiesData(res){
    console.log(res.data);
    this.setData({
      Gus:res.data
    })
      },
      citiesErr(err){
    console.log(err);
      },
      //热门城市
      getCitys(){
         app.reqHttp(urlList.hotClick,{
           type:"hot"
         },"GET",this.citiData,this.citiErr,function(){

         })
      },
      citiData(res){
        console.log(res.data);
          this.setData({
            Hot:res.data
          })
      },
     citiErr(err){
      console.log(err);
     },
//所有城市
     citys(){
        app.reqHttp(urlList.hotClick,{
          type:"group"
        },"GET",this.groupCity,this.groupCitys,function(){

        })
     },
     groupCity(res){
     console.log(res.data);
      let newArr = Object.keys(res.data).sort();
      let newobj = {};
      for (let i = 0; i < newArr.length; i++) {
        newobj[newArr[i]] = res.data[newArr[i]];
      }
       this.setData({
        groups:newobj
       })
        
     
     },
      groupCitys(err){
       console.log(err);
      },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.gerCitys();
      this.getCitys();
      this.citys();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})