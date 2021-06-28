// // 微信自动播放背景音乐

// document.addEventListener("WeixinJSBridgeReady", function () { 
//     audio.play(); 
// }, false);

//分享给好友
function sendMessage(){
    WeixinJSBridge.on('menu:share:appmessage', function(argv){
        WeixinJSBridge.invoke('sendAppMessage',{
            "appid":"", //appid 设置空就好了。
            "img_url": './images/weixin.jpg', //分享时所带的图片路径
            "img_width": "120", //图片宽度
            "img_height": "120", //图片高度
            "link":'http://jinlee.ngrok2.xiaomiqiu.cn/', //分享附带链接地址
            "desc":"快进来吸猫", //分享内容介绍
            "title":"喵喵喵~"
        }, function(res){
            /*** 回调函数，最好设置为空 ***/
        }); 
    });
}
