import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const featureHighlights = [
  { title: 'Elevated Dining', copy: 'California fusion cuisine served family-style with fine-dining technique and soulful storytelling.' },
  { title: 'Cruising Beyond the Chrome Podcast', copy: 'State-of-the-art studio that records live conversations with builders, artists, and culture keepers.' },
  { title: 'Live Performance Stage', copy: 'Music, spoken word, and cultural showcases that keep the soundtrack of lowrider culture alive.' },
];

const legacyPoints = [
  'Lowrider culture is an expression of resilience—engineers, artists, and families crafting rolling art from garage workshops.',
  'Every hydraulic bounce and candy-paint finish tells a story; The Boulevard House preserves these narratives in real time.',
  'Sunday cruises, family rituals, and community pride now have a permanent home that respects tradition while inviting new audiences.',
];

const spaceElements = [
  { title: 'Chrome & Craftsmanship', description: 'Gleaming chrome accents and polished woods create a warm, upscale atmosphere that reflects meticulous care.' },
  { title: 'Living Murals', description: 'Walls wrapped in murals by local artists narrate journeys of heritage, pride, and the open road.' },
  { title: 'Rolling Gallery', description: 'Curated showcase of custom lowriders rotating under gallery lighting, redefining automotive artistry.' },
];

const menuSegments = [
  {
    title: 'Flavors That Tell Stories',
    description:
      'Menus pull from taquerías in East LA, coastal shacks in San Diego, and Central Valley backyard gatherings—reimagined with premium ingredients.',
  },
  {
    title: 'Family-Style Service',
    description: 'Large-format plates encourage conversation, connection, and Sunday-style dining any night of the week.',
  },
  {
    title: 'Seasonal California Pantry',
    description: 'Local farms supply produce for vibrant vegetarian offerings, citrus-driven seafood, and mesquite-grilled proteins.',
  },
];

const flavorProfiles = [
  { title: 'LA Street Inspired', detail: 'Bold tacos, ceviches, and grilled meats that taste like a Saturday on Whittier Boulevard.' },
  { title: 'San Diego Coastal', detail: 'Baja-influenced seafood—aguachile, fish tacos, and citrus-chile flavor stacks.' },
  { title: 'Central Valley Comfort', detail: 'Slow-cooked meats, rice and beans, and desserts that feel like backyard gatherings.' },
];

const stageProgramming = [
  { title: 'Live Music', description: 'Classic soul, funk, and contemporary Latin lineups keep the cruising soundtrack alive.' },
  { title: 'DJ Sets', description: 'Resident and guest DJs spin oldies nights, cumbia sessions, and vinyl deep dives.' },
  { title: 'Spoken Word & Storytelling', description: 'Poets and community historians share narratives of identity, pride, and perseverance.' },
  { title: 'Cultural Events', description: 'Car club gatherings, art shows, and community celebrations take over the stage weekly.' },
];

const communityCommitments = [
  { title: 'Families Welcome', description: 'Kid-friendly menus, communal seating, and sight lines to the gallery invite multigenerational gatherings.' },
  { title: 'Enthusiast Hub', description: 'Car clubs and builders use the space as a clubhouse for showcases, meetings, and celebrations.' },
  { title: 'Cultural Gateway', description: 'Newcomers experience the depth of lowrider heritage through food, art, and storytelling.' },
];

const experienceFlow = [
  { title: 'Arrival', detail: 'Chrome gleams curbside, murals glow through the facade, and a featured lowrider takes center stage.' },
  { title: 'Discovery', detail: 'Guests wander through the rolling gallery, view the podcast booth, and notice artful automotive details.' },
  { title: 'Atmosphere', detail: 'Music hums, plates arrive steaming, and lighting echoes California sunsets.' },
  { title: 'Connection', detail: 'Meals become storytelling sessions; guests catch a live taping or performance before cruising home inspired.' },
];

