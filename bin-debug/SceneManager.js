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
        SceneManager.mainScene = main;
        this.createLoader();
    }
    SceneManager.prototype.onStart = function () {
        var _this = this;
        this.createInitScene().then(function () {
            _this.createScene();
            _this.update();
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
        SceneManager.mainScene.bg = new Background();
        SceneManager.mainScene.addChild(SceneManager.mainScene.bg);
        SceneManager.mainScene.floor = new Floor();
        SceneManager.mainScene.addChild(SceneManager.mainScene.floor);
        SceneManager.mainScene.character = new Runner();
        SceneManager.mainScene.addChild(SceneManager.mainScene.character);
    };
    SceneManager.prototype.update = function () {
        egret.startTick(function () {
            SceneManager.mainScene.bg.update();
            SceneManager.mainScene.floor.update();
            return true;
        }, this);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
