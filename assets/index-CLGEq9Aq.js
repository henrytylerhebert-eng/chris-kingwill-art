(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&p(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const m="Christopher Kingwill",g="CK",b="Lafayette, Louisiana",v="Natural History Dioramas · Lafayette, LA",y="A biogeographer building miniature, museum-inspired habitats from clay, papier-mâché, recycled materials, and carefully posed figurines.",f=["My work blends elements of natural history—the study of living and extinct life on Earth—with model-building techniques like clay work, papier-mâché, painting, and homemade or recycled materials. And of course, animal figurines.","I depict animals, living or extinct, in their natural habitat scenes—akin to the full-sized dioramas you'd see at a natural history museum. I'm trying to make miniature museum exhibits: small enough to live on a shelf, but built with the same care you'd see behind glass at the Field or the Smithsonian.","My hope is that these dioramas inspire people to visit and support their local natural history museums, and to learn a little more about the world we share with everything else that lives, or once lived, on it."],w=["Christopher Kingwill is an emerging artist and biogeographer specializing in natural history. The path started with childhood obsessions—dinosaurs, wildlife figurines, and “little scenes” built on the floor with Legos and Playmobil.","He studied geography and geosciences, focusing on cartographic mapping and natural history through paleontology and biology coursework. A wildlife conservation internship in Ecuador and time interning at natural history museums sharpened the lens.","After graduate school and a move to Lafayette, Louisiana, art and science outreach across Acadiana brought the old scene-making instinct back—with new materials, a deeper toolkit, and a clear purpose."],k="https://www.youtube.com/@kingwill_nh_adventure/videos",$="@kingwill_nh_adventure",A="https://www.youtube.com/embed/Dz0COIrRPv8?si=aLkcEIiUjgueQSGD",i={artist:m,shortName:g,location:b,heroEyebrow:v,heroLead:y,statement:f,bio:w,youtubeUrl:k,youtubeHandle:$,youtubeEmbedUrl:A},L=[{id:"bahamas-sinkhole",number:"01",title:"A Bahamas Sinkhole, 11,700 BP",status:"Available",description:"Two ecosystems, one piece. Above ground: a Caribbean pine forest with a tortoise and rainbow-headed parrot. Below: a karst cave system where a barn owl roosts above the bones of a long-vanished crocodile, recording extinction at the close of the last ice age.",era:"Late Pleistocene → Holocene transition",region:"Caribbean Sea, Bahamian archipelago",fauna:"Cuban crocodile (extirpated), barn owl, Bahama parrot, hummingbird",materials:"Sculpted clay karst, real wood trunks, painted resin water",images:["/artwork/15-bahamas-cave-front.jpg","/artwork/16-bahamas-cave-owl.jpg","/artwork/17-bahamas-cave-tortoise.jpg","/artwork/18-bahamas-cave-side.jpg"]},{id:"cretaceous-mangrove",number:"02",title:"Late Cretaceous Mangrove Coast",status:"Available",description:"A triceratops moves through a mangrove forest along the Western Interior Seaway, the great inland sea that split North America during the late Cretaceous. The trees are hand-sculpted clay; the canopies are reindeer moss; the ground is built up in textured layers.",era:"Late Cretaceous (Maastrichtian)",region:"Western Interior Seaway shoreline, North America",fauna:"Triceratops sp.",materials:"Sculpted clay mangroves, reindeer moss, white sand, textured base",images:["/artwork/01-triceratops-mangrove-detail.jpg","/artwork/02-triceratops-mangrove-front.jpg","/artwork/03-triceratops-mangrove-wide.jpg"]},{id:"riverbank-tableau",number:"03",title:"Riverbank Tableau",status:"Sold at Art Walk",description:"A hippo and her calf at the water's edge as a mute swan lifts off, captured in a single moment. The base—sand on land, layered resin water along the bank—is one of the most carefully developed parts of the piece.",era:"Contemporary",region:"Sub-Saharan freshwater riparian",fauna:"Common hippopotamus (adult + calf), mute swan",materials:"Layered sand, model papyrus, resin water",images:["/artwork/04-hippos-river-front.jpg","/artwork/05-hippos-mother-calf.jpg","/artwork/06-hippo-swan-spread.jpg","/artwork/07-hippo-papyrus.jpg"]},{id:"galapagos-highlands",number:"04",title:"Galápagos Highlands",status:"Available",description:"Two giant tortoises in the highlands, with a hand-sculpted clay tree whose exposed root system was the most demanding part of the build. The visible cardboard base nods to the working drawings and study materials these dioramas grew out of.",era:"Contemporary",region:"Galápagos Islands, Ecuador",fauna:"Galápagos giant tortoise (Chelonoidis niger)",materials:"Sculpted clay tree, lichen canopy, sculpted boulders, moss, painted base",images:["/artwork/08-tortoises-tree-front.jpg","/artwork/09-tortoises-tree-side.jpg","/artwork/10-tortoises-tree-detail.jpg"]},{id:"tropical-understory",number:"05",title:"Tropical Understory",status:"Available",description:"The most botanically dense piece in the catalog. Monstera canopy, bird-of-paradise blooms, calla lilies, and a small community of birds—a rainbow lorikeet perched in the leaves and a Tasmanian native hen on the forest floor.",era:"Contemporary",region:"Australasian tropical rainforest",fauna:"Rainbow lorikeet, Tasmanian native hen",materials:"Plastic foliage, sculpted earth base, hand-painted figurines",images:["/artwork/11-rainforest-monstera.jpg","/artwork/12-rainforest-flowers.jpg","/artwork/13-rainforest-birds.jpg","/artwork/14-rainforest-detail.jpg"]}],n=e=>`/chris-kingwill-art/${e.replace(/^\/+/,"")}`,S=e=>`
  <dl class="field-notes">
    <div><dt>Era</dt><dd>${e.era}</dd></div>
    <div><dt>Region</dt><dd>${e.region}</dd></div>
    <div><dt>Fauna</dt><dd>${e.fauna}</dd></div>
    <div><dt>Materials</dt><dd>${e.materials}</dd></div>
  </dl>
`,C=e=>`
  <div class="work-gallery work-gallery--${e.images.length}">
    ${e.images.map((a,s)=>`
          <button class="work-image ${s===0?"work-image--primary":""}" type="button"
            data-lightbox="${n(a)}" data-caption="${e.title} · View ${s+1} of ${e.images.length}"
            aria-label="View ${e.title}, image ${s+1} of ${e.images.length}">
            <img src="${n(a)}" alt="${e.title}, view ${s+1}" loading="lazy" />
            <span class="image-action" aria-hidden="true">View ↗</span>
          </button>
        `).join("")}
  </div>
`,x=L.map((e,a)=>`
      <article class="work-piece reveal ${a%2?"work-piece--reverse":""}" id="${e.id}">
        ${C(e)}
        <div class="work-copy">
          <div class="work-kicker"><span>№ ${e.number}</span><span>${e.status}</span></div>
          <h3>${e.title}</h3>
          <p class="work-description">${e.description}</p>
          ${S(e)}
        </div>
      </article>
    `).join(""),j=i.statement.map(e=>`<p>${e}</p>`).join(""),E=i.bio.map(e=>`<p>${e}</p>`).join("");document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${i.artist}, home">
      <span class="wordmark-mark">${i.shortName}</span>
      <span>${i.artist}</span>
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
      <img class="hero-image" src="${n("/artwork/01-triceratops-mangrove-detail.jpg")}" alt="Triceratops moving through Christopher Kingwill's mangrove diorama" />
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="hero-copy">
        <p class="eyebrow hero-enter hero-enter--one">${i.heroEyebrow}</p>
        <h1 id="hero-title" class="hero-enter hero-enter--two"><span>Small worlds.</span><em>Real natural history.</em></h1>
        <p class="hero-lead hero-enter hero-enter--three">${i.heroLead}</p>
        <a class="text-link hero-enter hero-enter--four" href="#work">Explore the dioramas <span aria-hidden="true">↓</span></a>
      </div>
      <p class="hero-caption">Late Cretaceous Mangrove Coast · Detail</p>
    </section>

    <section class="statement" aria-labelledby="statement-title">
      <div class="section-label reveal">01 · Artist statement</div>
      <div class="statement-copy reveal">
        <h2 id="statement-title">Miniature museum exhibits, built to bring the natural world closer.</h2>
        ${j}
        <p class="signature">— ${i.artist}</p>
      </div>
    </section>

    <section id="work" class="work-section" aria-labelledby="work-title">
      <div class="work-heading reveal">
        <div class="section-label">02 · The dioramas</div>
        <h2 id="work-title">Habitats across deep time.</h2>
        <p>A growing body of one-of-one work. Select any image for a closer look.</p>
      </div>
      <div class="work-list">${x}</div>
    </section>

    <section id="video" class="video-section" aria-labelledby="video-title">
      <div class="video-copy reveal">
        <p class="eyebrow">Process & adventure · YouTube</p>
        <h2 id="video-title">Watch the builds come together.</h2>
        <p>Behind every diorama is a stack of reference photos, a lot of clay, and usually a dinosaur or two waiting patiently to be repainted.</p>
        <a class="text-link" href="${i.youtubeUrl}" target="_blank" rel="noreferrer">${i.youtubeHandle} <span aria-hidden="true">↗</span></a>
      </div>
      <div class="video-frame reveal">
        <button class="video-poster" type="button" data-video="${i.youtubeEmbedUrl}" aria-label="Play Kingwill Natural History Adventure video">
          <img src="${n("/artwork/03-triceratops-mangrove-wide.jpg")}" alt="Late Cretaceous Mangrove Coast diorama" loading="lazy" />
          <span>Play studio video <b aria-hidden="true">▶</b></span>
        </button>
      </div>
    </section>

    <section id="about" class="about-section" aria-labelledby="about-title">
      <div class="about-image reveal">
        <img src="${n("/artwork/10-tortoises-tree-detail.jpg")}" alt="Detail of the hand-sculpted tree and Galápagos tortoise diorama" loading="lazy" />
        <span>Study detail · Galápagos Highlands</span>
      </div>
      <div class="about-copy reveal">
        <p class="eyebrow">About</p>
        <h2 id="about-title">From “little scenes” to little museums.</h2>
        ${E}
      </div>
    </section>

    <section id="commission" class="commission-section" aria-labelledby="commission-title">
      <p class="eyebrow reveal">Commissions</p>
      <h2 id="commission-title" class="reveal">Have a habitat—or a creature—in mind?</h2>
      <p class="commission-copy reveal">A backyard ecosystem, a favorite extinct animal, a museum outreach piece, or a one-of-a-kind gift: start with the place and the species, then build the story together.</p>
      <div class="commission-action reveal">
        <span class="commission-link commission-link--pending">Commission contact coming soon</span>
      </div>
      <footer>
        <span>© <span data-year></span> ${i.artist}</span>
        <span>${i.location}</span>
        <a href="${i.youtubeUrl}" target="_blank" rel="noreferrer">YouTube ↗</a>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  </main>

  <dialog class="lightbox" aria-label="Artwork image viewer">
    <button class="lightbox-close" type="button" aria-label="Close image viewer">Close ×</button>
    <img src="" alt="" />
    <p></p>
  </dialog>
`;const l=document.querySelector(".menu-button"),c=document.querySelector(".site-nav"),o=document.querySelector(".lightbox"),u=o.querySelector("img"),T=o.querySelector("p"),M=()=>{l.setAttribute("aria-expanded","false"),c.classList.remove("is-open")};l.addEventListener("click",()=>{const e=l.getAttribute("aria-expanded")!=="true";l.setAttribute("aria-expanded",String(e)),c.classList.toggle("is-open",e)});c.querySelectorAll("a").forEach(e=>e.addEventListener("click",M));document.querySelector("[data-video]").addEventListener("click",e=>{const a=e.currentTarget;a.parentElement.innerHTML=`<iframe src="${a.dataset.video}&autoplay=1" title="Kingwill Natural History Adventure video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`});document.querySelectorAll("[data-lightbox]").forEach(e=>{e.addEventListener("click",()=>{u.src=e.dataset.lightbox,u.alt=e.dataset.caption,T.textContent=e.dataset.caption,o.showModal()})});o.querySelector(".lightbox-close").addEventListener("click",()=>o.close());o.addEventListener("click",e=>{e.target===o&&o.close()});document.querySelector("[data-year]").textContent=new Date().getFullYear();const h=new IntersectionObserver(e=>{e.forEach(a=>{a.isIntersecting&&(a.target.classList.add("is-visible"),h.unobserve(a.target))})},{threshold:.1});document.querySelectorAll(".reveal").forEach(e=>h.observe(e));if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const e=document.querySelector(".hero");window.addEventListener("scroll",()=>{e.style.setProperty("--hero-drift",`${Math.min(window.scrollY*.06,55)}px`)},{passive:!0})}
