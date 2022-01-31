$(function() {
	//2020.12.8
	//代码仅供学习用途
	
	var ifr = 'https://jiexi.videojiexi.com/dmplayer/?url=';
    var url = window.location.href;
    var playe = '<iframe style="width: 100%;height: 100%;border:0px" src="' + ifr + url + '"></iframe>';
    var host = window.location.host;
    switch (host) {
        case "v.youku.com":
            if ($("#player").find(".vip_limit_box").length > 0) {
                $("#player").empty();
                $("#player").append(playe);
            } else {
                $(".h5-ext-layer").find("div").remove();
                $(".control-play-icon").click();
            }
            break;
        case "www.iqiyi.com":
            url = '';	
			setInterval(function(){
				if(url != window.location.href){
					url = window.location.href;
					playe = '<iframe style="width: 100%;height: 100%;border:0px" src="' + ifr + url + '"></iframe>';
					$("#flashbox").empty();
					$("#flashbox").append(playe);
					$(".qy-player-vippay-popup").parent().remove();
//player-mnc					
				}
			},1000);
            break;
        case "v.qq.com":
			setInterval(function(){
				if(url != window.location.href){location.reload();}
				if($(".mod_vip_popup").length>0){
					$(".mod_vip_popup").remove();
					$("#mask_layer").remove();
					$("#mod_player").empty();
					$("#mod_player").append(playe);
				}
				var tx = $(".txp_ad").find("txpdiv").find("video");
				if (tx.length>0){
					$(tx).each(function(index,element){
					   this.currentTime = 100;
					});
				}				
			},500);							
            break;
        case "www.mgtv.com":
			setInterval(function(){
				if(url != window.location.href){location.reload();}
				if($(".control-tips-line").children().length>0){
					$("#mgtv-player-wrap").empty();
					$("#mgtv-player-wrap").append(playe);				
				}
				var i = $("video")[0].duration;
				if (i>0 && i < 30){
					$("video")[0].currentTime = 100;
				}
			},500);
            break;
    }
});