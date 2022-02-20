class Runner extends egret.DisplayObjectContainer {
    private sprite: egret.MovieClip;

    constructor() {
        super();
        this.createSprite();
    }

    private createSprite() {
        this.sprite = SceneManager.loader.createMovieClip("runner_json", "runner_png", "run");
        this.sprite.gotoAndPlay("run", -1);

        this.sprite.y = SceneManager.mainScene.floor.image.y - this.sprite.height;

        this.addChild(this.sprite);
    }
}