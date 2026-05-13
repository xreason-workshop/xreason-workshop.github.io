import malmoHeroUrl from './assets/malmo-harbor.jpg';
import marcoPavonePhoto from './assets/profile pics/Marco Pavone.jpeg';
import xiaolongWangPhoto from './assets/profile pics/Xiaolong Wang.jpg';
import bharathHariharanPhoto from './assets/profile pics/Bharath Hariharan.jpg';
import vincentSitzmannPhoto from './assets/profile pics/Vincent Sitzmann.jpg';
import boyiLiPhoto from './assets/profile pics/Boyi Li.png';
import jiajunWuPhoto from './assets/profile pics/Jiajun Wu.jpg';
import fuEnYangPhoto from './assets/profile pics/Fu-En Yang.jpg';
import sergeBelongiePhoto from './assets/profile pics/Serge Belongie.jpg';
import katieLuoPhoto from './assets/profile pics/Katie Z. Luo.jpg';
import congyueDengPhoto from './assets/profile pics/Congyue Deng.jpg';
import haoranGengPhoto from './assets/profile pics/Haoran Geng.jpg';
import lenaWildPhoto from './assets/profile pics/Lena Wild.png';
import milanGanaiPhoto from './assets/profile pics/Milan Ganai.png';
import vitorGuiziliniPhoto from './assets/profile pics/Vitor Guizilini.jpg';
import jitendraMalikPhoto from './assets/profile pics/Jitendra Malik.jpg';
import leonidasGuibasPhoto from './assets/profile pics/Leonidas Guibas.jpg';

const eccvLogoUrl = 'https://media.eventhosts.cc/Conferences/ECCV2026/ECCV_2026_Logo.svg';
const photoCreditUrl = 'https://unsplash.com/photos/UhHgpd6cSeM';

