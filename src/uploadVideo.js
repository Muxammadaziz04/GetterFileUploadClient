import axios from 'axios'
import FormData from 'form-data'

async function uploadVideo(video, folderName) {
    try {
        const data = new FormData()

        if(!video) return

        if(video?.data){
            data.append('video', video?.data, video?.name)
        } else {
            data.append('video', video)
        }

        const res = await axios.post(`${this.url}/upload/video`, data, {
            ...data.getHeaders()
        })

        return res?.data
    } catch (error) {
        console.log(error);
    }
}

export default uploadVideo