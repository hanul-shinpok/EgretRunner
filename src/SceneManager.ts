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


    }
}