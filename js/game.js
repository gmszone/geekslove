
var game = {
	data : {
		score : 0
	},
	
	"onload" : function () {
	if (!me.video.init("screen", 960, 640, true, 'auto')) {
		alert("您当前的浏览器并不支持 HTML5 canvas.");
		return;
	}

	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(this, debugPanel, "debug");
		});
	}

	me.audio.init("mp3,ogg");
	me.loader.onload = this.loaded.bind(this);
	me.loader.preload(game.resources);
	me.state.change(me.state.LOADING);
},

	"loaded" : function () {
        me.state.set(me.state.PLAY, new game.PlayScreen());
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP,  "up");
        me.input.bindKey(me.input.KEY.DOWN,  "down");
        me.state.change(me.state.PLAY);

	}
};
