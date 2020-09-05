import Head from 'next/head';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENDEAVOUR</title>
      </Head>

      <Parallax pages={4}>
        <ParallaxLayer speed={1}>
          <div className="container mx-auto" style={{ bottom: "-60%", position: "relative" }}>
            <img src="/img/earth.png" className="mw-1/2 mx-auto" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5}>
          <img src="/img/astronaut.png" className="mt-16 w-16 mx-auto" style={{ top: "40%", position: "relative" }} />
        </ParallaxLayer>
        <ParallaxLayer speed={-1}>
          <div className="container mx-auto">
            <img src="/img/logo.svg" className="mw-1/2 h-16 mt-16 mx-auto" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer>
          <div className="container mx-auto mt-64">
            <h1 className="text-white text-3xl font-bold text-center">UPCOMING RELEASE: THE CURSE</h1>
            <p className="text-center text-white">
              The Curse will drop on September 18th 2020. Get it when it comes out? Click the pre-save button below!
              <br />
              <br />
              <a
                href="https://distrokid.com/hyperfollow/endeavour2/the-curse"
                target="_blank"
                rel="nofollow"
                className="text-black text-center text-lg hover:bg-transparent hover:text-white inline-block border-2  border-solid border-white bg-white p-4 rounded-lg transition-colors duration-300"
              >
                Pre-save now!
              </a>
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div className="container text-center mx-auto">
            <h2 className="font-bold text-2xl">About</h2>
            <p>
              Endeavour is a thrash/heavy metal band from The Netherlands. Fat riffs, great melodies and a dynamic rhythm make up the music.
              Endeavour is inspired by the metal greats from the 80ies up until now.
            </p>
            <p className="mt-8">
              <strong>Endeavour is:</strong>
              <ul className="mt-4">
                <li>Marco van Sterkenburg (vocals)</li>
                <li>Redmar van der Sluys (guitars)</li>
                <li> Marco Slooten (guitars, producer)</li>
                <li> Lucas Blankenstein (bass)</li>
                <li> Jeroen Vermeer (drums)</li>
              </ul>
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div className="container text-center mx-auto">
            <h2 className="font-bold text-2xl">Contact</h2>
            <p>Follow us on:</p>
            <ul className="mt-4">
              <li>
                <a href="https://open.spotify.com/artist/74lJzi7InwUGj1xtX2GCZZ?si=R_Fgy068S_CP6kmgHSqAUQ">Spotify</a>
              </li>
              <li>
                <a href="https://instagram.com/endeavourmusic">Instagram</a>
              </li>
              <li>
                <a href="https://facebook.com/EndeavourNL">Facebook</a>
              </li>
            </ul>
            <p className="mt-8">For bookings and media requests, please reach out on info [at] endeavourband.com</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
