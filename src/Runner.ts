class Runner extends egret.DisplayObjectContainer {
    public static POWER = 70;
    public static FLIGHT_TIME = 200;

    public static STATE: RUNNER_STATE;

    private sprite: egret.MovieClip;

    constructor() {
        super();
        this.createSprite();
        this.addEvent();
    }

    private addEvent() {
        SceneManager.mainScene.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jump, this);
    }

    private createSprite() {
        this.sprite = SceneManager.loader.createMovieClip("runner_json", "runner_png", "run");
        this.sprite.gotoAndPlay("run", -1);

        this.sprite.y = SceneManager.mainScene.floor.image.y - this.sprite.height;

        this.addChild(this.sprite);
    }

    private jump() {
        if (Runner.STATE == RUNNER_STATE.JUMP) return;
        Runner.STATE = RUNNER_STATE.JUMP;

        const originY = this.sprite.y;
        const originX = this.sprite.x;

        let tween = egret.Tween.get(this.sprite);
        tween.to({ x: this.sprite.x + Runner.POWER, y: this.sprite.y - Runner.POWER }, Runner.FLIGHT_TIME)
            .wait(Runner.FLIGHT_TIME)
            .to({ y: originY }, Runner.FLIGHT_TIME)
            .to({ x: originX }, Runner.FLIGHT_TIME)
            .call(this.run, this);
    }

    private run() {
        Runner.STATE = RUNNER_STATE.RUN;
    }
}

enum RUNNER_STATE {
    RUN,
    JUMP
}