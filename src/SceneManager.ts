class SceneManager {
    public static STAGE_ONE_WIDTH: number = 512;

    public static loader: ResourceLoader;
    public static mainScene: Main;
    public static tick: number = 0;

    public awlPosX: number = 1024;
    private maxPosX: number = 512;

    public constructor(main) {
        SceneManager.mainScene = main;
        this.createLoader();
    }

    public onStart() {
        this.createInitScene().then(() => {
            this.createScene();
            this.update();
        });
    }

    private createLoader() {
        if (!SceneManager.loader) SceneManager.loader = new ResourceLoader();
    }

    private async createInitScene() {
        return await SceneManager.loader.loadMainResource(["preload"], "resource/default.res.json");
    }

    private createScene() {
        SceneManager.mainScene.bg = new Background();
        SceneManager.mainScene.addChild(SceneManager.mainScene.bg);

        SceneManager.mainScene.floor = new Floor();
        SceneManager.mainScene.addChild(SceneManager.mainScene.floor);

        SceneManager.mainScene.character = new Runner();
        SceneManager.mainScene.addChild(SceneManager.mainScene.character);

        SceneManager.mainScene.awls = new Array<Awl>();
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
        egret.startTick(() => {
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
        }, this);
    }
}