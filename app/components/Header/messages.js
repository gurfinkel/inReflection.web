/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  items: [
    {
      id: 'inReflection.components.Header.findStylists',
      defaultMessage: 'Find stylists',
      url: '/find',
    },
    {
      id: 'inReflection.components.Header.howItWorks',
      defaultMessage: 'How it works',
      url: '/howItWorks',
      items: [
        {
          id: 'inReflection.components.Header.forCustomers',
          defaultMessage: 'For customers',
          url: '/howItWorks',
        },
        {
          id: 'inReflection.components.Header.forStylists',
          defaultMessage: 'For stylists',
          url: '/forStylists',
        },
      ],
    },
    {
      id: 'inReflection.components.Header.faq',
      defaultMessage: 'FAQ',
      url: '/faq',
    },
  ],
});
