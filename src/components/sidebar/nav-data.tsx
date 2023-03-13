import DashboardIcon from './sidebar-icons/dashboard-icon.svg'
import InvoicesIcon from './sidebar-icons/invoices-icon.svg'
import MessagesIcon from './sidebar-icons/messages-icon.svg'
import WalletsIcon from './sidebar-icons/myWallet-icon.svg'
import ActivityIcon from './sidebar-icons/activity-icon.svg'
import AnalyticsIcon from './sidebar-icons/analytics-icon.svg'

interface NavItems {
  type: 'link'
  href: string
  label: string
  icon: React.FunctionComponent
}

export const navItems: NavItems[] = [
  {
    type: 'link',
    href: '/',
    icon: DashboardIcon,
    label: 'Dashboard',
  },
  {
    type: 'link',
    href: '/invoices',
    icon: InvoicesIcon,
    label: 'Invoices',
  },
  {
    type: 'link',
    href: '/messages',
    icon: MessagesIcon,
    label: 'Messages',
  },
  {
    type: 'link',
    href: '/wallets',
    icon: WalletsIcon,
    label: 'My Wallets',
  },
  {
    type: 'link',
    href: '/activity',
    icon: ActivityIcon,
    label: 'Activity',
  },
  {
    type: 'link',
    label: 'Analytics',
    icon: AnalyticsIcon,
    href: '/analytics',
  },
]
