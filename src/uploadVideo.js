import axios from 'axios'
import FormData from 'form-data'

async function uploadVideo(video, folderName) {
    try {
        const data = new FormData()

        if(!this.url) return {
            error: true,
            message: 'URL is not found',
            url: null
        }

        if(!video) return {
            error: true,
            message: 'No file uploaded',
            url: null
        }

        if(video?.data){
            data.append('video', video?.data, video.name)
        } else {
            data.append('video', video)
        }

        data.append('folderName', folderName)

        const res = await axios.post(`${this.url}/upload/video`, data, {
            ...data.getHeaders()
        })

        return res?.data
    } catch (error) {
        return error.response !== undefined ? {
            error: true,
            message: error?.response?.data?.message,
            url: null
        } : {
            error: true,
            message: error?.message,
            url: null
        }
    }
}

export default uploadVideo