import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useRef, useState } from 'react';
import { TraerVideos } from '../JS/Solicitudes';
import { PageLoad } from './PageLoad';

export const Vervideo = () => {

    const splideRef = useRef(null);
    const [Video, SetVideo] = useState([]);
    const [Page, SetPage] = useState(true);
    const [Lista, SetLista] = useState(false);

    useEffect(() => {
        const TraerData = async () => {
            const valores = await TraerVideos();

            const url = valores.map((url) => (

                <SplideSlide key={url} className="splide-slide">
                    <div className="video-wrapper">
                        <video className="video-element" controls>
                            <source src={url} type="video/mp4" />
                        </video>
                    </div>
                </SplideSlide>
            ));
            SetPage(false)
            SetLista(true)
            SetVideo(url)
        }
        TraerData();
    }, []);

    return (
        <>
            <div className="Pague">{Page && <PageLoad />}</div>
            {Lista && <div className="wrapper" id="app">
                <div className="player">
                    <div className="player__top">
                        <div className="player-cover">
                            <Splide className="video" id="slideshow" ref={splideRef}>
                                {Video}
                            </Splide>
                        </div>
                    </div>

                    <div className="player-controls">
                        <div className="player-controls__item -favorite">
                            <i className="bi bi-heart"></i>
                        </div>
                    </div>
                </div>
            </div> }
        </>
    );
}