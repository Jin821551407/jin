// // 微信自动播放背景音乐

// document.addEventListener("WeixinJSBridgeReady", function () { 
//     audio.play(); 
// }, false);

//分享给好友


    // container.addEventListener('click',sendMessage)
    function shareFriend(title, desc, link, imgUrl) {
        WeixinJSBridge.invoke('sendAppMessage', {
            "appid": "", //appid 设置空就好了。
            "img_url": imgUrl, //分享时所带的图片路径'./images/weixin.jpg'
            "img_width": "120", //图片宽度
            "img_height": "120", //图片高度
            "link": url, //分享附带链接地址'http://jinlee.ngrok2.xiaomiqiu.cn/'
            "desc": desc, //分享内容介绍
            "title": title
        }, function (res) {
            /*** 回调函数，最好设置为空 ***/
        });
    }
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        shareFriend('111','111','http://jinlee.ngrok2.xiaomiqiu.cn/','./images/weixin.jpg');
    });
    // // 分享到朋友圈
    // WeixinJSBridge.on('menu:share:timeline', function (argv) {
    //     shareTimeline();
    // });
    // // 分享到微博
    // WeixinJSBridge.on('menu:share:weibo', function (argv) {
    //     shareWeibo();
    // });
}, false);
