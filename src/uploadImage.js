import axios from 'axios'
import FormData from 'form-data'

async function uploadImage(image, folderName) {
    try {
        const data = new FormData();

        if(!image) return

        if(image?.data) {
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
        console.log(error);
    }
}

export default uploadImage