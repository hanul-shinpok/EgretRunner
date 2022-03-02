class Main extends egret.DisplayObjectContainer {
    private scene: SceneManager;

    public event: egret.EventDispatcher;

    public bg: Background;
    public floor: Floor;
    public character: Runner;
    public awls: Array<Awl>;

    public constructor() {
        super();
        this.gameSceneStart();
    }

    private gameSceneStart() {
        this.scene = new SceneManager(this);
        this.event = new egret.EventDispatcher();
        this.scene.onStart();
    }

    public touchLock() {
        SceneManager.mainScene.touchEnabled = false;
    }

    public touchUnlock() {
        SceneManager.mainScene.touchEnabled = true;
    }

}