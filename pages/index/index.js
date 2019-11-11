//index.js
//获取应用实例
//const app = getApp()

Page({
  data: {
    name: "中国",
    age: 18,
    students: [
      { id: 110, name: 'a', age: 30 },
      { id: 111, name: 'b', age: 31 },
      { id: 112, name: 'c', age: 32 },
      { id: 113, name: 'd', age: 33 },
    ],
    counter: 0
  },
  handleBtnClick(){
    //1.错误的做法
    //this.data.counter += 1;

    //2。this.setData()
    this.setData({
      counter: this.data.counter + 1
    });
  },
  handleSubClick(){
    this.setData({
      counter: this.data.counter - 1
    });
  },
  getUserinfos(event){
    console.log(event);
  }
})
