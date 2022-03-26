import Button from '../controls/Button';
import { COLORS } from '../../constant';

export const cards = [
  {
    id: 0,
    plan: 'Basic',
    price: 'Free',
    priceLabel: 'Up to 5 users for free',
    descriptions: [
      {
        id: 0,
        feature: 'Basic document collaboration'
      },
      {
        id: 1,
        feature: '2 GB storage'
      },
      {
        id: 2,
        feature: 'Great security and support'
      }
    ],
    btn: <Button href="registration">Try for Free</Button>,
    bgc: COLORS.white,
    withBgcPattern: false,
    secondColor: false,
  },
  {
    id: 1,
    plan: 'Pro',
    price: '$9.99',
    priceLabel: 'Per user, billed monthly',
    descriptions: [
      {
        id: 0,
        feature: 'All essential integrations'
      },
      {
        id: 1,
        feature: '50 GB storage'
      },
      {
        id: 2,
        feature: 'More control and insights'
      }
    ],
    btn: <Button href="registration">Try for Free</Button>,
    bgc: COLORS.primaryBlue,
    withBgcPattern: true,
    secondColor: true,
  },
  {
    id: 2,
    plan: 'Ultimate',
    price: '$19.99',
    priceLabel: 'Per user, billed monthly',
    descriptions: [
      {
        id: 0,
        feature: 'Robust work management'
      },
      {
        id: 1,
        feature: '100 GB storage'
      },
      {
        id: 2,
        feature: 'VIP support'
      }
    ],
    btn: <Button href="registration">Try for Free</Button>,
    bgc: COLORS.white,
    withBgcPattern: false,
    secondColor: false,
  },
];