import Head from "next/head";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ENDEAVOUR</title>
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-177547215-1"
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-177547215-1', { anonymize_ip: true });
        `,
              }}
            />
          </>
        )}
      </Head>
      <div className="logo">
        <img
          src="/img/logo.svg"
          className="mw-1/2 h-16 px-4 mx-auto"
          alt="Endeavour logo"
        />
        <a
          href="https://distrokid.com/hyperfollow/endeavour2/perseverance-feat-bjrn-ciggaar"
          target="_blank"
          rel="nofollow"
          className="text-center text-sm hover:underline"
        >
          Listen to 'Perseverance' now!
        </a>
      </div>
      <Parallax pages={5}>
        <ParallaxLayer speed={1}>
          <div className="earth"> </div>
        </ParallaxLayer>
        <ParallaxLayer speed={-1.5}>
          <div className="astronaut">
            <img
              src="/img/astronaut.png"
              className="w-16 animated-astro"
              alt="Astronaut looking at earth"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer>
          <div className="container mx-auto px-4 main">
            <div>
              <h1 className="text-white text-2xl font-bold text-center leading-none hidden">
                OUT NOW: PERSEVERANCE
              </h1>

              <iframe
                className="mx-auto my-4 max-w-full block"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jWruwDMVQAw"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="text-center text-white text-sm mt-4">
                'Perseverance (feat. Bjørn Ciggaar)' will drop February 18th.
                Pre-save it now to get it on release:
                <br />
                <br />
                <a
                  href="https://distrokid.com/hyperfollow/endeavour2/perseverance-feat-bjrn-ciggaar"
                  target="_blank"
                  rel="nofollow"
                  className="text-black text-center text-lg hover:bg-transparent hover:text-white inline-block border-2  border-solid border-white bg-white p-4 rounded-lg transition-colors duration-300"
                >
                  Pre-save it now!
                </a>
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <div className="container text-center mx-auto px-4 max-w-xl">
            <h2 className="font-bold text-2xl">About</h2>
            <p>
              Endeavour is a thrash/heavy metal band from The Netherlands. Fat
              riffs, great melodies and a dynamic rhythm make up the music.
              Endeavour is inspired by the metal greats from the 80ies up until
              now.
            </p>
            <p className="mt-8">
              <strong>Endeavour is:</strong>
            </p>
            <ul className="mt-4">
              <li>Marco Slooten (guitars, producer)</li>
              <li>Redmar van der Sluys (guitars)</li>
              <li>Lucas Blankenstein (bass)</li>
              <li>Jeroen Vermeer (drums)</li>
            </ul>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <div className="container text-center mx-auto px-4">
            <h2 className="font-bold text-2xl">Contact</h2>
            <p>Follow us on:</p>
            <ul className="mt-4">
              <li>
                <a
                  href="https://open.spotify.com/artist/74lJzi7InwUGj1xtX2GCZZ?si=R_Fgy068S_CP6kmgHSqAUQ"
                  className="underline"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/endeavourmusic"
                  className="underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/EndeavourNL"
                  className="underline"
                >
                  Facebook
                </a>
              </li>
            </ul>
            <p className="mt-8">
              For bookings and media requests, please reach out on info [at]
              endeavourband.com
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