const styles = `
:root {
  color: #18202c;
  background: #f7f8fb;
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --ink: #18202c;
  --muted-ink: #5b6676;
  --line: #d8dee8;
  --paper: #ffffff;
  --soft: #eef2f7;
  --teal: #006f7f;
  --teal-dark: #004d59;
  --coral: #b54734;
  --green: #427a55;
  --gold: #be8b18;
  --topbar-overlap: 72px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--ink);
  background: #f7f8fb;
}

a {
  color: inherit;
  text-decoration: none;
}

.site-shell {
  min-height: 100vh;
}

.container {
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 72px;
  padding: 12px 28px;
  border-bottom: 1px solid rgba(24, 32, 44, 0.12);
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(14px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  line-height: 1.1;
}

.brand img {
  display: block;
  width: 72px;
  height: 36px;
  object-fit: contain;
}

.topbar nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
}

.topbar nav a {
  border-radius: 6px;
  padding: 10px 12px;
  color: var(--teal-dark);
  font-size: 0.84rem;
  font-weight: 700;
}

.topbar nav a:hover,
.topbar nav a:focus-visible {
  color: var(--teal-dark);
  background: #e9f5f6;
  outline: none;
}

.section-band {
  border-bottom: 1px solid var(--line);
}

.hero {
  position: relative;
  overflow: hidden;
  margin-top: calc(-1 * var(--topbar-overlap));
  color: #ffffff;
  background:
    linear-gradient(90deg, rgba(12, 26, 35, 0.9), rgba(12, 26, 35, 0.68) 54%, rgba(12, 26, 35, 0.24)),
    var(--hero-image) center / cover no-repeat;
}

.hero::before {
  position: absolute;
  inset: auto 0 0 0;
  height: 8px;
  content: "";
  background: var(--teal);
}

.hero-grid {
  display: flex;
  align-items: center;
  min-height: calc(90vh);
  min-height: calc(90svh);
  min-height: calc(90dvh);
  padding: calc(var(--topbar-overlap) + clamp(56px, 7vh, 96px)) 0 clamp(72px, 9vh, 120px);
}

.hero-copy {
  max-width: 980px;
}

.hero-conference {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin-bottom: 30px;
}

.hero-conference img {
  display: block;
  width: 132px;
  height: auto;
  border-radius: 6px;
  padding: 8px 10px;
  background: rgba(255, 255, 255, 0.94);
}

.hero-conference span {
  display: block;
  color: #9ee4ee;
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
}

.hero-conference strong {
  display: block;
  margin-top: 4px;
  color: #ffffff;
  font-size: 1.05rem;
  line-height: 1.3;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--teal-dark);
  font-size: 0.9rem;
  font-weight: 800;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  max-width: 980px;
  margin-bottom: 24px;
  font-size: 4.3rem;
  line-height: 0.99;
  letter-spacing: 0;
}

.hero h1 {
  color: #ffffff;
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.22);
}

h2 {
  margin-bottom: 0;
  font-size: 2.4rem;
  line-height: 1.08;
  letter-spacing: 0;
}

.lead {
  max-width: 760px;
  color: #354153;
  font-size: 1.3rem;
  line-height: 1.55;
}

.hero .lead {
  color: #eef8fa;
  text-shadow: 0 1px 12px rgba(0, 0, 0, 0.18);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  border-radius: 6px;
  padding: 12px 18px;
  font-weight: 800;
}

.button.primary {
  color: #ffffff;
  background: var(--coral);
}

.button.primary:hover,
.button.primary:focus-visible {
  background: #983927;
}

.button.secondary {
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.12);
}

.button.secondary:hover,
.button.secondary:focus-visible {
  background: rgba(255, 255, 255, 0.22);
}

.fact-strip {
  padding: 22px 0;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
}

.fact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.fact-card {
  min-height: 96px;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 18px;
  background: #ffffff;
}

.fact-card span,
.date-card span,
.topic-card span,
.status {
  display: block;
  color: var(--muted-ink);
  font-size: 0.84rem;
  font-weight: 800;
  text-transform: uppercase;
}

.fact-card strong {
  display: block;
  margin-top: 8px;
  font-size: 1.05rem;
  line-height: 1.25;
}

.section {
  scroll-margin-top: 92px;
  padding: 88px 0;
  background: #ffffff;
}

.section.muted {
  background: var(--soft);
}

.two-column {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 64px;
}

.section-copy {
  color: #344054;
  font-size: 1.08rem;
  line-height: 1.75;
}

.section-intro {
  max-width: 420px;
  margin: 18px 0 0;
  color: #4c5868;
  font-size: 0.93rem;
  line-height: 1.58;
}

.section-copy p:last-child {
  margin-bottom: 0;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 34px;
}

.topic-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
}

.topic-card,
.date-card,
.person-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff00;
}

.topic-card {
  display: grid;
  grid-template-columns: 36px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  min-height: 80px;
  padding: 12px 14px;
}

.topic-card span {
  color: var(--coral);
  font-size: 1.05rem;
}

.topic-card p {
  margin: 0;
  line-height: 1.25;
}

.date-timeline {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
}

.date-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  width: 100%;
}

.date-grid::before {
  display: none;
}

.date-card::before {
  display: none;
}

.date-card::after {
  display: none;
}

.date-card {
  position: relative;
  min-height: 120px;
  border: 0;
  border-radius: 0;
  padding: 18px;
}

.date-card + .date-card {
  border-left: 1px solid var(--line);
}

.date-card span {
  color: #4c5868;
  font-size: 0.78rem;
  letter-spacing: 0;
}

.date-card strong {
  display: block;
  margin: 10px 0 8px;
  color: var(--teal-dark);
  font-size: 1.06rem;
  line-height: 1.22;
}

.date-card p {
  margin: 0;
  color: var(--muted-ink);
  line-height: 1.45;
}

.submission-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: min(100%, 520px);
  margin-top: 26px;
  border: 1px solid #adc8cd;
  border-radius: 8px;
  padding: 18px 20px;
  background: #ffffff;
}

.submission-box span {
  color: var(--coral);
  font-weight: 800;
}

.schedule-wrap {
  overflow-x: auto;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
}

table {
  width: 100%;
  min-width: 700px;
  border-collapse: collapse;
}

caption {
  padding: 16px 18px;
  color: var(--muted-ink);
  text-align: left;
  font-weight: 700;
}

th,
td {
  padding: 15px 18px;
  border-top: 1px solid var(--line);
  text-align: left;
}

th {
  color: #ffffff;
  background: var(--teal-dark);
  font-size: 0.92rem;
}

td:first-child,
td:nth-child(2) {
  width: 110px;
  color: var(--teal-dark);
  font-weight: 800;
}

tbody tr:nth-child(even) {
  background: #f8fafc;
}

.person-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.organizer-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.person-card {
  display: grid;
  gap: 10px;
  justify-items: center;
  min-height: 220px;
  padding: 20px;
  text-align: center;
  transition:
    border-color 160ms ease,
    transform 160ms ease,
    box-shadow 160ms ease;
}

.person-card:hover,
.person-card:focus-visible {
  border-color: #8eb9c0;
  box-shadow: 0 10px 24px rgba(24, 32, 44, 0.09);
  outline: none;
  transform: translateY(-2px);
}

.person-card.compact {
  min-height: 196px;
}

.profile-photo {
  display: block;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  background: var(--soft);
  box-shadow: 0 5px 14px rgba(24, 32, 44, 0.12);
  object-fit: cover;
  object-position: center;
}

.person-card strong {
  display: block;
  font-size: 1.2rem;
}

.person-card p {
  margin: 0;
  color: var(--muted-ink);
  line-height: 1.45;
}

.site-footer {
  padding: 34px 0;
  color: #ffffff;
  background: #18202c;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 22px;
}

.footer-content img {
  width: 92px;
  height: auto;
  filter: brightness(0) invert(1);
}

.footer-content p {
  margin: 0;
  flex: 1;
  color: #d5dbe5;
  line-height: 1.5;
}

.footer-content a {
  border: 1px solid rgba(255, 255, 255, 0.42);
  border-radius: 6px;
  padding: 10px 12px;
  font-weight: 800;
}

@media (max-width: 980px) {
  :root {
    --topbar-overlap: 72px;
  }

  .topbar {
    align-items: center;
    flex-direction: row;
    gap: 16px;
    padding: 12px 20px;
  }

  .brand {
    flex: 0 0 auto;
  }

  .topbar nav {
    flex: 1 1 auto;
    min-width: 0;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    scrollbar-width: thin;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .topbar nav a {
    flex: 0 0 auto;
    padding: 10px 12px;
    color: var(--teal-dark);
  }

  .topbar nav::-webkit-scrollbar {
    height: 4px;
   
  }

  .topbar nav::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: rgba(24, 32, 44, 0.22);
  }

  .hero-grid,
  .two-column {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    padding: calc(var(--topbar-overlap) + 56px) 0 70px;
  }

  h1 {
    font-size: 3.25rem;
  }

  h2 {
    font-size: 2.05rem;
  }

  .fact-grid,
  .date-grid,
  .person-grid,
  .organizer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .date-card:nth-child(odd) {
    border-left: 0;
  }

  .date-card:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }
}

@media (max-width: 680px) {
  :root {
    --topbar-overlap: 72px;
  }

  .container {
    width: min(100% - 28px, 1120px);
  }

  .topbar {
    padding: 12px 14px;
  }

  .brand span {
    font-size: 0.96rem;
  }

  .topbar nav a {
    padding: 9px 10px;
    font-size: 0.8rem;
  }

  .section {
    padding: 64px 0;
  }

  h1 {
    font-size: 2.45rem;
  }

  h2 {
    font-size: 1.82rem;
  }

  .lead {
    font-size: 1.08rem;
  }

  .fact-grid,
  .topic-grid,
  .date-grid,
  .person-grid,
  .organizer-grid {
    grid-template-columns: 1fr;
  }

  .date-card + .date-card {
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .topic-card {
    grid-template-columns: 38px minmax(0, 1fr);
    min-height: auto;
  }

  .submission-box,
  .footer-content {
    align-items: flex-start;
    flex-direction: column;
  }
}
`;

