import { Linkedin, Youtube, MessageCircle, Mail, Twitter, Instagram, Github, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
  email: Mail,
  twitter: Twitter,
  instagram: Instagram,
  github: Github,
  website: Globe,
}

export function getSocialIcon(iconName: string): LucideIcon {
  return iconMap[iconName.toLowerCase()] || Globe
}
