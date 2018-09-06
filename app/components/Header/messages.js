/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  items: [
    {
      id: 'inreflection.components.Header.findStylists',
      defaultMessage: 'Find stylists',
      url: '/find',
    },
    {
      id: 'inreflection.components.Header.howItWorks',
      defaultMessage: 'How it works',
      url: '/howItWorks',
      items: [
        {
          id: 'inreflection.components.Header.forCustomers',
          defaultMessage: 'For customers',
          url: '/howItWorks',
        },
        {
          id: 'inreflection.components.Header.forStylists',
          defaultMessage: 'For stylists',
          url: '/forStylists',
        },
      ],
    },
    {
      id: 'inreflection.components.Header.features',
      defaultMessage: 'FAQ',
      url: '/faq',
    },
  ],
});
