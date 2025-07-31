import figma from '@figma/code-connect';
import { Button, Masthead, MastheadContent, MastheadMain, MastheadToggle } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

// TODO: DESIGN: Create masthead main section MastheadMain MastheadContent
// TODO: DESIGN: Move Context Switcher, Horizontal Nav, etc to MastheadContent
// TODO: DESIGN: Create necessary wrappers for MastheadToggle, MastheadBrand, MastheadContent
// Documentation for Masthead can be found at https://www.patternfly.org/components/masthead

figma.connect(
  Masthead,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6642',
  {
    props: {
      mastheadBrand: figma.children('Masthead logo'),
      mastheadContent: figma.enum('Masthead content', {
        'Context switcher': <MastheadContent>Content</MastheadContent>,
        'Horizontal navigation': <MastheadContent>Content</MastheadContent>,
        None: undefined
      }),

      mastheadToggle: figma.boolean('Left Menu Toggle', {
        true: (
          <MastheadToggle>
            <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
          </MastheadToggle>
        ),
        false: undefined
      })
    },
    example: (props) => (
      <Masthead id="<masthead-id>">
        <MastheadMain>
          {props.mastheadToggle}
          {props.mastheadBrand}
        </MastheadMain>
        {props.mastheadContent}
      </Masthead>
    )
  }
);
