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
var BackgroundObject = (function (_super) {
    __extends(BackgroundObject, _super);
    function BackgroundObject() {
        return _super.call(this) || this;
    }
    BackgroundObject.prototype.getResource = function (name) {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes(name);
        this.createBG();
    };
    Object.defineProperty(BackgroundObject.prototype, "imageY", {
        set: function (y) {
            this.image.y = y;
        },
        enumerable: true,
        configurable: true
    });
    BackgroundObject.prototype.createBG = function () {
        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 3;
        this.addChild(this.image);
    };
    BackgroundObject.prototype.update = function () {
        if (this.image.x <= -SceneManager.STAGE_ONE_WIDTH)
            this.image.x = 0;
        this.image.x -= 1 * BackgroundObject.SPEED;
    };
    BackgroundObject.SPEED = 3;
    return BackgroundObject;
}(egret.DisplayObjectContainer));
__reflect(BackgroundObject.prototype, "BackgroundObject");
//# sourceMappingURL=BackgroundObject.js.map