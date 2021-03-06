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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.gameSceneStart();
        return _this;
    }
    Main.prototype.gameSceneStart = function () {
        this.scene = new SceneManager(this);
        this.event = new egret.EventDispatcher();
        this.scene.onStart();
    };
    Main.prototype.touchLock = function () {
        SceneManager.mainScene.touchEnabled = false;
    };
    Main.prototype.touchUnlock = function () {
        SceneManager.mainScene.touchEnabled = true;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map