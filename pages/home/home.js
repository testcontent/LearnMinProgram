// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [
      '衣服', '裤子', '鞋子'
    ]
  },
  btnClick() {
    console.log(123);
  },
  handleTouchstart(){
    console.log("handleTouchstart");
  },
  handleTouchmove() {
    console.log("handleTouchmove");
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
  },
  handleTap() {
    console.log("handleTap");
  },
  handleLongpress() {
    console.log("handleLongpress");
  },
  handleEventClick(event) {
    console.log(event);
  },
  handleEventTouchend(event) {
    console.log("+++", event);
  },
  handleItemClick(event) {
    // console.log(event);
    const dataset = event.currentTarget.dataset;
    const index = dataset.index;
    const title = dataset.item;
    console.log(index, title);
  },

  // 事件冒泡和捕获
  handleCaptureView1() {
    console.log("handleCaptureView1");
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handleCaptureView2() {
    console.log("handleCaptureView2");
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");
  },
  handleBindView3() {
    console.log("handleBindView3");
  }
})