import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  ChevronLeft,
  ClipboardList,
  Clock,
  Coins,
  FileText,
  Globe,
  Globe2,
  GraduationCap,
  Heart,
  Home,
  Languages,
  Laptop,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Plus,
  Rocket,
  Route,
  Settings,
  Shield,
  Smartphone,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Video,
  X,
  Menu,
  BadgeCheck,
} from 'lucide-react'

export const iconMap = {
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  globe: Globe,
  languages: Languages,
  shield: Shield,
  star: Star,
  lightbulb: Lightbulb,
  heart: Heart,
  target: Target,
  rocket: Rocket,
  'book-open': BookOpen,
  clipboard: ClipboardList,
  route: Route,
  laptop: Laptop,
  settings: Settings,
  'bar-chart': BarChart3,
  smartphone: Smartphone,
  building: Building2,
  stethoscope: Stethoscope,
  coins: Coins,
  home: Home,
  'trending-up': TrendingUp,
  users: Users,
  'badge-check': BadgeCheck,
  'globe-2': Globe2,
  'file-text': FileText,
  'message-circle': MessageCircle,
  'user-check': UserCheck,
  video: Video,
  clock: Clock,
  'arrow-right': ArrowRight,
  'chevron-left': ChevronLeft,
  check: Check,
  plus: Plus,
  play: Play,
  phone: Phone,
  mail: Mail,
  'map-pin': MapPin,
  menu: Menu,
  x: X,
}

const sizeMap = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 28,
  '2xl': 32,
}

export function AppIcon({ name, size = 'md', className = '', strokeWidth = 2, ...props }) {
  const IconComponent = iconMap[name]
  if (!IconComponent) {
    return null
  }

  const pixelSize = typeof size === 'number' ? size : sizeMap[size] ?? sizeMap.md

  return (
    <IconComponent
      size={pixelSize}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={props['aria-label'] ? undefined : true}
      {...props}
    />
  )
}

const boxSizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-14 h-14',
  '2xl': 'w-16 h-16',
}

const boxIconSizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  '2xl': '2xl',
}

export function IconBox({
  name,
  size = 'lg',
  variant = 'primary',
  className = '',
  rounded = 'xl',
}) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    white: 'bg-white/90 text-primary backdrop-blur',
    navy: 'bg-navy/10 text-navy',
    glass: 'bg-white/10 text-white',
  }

  const roundedClasses = {
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }

  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${boxSizeClasses[size]} ${variants[variant]} ${roundedClasses[rounded]} ${className}`}
    >
      <AppIcon name={name} size={boxIconSizes[size]} />
    </div>
  )
}

export function CountryBadge({ code, className = '' }) {
  return (
    <span
      className={`inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 rounded-lg bg-white/20 backdrop-blur text-white font-poppins font-bold text-sm tracking-wider border border-white/30 ${className}`}
    >
      {code}
    </span>
  )
}
