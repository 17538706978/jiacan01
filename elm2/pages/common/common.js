// 公共数据源或者方法的处理
// 饿了么接口
// https://elm.cangdu.org/v1/cities?type=hot
const eleBase = "https://elm.cangdu.org";
// 所有的接口部分存储在对象中
const commomData = {
  hotClick:eleBase + "/v1/cities",//城市列表接口
}
// 导出对象
export default commomData;