const navItems = [
  ['Overview', '#overview'],
  ['Topics', '#topics'],
  ['Dates', '#dates'],
  ['Program', '#program'],
  ['Speakers', '#speakers'],
  ['Organizers', '#organizers'],
];

const facts = [
  ['Conference', 'ECCV 2026 Workshop'],
  ['Date', 'September 8, 2026'],
  ['Location', 'Malmö, Sweden'],
  ['Format', 'Full-day workshop'],
];

const topics = [
  'Actionable 3D and relational scene representations: scene graphs, metric estimation, and visual affordances',
  'Perception as structured reasoning for vision-language-action models',
  'Active perception and exploration for navigation and manipulation',
  'Spatial reasoning in autonomous systems, including driving, navigation, and manipulation',
  'Hybrid perceptual systems for reactive and deliberate spatial reasoning',
  'Benchmarks and evaluation for embodied perceptual and spatial reasoning',
  'Multi-modal fusion for embodied tasks across vision, language, and proprioception',
];

const dates = [
  ['Paper submission deadline', 'July 31, 2026', '23:59 Anywhere on Earth'],
  ['Author notification', 'August 19, 2026', 'Double-blind review'],
  ['Camera-ready deadline', 'August 26, 2026', 'Non-archival workshop papers'],
  ['Workshop date', 'September 8, 2026', 'During ECCV workshops and tutorials'],
];

const openReviewSubmissionUrl =
  'https://openreview.net/group?id=thecvf.com/ECCV/2026/Workshop/X-Reason&referrer=%5BHomepage%5D(%2F)#tab-recent-activity';

