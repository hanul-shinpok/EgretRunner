class SceneManager {
    public static STAGE_ONE_WIDTH: number = 512;
    public static STAGE_HEIGHT: number = 512;

    public static loader: ResourceLoader;
    public static mainScene: Main;
    public static tick: number = 0;

    public awlPosX: number = 1024;
    private maxPosX: number = 512;

    private imageStart: egret.Bitmap;

    public constructor(main) {
        SceneManager.mainScene = main;
        this.createLoader();
    }

    public onStart() {
        this.createInitScene().then(() => {
            this.createScene();
            this.setStart();
        });
    }

    private createLoader() {
        if (!SceneManager.loader) SceneManager.loader = new ResourceLoader();
    }

    private async createInitScene() {
        return await SceneManager.loader.loadMainResource(["preload"], "resource/default.res.json");
    }

    private createScene() {
        SceneManager.mainScene.bg = new BackgroundObject();
        SceneManager.mainScene.bg.getResource("backgroundForest_png");
        SceneManager.mainScene.bg.imageY = 0;
        SceneManager.mainScene.addChild(SceneManager.mainScene.bg);

        SceneManager.mainScene.floor = new BackgroundObject();
        SceneManager.mainScene.floor.getResource("floor_png");
        SceneManager.mainScene.floor.imageY = SceneManager.STAGE_HEIGHT - SceneManager.mainScene.floor.image.height;
        SceneManager.mainScene.addChild(SceneManager.mainScene.floor);

        SceneManager.mainScene.awls = new Array<Awl>();
    }

    private createCharacter() {
        SceneManager.mainScene.character = new Runner();
        SceneManager.mainScene.addChild(SceneManager.mainScene.character);
    }

    // 최솟값 포함, 최댓값 제외
    private createRandomAwls(min, max) {
        const rand = Math.floor(Math.random() * (max - min)) + min;
        const newAwl = new Awl(rand);
        SceneManager.mainScene.awls.push(newAwl);
        SceneManager.mainScene.addChild(newAwl);
        return rand;
    }

    public update() {
        SceneManager.mainScene.removeChild(this.imageStart);
        SceneManager.mainScene.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.update, this);

        this.createCharacter();
        egret.startTick(this.updateTick, this);
    }

    private updateTick() {
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
            SceneManager.mainScene.awls.forEach((awl) =>
                awl.update()
            );
        }
        return true;
    }

    private setStart() {
        this.imageStart = new egret.Bitmap();
        this.imageStart.texture = RES.getRes("asset_start_png");

        this.imageStart.x = 256;
        SceneManager.mainScene.addChild(this.imageStart);

        SceneManager.mainScene.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.update, this);
    }


    private setClear() {
        const image = new egret.Bitmap();
        image.texture = RES.getRes("asset_clear_png");

        image.x = 256;
        SceneManager.mainScene.addChild(image);
        SceneManager.mainScene.character.stop();
        SceneManager.mainScene.awls.forEach((awl) =>
            awl.destroy()
        );
    }
}