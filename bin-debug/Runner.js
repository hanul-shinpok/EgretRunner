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
        _this.addEvent();
        return _this;
    }
    Runner.prototype.addEvent = function () {
        SceneManager.mainScene.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jump, this);
        SceneManager.mainScene.event.addEventListener("COLLISION", this.die, this);
    };
    Runner.prototype.createSprite = function () {
        this.sprite = SceneManager.loader.createMovieClip("runner_json", "runner_png", "run");
        this.sprite.gotoAndPlay("run", -1);
        this.sprite.y = SceneManager.mainScene.floor.image.y - this.sprite.height;
        this.addChild(this.sprite);
    };
    Runner.prototype.jump = function () {
        if (Runner.STATE == RUNNER_STATE.DIE)
            return;
        if (Runner.STATE == RUNNER_STATE.JUMP)
            return;
        Runner.STATE = RUNNER_STATE.JUMP;
        var originY = this.sprite.y;
        var tween = egret.Tween.get(this.sprite);
        tween.to({ x: this.sprite.x, y: this.sprite.y - Runner.POWER }, Runner.FLIGHT_TIME)
            .wait(Runner.FLIGHT_TIME)
            .to({ y: originY }, Runner.FLIGHT_TIME)
            .call(this.run, this);
    };
    Runner.prototype.die = function () {
        if (Runner.STATE == RUNNER_STATE.DIE)
            return;
        Runner.STATE = RUNNER_STATE.DIE;
        var tween = egret.Tween.get(this.sprite);
        tween.to({ x: this.sprite.x + Runner.POWER, y: SceneManager.STAGE_ONE_WIDTH + Runner.POWER }, Runner.FLIGHT_TIME);
    };
    Runner.prototype.run = function () {
        Runner.STATE = RUNNER_STATE.RUN;
    };
    Runner.POWER = 120;
    Runner.FLIGHT_TIME = 120 * Background.SPEED;
    Runner.CHARACTER_WIDTH = 70;
    Runner.CHARACTER_HEIGHT = 220;
    return Runner;
}(egret.DisplayObjectContainer));
__reflect(Runner.prototype, "Runner");
var RUNNER_STATE;
(function (RUNNER_STATE) {
    RUNNER_STATE[RUNNER_STATE["RUN"] = 0] = "RUN";
    RUNNER_STATE[RUNNER_STATE["JUMP"] = 1] = "JUMP";
    RUNNER_STATE[RUNNER_STATE["DIE"] = 2] = "DIE";
})(RUNNER_STATE || (RUNNER_STATE = {}));
//# sourceMappingURL=Runner.js.map