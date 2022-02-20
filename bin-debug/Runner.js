var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Runner = (function (_super) {
    __extends(Runner, _super);
    function Runner() {
        var _this = _super.call(this) || this;
        _this.createSprite();
        return _this;
    }
    Runner.prototype.createSprite = function () {
        this.sprite = SceneManager.loader.createMovieClip("runner_json", "runner_png", "run");
        this.sprite.gotoAndPlay("run", -1);
        this.sprite.y = SceneManager.mainScene.floor.image.y - this.sprite.height;
        this.addChild(this.sprite);
    };
    return Runner;
}(egret.DisplayObjectContainer));
__reflect(Runner.prototype, "Runner");
