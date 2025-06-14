import type { Asset, Entry } from "contentful"

export interface PersonalInfoFields {
  name: string
  jobTitle: string
  profileImage: Asset
  bioParagraphs: string[]
  achievements: string[]
  closingStatement: string
}

export interface SocialLinkFields {
  platform: string
  url: string
  label: string
  iconName: string
}

export interface FooterContentFields {
  logo: Asset
  copyrightText: string
}

export interface SeoSettingsFields {
  metaTitle: string
  metaDescription: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
}

export type PersonalInfoEntry = Entry<PersonalInfoFields>
export type SocialLinkEntry = Entry<SocialLinkFields>
export type FooterContentEntry = Entry<FooterContentFields>
export type SeoSettingsEntry = Entry<SeoSettingsFields>
