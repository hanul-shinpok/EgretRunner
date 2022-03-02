class Runner extends egret.DisplayObjectContainer {
    public static POWER = 120;
    public static FLIGHT_TIME = 320;

    public static STATE: RUNNER_STATE;

    public sprite: egret.MovieClip;

    constructor() {
        super();
        this.createSprite();
        this.addEvent();
    }

    private addEvent() {
        SceneManager.mainScene.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jump, this);

        SceneManager.mainScene.event.addEventListener("COLLISION", this.die, this);
    }

    private createSprite() {
        this.sprite = SceneManager.loader.createMovieClip("runner_json", "runner_png", "run");
        this.sprite.gotoAndPlay("run", -1);

        this.sprite.y = SceneManager.mainScene.floor.image.y - this.sprite.height;

        this.addChild(this.sprite);
    }

    private jump() {
        if (Runner.STATE == RUNNER_STATE.DIE) return;
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

    private die() {
        if (Runner.STATE == RUNNER_STATE.DIE) return;

        Runner.STATE = RUNNER_STATE.DIE;
        let tween = egret.Tween.get(this.sprite);
        tween.to({ x: this.sprite.x + Runner.POWER, y: 512 + Runner.POWER }, Runner.FLIGHT_TIME);
    }

    private run() {
        Runner.STATE = RUNNER_STATE.RUN;
    }
}

enum RUNNER_STATE {
    RUN,
    JUMP,
    DIE
}