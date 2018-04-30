// This configuration file allows you to customise many aspects of this Gatsby
// starter.

module.exports = {
  // ---------------------------------------------------------------------------
  // Metadata
  // ---------------------------------------------------------------------------
  meta: {
    owner: 'Your Name Here',
    // This will be used in the site title.
    title: 'Gatsby Skeleton',
    // This will be used in the site copyright, with a date range running from
    // startYear to the current year.
    description: 'Your site description for RSS feed',

    url: 'https://example.com',
    // Starting year for copyright range
    startYear: '2018',
    // Show the credit in the footer (much appreciated)
    showCredit: true,
  },
  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------
  seo: {
    // Your Google Tracking ID, in the form: UA-000000-0.
    // If you leave undefined, the tracking code will not be added.
    googleTrackingID: undefined,
  },
  // ---------------------------------------------------------------------------
  // Site Structure
  // ---------------------------------------------------------------------------
  structure: {
    // Directory path for downloads, relative to your root url
    downloadsDirectory: 'downloads',
    // Directly path for code used in REPLs
    replCodeDirectory: 'code',
    // Configuration for articles
    articles: {
      name: 'Articles',
      directory: 'articles',
      path: 'articles',
      perPage: 5,
    },
    // Configuration for projects
    projects: {
      name: 'Projects',
      directory: 'projects',
      path: 'projects',
    },
    tags: {
      name: 'Tags',
      directory: 'tags',
      path: 'tags',
    },
  },
  // ---------------------------------------------------------------------------
  // Media
  // ---------------------------------------------------------------------------
  media: {
    images: {
      // JPG quality for images encoded for the site.
      quality: 60,
    },
  },
  // ---------------------------------------------------------------------------
  // Layout
  // ---------------------------------------------------------------------------
  layout: {
    // Maximum width for the site before it stops growing horizontally.
    // Note: This is used to decide what dimensions saved images should have.
    maxWidth: 1200,
  },
  // ---------------------------------------------------------------------------
  // CLI
  // ---------------------------------------------------------------------------
  cli: {
    emoji: '💀',
  },
}
