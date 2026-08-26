import { access, readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const site = JSON.parse(await readFile(new URL('../content/site.json', import.meta.url), 'utf8'))
const artworks = JSON.parse(await readFile(new URL('../content/artworks.json', import.meta.url), 'utf8'))
const requiredSiteFields = ['artist', 'role', 'heroTitle', 'heroLead', 'location', 'status']
const missingSiteFields = requiredSiteFields.filter((field) => !site[field])

if (missingSiteFields.length) {
  throw new Error(`Missing required site fields: ${missingSiteFields.join(', ')}`)
}

if (!Array.isArray(artworks) || artworks.length === 0) {
  throw new Error('At least one artwork entry is required')
}

for (const [index, artwork] of artworks.entries()) {
  for (const field of ['id', 'number', 'title', 'status', 'description', 'era', 'region', 'fauna', 'materials']) {
    if (!artwork[field]) throw new Error(`Artwork ${index + 1} is missing ${field}`)
  }

  if (!Array.isArray(artwork.images) || artwork.images.length === 0) {
    throw new Error(`${artwork.id} requires at least one image`)
  }

  for (const imagePath of artwork.images) {
    const imageUrl = new URL(`../public${imagePath}`, import.meta.url)
    await access(fileURLToPath(imageUrl))
  }
}

if (site.status === 'ready') {
  if (!site.email) throw new Error('Ready sites require a real studio email')
  if (!site.instagramUrl) throw new Error('Ready sites require a real Instagram URL or an explicit removal from the launch plan')
}

console.log(`Content valid: ${artworks.length} dioramas; status=${site.status}`)
