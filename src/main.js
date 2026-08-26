import './style.css'
import site from '../content/site.json'
import artworks from '../content/artworks.json'

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const fieldNotes = (work) => `
  <dl class="field-notes">
    <div><dt>Era</dt><dd>${work.era}</dd></div>
    <div><dt>Region</dt><dd>${work.region}</dd></div>
    <div><dt>Fauna</dt><dd>${work.fauna}</dd></div>
    <div><dt>Materials</dt><dd>${work.materials}</dd></div>
  </dl>
`

const artworkGallery = (work) => `
  <div class="work-gallery work-gallery--${work.images.length}">
    ${work.images
      .map(
        (image, index) => `
          <button class="work-image ${index === 0 ? 'work-image--primary' : ''}" type="button"
            data-lightbox="${assetUrl(image)}" data-caption="${work.title} · View ${index + 1} of ${work.images.length}"
            aria-label="View ${work.title}, image ${index + 1} of ${work.images.length}">
            <img src="${assetUrl(image)}" alt="${work.title}, view ${index + 1}" loading="lazy" />
            <span class="image-action" aria-hidden="true">View ↗</span>
          </button>
        `,
      )
      .join('')}
  </div>
`

const workRows = artworks
  .map(
    (work, index) => `
      <article class="work-piece reveal ${index % 2 ? 'work-piece--reverse' : ''}" id="${work.id}">
        ${artworkGallery(work)}
        <div class="work-copy">
          <div class="work-kicker"><span>№ ${work.number}</span><span>${work.status}</span></div>
          <h3>${work.title}</h3>
          <p class="work-description">${work.description}</p>
          ${fieldNotes(work)}
        </div>
      </article>
    `,
  )
  .join('')