const schedule = [
  ['09:00', '09:30', 'Coffee and breakfast'],
  ['09:30', '09:40', 'Opening remarks'],
  ['09:40', '10:20', 'Invited talk 1 with Q&A'],
  ['10:20', '11:00', 'Invited talk 2 with Q&A'],
  ['11:00', '11:20', 'Oral presentation 1'],
  ['11:20', '11:40', 'Coffee break'],
  ['11:40', '12:20', 'Invited talk 3 with Q&A'],
  ['12:20', '12:40', 'Oral presentation 2'],
  ['12:40', '13:40', 'Lunch break'],
  ['13:40', '14:30', 'Poster session'],
  ['14:30', '15:10', 'Invited talk 4 with Q&A'],
  ['15:10', '15:40', 'Best paper awards oral presentation'],
  ['15:40', '16:20', 'Invited talk 5 with Q&A'],
  ['16:20', '16:50', 'Coffee break'],
  ['16:50', '17:30', 'Invited talk 6 with Q&A'],
  ['17:30', '18:10', 'Invited talk 7 with Q&A'],
  ['18:10', '18:15', 'Closing remarks'],
];

const speakers = [
  ['Marco Pavone', 'Stanford University', 'Confirmed', 'https://web.stanford.edu/~pavone/'],
  ['Xiaolong Wang', 'UC San Diego & ARI', 'Confirmed', 'https://xiaolonw.github.io/'],
  ['Bharath Hariharan', 'Cornell University', 'Confirmed', 'https://www.cs.cornell.edu/~bharathh/'],
  ['Vincent Sitzmann', 'MIT', 'Confirmed', 'https://www.vincentsitzmann.com/'],
  ['Boyi Li', 'NVIDIA & UC Berkeley', 'Confirmed', 'https://sites.google.com/site/boyilics/'],
  ['Jiajun Wu', 'Stanford University', 'Confirmed', 'https://jiajunwu.com/'],
  ['Fu-En Yang', 'NVIDIA', 'Confirmed', 'https://fuenyang1127.github.io/'],
  ['Serge Belongie', 'University of Copenhagen', 'Tentative', 'https://serge.belongie.com/'],
];

const organizers = [
  ['Katie Z. Luo', 'Stanford University', 'Primary contact', 'https://www.cs.cornell.edu/~katieluo/'],
  ['Congyue Deng', 'MIT', 'Organizer', 'https://congyue-deng.github.io/'],
  ['Haoran Geng', 'UC Berkeley', 'Organizer', 'https://geng-haoran.github.io/'],
  ['Lena Wild', 'KTH Royal Institute of Technology', 'Organizer', 'https://lwildd.github.io/'],
  ['Milan Ganai', 'Stanford University', 'Organizer', 'https://milanganai.github.io/'],
  ['Vitor Guizilini', 'Toyota Research Institute', 'Organizer', 'https://vitorguizilini.github.io/'],
  ['Jitendra Malik', 'UC Berkeley', 'Organizer', 'https://people.eecs.berkeley.edu/~malik/'],
  ['Leonidas Guibas', 'Stanford University', 'Organizer', 'https://geometry.stanford.edu/?member=guibas'],
];

const profilePhotos = {
  'Marco Pavone': marcoPavonePhoto,
  'Xiaolong Wang': xiaolongWangPhoto,
  'Bharath Hariharan': bharathHariharanPhoto,
  'Vincent Sitzmann': vincentSitzmannPhoto,
  'Boyi Li': boyiLiPhoto,
  'Jiajun Wu': jiajunWuPhoto,
  'Fu-En Yang': fuEnYangPhoto,
  'Serge Belongie': sergeBelongiePhoto,
  'Katie Z. Luo': katieLuoPhoto,
  'Congyue Deng': congyueDengPhoto,
  'Haoran Geng': haoranGengPhoto,
  'Lena Wild': lenaWildPhoto,
  'Milan Ganai': milanGanaiPhoto,
  'Vitor Guizilini': vitorGuiziliniPhoto,
  'Jitendra Malik': jitendraMalikPhoto,
  'Leonidas Guibas': leonidasGuibasPhoto,
};

function ProfilePhoto({ name }) {
  return (
    <img
      className="profile-photo"
      src={profilePhotos[name]}
      alt={`${name} portrait`}
      loading="lazy"
    />
  );
}

