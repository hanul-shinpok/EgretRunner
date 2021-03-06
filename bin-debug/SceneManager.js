var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var SceneManager = (function () {
    function SceneManager(main) {
        this.awlPosX = 1024;
        this.maxPosX = 512;
        SceneManager.mainScene = main;
        this.createLoader();
    }
    SceneManager.prototype.onStart = function () {
        var _this = this;
        this.createInitScene().then(function () {
            _this.createScene();
            _this.setStart();
        });
    };
    SceneManager.prototype.createLoader = function () {
        if (!SceneManager.loader)
            SceneManager.loader = new ResourceLoader();
    };
    SceneManager.prototype.createInitScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SceneManager.loader.loadMainResource(["preload"], "resource/default.res.json")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SceneManager.prototype.createScene = function () {
        SceneManager.mainScene.bg = new BackgroundObject();
        SceneManager.mainScene.bg.getResource("backgroundForest_png");
        SceneManager.mainScene.bg.imageY = 0;
        SceneManager.mainScene.addChild(SceneManager.mainScene.bg);
        SceneManager.mainScene.floor = new BackgroundObject();
        SceneManager.mainScene.floor.getResource("floor_png");
        SceneManager.mainScene.floor.imageY = SceneManager.STAGE_HEIGHT - SceneManager.mainScene.floor.image.height;
        SceneManager.mainScene.addChild(SceneManager.mainScene.floor);
        SceneManager.mainScene.awls = new Array();
    };
    SceneManager.prototype.createCharacter = function () {
        SceneManager.mainScene.character = new Runner();
        SceneManager.mainScene.addChild(SceneManager.mainScene.character);
    };
    // ????????? ??????, ????????? ??????
    SceneManager.prototype.createRandomAwls = function (min, max) {
        var rand = Math.floor(Math.random() * (max - min)) + min;
        var newAwl = new Awl(rand);
        SceneManager.mainScene.awls.push(newAwl);
        SceneManager.mainScene.addChild(newAwl);
        return rand;
    };
    SceneManager.prototype.update = function () {
        SceneManager.mainScene.removeChild(this.imageStart);
        SceneManager.mainScene.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.update, this);
        this.createCharacter();
        egret.startTick(this.updateTick, this);
    };
    SceneManager.prototype.updateTick = function () {
        if (SceneManager.tick > 900 && Runner.STATE != RUNNER_STATE.DIE) {
            egret.stopTick(this.updateTick, this);
            this.setClear();
        }
        SceneManager.tick += 1;
        if (SceneManager.tick % 90 == 0) {
            this.awlPosX = this.createRandomAwls(this.awlPosX, this.awlPosX + this.maxPosX);
        }
        SceneManager.mainScene.bg.update();
        SceneManager.mainScene.floor.update();
        if (SceneManager.mainScene.awls.length > 0) {
            SceneManager.mainScene.awls.forEach(function (awl) {
                return awl.update();
            });
        }
        return true;
    };
    SceneManager.prototype.setStart = function () {
        this.imageStart = new egret.Bitmap();
        this.imageStart.texture = RES.getRes("asset_start_png");
        this.imageStart.x = 256;
        SceneManager.mainScene.addChild(this.imageStart);
        SceneManager.mainScene.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.update, this);
    };
    SceneManager.prototype.setClear = function () {
        var image = new egret.Bitmap();
        image.texture = RES.getRes("asset_clear_png");
        image.x = 256;
        SceneManager.mainScene.addChild(image);
        SceneManager.mainScene.character.stop();
        SceneManager.mainScene.awls.forEach(function (awl) {
            return awl.destroy();
        });
    };
    SceneManager.STAGE_ONE_WIDTH = 512;
    SceneManager.STAGE_HEIGHT = 512;
    SceneManager.tick = 0;
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map