const statementParagraphs = site.statement.map((paragraph) => `<p>${paragraph}</p>`).join('')
const bioParagraphs = site.bio.map((paragraph) => `<p>${paragraph}</p>`).join('')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${site.artist}, home">
      <span class="wordmark-mark">${site.shortName}</span>
      <span>${site.artist}</span>
    </a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav">
      <span>Menu</span><span class="menu-line" aria-hidden="true"></span>
    </button>
    <nav id="site-nav" class="site-nav" aria-label="Primary navigation">
      <a href="#work">Dioramas</a>
      <a href="#video">Video</a>
      <a href="#about">About</a>
      <a class="nav-cta" href="#commission">Commission</a>
    </nav>
  </header>

  <main id="main">
    <section id="top" class="hero" aria-labelledby="hero-title">
      <img class="hero-image" src="${assetUrl('/artwork/01-triceratops-mangrove-detail.jpg')}" alt="Triceratops moving through Christopher Kingwill's mangrove diorama" />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow hero-enter hero-enter--one">${site.heroEyebrow}</p>
        <h1 id="hero-title" class="hero-enter hero-enter--two"><span>Small worlds.</span><em>Real natural history.</em></h1>
        <p class="hero-lead hero-enter hero-enter--three">${site.heroLead}</p>
        <a class="text-link hero-enter hero-enter--four" href="#work">Explore the dioramas <span aria-hidden="true">↓</span></a>
      </div>
      <p class="hero-caption">Late Cretaceous Mangrove Coast · Detail</p>
    </section>

    <section class="statement" aria-labelledby="statement-title">
      <div class="section-label reveal">01 · Artist statement</div>
      <div class="statement-copy reveal">
        <h2 id="statement-title">Miniature museum exhibits, built to bring the natural world closer.</h2>
        ${statementParagraphs}
        <p class="signature">— ${site.artist}</p>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="work-heading reveal">
        <div class="section-label">02 · The dioramas</div>
        <h2 id="work-title">Habitats across deep time.</h2>
        <p>A growing body of one-of-one work. Select any image for a closer look.</p>
      </div>
      <div class="work-list">${workRows}</div>
    </section>

    <section id="video" class="video-section" aria-labelledby="video-title">
      <div class="video-copy reveal">
        <p class="eyebrow">Process & adventure · YouTube</p>
        <h2 id="video-title">Watch the builds come together.</h2>
        <p>Behind every diorama is a stack of reference photos, a lot of clay, and usually a dinosaur or two waiting patiently to be repainted.</p>
        <a class="text-link" href="${site.youtubeUrl}" target="_blank" rel="noreferrer">${site.youtubeHandle} <span aria-hidden="true">↗</span></a>
      </div>
      <div class="video-frame reveal">
        <button class="video-poster" type="button" data-video="${site.youtubeEmbedUrl}" aria-label="Play Kingwill Natural History Adventure video">
          <img src="${assetUrl('/artwork/03-triceratops-mangrove-wide.jpg')}" alt="Late Cretaceous Mangrove Coast diorama" loading="lazy" />
          <span>Play studio video <b aria-hidden="true">▶</b></span>
        </button>
      </div>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <div class="about-image reveal">
        <img src="${assetUrl('/artwork/10-tortoises-tree-detail.jpg')}" alt="Detail of the hand-sculpted tree and Galápagos tortoise diorama" loading="lazy" />
        <span>Study detail · Galápagos Highlands</span>
      </div>
      <div class="about-copy reveal">
        <p class="eyebrow">About</p>
        <h2 id="about-title">From “little scenes” to little museums.</h2>
        ${bioParagraphs}
      </div>
    </section>

    <section id="commission" class="commission-section" aria-labelledby="commission-title">
      <p class="eyebrow reveal">Commissions</p>
      <h2 id="commission-title" class="reveal">Have a habitat—or a creature—in mind?</h2>
      <p class="commission-copy reveal">A backyard ecosystem, a favorite extinct animal, a museum outreach piece, or a one-of-a-kind gift: start with the place and the species, then build the story together.</p>
      <div class="commission-action reveal">
        ${site.email ? `<a class="commission-link" href="mailto:${site.email}">Start a commission <span>↗</span></a>` : `<span class="commission-link commission-link--pending">Commission contact coming soon</span>`}
      </div>
      <footer>
        <span>© <span data-year></span> ${site.artist}</span>
        <span>${site.location}</span>
        <a href="${site.youtubeUrl}" target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  </main>

  <dialog class="lightbox" aria-label="Artwork image viewer">
    <button class="lightbox-close" type="button" aria-label="Close image viewer">Close ×</button>
    <img src="" alt="" />
    <p></p>
  </dialog>
`

const menuButton = document.querySelector('.menu-button')
const navigation = document.querySelector('.site-nav')
const lightbox = document.querySelector('.lightbox')
const lightboxImage = lightbox.querySelector('img')
const lightboxCaption = lightbox.querySelector('p')

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false')
  navigation.classList.remove('is-open')
}

menuButton.addEventListener('click', () => {
  const shouldOpen = menuButton.getAttribute('aria-expanded') !== 'true'
  menuButton.setAttribute('aria-expanded', String(shouldOpen))
  navigation.classList.toggle('is-open', shouldOpen)
})

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

document.querySelector('[data-video]').addEventListener('click', (event) => {
  const button = event.currentTarget
  button.parentElement.innerHTML = `<iframe src="${button.dataset.video}&autoplay=1" title="Kingwill Natural History Adventure video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
})

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightbox
    lightboxImage.alt = button.dataset.caption
    lightboxCaption.textContent = button.dataset.caption
    lightbox.showModal()
  })
})

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close())
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close()
})

document.querySelector('[data-year]').textContent = new Date().getFullYear()

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 },
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const hero = document.querySelector('.hero')
  window.addEventListener('scroll', () => {
    hero.style.setProperty('--hero-drift', `${Math.min(window.scrollY * 0.06, 55)}px`)
  }, { passive: true })
}
