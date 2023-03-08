import uploadImage from './src/uploadImage.js'
import uploadVideo from './src/uploadVideo.js'
import removeFile from './src/removeFile.js'

class GetterFileUpload {
    constructor(url) {
        this.url = url
        this.uploadImage = uploadImage
        this.uploadVideo = uploadVideo
        this.removeFile = removeFile
    }
}

const c = new GetterFileUpload('http://localhost:5000')