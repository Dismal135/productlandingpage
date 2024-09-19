import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';


function App() {
  return (
      <>
          <header className="App-header">
              <div className={'container'}>
              <div>
              <h1>S&T</h1>
              <nav>
                  <a href={"#about"}>About</a>
                  <a href={"#items"}>Items</a>
                  <a href={"#contact"}>Contact</a>
              </nav>
              </div>
              <div>
              <h1>Strategy and Technology</h1>
              <h2>Grow Your business globally</h2>
              </div>
              <a className={'hire-button'} href={"#contact"}>Hire Us</a>
              </div>
          </header>
          <main>
              <section className={'service'}>
                  <div className={'container'}>
                      <i className="fa-solid fa-computer"></i>
                      <h1>Business on all platforms</h1>
                      <p>Growing your audience on all multimedia.</p>
                  </div>
                  <div className={'container'}>
                      <i className="fa-regular fa-comment"></i>
                      <h1>Solutions with Technology</h1>
                      <p>100% correct calculated with the most mordern technology.</p>
                  </div>
                  <div className={'container'}>
                      <i className="fa-solid fa-business-time"></i>
                      <h1>Business plan</h1>
                      <p>Plan your company's events and meetings with IT.</p>
                  </div>
              </section>

              <section className={'product'}>
                  <h1>Product & Service</h1>
                  <div className={'container'}>
                      <img src={"https://images.stockcake.com/public/7/2/0/7206ea94-2dbc-4a28-bb2b-b13e8027be6c_large/smartphone-social-media-stockcake.jpg"} alt={'social media'} />
                      <h1></h1>
                  </div>
              </section>
          </main>
      </>
  )
      ;
}

export default App;