function App() {
  return (
    <div id="top" className="site-shell">
      <style>{styles}</style>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Workshop home">
          <img src={eccvLogoUrl} alt="ECCV 2026 logo" />
          <span>X-REASON</span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-band" style={{ '--hero-image': `url(${malmoHeroUrl})` }}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-conference">
                <div>
                  <span>ECCV 2026 Workshop</span>
                  <strong>September 8, 2026 · Malmö, Sweden</strong>
                </div>
              </div>
              <h1>Visual Perception and Reasoning in the Interactable World</h1>
              <p className="lead">
                A full-day workshop on how structured visual perception can support spatial
                reasoning, embodied decision-making, active exploration, and real-world action.
              </p>
              <div className="hero-actions" aria-label="Page shortcuts">
                <a className="button primary" href="#cfp">Call for Papers</a>
                <a className="button secondary" href="#program">Tentative Program</a>
              </div>
            </div>
          </div>
        </section>

   

        <section id="overview" className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow">Overview</p>
              <h2>Perception as a reasoning mechanism</h2>
            </div>
            <div className="section-copy">
              <p>
                Embodied AI systems increasingly operate in complex real-world environments, where
                perception must do more than recognize objects. It must organize spatial
                relationships, expose affordances, support deliberate planning, and help agents act.
              </p>
              <p>
                This workshop brings together computer vision, spatial reasoning, robotics,
                autonomous driving, and embodied AI to ask what visual representations are most
                useful when the world is not just observed, but interacted with.
              </p>
            </div>
          </div>
        </section>

        <section id="topics" className="section muted">
          <div className="container two-column">
            <div>
              <p className="eyebrow">Topics</p>
              <h2>Subjects of Interest</h2>
              <p className="section-intro">
                This workshop addresses fundamental questions: What visual representations best
                support embodied reasoning? How should spatial relationships be structured to
                facilitate manipulation, navigation, and autonomous driving? What reasoning
                mechanisms over perceptual data translate to improved real-world performance? We
                seek to unite classical computer vision with modern embodied AI, exploring how
                scene understanding, 3D perception, and visual reasoning can be purposefully
                designed for real-world embodied tasks.
              </p>
            </div>
            <div className="topic-grid">
              {topics.map((topic, index) => (
                <article className="topic-card" key={topic}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{topic}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="dates" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Important Dates</p>
              <h2>Key Dates</h2>
            </div>
            <div className="date-timeline">
              <div className="date-grid">
                {dates.map(([label, date, detail]) => (
                  <article className="date-card" key={label}>
                    <span>{label}</span>
                    <strong>{date}</strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="cfp" className="section muted">
          <div className="container two-column">
            <div>
              <p className="eyebrow">Call for Papers</p>
              <h2>Workshop Submissions</h2>
            </div>
            <div className="section-copy">
              <p>
                We welcome 4-page extended abstracts and 8-page non-archival workshop papers.
                Submissions will follow the standard ECCV 2026 template and will be reviewed
                double-blind by the program committee.
              </p>
              <p>
                Accepted work will be presented through oral and poster sessions. Workshop papers
                are not planned for archival proceedings.
              </p>
              <div className="submission-box">
                <strong>Submission site</strong>
                <a
                  className="button primary"
                  href={openReviewSubmissionUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Submit on OpenReview
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="program" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Program</p>
              <h2>Tentative Schedule</h2>
            </div>
            <div className="schedule-wrap">
              <table>
                <caption>All times are tentative and will be updated after the workshop date is finalized.</caption>
                <thead>
                  <tr>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                    <th scope="col">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map(([start, end, event]) => (
                    <tr key={`${start}-${event}`}>
                      <td>{start}</td>
                      <td>{end}</td>
                      <td>{event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="speakers" className="section muted">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Invited Speakers</p>
              <h2>Confirmed and Tentative Speakers</h2>
            </div>
            <div className="person-grid">
              {speakers.map(([name, affiliation, status, url]) => (
                <a className="person-card" href={url} target="_blank" rel="noreferrer" key={name}>
                  <ProfilePhoto name={name} />
                  <span className="status">{status}</span>
                  <strong>{name}</strong>
                  <p>{affiliation}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="organizers" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Organizers</p>
              <h2>Organizing Committee</h2>
            </div>
            <div className="person-grid organizer-grid">
              {organizers.map(([name, affiliation, role, url]) => (
                <a className="person-card compact" href={url} target="_blank" rel="noreferrer" key={name}>
                  <ProfilePhoto name={name} />
                  <span className="status">{role}</span>
                  <strong>{name}</strong>
                  <p>{affiliation}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

   
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <img src={eccvLogoUrl} alt="ECCV 2026 logo" />
          <p>
            First Workshop on Visual Perception and Reasoning in the Interactable World,
            ECCV 2026, Malmö, Sweden.
          </p>
          {/* <a href="https://eccv.ecva.net/" target="_blank" rel="noreferrer">ECCV 2026</a> */}
          <a href={photoCreditUrl} target="_blank" rel="noreferrer">Photo: Nik Nikolla</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
