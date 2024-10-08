import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
        <ScrollToTop className='scroll-to-top-button' smooth color='white' />
    <header>
        <div className={'navbar'}>
        <h1>👨🏻‍💻</h1>
        <nav>
            <a href={"#about"}>About</a>
            <a href={"#contact"}>Contact</a>
        </nav>
        </div>
        <div className={"header-content"}>
            <h1>Do you need a website for your business?</h1>
            <h2>Do you know an online website can grow your business?</h2>
            <h3>A website can help can your company not only for digital marketing but also for your company's management.</h3>
        </div>
    </header>
    <main>
        <section className={'about'} id={'about'}>
            <div className={'about-content'}>
                <i className="fa-solid fa-font fa-4x"></i>
                <h1>CMS</h1>
                <p>Need to make content writing.We got Content Management System</p>
            </div>
            <div className={'about-content'}>
                <i className="fa-solid fa-business-time fa-4x"></i>
                <h1>Digital Marketing</h1>
                <p>Reach to more audience with product landing websites</p>
            </div>
            <div className={'about-content'}>
                <i className="fa-solid fa-tachograph-digital fa-4x"></i>
                <h1>Dashboard</h1>
                <p>Analyst your business with dashboard web application</p>
            </div>
            <div className={'about-content'}>
                <i className="fa-solid fa-video fa-4x"></i>
                <h1>Multimedia</h1>
                <p>Need platform to cast your music, media, content?We got them here.</p>
            </div>
            <div className={'about-content'}>
                <i className="fa-solid fa-video fa-4x"></i>
                <h1>Ecommerce</h1>
                <p>Sell anything you want online with ecommerce web application</p>
            </div>
        </section>
        <section className={'service'}>
            <h1 className={'service-heading'}>Some of our Projects</h1>
            <div className={'service-wrapper'}>
                <div className={'service-content'}>
                    <h1 className={'service-title'}>Nextjs Dashboard</h1>
                    <img className={'service-img'}
                         src={'https://nextjs.org/learn/dark/dashboard.png'} alt={'dashboard'}/>
                </div>
                <div className={'service-content'}>
                <h1 className={'service-title'}>Free Code Camp Magazine</h1>
                    <img className={'service-img'}
                         src={'https://raw.githubusercontent.com/chanwaihan/Magazine/main/magazine-preview.jpg'}
                         alt={'website'}/>
                </div>
                <div className={'service-content'}>
                    <h1 className={'service-title'}>Cafe Menu</h1>
                    <img className={'service-img'}
                         src={'https://shot.plnkr.co/YOZcpZM5tWC3nagV.png?d=2022-03-07T23:16:04.054Z'}
                         alt={'social media'}/>
                </div>
            </div>
        </section>
        <section className="mentor">
            <h1>Mentors</h1>
            <div className={'mentor-wrapper'}>
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
            <img className="mentor-img" src={'https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj'} alt="w3schools" />
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSopA7FFmbqwEw4hT_0c2dswWepiRekm17JTw&s'} alt="reactjs" />
            <img className="mentor-img" src={'https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg'} alt="nextjs" />
            </div>
        </section>
        <section className={'contact'} id={'contact'}>
            <h1>Contact us</h1>
            <p>Yangon, Thaketa, HtuParYone 5th street, No.1268</p>
            <p>Tel: 09758454815</p>
            <p>Email: phyothiha97531@gmail.com</p>
        </section>
    </main>
    <footer>
        @copyright @@@@@@@@@@@@
    </footer>
    </>
  )
      ;
}

export default App;
