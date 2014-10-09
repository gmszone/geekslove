
game.rain = me.Renderable.extend({
    init: function(w, h){
        this.parent(new me.Vector2d(), w, h);
    },
    draw: function(){
        var x = me.game.viewport.getWidth() / 2;
        var y = me.game.viewport.getHeight() / 2;
        var image = me.loader.getImage("rain");
        var emitter = new me.ParticleEmitter(x, y, {
            image: image,
            width: 20,
            totalParticles: 20,
            angleVariation: 0.3490658503988659,
            minLife: 1000,
            maxLife: 5000,
            minStartScale: 0.2,
            maxStartScale: 0.4,
            frequency: 1200
        });
        emitter.name = "rain";
        emitter.resize(480, 120);
        emitter.z = 10;
        emitter.speed = 0;
        emitter.speedVariation = 0;
        emitter.angle = Number.prototype.degToRad(270);
        emitter.angleVariation = 0;
        emitter.gravity = 0.2;

        emitter.pos.set(0, 0);
        me.game.world.addChild(emitter);
        me.game.world.addChild(emitter.container);
        emitter.streamParticles();
    }
});

game.smoke = me.Renderable.extend({
    init: function(w, h){
        this.parent(new me.Vector2d(), w, h);
    },
    draw: function(){
        var x = me.game.viewport.getWidth() / 2;
        var y = me.game.viewport.getHeight() / 2;
        var image = me.loader.getImage('smoke');
        var emitter = new me.ParticleEmitter(x, y, {
            image: image,
            width: 20,
            totalParticles: 250,
            angleVariation: 0.3490658503988659,
            minLife: 2000,
            maxLife: 5000,
            minStartScale: 0.2,
            maxStartScale: 0.4,
            frequency: 30
        });
        emitter.name = 'smoke';
        emitter.z = 10;
        me.game.world.addChild(emitter);
        me.game.world.addChild(emitter.container);
        emitter.streamParticles();
    }
});

TextLogo = me.Renderable.extend({

    init: function(w, h) {
        me.Renderable.prototype.init.apply(this, [0, 0, w, h]);
        this.logo1 = new me.Font("Arial", 64, "black", "middle");
        this.logo2 = new me.Font("Arial", 64, "red", "middle");
    },

    draw: function(renderer) {
        var geekText = "极客";
        var loveText = "爱情";
        var logo1_width = renderer.measureText(this.logo1, geekText).width;
        var xpos = (this.width - logo1_width - renderer.measureText(this.logo1, "JS").width) / 2;
        var ypos = (this.height / 2) + (renderer.measureText(this.logo2, "melon").height);
        renderer.drawFont(this.logo1, geekText, xpos, ypos);
        xpos += logo1_width;
        renderer.drawFont(this.logo2, loveText, xpos, ypos);
    }

});