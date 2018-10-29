import React from 'react';
import pfBrand from 'patternfly/dist/img/logo-alt.svg';
import github from 'patternfly/dist/img/github-logo.svg';
import facebook from 'patternfly/dist/img/facebook-logo.svg';
import linkedin from 'patternfly/dist/img/linkedin-logo.svg';
import instagram from 'patternfly/dist/img/instagram-logo.png';
import twitter from 'patternfly/dist/img/twitter-logo.svg';
import skype from 'patternfly/dist/img/skype-logo.svg';
import ngnix from '../../CatalogTile/__images__/nginx.png';
import openshift from '../../CatalogTile/__images__/OpenShift.svg';

export const mockItems = [
  {
    category: 'Social Media',
    id: 'social-media',
    items: [
      {
        id: 'Facebook',
        title: 'Facebook',
        image: facebook,
        vendor: <span>provided by Facebook, Inc.</span>,
        description:
          'Facebook is an American online social media and social networking service company based in Menlo Park, California.',
        featured: true,
        certified: true,
        approved: false
      },
      {
        title: 'LinkedIn',
        image: linkedin,
        vendor: 'provided by LinkedIn',
        description:
          'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Instagram',
        image: instagram,
        vendor: 'provided by Facebook, Inc',
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: false,
        certified: true,
        approved: true
      },
      {
        title: 'Twitter',
        image: twitter,
        vendor: 'provided by Twitter, Inc.',
        description:
          'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        id: 'Skype',
        title: 'Skype',
        image: skype,
        vendor: 'provided by Skype',
        description:
          'Stay in touch! Free online calls, messaging, affordable international calling to mobiles or landlines ' +
          'and Skype for Business for effective collaboration.',
        featured: true,
        certified: true,
        approved: true
      }
    ]
  },
  {
    category: 'Miscellaneous',
    id: 'misc',
    items: [
      {
        id: 'PatternFly-long-description',
        title: 'PatternFly-React',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'This is a very long description that should fade the last visible line to indicate truncation. ' +
          'The default is the last visible line but can be overridden to truncate to a max number of characters ' +
          'if need be. You can also provide a custom truncation function ' +
          'to truncate the description how you see fit. It will be passed the description and max length.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'JBoss BPM Suite 6.4 intelligent process server + A-MQ + MySQL (Ephemeral with https)',
        image: openshift,
        vendor: 'provided by Red Hat, Inc',
        description:
          'Praesent sagittis est et arcu fringilla placerat. Cras erat ante, dapibus non mauris ac, ' +
          'volutpat sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet luctus erat tempus. ' +
          'Curabitur blandit sem non pretium bibendum. Donec eleifend non turpis vitae vestibulum. Vestibulum ' +
          'ut sem ac nunc posuere blandit sed porta lorem. Cras rutrum velit vel leo iaculis imperdiet.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Nginx',
        image: ngnix,
        vendor: 'provided by Nginx',
        description: 'The open source web server that powers 400 million websites.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Nginx',
        image: ngnix,
        vendor: 'provided by Nginx',
        description: 'The open source web server that powers 400 million websites.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Nginx',
        image: ngnix,
        vendor: 'provided by Nginx',
        description: 'The open source web server that powers 400 million websites.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Nginx',
        image: ngnix,
        vendor: 'provided by Nginx',
        description: 'The open source web server that powers 400 million websites.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'Nginx',
        image: ngnix,
        vendor: 'provided by Nginx',
        description: 'The open source web server that powers 400 million websites.',
        featured: false,
        certified: true,
        approved: false
      }
    ]
  },
  {
    category: 'More Stuff',
    id: 'more',
    items: [
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      },
      {
        title: 'PatternFly',
        image: pfBrand,
        vendor: (
          <span>
            provided by <a href="redhat.com">Red Hat</a>
          </span>
        ),
        description:
          'A community of designers and developers collaborating to build a UI framework for enterprise web applications.',
        featured: true,
        certified: true,
        approved: true
      },
      {
        title: 'GitHub Desktop',
        image: github,
        vendor: 'provided by GitHub',
        description: 'Simple collaboration from your desktop.',
        featured: false,
        certified: true,
        approved: false
      }
    ]
  }
];
