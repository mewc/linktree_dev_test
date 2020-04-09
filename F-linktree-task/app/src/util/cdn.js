const SOURCE_PATH = "/data/img/"; //TODO pass in env vars for each cdn env

export const buildImgLinkFromFilename = (filename) => {
    //TODO remove line, or handle cdn links better for web
    if(filename.includes('https://')) return filename; 
    return `${SOURCE_PATH}${filename}`
}