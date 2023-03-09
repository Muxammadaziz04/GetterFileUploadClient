import axios from "axios";

async function removeFile(url) {
    try {
        if(!this.url) return {
            error: true,
            message: 'URL is not found',
            url: null
        }

        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (!url.match(regex)) return {
            error: true,
            message: 'File url is not correct',
            url: null
        }

        const res = await axios.delete(`${this.url}/remove`, { data: { url } })
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

export default removeFile