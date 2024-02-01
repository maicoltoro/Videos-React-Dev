import '../Css/StylePage.css';

export const PageLoad = () => {
    return (
        <div className="loading-screen">
            <div className="loader-wrap">
                <span className="loader-animation"></span>
                <div className="loading-text">
                    <span className='letter'>C</span>
                    <span className='letter'>A</span>
                    <span className='letter'>R</span>
                    <span className='letter'>G</span>
                    <span className='letter'>A</span>
                    <span className='letter'>N</span>
                    <span className='letter'>D</span>
                    <span className='letter'>O</span>
                </div>
            </div>
        </div>
    );
}
