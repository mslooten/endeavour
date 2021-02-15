import Head from "next/head";

export default function Press() {
  return (
    <>
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
        <meta name="robots" content="noindex" />
      </Head>
      <div className="logo normal">
        <img
          src="/img/logo.svg"
          className="mw-1/2 h-16 px-4 mx-auto"
          alt="Endeavour logo"
        />
      </div>
      <div className="mx-auto px-4 main mt-20 max-w-xl">
        <h1 className="text-white text-2xl font-bold text-center leading-none=">
          Endeavour to release third single ‘Perseverance’ alongside the Mars
          Rover landing
        </h1>

        <p className="text-center text-white text-sm mt-4">
          The third single of this Dutch metal band will be released on February
          18th 2021. Coincidentally, that’s also the date the Mars Rover of the
          same name will be landing on Mars! The song is not specifically about
          space exploration, but it’s about freedom and persevering – two
          aspects that could well be linked with the endeavours of the Mars
          Rover. The band name is of course also a nod to the former Space
          Shuttle of the same name, so it is fitting.
        </p>

        <p className="text-center text-white text-sm mt-4">
          ‘Perseverance’ hints at Metallica and Dream Theater, but also good old
          fashioned heavy metal. The latter thanks to the phenomenal vocals of
          Bjørn Ciggaar (Dangerous Times for the Dead). He’s a singer who’s
          heavily inspired by Rob Halford of Judas Priest. This collaboration
          with him yields the best of both worlds and a unique sound!
        </p>

        <p className="text-center text-white text-xs mt-4">
          For more information mail to:{" "}
          <a href="mailto:info@endeavourband.com">info@endeavourband.com</a>{" "}
        </p>

        <h3 class="text-white text-xl mt-8 font-bold">Resources</h3>
        <p className="text-center text-white text-sm mt-4">
          The media below can be freely used in reporting about Endeavour and
          the release of 'Perseverance'. Airplay of the song is welcome!
        </p>
        <h3 class="text-white text-lg mt-8 font-bold">Music</h3>
        <a href="music/Endeavour - Perseverance (feat. Bjorn Ciggaar).mp3">
          Endeavour - Perseverance (feat. Bjørn Ciggaar) (mp3)
        </a>
        <a href="music/Endeavour - Perseverance (feat. Bjorn Ciggaar).wav">
          Endeavour - Perseverance (feat. Bjørn Ciggaar) (wav)
        </a>

        <h3 class="text-white text-lg mt-8 font-bold">Logos</h3>
        <div class="mt-8 bg-white p-8">
          <img src="img/ENDEAVOUR_LG.png" alt="Endeavour logo large" />
        </div>
        <p className="text-center text-white text-sm mt-4">
          Logo, black (<a href="img/ENDEAVOUR_LG.png">png</a>,{" "}
          <a href="img/ENDEAVOUR.eps">eps</a>)
        </p>
        <div class="mt-8 p-8">
          <img src="img/ENDEAVOUR_WHITE_LG.png" alt="Endeavour logo large" />
        </div>
        <p className="text-center text-white text-sm">
          Logo, white (<a href="img/ENDEAVOUR_WHITE_LG.png">png</a>,{" "}
          <a href="img/ENDEAVOUR_WHITE.eps">eps</a>)
        </p>

        <h3 class="text-white text-lg mt-8 font-bold">
          Photos (click for fullsize)
        </h3>
        <div class="mt-8">
          <a
            href="img/endeavour-band.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/endeavour-band_sm.png"
              alt="Bandleden Lucas Blankenstein, Jeroen Vermeer, Marco Slooten en Redmar van der Sluys in astronautenpak"
            />
            Clockwise, starting at top left: Lucas Blankenstein, Jeroen Vermeer,
            Marco Slooten and Redmar van der Sluys.
          </a>
          <a
            href="img/LUCAS_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img src="img/LUCAS_ASTRO_sm.png" alt="Lucas Blankenstein (bass)" />
            Lucas Blankenstein (bass)
          </a>
          <a
            href="img/MARCO_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/MARCO_ASTRO_sm.png"
              alt="Marco Slooten (guitar, production)"
            />
            Marco Slooten (guitar, production)
          </a>
          <a
            href="img/REDMAR_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/REDMAR_ASTRO_sm.png"
              alt="Redmar van der Sluys (guitar)"
            />
            Redmar van der Sluys (guitar)
          </a>
          <a
            href="img/JEROEN_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img src="img/JEROEN_ASTRO_sm.png" alt="Jeroen Vermeer (drums)" />
            Jeroen Vermeer (drums)
          </a>
        </div>
      </div>
    </>
  );
}
