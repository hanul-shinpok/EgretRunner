class ResourceLoader {

    public constructor() {
    }

    public async loadMainResource(grpNames: Array<string>, path: string) {
        for (let grp of grpNames) await this.loadResource(grp, path);
    }

    public async loadResource(key: string, path: string) {
        try {
            await RES.loadConfig(path, "resource/");
            await RES.loadGroup(key, 0);
            console.log("Load Complete!! [" + path + "]" + key);
        }
        catch (e) {
            console.error(e);
        }
    }

    /** texture merger 사용하여 json, png 파일 추출
     * default.res.json에 등록하여 loadConfig 후 불러오기 */
    public createMovieClip(textureJson: string, texturePng: string, clipName: string): egret.MovieClip {
        let factorty = new egret.MovieClipDataFactory(RES.getRes(textureJson), RES.getRes(texturePng));
        let clip = new egret.MovieClip(factorty.generateMovieClipData(clipName));
        return clip;
    }


}