class Main extends egret.DisplayObjectContainer {
    private scene: SceneManager;
    public bg: Background;
    public floor: Floor;
    public character: Runner;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private gameSceneStart() {
        this.scene = new SceneManager(this);
        this.scene.onStart();
    }

    public touchLock() {
        SceneManager.mainScene.touchEnabled = false;
    }

    public touchUnlock() {
        SceneManager.mainScene.touchEnabled = true;
    }

}