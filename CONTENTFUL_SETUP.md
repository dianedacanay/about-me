# Contentful Setup Guide

## 1. Create Content Types in Contentful

### Personal Info Content Type
- **Content Type ID**: `personalInfo`
- **Fields**:
  - `name` (Short text)
  - `jobTitle` (Short text)
  - `profileImage` (Media - Single asset)
  - `bioParagraphs` (Short text - List)
  - `achievements` (Short text - List)
  - `closingStatement` (Long text)

### Social Link Content Type
- **Content Type ID**: `socialLink`
- **Fields**:
  - `platform` (Short text)
  - `url` (Short text)
  - `label` (Short text)
  - `iconName` (Short text) - Options: linkedin, youtube, whatsapp, email, twitter, instagram, github, website
  - `order` (Integer)

### Footer Content Type
- **Content Type ID**: `footerContent`
- **Fields**:
  - `logo` (Media - Single asset)
  - `copyrightText` (Short text)

### SEO Settings Content Type
- **Content Type ID**: `seoSettings`
- **Fields**:
  - `metaTitle` (Short text)
  - `metaDescription` (Long text)
  - `keywords` (Short text - List)
  - `ogTitle` (Short text)
  - `ogDescription` (Long text)
  - `twitterTitle` (Short text)
  - `twitterDescription` (Long text)

## 2. Environment Variables

Create a `.env.local` file with:

\`\`\`
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_token
CONTENTFUL_PREVIEW_TOKEN=your_content_preview_api_token
\`\`\`

## 3. Content Entry Examples

### Personal Info Entry
- Name: "Diane Lim Dacanay"
- Job Title: "AI Tech Specialist | Ex-Finder.com | Seeker of Truth"
- Profile Image: Upload your profile photo
- Bio Paragraphs: Add each paragraph as a separate list item
- Achievements: Add each achievement as a separate list item
- Closing Statement: Your final paragraph

### Social Link Entries
Create separate entries for each social platform:
- Platform: "LinkedIn", URL: "https://linkedin.com/in/...", Label: "LinkedIn", Icon Name: "linkedin", Order: 1
- Platform: "YouTube", URL: "https://youtube.com/@...", Label: "YouTube", Icon Name: "youtube", Order: 2
- etc.

## 4. Benefits

- ✅ Update content without code changes
- ✅ Preview changes before publishing
- ✅ Version control for content
- ✅ Multi-environment support
- ✅ Rich media management
- ✅ SEO optimization tools
