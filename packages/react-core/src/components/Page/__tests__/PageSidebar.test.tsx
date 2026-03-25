import { render, screen } from '@testing-library/react';
import { PageSidebar } from '../PageSidebar';
import styles from '@patternfly/react-styles/css/components/Page/page';

test(`Renders with ${styles.pageSidebarMain} wrapper`, () => {
  render(<PageSidebar data-testid="sidebar">Test</PageSidebar>);

  expect(screen.getByText('Test')).toHaveClass(styles.pageSidebarMain);
});
