import '../css/homePage.css'
import wineBottles from '../img/row-of-wine-bottles.webp'

function HomePage() {
    return (
        <div className='divMainHomePage'>
            <div>
                <h1>Bienvenido a Barventory</h1>
            </div>
            <div>
                <p>Página web para la administración de inventario
                    en bares y restaurantes</p>
            </div>
            <div>
                <img className='imgHomePage' src={wineBottles}></img>
            </div>
        </div>
    )
}

export default HomePage;