class Background extends egret.DisplayObjectContainer {
    public image: egret.Bitmap;

    constructor() {
        super();
        this.createBG();
    }

    private createBG() {
        this.image = new egret.Bitmap(); 
        this.image.texture = RES.getRes("backgroundForest_png");

        this.image.fillMode = egret.BitmapFillMode.REPEAT;
        this.image.width *= 2;

        this.addChild(this.image);
    }
}