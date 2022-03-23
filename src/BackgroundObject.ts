class BackgroundObject extends egret.DisplayObjectContainer {
    public static SPEED = 3;
    public image: egret.Bitmap;

    constructor() {
        super();
    }

    public getResource(name) {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes(name);

        this.createBG();
    }

    public set imageY(y) {
        this.image.y = y;
    }

    private createBG() {
        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 3;

        this.addChild(this.image);
    }

    public update() {
        if (this.image.x <= -SceneManager.STAGE_ONE_WIDTH) this.image.x = 0;
        this.image.x -= 1 * BackgroundObject.SPEED;
    }
}