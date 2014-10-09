game.PlayScreen = me.ScreenObject.extend({

    onResetEvent: function() {
        game.data.score = 0;

        var colorLayer = new me.ColorLayer("background", "#a4dad2", 0);
        me.game.world.addChild(colorLayer);

        var screenGirl = new me.ImageLayer("ScreenGirl", 262, 607, "ScreenGirl", 13, 1);
        me.game.world.addChild(screenGirl);
        me.game.world.addChild(new me.ImageLayer("bgColor2", 960, 480, "bgColor2", 2, 1));

        console.log(me);
        me.game.world.addChild(new TextLogo(me.video.renderer.getWidth(), me.video.renderer.getHeight()), 4);
//        me.game.world.addChild(new game.rain(120, 10));

        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
    },

    onDestroyEvent: function() {
        me.game.world.removeChild(this.HUD);
    }
});