const SOURCE_PATH = "/data/img/"; //TODO pass in env vars for each cdn env

export const buildImgLinkFromFilename = (filename) => {
    return `${SOURCE_PATH}${filename}`
}