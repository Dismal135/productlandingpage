import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ScrollToTop from "react-scroll-to-top";
import photogallery from './images/photogallery.png'
import magazine from './images/ffcMagazine.png'
import cafemenu from './images/cafemenu.png'
import user from './images/laugh.png'
import websites from './images/app-development.png'
import responsive from './images/responsive-design.png'
import flaticon from './images/flaticon.png'

function App() {
  return (
    <>
        <ScrollToTop className='scroll-to-top-button' smooth color='red' />
    <header>
    <img className={'img'} src={cafemenu} alt='cafe' />
    <img className={'img'} src={photogallery} alt='gallery' />
    <img className={'img'} src={magazine} alt='magazine' />
    </header>
    <main>
        <section className='icon-container'>
            <div className='icon-div'>
            <img className='icon' src={user} alt='user friendly' />
            <p>User freiendly, improve SEO</p>
            </div>
            <div className='icon-div'>
            <img className='icon' src={websites} alt='websites' />
            <p>Single page, CMS, Dashboard, Ecommerce</p>
            </div>
            <div className='icon-div'>
            <img className='icon' src={responsive} alt='responsive' />
            <p>Responsive for both pc and phone</p>
            </div>
        </section>
        <section className={'service'}>
            <div className={'service-wrapper'}>
                <div className={'service-content'}>
                    <img className={'service-img'}
                         src={cafemenu}
                         alt={'social media'}/>
                         <h1 className={'service-title'}>Cafe Menu</h1>
                </div>
                <div className={'service-content'}>
                    <img className={'service-img'}
                         src={photogallery}
                         alt={'social media'}/>
                         <h1 className={'service-title'}>Photo Gallery</h1>
                </div>
                <div className={'service-content'}>
                    <img className={'service-img'}
                         src={magazine}
                         alt={'social media'}/>
                         <h1 className={'service-title'}>FreeCodeCamp Magazine</h1>
                </div>
            </div>
        </section>
        <section className="mentor">
            <div className={'mentor-wrapper'}>
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
            <img className="mentor-img" src={'https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj'} alt="w3schools" />
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopA7FFmbqwEw4hT_0c2dswWepiRekm17JTw&s'} alt="reactjs" />
            <img className="mentor-img" src={flaticon} alt="flaticon" />
            </div>
        </section>
    </main>
    <footer>
    <section className={'contact'} id={'contact'}>
            <h1>Contact</h1>
            <p>Yangon, Thaketa, HtuParYone 5th street, No.1268</p>
            <p>Tel: 09758454815</p>
            <p>Email: phyothiha97531@gmail.com</p>
        </section>
    </footer>
    </>
  )
      ;
}

export default App;
