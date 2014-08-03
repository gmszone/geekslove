game.PlayScreen = me.ScreenObject.extend({

    onResetEvent: function() {
        game.data.score = 0;

        me.game.world.addChild(new me.ColorLayer("background", "#c69329", 0));
        var screenGirl = new me.ImageLayer("ScreenGirl", 262, 607, "ScreenGirl", 3, 1);
        me.game.world.addChild(screenGirl);
        me.game.world.addChild(new me.ImageLayer("bgColor2", 960, 480, "bgColor2", 2, 1));

        me.game.world.addChild(new TextLogo(me.video.getWidth(), me.video.getHeight()), 4);

        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);
    },

    onDestroyEvent: function() {
        me.game.world.removeChild(this.HUD);
    }
});


var TextLogo = me.Renderable.extend({
    init: function(w, h) {
        this.parent(new me.Vector2d(), w, h);
        this.logo1 = new me.Font("Arial", 64, "white", "middle");
        this.logo1.textBaseline = "alphabetic";
    },

    draw: function(context) {
        var geekText = "极客爱情";
        var logo1_width = this.logo1.measureText(context, geekText).width;
        var xpos = (this.width - logo1_width) / 2;
        var ypos = (this.height / 2);

        this.logo1.draw(context, geekText, xpos, ypos);
    }

});