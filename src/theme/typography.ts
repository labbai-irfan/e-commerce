/**
 * Typography tokens — audited from design/new/Mobile Homepage.svg
 * (vector letterform matching + pixel measurement at 3× render).
 *
 * Two families only:
 *  • Urbanist — display: headings, product titles, prices, buttons,
 *    badges, chips, category/tile labels
 *  • Inter — body: greeting, subtitles, descriptions, captions,
 *    metadata, search placeholder
 */
export const fontFamily = {
  sans: '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  display: '"Urbanist", "Inter", sans-serif',
  urbanist: '"Urbanist", sans-serif',
  inter: '"Inter", sans-serif',
} as const

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const

/** Font sizes (px) measured in the 428px-wide design frame. */
export const fontSize = {
  '2xs': 10,
  xs: 11,
  '12': 12,
  sm: 13,
  base: 14,
  '15': 15,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 22,
  '3xl': 28,
  greetingName: 34,
} as const

/** Semantic text roles → (family, size, weight) from the Mobile Homepage. */
export const textRole = {
  /* Header */
  greeting: { family: fontFamily.inter, size: fontSize['2xl'], weight: fontWeight.medium }, // "Good Evening,"
  greetingName: { family: fontFamily.inter, size: fontSize.greetingName, weight: fontWeight.extrabold }, // "Ameen"
  tagline: { family: fontFamily.inter, size: fontSize.md, weight: fontWeight.regular }, // "Everything for School"
  logoCaption: { family: fontFamily.inter, size: fontSize.xs, weight: fontWeight.medium }, // "India's Trusted…"

  /* Hero banner */
  heroTitle: { family: fontFamily.urbanist, size: fontSize['3xl'], weight: fontWeight.extrabold }, // "Smart School Shopping"
  heroSubtitle: { family: fontFamily.inter, size: fontSize['2xs'], weight: fontWeight.medium }, // "Find Everything…"
  heroCta: { family: fontFamily.urbanist, size: fontSize.base, weight: fontWeight.bold }, // "Explore Now"

  /* Sections */
  sectionTitle: { family: fontFamily.urbanist, size: fontSize.xl, weight: fontWeight.bold }, // "Trending Products"
  sectionSubtitle: { family: fontFamily.inter, size: fontSize.sm, weight: fontWeight.medium }, // "Top Picks This Week"
  viewAll: { family: fontFamily.urbanist, size: fontSize.base, weight: fontWeight.semibold }, // "View All →"
  categoryChip: { family: fontFamily.urbanist, size: fontSize.sm, weight: fontWeight.semibold }, // "Books", "Bags"
  tileLabel: { family: fontFamily.urbanist, size: fontSize.md, weight: fontWeight.bold }, // "School Books", "Yoga"
  cardLabel: { family: fontFamily.urbanist, size: fontSize.sm, weight: fontWeight.semibold }, // "Umbrella", "Mats"

  /* Product cards */
  productTitle: { family: fontFamily.urbanist, size: fontSize['15'], weight: fontWeight.semibold },
  productMeta: { family: fontFamily.inter, size: fontSize.sm, weight: fontWeight.medium }, // "1.5K+ bought"
  rating: { family: fontFamily.urbanist, size: fontSize.base, weight: fontWeight.semibold }, // "4.8 (49)"
  price: { family: fontFamily.urbanist, size: fontSize.xl, weight: fontWeight.extrabold }, // "₹299"
  oldPrice: { family: fontFamily.inter, size: fontSize['12'], weight: fontWeight.medium }, // struck "₹400"
  badge: { family: fontFamily.urbanist, size: fontSize.sm, weight: fontWeight.bold }, // "PPD Original", "Save 22%"

  /* Buttons */
  button: { family: fontFamily.urbanist, size: fontSize.base, weight: fontWeight.semibold }, // "Add to Cart", "Explore"

  /* Misc */
  descBody: { family: fontFamily.inter, size: fontSize.xs, weight: fontWeight.regular }, // card descriptions
  startingFrom: { family: fontFamily.inter, size: fontSize.xs, weight: fontWeight.medium },
  searchPlaceholder: { family: fontFamily.inter, size: fontSize['15'], weight: fontWeight.regular },
  centennial: { family: fontFamily.urbanist, size: fontSize['3xl'], weight: fontWeight.extrabold }, // "100 Years"
} as const

export type FontSizeKey = keyof typeof fontSize
