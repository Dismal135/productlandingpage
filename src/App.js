import './App.css';

function App() {
  return (
      <>
        <header id="header">
          <h1>Sketch Markers</h1>
          <nav id="nav-bar">
            <a className="nav-link" href={"#hero"}>About</a>
            <a className="nav-link" href={"#edition"}>Edition</a>
            <a className="nav-link" href={"#gift"}>Gift</a>
            <a className="nav-link" href={"#footer"}>Contact</a>
          </nav>
        </header>
        <main>

          <section id="hero">
            <h1>Design, Concept, Art, Draw, Sketch</h1>
            <a href={"#footer"}>Review Our Markers</a>
            <a href={"#footer"}>Get one</a>
          </section>

          <section id="edition">
            <div id="first-edition">
              <a href={"#footer"}>First Edition<span>Get></span></a>
            </div>

            <div id="black-edition">
              <a href={"#footer"}>Black Edition<span>Get></span></a>
            </div>
          </section>

          <section id="review">
            <iframe id="video" width={360} height={200} src="https://www.youtube.com/embed/aAdWtml2i6E" title="Copic Sketch
                marker" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                picture-in-picture; web-share" >
            </iframe>
          </section>

          <section id="gift">
            <h1>Find the perfect gift for your beloved ones!</h1>
            <a href={"#footer"}>Find the perfect Gift</a>
          </section>

          <footer id="footer">
            <form action="https://www.freecodecamp.com/email-submit" id="form">
              <h1>Contact us</h1>
              <input name="email" id="email" type="email" placeholder="your email address"/>
              <textarea rows="10" placeholder="message"></textarea>
              <input type="submit" id="submit"/>
            </form>
            <p>copyright</p>
          </footer>
        </main>
      </>
  )
      ;
}

export default App;