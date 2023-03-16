import DashboardIcon from './sidebar-icons/dashboard-icon.svg'
import InvoicesIcon from './sidebar-icons/invoices-icon.svg'
import MessagesIcon from './sidebar-icons/messages-icon.svg'
import WalletsIcon from './sidebar-icons/myWallet-icon.svg'
import ActivityIcon from './sidebar-icons/activity-icon.svg'
import AnalyticsIcon from './sidebar-icons/analytics-icon.svg'
import InfoIcon from './sidebar-icons/get-help.svg'
import SettingsIcon from './sidebar-icons/settings.svg'

interface NavItems {
  href: string
  label: string
  icon: React.FunctionComponent
}

export const navItems1: NavItems[] = [
  {
    href: '/',
    icon: DashboardIcon,
    label: 'Dashboard',
  },
  {
    href: '/invoices',
    icon: InvoicesIcon,
    label: 'Invoices',
  },
  {
    href: '/messages',
    icon: MessagesIcon,
    label: 'Messages',
  },
  {
    href: '/wallets',
    icon: WalletsIcon,
    label: 'My Wallets',
  },
  {
    href: '/activity',
    icon: ActivityIcon,
    label: 'Activity',
  },
  {
    label: 'Analytics',
    icon: AnalyticsIcon,
    href: '/analytics',
  },
]

export const navItems2: NavItems[] = [
  {
    href: '/get-help',
    icon: InfoIcon,
    label: 'Get Help',
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    href: '/settings',
  },
]
