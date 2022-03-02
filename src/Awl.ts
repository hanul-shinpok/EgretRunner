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

        this.image.y = 512 - this.image.height * 2.8;
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

    private isCollisionToCharacter() {
        const rectAwl = new egret.Rectangle(this.image.x, this.image.y, this.image.width, this.image.height);
        const rectCharacter = new egret.Rectangle(SceneManager.mainScene.character.sprite.x, SceneManager.mainScene.character.sprite.y,
            SceneManager.mainScene.character.sprite.width, SceneManager.mainScene.character.sprite.height);
        
        if (rectAwl.intersects(rectCharacter)) {
            SceneManager.mainScene.event.dispatchEventWith("COLLISION");
        }
    }

    public destroy() {
        if (this.parent && this.image) {
            this.parent.removeChild(this);
            this.removeChild(this.image);
        }
    }
}