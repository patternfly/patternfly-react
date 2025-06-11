import figma from '@figma/code-connect';
import {
  Button,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadLogo,
  MastheadMain,
  MastheadToggle
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

// TODO: Map Figma component to these properties.

figma.connect(
  Masthead,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6642',
  {
    props: {},
    example: () => (
      <Masthead id="<masthead-id>" inset={{ default: 'insetSm' }}>
        <MastheadMain>
          <MastheadToggle>
            <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
          </MastheadToggle>
          <MastheadBrand>
            <MastheadLogo component="a">Logo</MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <span>Content</span>
        </MastheadContent>
      </Masthead>
    )
  }
);
