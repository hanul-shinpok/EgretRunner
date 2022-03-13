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
var Floor = (function (_super) {
    __extends(Floor, _super);
    function Floor() {
        var _this = _super.call(this) || this;
        _this.createFloor();
        return _this;
    }
    Floor.prototype.createFloor = function () {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes("floor_png");
        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 3;
        this.image.y = SceneManager.STAGE_ONE_WIDTH - this.image.height;
        this.addChild(this.image);
    };
    Floor.prototype.update = function () {
        if (this.image.x <= -SceneManager.STAGE_ONE_WIDTH)
            this.image.x = 0;
        this.image.x -= 1 * Floor.SPEED;
    };
    Floor.SPEED = 3;
    return Floor;
}(egret.DisplayObjectContainer));
__reflect(Floor.prototype, "Floor");
//# sourceMappingURL=Floor.js.map