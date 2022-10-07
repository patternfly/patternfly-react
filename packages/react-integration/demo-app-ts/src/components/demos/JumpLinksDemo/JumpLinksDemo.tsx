import { Title, JumpLinks, JumpLinksItem, PageSection, PageGroup } from '@patternfly/react-core';
import React from 'react';

export const JumpLinksDemo = () => {
  const headings = [1, 2, 3, 4, 5];

  return (
    <React.Fragment>
      <PageSection stickyOnBreakpoint={{ default: 'top' }}>
        <JumpLinks isCentered label="Jump to section" scrollableSelector="#scrollable-element">
          {headings.map(i => (
            <JumpLinksItem key={i} id={`#heading-${i}`} href={`#heading-${i}`}>
              {`Heading ${i}`}
            </JumpLinksItem>
          ))}
        </JumpLinks>
      </PageSection>
      <PageGroup hasOverflowScroll id="scrollable-element">
        <PageSection>
          {headings.map(i => (
            <div key={i} style={{ maxWidth: '800px', marginBottom: '32px' }}>
              <Title headingLevel="h2" size={'2xl'} id={`heading-${i}`} tabIndex={-1}>
                {`Heading ${i}`}
              </Title>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <br />
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
                rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          ))}
        </PageSection>
      </PageGroup>
    </React.Fragment>
  );
};
