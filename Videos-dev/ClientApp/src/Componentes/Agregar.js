import { useState } from "react";
import { agregar } from "../JS/Solicitudes";
import { validarDatos } from "../JS/Swall_Alert";
import { PageCarga } from "./PageCarga";

export const Agregar = () => {

    const [Video, SetVideo] = useState({})
    const [Page,SetPageCarga] = useState(false)

    const agregarUsuarios = async () => {

        if (Video.name === undefined) return validarDatos("Archivo")
        SetPageCarga(true);
        const formData = new FormData();
        formData.append('nombre', Video.name);
        formData.append('video', Video);
        await agregar(formData);
    }

    return (
        <div className="wrapper" id="app">
            <div className="player">
                <div className="row TituloAgregar">
                    <h2 className="mt-4">Agrega un nuevo video</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="mb-3">
                            <label htmlFor="Archivo" className="form-label" >Archivo</label>
                            <input type="file" className="form-control" onChange={(e) => { SetVideo(e.target.files[0]) }} />
                        </div>
                        <button onClick={agregarUsuarios} id="Guardar" className="btn btn-success">Guardar Video</button>
                    </div>
                </div>
            </div>

            {Page && <PageCarga /> }
        </div>
    );
}