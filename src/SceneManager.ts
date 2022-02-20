class SceneManager {
    public static loader: ResourceLoader;
    public static mainScene: Main;

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
    }

    public update() {
        egret.startTick(() => {
            SceneManager.mainScene.bg.update();
            SceneManager.mainScene.floor.update();
            return true;
        }, this);
    }
}