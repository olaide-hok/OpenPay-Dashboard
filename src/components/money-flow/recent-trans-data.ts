interface TransItems {
  img: string
  alt: string
  desc: string
  date: string
  actNum: string
  amt: string
  btnType: string
}

export const recentTransData: TransItems[] = [
  {
    img: '/images/bitcoin-logo.png',
    alt: 'bitcoin-logo',
    desc: 'Bitcoin Transactions',
    date: 'Jan 16, 2020',
    actNum: '*****45242',
    amt: '-$853.00',
    btnType: 'Success',
  },
  {
    img: '/images/anitonia-logo.png',
    alt: 'anitonia-logo',
    desc: 'Sent to anitonia',
    date: 'Jan 16, 2020',
    actNum: '*****87212',
    amt: '-$153.00',
    btnType: 'Pending',
  },
  {
    img: '/images/paypal-logo.png',
    alt: 'paypal-logo',
    desc: 'Withdraw Paypal',
    date: 'Jan 16, 2020',
    actNum: '*****36275',
    amt: '+$223.00',
    btnType: 'Success',
  },
]
