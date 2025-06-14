import { contentfulClient, isContentfulConfigured } from "@/lib/contentful"
import type { PersonalInfoEntry, SocialLinkEntry, FooterContentEntry, SeoSettingsEntry } from "@/types/contentful"

export async function getPersonalInfo(): Promise<PersonalInfoEntry | null> {
  if (!isContentfulConfigured || !contentfulClient) {
    console.warn("Contentful not configured, using fallback data")
    return null
  }

  try {
    const entries = await contentfulClient.getEntries<PersonalInfoEntry["fields"]>({
      content_type: "personalInfo",
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error("Error fetching personal info:", error)
    return null
  }
}

export async function getSocialLinks(): Promise<SocialLinkEntry[]> {
  if (!isContentfulConfigured || !contentfulClient) {
    console.warn("Contentful not configured, using fallback data")
    return []
  }

  try {
    const entries = await contentfulClient.getEntries<SocialLinkEntry["fields"]>({
      content_type: "socialLink",
      order: ["fields.order"],
    })
    return entries.items
  } catch (error) {
    console.error("Error fetching social links:", error)
    return []
  }
}

export async function getFooterContent(): Promise<FooterContentEntry | null> {
  if (!isContentfulConfigured || !contentfulClient) {
    console.warn("Contentful not configured, using fallback data")
    return null
  }

  try {
    const entries = await contentfulClient.getEntries<FooterContentEntry["fields"]>({
      content_type: "footerContent",
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error("Error fetching footer content:", error)
    return null
  }
}

export async function getSeoSettings(): Promise<SeoSettingsEntry | null> {
  if (!isContentfulConfigured || !contentfulClient) {
    console.warn("Contentful not configured, using fallback data")
    return null
  }

  try {
    const entries = await contentfulClient.getEntries<SeoSettingsEntry["fields"]>({
      content_type: "seoSettings",
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error("Error fetching SEO settings:", error)
    return null
  }
}

export async function getAllPortfolioData() {
  const [personalInfo, socialLinks, footerContent, seoSettings] = await Promise.all([
    getPersonalInfo(),
    getSocialLinks(),
    getFooterContent(),
    getSeoSettings(),
  ])

  return {
    personalInfo,
    socialLinks,
    footerContent,
    seoSettings,
  }
}
