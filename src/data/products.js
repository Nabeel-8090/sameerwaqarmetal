// Central product catalogue.
// To add a real product photo later, just set the `image` field to an image URL
// (e.g. image: '/products/jaffri-1.jpg'). Until then, `blueprint` is used to render
// a technical line-illustration placeholder so the site never shows broken images.

export const products = [
  {
    id: 'jaffri',
    name: 'Jaffri',
    blueprint: 'jaffri',
    image: '',
    shortDescription: 'Hand-cut decorative lattice screens for windows, partitions and facades.',
    description:
      'Our Jaffri screens bring traditional lattice artistry into modern spaces. Every panel is precision laser-cut from sheet metal and finished by hand, giving interiors and facades a striking play of light and shadow while maintaining airflow and privacy.',
    features: [
      'Precision laser-cut geometric patterns',
      'Rust-resistant protective coating',
      'Weatherproof for indoor or outdoor use',
      'Custom pattern design on request',
    ],
    sizes: ['2ft x 2ft', '3ft x 3ft', '4ft x 6ft', 'Custom size on order'],
    material: 'Mild steel / Stainless steel',
    finish: 'Powder-coated black, matte or brushed',
    customization: 'Pattern, size, thickness and mounting style can be customized',
    delivery: '7–14 working days depending on size',
  },
  {
    id: 'wall-clock',
    name: 'Wall Clock',
    blueprint: 'clock',
    image: '',
    shortDescription: 'Minimal industrial wall clocks cut from solid sheet metal.',
    description:
      'A statement piece for any wall. Each clock face is cut and shaped from a single sheet of metal, paired with a quiet, precise movement, and finished to complement modern industrial interiors.',
    features: [
      'Silent sweep quartz movement',
      'Solid one-piece metal face',
      'Scratch-resistant matte finish',
      'Wall-mount hardware included',
    ],
    sizes: ['12 inch', '18 inch', '24 inch'],
    material: 'Mild steel sheet',
    finish: 'Matte black powder coat',
    customization: 'Face design, numerals style and diameter can be customized',
    delivery: '5–10 working days',
  },
  {
    id: 'keychain-holder',
    name: 'Key Chain Holder',
    blueprint: 'keychain',
    image: '',
    shortDescription: 'Wall-mounted key organizers built for daily use.',
    description:
      'A practical entryway fixture that keeps keys organized and within reach. Built from durable metal with clean welded joints, designed to hold up to years of daily use.',
    features: [
      'Multiple hook configurations available',
      'Concealed wall-mount fixing',
      'Durable welded construction',
      'Compact and space-saving',
    ],
    sizes: ['5 hooks', '7 hooks', '10 hooks', 'Custom layout'],
    material: 'Mild steel rod and sheet',
    finish: 'Black matte powder coat',
    customization: 'Number of hooks, layout and engraving available',
    delivery: '3–7 working days',
  },
  {
    id: 'fruit-basket',
    name: 'Fruit Basket',
    blueprint: 'basket',
    image: '',
    shortDescription: 'Woven-wire fruit baskets for the kitchen table or counter.',
    description:
      'A durable, elegant fruit basket formed from woven metal wire. Designed to be sturdy enough for daily kitchen use while adding a refined industrial touch to the table.',
    features: [
      'Hand-formed wire weave',
      'Stable non-slip base',
      'Easy to clean surface',
      'Stackable design available',
    ],
    sizes: ['Small', 'Medium', 'Large'],
    material: 'Stainless steel wire',
    finish: 'Brushed steel or matte black',
    customization: 'Size, shape and base design can be customized',
    delivery: '3–7 working days',
  },
  {
    id: 'mobile-holder',
    name: 'Mobile Holder',
    blueprint: 'mobileholder',
    image: '',
    shortDescription: 'Compact metal stands for desks and workstations.',
    description:
      'A stable, minimal stand that keeps your phone upright at the ideal viewing angle. Cut and bent from a single piece of sheet metal for strength without bulk.',
    features: [
      'Single-piece bent construction',
      'Cable-routing slot',
      'Non-slip rubber base pads',
      'Fits all phone sizes and most cases',
    ],
    sizes: ['Standard desk size'],
    material: 'Mild steel sheet',
    finish: 'Matte black powder coat',
    customization: 'Angle, engraving and color finish available',
    delivery: '3–5 working days',
  },
  {
    id: 'bbq-grill',
    name: 'BBQ Grill',
    blueprint: 'grill',
    image: '',
    shortDescription: 'Heavy-duty outdoor grills built for high heat and daily use.',
    description:
      'Built for serious outdoor cooking. Our BBQ grills are constructed from heavy-gauge metal with reinforced joints, designed to withstand repeated high-heat use for years.',
    features: [
      'Heavy-gauge steel construction',
      'Adjustable height and grate spacing',
      'Reinforced welded frame',
      'Foldable option for portability',
    ],
    sizes: ['Compact', 'Standard', 'Large / Commercial'],
    material: 'Heavy-gauge mild steel',
    finish: 'Heat-resistant black coating',
    customization: 'Grate spacing, size and folding legs on request',
    delivery: '7–14 working days',
  },
  {
    id: 'custom-metal-designs',
    name: 'Custom Metal Designs',
    blueprint: 'custom',
    image: '',
    shortDescription: 'Bespoke metal fabrication built to your exact drawings or ideas.',
    description:
      'From a rough sketch to a finished piece — our team fabricates custom metal designs for homes, businesses and special projects, matched precisely to your specifications.',
    features: [
      'Made from your design or sketch',
      'Full-scale prototyping available',
      'Wide range of finishes',
      'Suitable for interior or exterior use',
    ],
    sizes: ['Fully custom to project'],
    material: 'Mild steel / Stainless steel / Aluminium',
    finish: 'Based on project requirements',
    customization: 'Complete design, material and finish flexibility',
    delivery: 'Quoted after design review',
  },
  {
    id: 'decorative-panels',
    name: 'Decorative Panels',
    blueprint: 'panels',
    image: '',
    shortDescription: 'Statement panels for walls, ceilings, gates and dividers.',
    description:
      'Decorative panels that transform plain surfaces into design features. Cut with intricate patterns and finished for durability, suited to residential and commercial interiors alike.',
    features: [
      'Intricate laser-cut patterns',
      'Modular panel system',
      'Suitable for interior or exterior',
      'Backlighting compatible',
    ],
    sizes: ['2ft x 4ft', '3ft x 6ft', '4ft x 8ft', 'Custom size'],
    material: 'Mild steel / Aluminium',
    finish: 'Powder-coated or brushed metal',
    customization: 'Pattern, size and finish fully customizable',
    delivery: '10–15 working days',
  },
  {
    id: 'name-plates',
    name: 'Name Plates',
    blueprint: 'nameplate',
    image: '',
    shortDescription: 'Engraved metal name plates for homes and offices.',
    description:
      'Precision-engraved name plates that make a strong first impression at any entrance. Clean typography, durable metal, and a finish built to withstand outdoor exposure.',
    features: [
      'Laser-engraved lettering',
      'Weatherproof finish',
      'Backlit option available',
      'Wall or gate mounting hardware included',
    ],
    sizes: ['12in x 4in', '18in x 6in', 'Custom size'],
    material: 'Stainless steel / Brass-finish steel',
    finish: 'Matte black, brushed steel or gold-tone',
    customization: 'Text, font, size and mounting style fully customizable',
    delivery: '5-10 working days',
  },
]

export function getProductById(id) {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(id, count = 3) {
  const others = products.filter((p) => p.id !== id)
  return others.slice(0, count)
}
