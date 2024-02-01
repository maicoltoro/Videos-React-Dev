import './Css/Menu.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Vervideo } from './Componentes/VerVideo';
import { Agregar } from './Componentes/Agregar';

export const App = () => {
    return (
        <div className="center">
            <div className="left">
                <div className="menu">
                    <div className="title">Menu</div>
                    <div className="item"><i className="material-icons">search</i><span>Explore</span></div>
                    <div className="item"><a className="nav-link active" aria-current="page" href="vervideo">Videos</a><i className="material-icons">layers</i></div>
                    <div className="item"><i className="material-icons">radio</i><span>Radio</span></div>
                    <div className="item"><i className="material-icons">mic</i><span>Artists</span></div>
                    <div className="item"><i className="material-icons">album</i><span>Albums</span></div>
                    <div className="item"><i className="material-icons">settings</i><span>Settings</span></div>
                </div>

                <div className="playlists">
                    <div className="title">Administrar</div>
                    <div className="item"><i className="material-icons">list</i><span>Liked</span></div>
                    <div className="item"><i className="material-icons">list</i><span>Rap 2016</span></div>
                    <div className="item"><i className="material-icons">list</i><span>Classic Music</span></div>
                    <div className="item"> <a className="nav-link active" aria-current="page" href="Agregar">Agregar Video</a> <i className="material-icons">add_circle_outline </i></div>
                </div>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path='/vervideo' element={<Vervideo />} exact></Route>
                    <Route path='/Agregar' element={<Agregar />} exact></Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}