// Generated with OpenCode (GPT-6.1).
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef, forwardRef } from 'react';
import { Tabs } from '../Tabs';
import { Tab } from '../Tab';

const onNavigate = jest.fn();
// Router links invoke the supplied handler before navigating, and honor preventDefault.
const CustomLink = forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
  ({ onClick, href = '#custom-link', ...props }, ref) => (
    <a
      {...props}
      href={href}
      ref={ref}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          onNavigate();
        }
        event.preventDefault();
      }}
    />
  )
);
CustomLink.displayName = 'CustomLink';

describe('custom tab components', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it.each([
    { description: 'default tabs without href', tabsProps: {}, href: undefined },
    { description: 'default tabs with href', tabsProps: {}, href: '#custom-link' },
    { description: 'nav wrapper without href', tabsProps: { component: 'nav' as const }, href: undefined },
    { description: 'nav wrapper with href', tabsProps: { component: 'nav' as const }, href: '#custom-link' },
    { description: 'nav styling without href', tabsProps: { isNav: true }, href: undefined },
    { description: 'nav styling with href', tabsProps: { isNav: true }, href: '#custom-link' }
  ])('allows custom navigation and tab selection for $description', async ({ tabsProps, href }) => {
    const user = userEvent.setup();
    const pushState = jest.spyOn(window.history, 'pushState');
    const ref = createRef<HTMLAnchorElement>();

    render(
      <Tabs defaultActiveKey={0} {...tabsProps}>
        <Tab eventKey={0} title="First tab" />
        <Tab eventKey={1} title="Custom tab" component={CustomLink} href={href} ref={ref}>
          Custom content
        </Tab>
      </Tabs>
    );

    const tab = screen.getByRole('tab', { name: 'Custom tab' });
    expect(ref.current).toBe(tab);
    expect(tab).toHaveAttribute('href', '#custom-link');
    expect(tab).not.toHaveAttribute('type');
    expect(tab).not.toHaveAttribute('disabled');

    await user.click(tab);

    expect(onNavigate).toHaveBeenCalledTimes(1);
    expect(pushState).not.toHaveBeenCalled();
    expect(tab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Custom content');
  });

  it('calls onSelect when clicking a controlled custom tab', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Tabs activeKey={0} onSelect={onSelect}>
        <Tab eventKey={0} title="First tab" />
        <Tab eventKey={1} title="Custom tab" component={CustomLink} />
      </Tabs>
    );

    await user.click(screen.getByRole('tab', { name: 'Custom tab' }));

    expect(onSelect).toHaveBeenCalledWith(expect.any(Object), 1);
    expect(onNavigate).toHaveBeenCalledTimes(1);
  });

  it.each([
    { description: 'disabled', disabledProps: { isDisabled: true }, tabIndex: '-1' },
    { description: 'aria-disabled', disabledProps: { isAriaDisabled: true }, tabIndex: null }
  ])('prevents mouse and keyboard navigation for a $description custom link', async ({ disabledProps, tabIndex }) => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Tabs onSelect={onSelect}>
        <Tab eventKey={0} title="Custom tab" component={CustomLink} {...disabledProps} />
      </Tabs>
    );

    const tab = screen.getByRole('tab', { name: 'Custom tab' });
    expect(tab).toHaveAttribute('aria-disabled', 'true');
    expect(tab).not.toHaveAttribute('disabled');
    if (tabIndex) {
      expect(tab).toHaveAttribute('tabindex', tabIndex);
    } else {
      await user.tab();
      expect(tab).toHaveFocus();
    }

    await user.click(tab);
    tab.focus();
    await user.keyboard('{Enter}');

    expect(onNavigate).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
  });
});
