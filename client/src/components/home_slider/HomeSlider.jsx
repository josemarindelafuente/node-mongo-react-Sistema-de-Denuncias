import './style.css';
import slider1 from './slider01.jpg';
import slider2 from './slider02.jpg';
import slider3 from './slider03.jpg';

export default function HomeSlider()  {
    return (
        <>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={slider1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                    <img src={slider3} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
        </>
    )
}