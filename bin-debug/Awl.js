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
var Awl = (function (_super) {
    __extends(Awl, _super);
    function Awl(x) {
        var _this = _super.call(this) || this;
        _this.createAwl(x);
        return _this;
    }
    Awl.prototype.createAwl = function (x) {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes("awl_png");
        this.image.y = 512 - this.image.height * 2.8;
        this.image.x = x;
        this.addChild(this.image);
    };
    Awl.prototype.update = function () {
        if (this.deleteAwl())
            return;
        this.image.x -= 1 * Awl.SPEED;
        this.isCollisionToCharacter();
    };
    Awl.prototype.deleteAwl = function () {
        if (this.image.x < -this.image.width) {
            this.destroy();
            return true;
        }
        else
            return false;
    };
    Awl.prototype.isCollisionToCharacter = function () {
        var rectAwl = new egret.Rectangle(this.image.x + 5, this.image.y + 5, this.image.width - 10, this.image.height - 10);
        var rectCharacter = new egret.Rectangle(SceneManager.mainScene.character.sprite.x + 80, SceneManager.mainScene.character.sprite.y, Runner.CHARACTER_WIDTH, Runner.CHARACTER_HEIGHT);
        var bound = this.boundTest(SceneManager.mainScene.character.sprite.x + 80, SceneManager.mainScene.character.sprite.y, Runner.CHARACTER_WIDTH, Runner.CHARACTER_HEIGHT);
        if (rectAwl.intersects(rectCharacter)) {
            SceneManager.mainScene.event.dispatchEventWith("COLLISION");
        }
        if (this.beforeBound)
            this.beforeBound.parent.removeChild(this.beforeBound);
        this.beforeBound = bound;
    };
    Awl.prototype.destroy = function () {
        if (this.parent && this.image) {
            this.parent.removeChild(this);
            this.removeChild(this.image);
        }
    };
    Awl.prototype.boundTest = function (x, y, width, height) {
        var bound = new egret.Shape();
        bound.graphics.beginFill(0xff0000);
        bound.graphics.drawRect(x, y, width, height);
        bound.graphics.endFill();
        this.addChild(bound);
        return bound;
    };
    Awl.SPEED = 3;
    return Awl;
}(egret.DisplayObjectContainer));
__reflect(Awl.prototype, "Awl");
//# sourceMappingURL=Awl.js.map