import { Drawer, DrawerPanelContent, DrawerContent } from './';
import React from 'react';
import { mount } from 'enzyme';

Object.values([
  { isExpanded: true, isInline: false },
  { isExpanded: false, isInline: false },
  { isExpanded: true, isInline: true },
  { isExpanded: false, isInline: true }
]).forEach(({ isExpanded, isInline }) => {
  const drawerContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat,nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.';
  test(`Drawer isExpanded = ${isExpanded} and isInline = ${isInline}`, () => {
    const view = mount(
      <Drawer isExpanded={isExpanded} isInline={isInline}>
        <DrawerContent>{drawerContent}</DrawerContent>
        <DrawerPanelContent> drawer-panel </DrawerPanelContent>
      </Drawer>
    );
    expect(view).toMatchSnapshot();
  });
});
