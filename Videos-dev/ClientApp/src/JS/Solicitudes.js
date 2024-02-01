import axios from 'axios';
import { Correcto, Fallo } from './Swall_Alert';

const api = "/api/Video/"

const apiNode = axios.create({
    baseURL: 'http://localhost:9990/'
})

export const TraerVideos = async () => {
    const response = await apiNode.post(`${api}Listar`, "algo");
    const result = await response.data;
    const Url = []
    const arrayBuffers = result.map((base64Content) => {
        const binaryString = window.atob(base64Content);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        return bytes.buffer;
    });
    arrayBuffers.forEach(e => {
        const videoBlob = new Blob([e], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        Url.push(videoUrl)
    })
    return Url;
}

export const agregar = async (formData) => {
    document.getElementById("Guardar").style.display = "none"
    apiNode.post(`${api}agregarusuario`, formData)
        .then(res => {
            if (res.data === 'OK') return Correcto()
            else return Fallo()
        }).catch(err => { console.log(err) })
}