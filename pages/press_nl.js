import Head from "next/head";

export default function PressNL() {
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
          Nederlandse metalband Endeavour brengt single uit rondom landing Mars
          Rover
        </h1>

        <p className="text-center text-white text-sm mt-4">
          De derde single van deze Nederlandse metalband 'Endeavour' komt uit op
          18 februari 2021. Toevallig is dat ook de landingsdatum van de
          gelijknamige Mars Rover! Het nummer gaat niet specifiek over
          ruimtevaart, maar over volharding en vrijheid – twee aspecten die je
          met wat fantasie zou kunnen terugzien in de verkenning van nieuwe
          werelden. De bandnaam is uiteraard ook al een verwijzing naar één van
          de voormalige Space Shuttles.
        </p>

        <p className="text-center text-white text-sm mt-4">
          ‘Perseverance’ lonkt bij vlagen naar Metallica en Dream Theater, maar
          ook naar ouderwetse heavy metal. Dat laatste is voor een groot deel te
          danken aan de fenomenale zang van Bjørn Ciggaar (Dangerous Times for
          the Dead), een zanger die zeer sterk geïnspireerd is door Rob Halford
          van Judas Priest. Deze samenwerking brengt het beste van deze twee
          werelden samen en levert een unieke sound op.
        </p>

        <p className="text-center text-white text-xs mt-4">
          Voor meer informatie: mail naar{" "}
          <a href="mailto:info@endeavourband.com">info@endeavourband.com</a>{" "}
          <br />
          of
          <br />
          bel Marco Slooten (nul zes 31 64 04 45)
        </p>

        <h3 class="text-white text-xl mt-8 font-bold">Resources</h3>
        <p className="text-center text-white text-sm mt-4">
          Onderstaande media is vrijelijk te gebruiken in berichtgeving over
          Endeavour en de release van 'Perseverance'. Airplay van het nummer is
          welkom!
        </p>
        <h3 class="text-white text-lg mt-8 font-bold">Muziek</h3>
        <a
          href="music/Endeavour - Perseverance (feat. Bjorn Ciggaar).mp3"
          download
        >
          Endeavour - Perseverance (feat. Bjørn Ciggaar) (mp3)
        </a>
        <a
          href="music/Endeavour - Perseverance (feat. Bjorn Ciggaar).wav"
          download
        >
          Endeavour - Perseverance (feat. Bjørn Ciggaar) (wav)
        </a>

        <h3 class="text-white text-lg mt-8 font-bold">Logo's</h3>
        <div class="mt-8 bg-white p-8">
          <img src="img/ENDEAVOUR_LG.png" alt="Endeavour logo large" />
        </div>
        <p className="text-center text-white text-sm mt-4">
          Logo, zwart (<a href="img/ENDEAVOUR_LG.png">png</a>,{" "}
          <a href="img/ENDEAVOUR.eps">eps</a>)
        </p>
        <div class="mt-8 p-8">
          <img src="img/ENDEAVOUR_WHITE_LG.png" alt="Endeavour logo large" />
        </div>
        <p className="text-center text-white text-sm">
          Logo, wit (<a href="img/ENDEAVOUR_WHITE_LG.png">png</a>,{" "}
          <a href="img/ENDEAVOUR_WHITE.eps">eps</a>)
        </p>

        <h3 class="text-white text-lg mt-8 font-bold">
          Foto's (klik voor fullsize)
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
            Met de klok mee, vanaf linksboven: Lucas Blankenstein, Jeroen
            Vermeer, Marco Slooten en Redmar van der Sluys.
          </a>
          <a
            href="img/LUCAS_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/LUCAS_ASTRO_sm.png"
              alt="Lucas Blankenstein (basgitaar)"
            />
            Lucas Blankenstein (basgitaar)
          </a>
          <a
            href="img/MARCO_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/MARCO_ASTRO_sm.png"
              alt="Marco Slooten (gitaar, productie)"
            />
            Marco Slooten (gitaar, productie)
          </a>
          <a
            href="img/REDMAR_ASTRO.png"
            target="_blank"
            class="text-center mb-8 block"
          >
            <img
              src="img/REDMAR_ASTRO_sm.png"
              alt="Redmar van der Sluys (gitaar)"
            />
            Redmar van der Sluys (gitaar)
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
