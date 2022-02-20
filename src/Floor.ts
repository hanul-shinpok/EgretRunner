class Floor extends egret.DisplayObjectContainer {
    public static SPEED = 2;
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
        this.image.y = 512 - this.image.height;

        this.addChild(this.image);
    }

    public update() {
        if (this.image.x == -512) this.image.x = 0;
        this.image.x -= 1 * Floor.SPEED;
    }
}