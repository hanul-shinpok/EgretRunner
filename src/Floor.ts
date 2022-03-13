class Floor extends egret.DisplayObjectContainer {
    public static SPEED = 3;
    public image: egret.Bitmap;

    constructor() {
        super();
        this.createFloor();
    }

    private createFloor() {
        this.image = new egret.Bitmap();
        this.image.texture = RES.getRes("floor_png");

        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 3;
        this.image.y = SceneManager.STAGE_ONE_WIDTH - this.image.height;

        this.addChild(this.image);
    }

    public update() {
        if (this.image.x <= -SceneManager.STAGE_ONE_WIDTH) this.image.x = 0;
        this.image.x -= 1 * Floor.SPEED;
    }
}