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
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        var _this = _super.call(this) || this;
        _this.createBG();
        return _this;
    }
    Background.prototype.createBG = function () {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes("backgroundForest_png");
        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 3;
        this.addChild(this.image);
    };
    Background.prototype.update = function () {
        if (this.image.x <= -512)
            this.image.x = 0;
        this.image.x -= 1 * Background.SPEED;
    };
    Background.SPEED = 3;
    return Background;
}(egret.DisplayObjectContainer));
__reflect(Background.prototype, "Background");
//# sourceMappingURL=Background.js.map