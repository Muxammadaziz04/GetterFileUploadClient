import axios from "axios";

async function removeFile(url) {
    try {
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);

        if (!url.match(regex)) return

        const res = await axios.delete(`${this.url}/remove`, { data: { url } })
        return res?.data
    } catch (error) {
        console.log(error);
    }
}

export default removeFile