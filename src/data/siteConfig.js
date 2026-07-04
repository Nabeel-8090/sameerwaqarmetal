export const siteConfig = {
  name: 'Sameer Waqar Metal Creation',
  shortName: 'Sameer Waqar',
  slogan: 'Metal Creation',
  tagline: 'Premium Custom Metal Creations Crafted with Precision',

  phoneDisplay: '+92 321 2204892',
  phoneDisplayWhatsApp: '+92 312 1007029',
  phoneHref: '+923212204892',
  whatsappNumber: '923121007029',
  email: 'Thesameerid123@gmail.com',

  address: 'P.No. 1201-1208, Block H, Ittehad Town, Muhammad Khan Colony, Baldia Town, Karachi',
  mapEmbedSrc:
    'https://www.google.com/maps?q=24.9756933,66.9505033&output=embed',

  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=24.9756933,66.9505033',

  hours: [
    { day: 'Monday - Sunday', time: 'Open 24 Hours' },
  ],

  social: {
    facebook: '#',
    instagram: '#',
  },
}

export function buildWhatsAppUrl({ productName, productUrl } = {}) {
  const lines = [
    'Hello,',
    '',
    'I am interested in ordering this product.',
    '',
  ]
  if (productName) {
    lines.push(`Product Name: ${productName}`)
  }
  lines.push(
    '',
    'Please share the price, available sizes, customization options and delivery details.'
  )
  if (productUrl) {
    lines.push('', `Product link: ${productUrl}`)
  }
  const message = encodeURIComponent(lines.join('\n'))
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}

export function buildGeneralWhatsAppUrl() {
  const message = encodeURIComponent(
    'Hello, I would like to know more about Sameer Waqar Metal Creation and your products.'
  )
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}
