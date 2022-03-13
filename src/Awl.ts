class Awl extends egret.DisplayObjectContainer {
    public static SPEED = 3;
    public image: egret.Bitmap;

    constructor(x) {
        super();
        this.createAwl(x);
    }

    private createAwl(x) {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes("awl_png");

        this.image.y = SceneManager.STAGE_ONE_WIDTH - this.image.height * 2.8;
        this.image.x = x;
        this.addChild(this.image);
    }

    public update() {
        if (this.deleteAwl()) return;

        this.image.x -= 1 * Awl.SPEED;
        this.isCollisionToCharacter();
    }

    private deleteAwl() {
        if (this.image.x < -this.image.width) {
            this.destroy();
            return true;
        } else return false;
    }

    private beforeBound;
    private isCollisionToCharacter() {
        const rectAwl = new egret.Rectangle(this.image.x + 5, this.image.y + 5, this.image.width - 10, this.image.height - 10);
        const rectCharacter = new egret.Rectangle(SceneManager.mainScene.character.sprite.x + 80, SceneManager.mainScene.character.sprite.y,
             Runner.CHARACTER_WIDTH, Runner.CHARACTER_HEIGHT);

        const bound = this.boundTest(SceneManager.mainScene.character.sprite.x + 80, SceneManager.mainScene.character.sprite.y,
             Runner.CHARACTER_WIDTH, Runner.CHARACTER_HEIGHT);

        if (rectAwl.intersects(rectCharacter)) {
            SceneManager.mainScene.event.dispatchEventWith("COLLISION");
        }

        if (this.beforeBound) this.beforeBound.parent.removeChild(this.beforeBound);
        this.beforeBound = bound;

    }

    public destroy() {
        if (this.parent && this.image) {
            this.parent.removeChild(this);
            this.removeChild(this.image);
        }
    }

    private boundTest(x, y, width, height) {
        const bound = new egret.Shape();
        bound.graphics.beginFill(0xff0000);
        bound.graphics.drawRect(x, y, width, height);
        bound.graphics.endFill();
        this.addChild(bound);

        return bound;
    }
}