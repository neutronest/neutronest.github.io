import type {
  FooterConfig,
  LinkConfig,
  ProfileConfig,
  PublicationConfig,
  SiteConfig,
} from "@/types"

export const SITE: SiteConfig = {
  title: "Astro Scholar",
  description:
    "Research in computational social science, open methods, and responsible computing.",
  href: "https://astro-scholar.pages.dev",
  author: "Alex Morgan",
  dir: "ltr",
  defaultPageImage: "/img/social-preview.png",
  defaultPostImage: "/img/social-preview.png",

  locale: {
    lang: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    },
  },

  blog: {
    featuredPostCount: 3,
    postsPerPage: 8,
    tocMaxDepth: 3,
    shareActions: ["x"],
  },

  home: {
    careerHighlightCount: 4,
    updateCount: 3,
    publicationCount: 3,
  },

  favicon: "/favicon.ico",
  prerender: true,
  npmCDN: "https://cdn.jsdelivr.net/npm",

  license: {
    label: "CC-BY-4.0",
    href: "https://creativecommons.org/licenses/by/4.0/",
  },
}

export const PROFILE: ProfileConfig = {
  name: SITE.title,
  tagline: "Computational social scientist and open-methods",
  email: "alex@example.edu",
  location: "Example City",
  pronouns: "they/them",
  links: {
    github: "https://github.com/mychiffonn/astro-scholar",
    website: "https://mychiffonn.com/",
  },
  // where the links above show up. true = that section's default set, false or
  // [] = none, or list keys in the order you want them. The header renders its
  // set as bare icons, so it defaults to a handful rather than everything.
  linksPlacement: {
    header: ["email", "github"],
    about: false,
    footer: true,
  },
}

export const NAV_LINKS: LinkConfig[] = [
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/uses", label: "Tech" },
  { href: "/now", label: "Now" },
]

export const NAVIGATION: LinkConfig[] = NAV_LINKS.map(({ href, label }) => ({
  href,
  label,
}))

export const PUB_CONFIG: PublicationConfig = {
  maxFirstAuthors: 6,
  maxLastAuthors: 1,
  highlightAuthor: {
    firstName: "Alex",
    lastName: "Morgan",
    aliases: ["A. Morgan"],
  },
  equalSymbols: {
    first: "*",
    second: "†",
    third: "‡",
    last: "§",
  },
}

export const FOOTER: FooterConfig = {
  credits: true,
  sourceCode: "https://github.com/mychiffonn/astro-scholar",
  sourceContent:
    "https://github.com/mychiffonn/astro-scholar/tree/main/src/content",
  footerLinks: [],
}

if (import.meta.env.DEV && typeof window === "undefined") {
  const {
    FooterConfigSchema,
    ProfileConfigSchema,
    PublicationConfigSchema,
    SiteConfigSchema,
  } = await import("@/schemas")
  SiteConfigSchema.parse(SITE)
  ProfileConfigSchema.parse(PROFILE)
  FooterConfigSchema.parse(FOOTER)
  PublicationConfigSchema.parse(PUB_CONFIG)
}
