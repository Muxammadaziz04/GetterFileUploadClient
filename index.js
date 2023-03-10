const uploadImage = require('./src/uploadImage.js')
const uploadVideo = require('./src/uploadVideo.js')
const removeFile = require('./src/removeFile.js')

class GetterFileUpload {
    constructor(url) {
        this.url = url
        this.uploadImage = uploadImage
        this.uploadVideo = uploadVideo
        this.removeFile = removeFile
    }
}

module.exports = GetterFileUpload