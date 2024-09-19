import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
        <ScrollToTop smooth color="red" />
    <header>
        <div className={'navbar'}>
        <h1>Wisdom</h1>
        <nav>
            <a href={"#about"}>About</a>
            <a href={"#contact"}>Contact</a>
        </nav>
        </div>
        <div className={"header-content"}>
            <h1>Plan your business with technology</h1>
            <h2>Grow your business world wide with website</h2>
            <p>There is no magic only your skills and strategy</p>
        </div>
        <a className={'hire-button'} href={'#'}>Hire us</a>
    </header>
    <main>
        <section className={'about'} id={'about'}>
            <div className={'about-content'}>
            <i className="fa-solid fa-tv"></i>
            <h1>Multimedia</h1>
            <p>We are here to boost your visibility by using Multimedia platforms.</p>
            </div>
            <div className={'about-content'}>
            <i className="fa-solid fa-laptop"></i>
            <h1>Information technology</h1>
            <p>Dont waste your time and resources.</p>
            </div>
            <div className={'about-content'}>
            <i className="fa-solid fa-globe"></i>
            <h1>Connect</h1>
            <p>You can accept anything, anyone at anywhere.We are connected.</p>
            </div>
        </section>
        <section className={'service'}>
            <h1>Our services</h1>
            <div className={'wrapper'}>
            <div className={'service-content'}>
                <img className={'service-img'} src={'https://images.stockcake.com/public/7/2/0/7206ea94-2dbc-4a28-bb2b-b13e8027be6c_large/smartphone-social-media-stockcake.jpg'} alt={'social media'} />
                <h1 className={'service-title'}>Getting audiences and visibility</h1>
            </div>
            <div className={'service-content'}>
                <img className={'service-img'} src={'https://images.stockcake.com/public/3/c/7/3c74b190-0f04-432d-9ceb-28ff1bb1c961_large/man-typing-laptop-stockcake.jpg'} alt={'website'} />
                <h1 className={'service-title'}>Advertise with your own website.</h1>
            </div>
            <div className={'service-content'}>
                <img className={'service-img'} src={'https://images.stockcake.com/public/d/b/6/db67d834-f203-4b50-b5c3-bf93e195f87c_large/focused-work-session-stockcake.jpg'} alt={'social media'} />
                <h1 className={'service-title'}>Lifetime maintainence for our websites</h1>
            </div>
            </div>
        </section>
        <section className={'us'} id={'us'}>
            <h1>Why hire us?</h1>
            <div className={'wrapper'}>
                <div className={'about-content'}>
                    <i className="fa-solid fa-tv"></i>
                    <h1>Passionate</h1>
                    <p>We passionately and creatively infuse every facet of our service, transforming your dreams into
                        extraordinary reality.</p>
                </div>
                <div className={'about-content'}>
                    <i className="fa-solid fa-laptop"></i>
                    <h1>Professional</h1>
                    <p>We provide our services with the highest professionalism, guaranteeing exacting attention to
                        detail and faultless execution. Excellence is our benchmark.</p>
                </div>
                <div className={'about-content'}>
                    <i className="fa-solid fa-globe"></i>
                    <h1>Support</h1>
                    <p>Beyond the sale, we are dedicated to providing you with reliable after-sales service to ensure
                        your ongoing success and happiness.</p>
                </div>
            </div>
        </section>
        <section className="mentor">
            <h1>Mentors</h1>
            <div className={'wrapper'}>
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
            <img className="mentor-img" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCpzAlmrfzPB_q16Dbvq0IihxEcGEKTZFLA&s'} alt="freecodecamp" />
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
