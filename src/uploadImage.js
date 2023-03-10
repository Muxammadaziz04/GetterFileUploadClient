const axios = requrie('axios')
const FormData = requrie('form-data')

async function uploadImage(image, folderName) {
    try {
        const data = new FormData();
        
        if(!this.url) return {
            error: true,
            message: 'URL is not found',
            url: null
        }
        
        if (!image) return {
            error: true,
            message: 'No file uploaded',
            url: null
        }

        if (image?.data) {
            data.append('image', image?.data, image?.name)
        } else {
            data.append('image', image)
        }

        data.append('folderName', folderName || '')

        const res = await axios.post(`${this.url}/upload/image`, data, {
            ...data.getHeaders()
        })

        return res?.data
    } catch (error) {
        return error.response !== undefined ? {
            error: true,
            message: error.response?.data?.message,
            url: null
        } : {
            error: true,
            message: error.message,
            url: null
        }
    }
}

module.exports = uploadImage