export default function CommercialDomesticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060608] to-[#1a1c24] text-white">
      <Navigation />
      <header className="pt-32 pb-16 bg-gradient-to-b from-[#050505] to-[#0f0f14] text-center px-6">
        <p className="text-sm uppercase tracking-[0.6em] text-gray-500 mb-4">Commercial Property · Domestic</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Boulevard House</h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Where California lowrider heritage, elevated dining, and immersive storytelling cruise together under one roof.
        </p>
      </header>

      <main className="container mx-auto px-6 py-16 space-y-16">
        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Concept Overview</p>
            <h2 className="text-3xl font-semibold mb-4">A Cultural Landmark Disguised as a Restaurant</h2>
            <p className="text-gray-400 mb-6">
              The Boulevard House honors the artistry and community of lowrider culture. Custom cars rotate through gallery bays, chrome reflects
              California sunsets, and California fusion cuisine is shared like a Sunday ritual. Families, builders, and curious newcomers gather
              to taste, listen, and celebrate a living tradition.
            </p>
            <div className="grid gap-4">
              {featureHighlights.map(({ title, copy }) => (
                <div key={title} className="bg-[#0b0f1b] border border-gray-800 rounded-2xl p-4">
                  <p className="text-brand text-xs uppercase tracking-[0.4em] mb-2">{title}</p>
                  <p className="text-sm text-gray-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/low1.png"
                alt="Boulevard House interior"
                className="rounded-2xl border border-gray-800 shadow-lg h-48 w-full object-cover"
              />
              <img
                src="/low2.png"
                alt="Lowrider gallery detail"
                className="rounded-2xl border border-gray-800 shadow-lg h-48 w-full object-cover"
              />
            </div>
            <div className="rounded-3xl border border-gray-800 overflow-hidden shadow-lg">
              <img src="/low3.png" alt="Stage vignette" className="w-full h-48 object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Rooted in Lowrider Legacy</p>
          <h2 className="text-3xl font-semibold mb-6">Crafted From Resilience, Shared With Pride</h2>
          <ul className="space-y-4 text-gray-300 text-sm">
            {legacyPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="text-brand mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4">The Space</p>
          <div className="grid gap-8 md:grid-cols-3">
            {spaceElements.map(({ title, description }) => (
              <article key={title} className="bg-[#0b0e1a] border border-gray-800 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500">The Menu</p>
            <h2 className="text-3xl font-semibold">California Fusion With Soul</h2>
            {menuSegments.map(({ title, description }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5 bg-[#090c16]">
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-gray-300 text-sm">{description}</p>
              </article>
            ))}
          </div>
          <div className="bg-[#080b14] border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative">
              <img src="/menu.png" alt="Boulevard House menu fold" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-[0.4em] text-brand">Flavor Profiles</p>
                <p className="text-sm text-gray-200">Printed on fold-out menus so every table discovers the journey.</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {flavorProfiles.map(({ title, detail }) => (
                <div key={title} className="border border-gray-800 rounded-2xl p-4">
                  <p className="text-brand text-xs uppercase tracking-[0.4em]">{title}</p>
                  <p className="text-gray-300 text-sm mt-2">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="bg-[#0b0f1b] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Cruising Beyond the Chrome</p>
            <h2 className="text-3xl font-semibold mb-4">Podcast Studio & Story Lab</h2>
            <p className="text-gray-400 mb-4">
              Legendary builders, artists, and community leaders record live episodes before intimate audiences. Tapings become events where
              guests dine, listen, and witness history captured in high fidelity.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3"><span className="text-brand">•</span><span>Studio doubles as archival hub documenting lowrider evolution.</span></li>
              <li className="flex gap-3"><span className="text-brand">•</span><span>Live recordings encourage audience participation and post-show dining.</span></li>
              <li className="flex gap-3"><span className="text-brand">•</span><span>Content syndication extends The Boulevard House brand globally.</span></li>
            </ul>
          </div>
          <div className="bg-[#0b0e19] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Performance Stage</p>
            <h2 className="text-3xl font-semibold mb-4">Where Culture Comes Alive</h2>
            <div className="grid gap-4">
              {stageProgramming.map(({ title, description }) => (
                <article key={title} className="border border-gray-800 rounded-2xl p-4">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300 text-sm mt-1">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="bg-[#090c16] border border-gray-800 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Built for Community</p>
            <h2 className="text-3xl font-semibold mb-4">Inclusive by Design</h2>
            <div className="space-y-4">
              {communityCommitments.map(({ title, description }) => (
                <article key={title} className="border border-gray-800 rounded-2xl p-4">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
                </article>
              ))}
            </div>
          </div>
          <img
            src="/low3.png"
            alt="Boulevard House stage"
            className="rounded-3xl border border-gray-800 shadow-xl w-full h-64 object-cover"
          />
        </section>

        <section className="bg-[#0b0f1d] border border-gray-800 rounded-3xl p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">The Experience Arc</p>
          <h2 className="text-3xl font-semibold mb-6">From Arrival to Connection</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experienceFlow.map(({ title, detail }) => (
              <article key={title} className="border border-gray-800 rounded-2xl p-5">
                <p className="text-brand text-xs uppercase tracking-[0.4em] mb-2">{title}</p>
                <p className="text-gray-300 text-sm">{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#080b14] border border-gray-800 rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3">Conclusion</p>
          <h2 className="text-3xl font-semibold mb-4">Cruise With Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The Boulevard House is more than nostalgia—it is living artistry and future heritage. Each meal, performance, and recording shares
            stories of craft, community, and the open road ahead.
          </p>
        </section>
      </main>

      <Contact />
      <Footer />
    </div>
  );
}
