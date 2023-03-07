const axios = require('axios')

const uploadImage = async (image, folderName) => {
    try {
        const fd = new FormData()
        fd.append('image', image)
        fd.append('folderName', folderName)
        const res = await axios.post('http://localhost:5000/upload/image', fd)
        return res
    } catch (error) {
        console.log(error);
    }
}

module.exports = uploadImage