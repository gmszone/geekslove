game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {
		game.data.score = 0;

        me.game.world.addChild(new me.ColorLayer("background", "#c69329", 0));
        var screenGirl = new me.ImageLayer("ScreenGirl", 262, 607, "ScreenGirl", 3, 1);
        me.game.world.addChild(screenGirl);
        me.game.world.addChild(new me.ImageLayer("bgColor2", 960, 480, "bgColor2", 2, 1));

        this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
	},

	onDestroyEvent: function() {
		me.game.world.removeChild(this.HUD);
	}
});
