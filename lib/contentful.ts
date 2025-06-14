import { createClient } from "contentful"

// Check if Contentful is configured
const isContentfulConfigured = process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN

export const contentfulClient = isContentfulConfigured
  ? createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    })
  : null

// Preview client for draft content (optional)
export const previewClient =
  isContentfulConfigured && process.env.CONTENTFUL_PREVIEW_TOKEN
    ? createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
        host: "preview.contentful.com",
      })
    : null

export { isContentfulConfigured }
