import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Upgrade guide",
  "section": "developer-resources",
  "source": "react",
  "slug": "/developer-resources/upgrade-guide/react",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-docs/UPGRADE-GUIDE.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` this guide details upgrading from PatternFly v3 to v4, and references `}
      <PatternflyThemeLink {...{"to":"/developer-resources/release-notes#2020.07-release-notes-2020-06-05"}}>
        {`major release 2020.07`}
      </PatternflyThemeLink>
      {` from 2020-06-05.
`}
            <hr/>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Hey, Flyers! We’ve been busy for the past 12 weeks keeping up with changes to PatternFly’s HTML and CSS. We’ve replaced `}
      <code {...{"className":"ws-code"}}>
        {`babel`}
      </code>
      {` with `}
      <code {...{"className":"ws-code"}}>
        {`tsc`}
      </code>
      {` as our compiler of choice and removed prop-types in favor of using our `}
      <code {...{"className":"ws-code"}}>
        {`.d.ts`}
      </code>
      {` types, which are supported in most editors.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`This upgrade guide details `}
      <strong>
        {`what`}
      </strong>
      {` was broken and `}
      <strong>
        {`how`}
      </strong>
      {` to fix it. To learn `}
      <strong>
        {`why`}
      </strong>
      {` a change was made, check out the linked pull requests.`}
    </p>
    <AutoLinkHeader {...{"id":"global","size":"h2","className":"ws-title ws-h2"}}>
      {`Global`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`We no longer support UMD builds for individual packages. Consider using our `}
        <PatternflyThemeLink {...{"to":"https://unpkg.com/@patternfly/react-core@3/dist/umd/react-core.umd.js"}}>
          {`react-core.umd.js bundle`}
        </PatternflyThemeLink>
        {` instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4076"}}>
          {`(#4076)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`We no longer define `}
        <code {...{"className":"ws-code"}}>
          {`propTypes`}
        </code>
        {` for our components. Consider using our Typescript types under each package's `}
        <code {...{"className":"ws-code"}}>
          {`dist/js`}
        </code>
        {` folder instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4076"}}>
          {`(#4076)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`We have updated our React peer dependencies so that our packages now can possibly use hooks, which requires `}
        <code {...{"className":"ws-code"}}>
          {`react@^16.8.0`}
        </code>
        {` instead of `}
        <code {...{"className":"ws-code"}}>
          {`react@^16.4.0`}
        </code>
        {`. We recommend upgrading your version of React if it is below 16.8.0.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-core","size":"h2","className":"ws-title ws-h2"}}>
      {`React core`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Major changes include removing the `}
        <code {...{"className":"ws-code"}}>
          {`Toolbar`}
        </code>
        {` layout in favor of a new `}
        <code {...{"className":"ws-code"}}>
          {`PageHeaderTools`}
        </code>
        {` component. `}
        <code {...{"className":"ws-code"}}>
          {`DataToolbar`}
        </code>
        {` has been renamed `}
        <code {...{"className":"ws-code"}}>
          {`Toolbar`}
        </code>
        {`. `}
        <code {...{"className":"ws-code"}}>
          {`Expandable`}
        </code>
        {` has been renamed `}
        <code {...{"className":"ws-code"}}>
          {`ExpandableSection`}
        </code>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"about-modal","size":"h3","className":"ws-title ws-h3"}}>
      {`About modal`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`AboutModalContainer`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelledbyId`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aboutModalBoxHeaderId`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaDescribedById`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aboutModalBoxContentId`}
            </code>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"accordion","size":"h3","className":"ws-title ws-h3"}}>
      {`Accordion`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`noBoxShadow`}
        </code>
        {`. If a shadow is needed, the accordion can be placed in a card, or a shadow can be applied either using CSS or a box-shadow utility class. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4022"}}>
          {`(#4022)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"alert","size":"h3","className":"ws-title ws-h3"}}>
      {`Alert`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed default variant to `}
        <code {...{"className":"ws-code"}}>
          {`default`}
        </code>
        {`. To maintain current default behavior, set the `}
        <code {...{"className":"ws-code"}}>
          {`variant`}
        </code>
        {` property to `}
        <code {...{"className":"ws-code"}}>
          {`info`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3903"}}>
          {`(#3903)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you were previously using the `}
        <code {...{"className":"ws-code"}}>
          {`action`}
        </code>
        {` prop for the close button, use the `}
        <code {...{"className":"ws-code"}}>
          {`actionClose`}
        </code>
        {` prop instead `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4190"}}>
          {`(#4190)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`If you were previously using the `}
        <code {...{"className":"ws-code"}}>
          {`action`}
        </code>
        {` prop for a link button, use the `}
        <code {...{"className":"ws-code"}}>
          {`actionLinks`}
        </code>
        {` prop instead `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4190"}}>
          {`(#4190)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"application-launcher","size":"h3","className":"ws-title ws-h3"}}>
      {`Application launcher`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed deprecated prop `}
        <code {...{"className":"ws-code"}}>
          {`dropdownItems`}
        </code>
        {`.  the prop `}
        <code {...{"className":"ws-code"}}>
          {`items`}
        </code>
        {` should be used instead `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3929"}}>
          {`(#3929)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"background-image","size":"h3","className":"ws-title ws-h3"}}>
      {`Background image`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Replaced `}
        <code {...{"className":"ws-code"}}>
          {`[BackgroundImageSrc.{sm,xs2x,sm,sm2x,lg}]`}
        </code>
        {` with strings `}
        <code {...{"className":"ws-code"}}>
          {`'sm' | 'xs2x' | 'sm' | 'sm2x' | 'lg'`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3886"}}>
          {`(#3886)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed always ignored `}
        <code {...{"className":"ws-code"}}>
          {`[BackgroundImageSrc.filter]`}
        </code>
        {` for new `}
        <code {...{"className":"ws-code"}}>
          {`filter`}
        </code>
        {` prop of type `}
        <code {...{"className":"ws-code"}}>
          {`ReactNode`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3886"}}>
          {`(#3886)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"button","size":"h3","className":"ws-title ws-h3"}}>
      {`Button`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed props `}
        <code {...{"className":"ws-code"}}>
          {`isHover`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`isFocus`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
          {`(#4116)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"card","size":"h3","className":"ws-title ws-h3"}}>
      {`Card`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`CardHeader:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed to CardTitle `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4170"}}>
              {`(#4170)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`CardHeadMain:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed to CardHeaderMain `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4170"}}>
              {`(#4170)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`CardHead`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed to CardHeader `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4170"}}>
              {`(#4170)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"chip-group","size":"h3","className":"ws-title ws-h3"}}>
      {`Chip group`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chip:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The overflow chip no longer contains a button. To specify an overflow chip as a button do use `}
            <code {...{"className":"ws-code"}}>
              {`<Chip component='button' isOverflowChip>Chip</Chip>`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4246"}}>
              {`(#4246)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ChipGroup`}
        </strong>
        {` :`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`withToolbar`}
            </code>
            {`. Use the `}
            <code {...{"className":"ws-code"}}>
              {`categoryName`}
            </code>
            {` prop instead to add a chip group with a category. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4246"}}>
              {`(#4246)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`headingLevel`}
            </code>
            {`. The category name has internally been switched to a `}
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4246"}}>
              {`(#4246)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ChipGroupToolbarItem`}
        </strong>
        {`: This component has been removed in favor of `}
        <code {...{"className":"ws-code"}}>
          {`<ChipGroup categoryName="name">`}
        </code>
        {`.  All props that were on the `}
        <code {...{"className":"ws-code"}}>
          {`<ChipGroupToolbarItem>`}
        </code>
        {` have been added to `}
        <code {...{"className":"ws-code"}}>
          {`<ChipGroup>`}
        </code>
        {`. To use the new API, move props from `}
        <code {...{"className":"ws-code"}}>
          {`<ChipGroupToolbarItem>`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`<ChipGroup>`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4246"}}>
          {`(#4246)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"context-selector","size":"h3","className":"ws-title ws-h3"}}>
      {`Context selector`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ContextSelectorItem:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`isHover`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ContextSelectorToggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isHovered`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isFocused`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"data-list","size":"h3","className":"ws-title ws-h3"}}>
      {`Data list`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Renamed `}
        <code {...{"className":"ws-code"}}>
          {`noPadding`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`hasNoPadding`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4133"}}>
          {`(#4133)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"divider","size":"h3","className":"ws-title ws-h3"}}>
      {`Divider`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed promoted component from experimental index file. Change import path from  `}
        <code {...{"className":"ws-code"}}>
          {`import { Divider } from '@patternfly/react-core/dist/esm/experimental';`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`'import { Divider } from '@patternfly/react-core/dist/esm/components';`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4029"}}>
          {`(#4029)`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Drawer`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Renamed `}
        <code {...{"className":"ws-code"}}>
          {`noPadding`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`hasNoPadding`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4133"}}>
          {`(#4133)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed import path `}
        <code {...{"className":"ws-code"}}>
          {`'@patternfly/react-core/dist/js/experimental'`}
        </code>
        {`. The import path `}
        <code {...{"className":"ws-code"}}>
          {`'@patternfly/react-core'`}
        </code>
        {` should be used instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4176"}}>
          {`(#4176)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"dropdown","size":"h3","className":"ws-title ws-h3"}}>
      {`Dropdown`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Dropdown:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isHover`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isFocus`}
            </code>
            {` from Toggle, KebabToggle, and DropdownToggle `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {`. If you were using `}
            <code {...{"className":"ws-code"}}>
              {`variant="icon"`}
            </code>
            {` before, use the new prop `}
            <code {...{"className":"ws-code"}}>
              {`icon`}
            </code>
            {` instead. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4147"}}>
              {`(#4147)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`DropdownToggle`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaHasPopup`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-haspopup`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Renamed `}
            <code {...{"className":"ws-code"}}>
              {`iconComponent`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`toggleIndicator`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4038"}}>
              {`(#4038)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`DropdownItemIcon`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`This component has been removed in favor of `}
            <code {...{"className":"ws-code"}}>
              {`<DropdownItem icon={<Icon />} />`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4147"}}>
              {`(#4147)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"empty-state","size":"h3","className":"ws-title ws-h3"}}>
      {`Empty state`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`EmptyState`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed the default width to `}
            <code {...{"className":"ws-code"}}>
              {`full`}
            </code>
            {` instead of `}
            <code {...{"className":"ws-code"}}>
              {`large`}
            </code>
            {`.  To maintain the previous default behaviour, set the `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {` prop to large. Example `}
            <code {...{"className":"ws-code"}}>
              {`<EmptyState variant={EmptyStateVariant.large}> ...</EmptyState>`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3933"}}>
              {`(#3933)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Variant `}
            <code {...{"className":"ws-code"}}>
              {`large`}
            </code>
            {` has been updated to `}
            <code {...{"className":"ws-code"}}>
              {`lg`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3933"}}>
              {`(#3933)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`EmptyStateIcon:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed deprecated `}
            <code {...{"className":"ws-code"}}>
              {`size`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`title`}
            </code>
            {` from  IconProps.`}
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"expandable-section-formerly-expandable","size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable section (formerly Expandable)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Renamed component to `}
        <code {...{"className":"ws-code"}}>
          {`ExpandableSection`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
          {`(#4116)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed props `}
        <code {...{"className":"ws-code"}}>
          {`isFocus`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`isHovered`}
        </code>
        {` from ExpandableSection `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
          {`(#4116)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"flex","size":"h3","className":"ws-title ws-h3"}}>
      {`Flex`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Flex:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`breakpointMods`}
            </code>
            {` prop in favor of `}
            <code {...{"className":"ws-code"}}>
              {`spacer`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`spaceItems`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`grow`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`shrink`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`flex`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`direction`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignItems`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignContent`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignSelf`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`align`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`justifyContent`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`display`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`fullWidth`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`flexWrap`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4310"}}>
              {`(#4310)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`FlexItem:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`breakpointMods`}
            </code>
            {` prop in favor of `}
            <code {...{"className":"ws-code"}}>
              {`spacer`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`grow`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`shrink`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`flex`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignSelf`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`align`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`fullWidth`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4310"}}>
              {`(#4310)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"form-select","size":"h3","className":"ws-title ws-h3"}}>
      {`Form select`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed boolean `}
        <code {...{"className":"ws-code"}}>
          {`isValid`}
        </code>
        {` prop in favor of `}
        <code {...{"className":"ws-code"}}>
          {`validated?: 'default' | 'success' | 'error' | ValidatedOptions;`}
        </code>
        {`. Update your boolean logic to use the new 'default' or 'error' options instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3975"}}>
          {`(#3975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"gallery","size":"h3","className":"ws-title ws-h3"}}>
      {`Gallery`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`gutter`}
        </code>
        {` in favor of `}
        <code {...{"className":"ws-code"}}>
          {`hasGutter`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4014"}}>
          {`(#4014)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"grid","size":"h3","className":"ws-title ws-h3"}}>
      {`Grid`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`gutter`}
        </code>
        {` in favor of `}
        <code {...{"className":"ws-code"}}>
          {`hasGutter`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4014"}}>
          {`(#4014)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"label","size":"h3","className":"ws-title ws-h3"}}>
      {`Label`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`isCompact`}
        </code>
        {` from Label `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
          {`(#4116)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Default color changed to grey. Design also adjusted. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4165"}}>
          {`(#4165)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"level","size":"h3","className":"ws-title ws-h3"}}>
      {`Level`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`gutter`}
        </code>
        {` in favor of `}
        <code {...{"className":"ws-code"}}>
          {`hasGutter`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4014"}}>
          {`(#4014)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"login-page","size":"h3","className":"ws-title ws-h3"}}>
      {`Login page`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`LoginForm:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`rememberMeAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"modal","size":"h3","className":"ws-title ws-h3"}}>
      {`Modal`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Collapsed the `}
            <code {...{"className":"ws-code"}}>
              {`isLarge`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isSmall`}
            </code>
            {` properties into a single `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {` property. To maintain the current behavior, set the `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {` property to `}
            <code {...{"className":"ws-code"}}>
              {`large`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`small`}
            </code>
            {`, or use the newly added `}
            <code {...{"className":"ws-code"}}>
              {`ModalVariant`}
            </code>
            {` enum as `}
            <code {...{"className":"ws-code"}}>
              {`ModalVariant.large`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`ModalVariant.small`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3920"}}>
              {`(#3920)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaDescribedById`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`modalContentAriaDescribedById`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`isFooterLeftAligned `}
            </code>
            {`. This prop is now always enabled and cannot be opted out of. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4017"}}>
              {`(#4017)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`hideTitle`}
            </code>
            {`. To hide the Modal header, do not pass a title prop, a description prop, or a header prop. If there is no title or header passed, provide an `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {` prop to the Modal component to make it accessible. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4140"}}>
              {`(#4140)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ModalContent:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaDescribedById`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`modalBoxAriaDescribedById`}
            </code>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ModalFooter:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`isLeftAligned`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4017"}}>
              {`(#4017)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"nav","size":"h3","className":"ws-title ws-h3"}}>
      {`Nav`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Nav:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Changed default theme to dark. To use the light variant, use `}
            <code {...{"className":"ws-code"}}>
              {`theme="light"`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`NavList:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {`. Pass `}
            <code {...{"className":"ws-code"}}>
              {`variant="horizontal"`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`variant="tertiary"`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`Nav`}
            </code>
            {` instead. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4225"}}>
              {`(#4225)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"options-menu","size":"h3","className":"ws-title ws-h3"}}>
      {`Options menu`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`OptionsMenu:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelMenu`}
            </code>
            {`.`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`OptionsMenuItemGroup:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabel`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`OptionsMenuToggleWithText`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaHasPopup`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-haspopup`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isFocused`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isHovered`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`OptionsMenuToggle:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isFocused`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isHovered`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"page","size":"h3","className":"ws-title ws-h3"}}>
      {`Page`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Page:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Made mainContainerId a required property for skip to content component `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3904"}}>
              {`(#3904)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Changed default theme to dark. Use `}
            <code {...{"className":"ws-code"}}>
              {`theme="light"`}
            </code>
            {` if you wish to use the light variant. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Renamed `}
            <code {...{"className":"ws-code"}}>
              {`noPadding`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`hasNoPadding`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4133"}}>
              {`(#4133)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`hasNoPadding`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`padding={{ default: 'noPadding' }}`}
            </code>
            {` to prevent conflicts when setting both `}
            <code {...{"className":"ws-code"}}>
              {`hasNoPadding`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`padding={{ default: 'padding' | 'noPadding' }}`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4310"}}>
              {`(#4310)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`PageSection:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`noPaddingMobile`}
            </code>
            {` from PageSection in favor of `}
            <code {...{"className":"ws-code"}}>
              {`hasNoPaddingOn={PageSectionBreakpoints[]}`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4133"}}>
              {`(#4133)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Added `}
            <code {...{"className":"ws-code"}}>
              {`hasPaddingOn`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`hasNoPaddingOn`}
            </code>
            {` properties to PageSection, accounting for page size breakpoints. Breakpoints are defined in the `}
            <code {...{"className":"ws-code"}}>
              {`PageSectionBreakpoints`}
            </code>
            {` enum. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4133"}}>
              {`(#4133)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`PageHeader`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`avatar`}
            </code>
            {`. Add the avatar to the `}
            <code {...{"className":"ws-code"}}>
              {`PageHeaderTools`}
            </code>
            {` component instead (which is passed into `}
            <code {...{"className":"ws-code"}}>
              {`PageHeader`}
            </code>
            {` via the `}
            <code {...{"className":"ws-code"}}>
              {`headerTools`}
            </code>
            {` prop) `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4223"}}>
              {`(#4223)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`toolbar`}
            </code>
            {`. Use the `}
            <code {...{"className":"ws-code"}}>
              {`headerTools`}
            </code>
            {` prop instead. Also, if you previously used the `}
            <code {...{"className":"ws-code"}}>
              {`Toolbar`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`ToolbarGroup`}
            </code>
            {`, or `}
            <code {...{"className":"ws-code"}}>
              {`ToolbarItem`}
            </code>
            {` components for the header, replace them with the `}
            <code {...{"className":"ws-code"}}>
              {`PageHeaderTools`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`PageHeaderToolsGroup`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`PageHeaderToolsItem`}
            </code>
            {` components. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4223"}}>
              {`(#4223)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"pagination","size":"h3","className":"ws-title ws-h3"}}>
      {`Pagination`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed obsolete 'left' and 'right' variants. These should be replaced with 'top' (default) or 'bottom'. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4202"}}>
          {`(#4202)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"popover","size":"h3","className":"ws-title ws-h3"}}>
      {`Popover`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`PopoverHeader:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Title size now defaults to medium instead of extra large `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4030"}}>
              {`(#4030)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"progress","size":"h3","className":"ws-title ws-h3"}}>
      {`Progress`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed deprecated `}
            <code {...{"className":"ws-code"}}>
              {`ProgressVariant.info`}
            </code>
            {` that adds no styling. Do not pass this prop or pass `}
            <code {...{"className":"ws-code"}}>
              {`null`}
            </code>
            {` instead. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3886"}}>
              {`(#3886)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ProgressBar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaProps`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`progressBarAriaProps`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ProgressContainer:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaProps`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`progressBarAriaProps`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"select","size":"h3","className":"ws-title ws-h3"}}>
      {`Select`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelledBy`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelTypeAhead`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`typeAheadAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelClear`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`clearSelectionsAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelToggle`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`toggleAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelRemove`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`RemovedelectionAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Renamed `}
            <code {...{"className":"ws-code"}}>
              {`isExpanded`}
            </code>
            {` property to `}
            <code {...{"className":"ws-code"}}>
              {`isOpen`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3945"}}>
              {`(#3945)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed deprecated `}
            <code {...{"className":"ws-code"}}>
              {`CheckboxSelect`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`CheckboxSelectOption`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`variant="checkbox"`}
            </code>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`SelectOption:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`isFocus`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`SelectToggle`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelledBy`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelToggle`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isFocus`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isHovered`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"skip-to-content","size":"h3","className":"ws-title ws-h3"}}>
      {`Skip to content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`component`}
        </code>
        {` prop in favor of always using an anchor tag `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
          {`(#4116)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"split","size":"h3","className":"ws-title ws-h3"}}>
      {`Split`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`gutter`}
        </code>
        {` in favor of `}
        <code {...{"className":"ws-code"}}>
          {`hasGutter`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4014"}}>
          {`(#4014)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"stack","size":"h3","className":"ws-title ws-h3"}}>
      {`Stack`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed prop `}
        <code {...{"className":"ws-code"}}>
          {`gutter`}
        </code>
        {` in favor of `}
        <code {...{"className":"ws-code"}}>
          {`hasGutter`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4014"}}>
          {`(#4014)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"tabs","size":"h3","className":"ws-title ws-h3"}}>
      {`Tabs`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tab:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The title should be wrapped with `}
            <code {...{"className":"ws-code"}}>
              {`<TabTitleText>`}
            </code>
            {` for proper styling. If you would like to place an icon in the tab, it should be wrapped with `}
            <code {...{"className":"ws-code"}}>
              {`<TabTitleIcon>`}
            </code>
            {` for proper styling. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4146"}}>
              {`(#4146)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Tabs`}
        </strong>
        {`:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`variant`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`component`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4146"}}>
              {`(#4146)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed enum `}
            <code {...{"className":"ws-code"}}>
              {`TabVariant`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`TabComponent`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4146"}}>
              {`(#4146)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"table","size":"h3","className":"ws-title ws-h3"}}>
      {`Table`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated onSelect type from `}
        <code {...{"className":"ws-code"}}>
          {`(event: React.ChangeEvent<HTMLInputElement>) => void`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`(event: React.FormEvent<HTMLInputElement>) => void`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3296"}}>
          {`(#3296)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`cellHeightAuto`}
        </code>
        {` transformer `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4170"}}>
          {`(#4170)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`cellWidth('max')`}
        </code>
        {` has been replaced with `}
        <code {...{"className":"ws-code"}}>
          {`cellWidth(100)`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4170"}}>
          {`(#4170)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"text-input","size":"h3","className":"ws-title ws-h3"}}>
      {`Text input`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed boolean `}
        <code {...{"className":"ws-code"}}>
          {`isValid`}
        </code>
        {` prop in favor of `}
        <code {...{"className":"ws-code"}}>
          {`validated?: 'default' | 'success' | 'error' | ValidatedOptions;`}
        </code>
        {`. Update your boolean logic to use the new 'default' or 'error' options instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3975"}}>
          {`(#3975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"text-area","size":"h3","className":"ws-title ws-h3"}}>
      {`Text area`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed boolean `}
        <code {...{"className":"ws-code"}}>
          {`isValid`}
        </code>
        {` prop in favor of `}
        <code {...{"className":"ws-code"}}>
          {`validated?: 'default' | 'success' | 'error' | ValidatedOptions;`}
        </code>
        {`. Update your boolean logic to use the new 'default' or 'error' options instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3975"}}>
          {`(#3975)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"title","size":"h3","className":"ws-title ws-h3"}}>
      {`Title`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Make `}
        <code {...{"className":"ws-code"}}>
          {`headingLevel`}
        </code>
        {` required and remove default of `}
        <code {...{"className":"ws-code"}}>
          {`h2`}
        </code>
        {` to improve accessibility `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3922"}}>
          {`(#3922)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed enum `}
        <code {...{"className":"ws-code"}}>
          {`TitleLevel`}
        </code>
        {`. Use one of the string values `}
        <code {...{"className":"ws-code"}}>
          {`h1`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`h2`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`h3`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`h4`}
        </code>
        {`, `}
        <code {...{"className":"ws-code"}}>
          {`h5`}
        </code>
        {`, or `}
        <code {...{"className":"ws-code"}}>
          {`h6`}
        </code>
        {` instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Heading levels should be set contextually and and always be increasing or decreasing by 1 when read top-to-bottom in the DOM.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Rename enum `}
        <code {...{"className":"ws-code"}}>
          {`TitleSize`}
        </code>
        {` to `}
        <code {...{"className":"ws-code"}}>
          {`TitleSizes`}
        </code>
        {` `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3922"}}>
          {`(#3922)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed invalid values `}
        <code {...{"className":"ws-code"}}>
          {`xs`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`sm`}
        </code>
        {` for `}
        <code {...{"className":"ws-code"}}>
          {`size`}
        </code>
        {` prop. Use size `}
        <code {...{"className":"ws-code"}}>
          {`md`}
        </code>
        {` instead.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"toolbar-formerly-datatoolbar","size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar (formerly DataToolbar)`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Toolbar:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`The old Toolbar component that is normally used in the PageHeader has been removed in favor of `}
            <code {...{"className":"ws-code"}}>
              {`PageHeaderTools`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4223"}}>
              {`(#4223)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed separator variant `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ToolbarItem:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`breakpointMods`}
            </code>
            {` prop in favor of `}
            <code {...{"className":"ws-code"}}>
              {`visibility`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignment`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`spacer`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4310"}}>
              {`(#4310)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`ToolbarToggleGroup:`}
        </strong>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`breakpointMods`}
            </code>
            {` prop in favor of `}
            <code {...{"className":"ws-code"}}>
              {`visibility`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`alignment`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`spacer`}
            </code>
            {`, and `}
            <code {...{"className":"ws-code"}}>
              {`spaceItems`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4310"}}>
              {`(#4310)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"wizard","size":"h3","className":"ws-title ws-h3"}}>
      {`Wizard`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Wizard`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelNav`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`navAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelCloseButton`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`closeButtonAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed props `}
            <code {...{"className":"ws-code"}}>
              {`isFullHeight`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`isFullWidth`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4116"}}>
              {`(#4116)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Renamed prop `}
            <code {...{"className":"ws-code"}}>
              {`hasBodyPadding`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`hasNoBodyPadding`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4136"}}>
              {`(#4136)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed `}
            <code {...{"className":"ws-code"}}>
              {`inPage`}
            </code>
            {` prop. By default the wizard will be displayed in page, filling its parent container. If the consumer passes a managed `}
            <code {...{"className":"ws-code"}}>
              {`isOpen`}
            </code>
            {` flag then the wizard will be displayed in a modal. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4140"}}>
              {`(#4140)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`WizardBody:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed `}
            <code {...{"className":"ws-code"}}>
              {`hasBodyPadding`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`hasNoBodyPadding`}
            </code>
            {`. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4136"}}>
              {`(#4136)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`WizardHeader:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabelCloseButton`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`closeButtonAriaLabel`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`WizardNav`}
          </strong>
          {`:`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`ariaLabel`}
            </code>
            {` in favor of `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3924"}}>
              {`(#3924)`}
            </PatternflyThemeLink>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Removed prop `}
            <code {...{"className":"ws-code"}}>
              {`isCompactNav`}
            </code>
            {` `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4142"}}>
              {`(#4142)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`WizardNavItem:`}
          </strong>
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Renamed prop `}
            <code {...{"className":"ws-code"}}>
              {`text`}
            </code>
            {` to `}
            <code {...{"className":"ws-code"}}>
              {`content`}
            </code>
            {`. The type of the prop has been changed to `}
            <code {...{"className":"ws-code"}}>
              {`React.ReactNode`}
            </code>
            {` to allow for flexibility. `}
            <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4063"}}>
              {`(#4063)`}
            </PatternflyThemeLink>
          </li>
        </ul>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-charts","size":"h2","className":"ws-title ws-h2"}}>
      {`React charts`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated Victory to package versions to 34.3.9 `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3974"}}>
          {`(#3974)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed the `}
        <code {...{"className":"ws-code"}}>
          {`@types/victory`}
        </code>
        {` dependency and updated the PatternFly charts to use the types introduced with Victory 34.x. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4138"}}>
          {`(#4138)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated label prop types to sync with Victory 34.3.9 `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4152"}}>
          {`(#4152)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use `}
        <code {...{"className":"ws-code"}}>
          {`containerComponent={<VictoryZoomComponent />}`}
        </code>
        {` with Chart instead of `}
        <code {...{"className":"ws-code"}}>
          {`allowZoom`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4278"}}>
          {`(#4278)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use `}
        <code {...{"className":"ws-code"}}>
          {`containerComponent={<VictoryZoomComponent />}`}
        </code>
        {` with ChartGroup instead of `}
        <code {...{"className":"ws-code"}}>
          {`allowZoom`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4278"}}>
          {`(#4278)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <code {...{"className":"ws-code"}}>
          {`allowTooltip`}
        </code>
        {` prop was removed from `}
        <code {...{"className":"ws-code"}}>
          {`ChartVoronoiContainer`}
        </code>
        {` because Victory always provides a default tooltip.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-icons","size":"h2","className":"ws-title ws-h2"}}>
      {`React icons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Updated types.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Removed `}
        <code {...{"className":"ws-code"}}>
          {`OutlinedFontAwesomeLogoFullIcon`}
        </code>
        {`. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3978"}}>
          {`(#3978)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-inline-edit-extension","size":"h2","className":"ws-title ws-h2"}}>
      {`React inline edit extension`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Changed and added many types while converting this project to TypeScript. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4073"}}>
          {`(#4073)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-styles","size":"h2","className":"ws-title ws-h2"}}>
      {`React styles`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed all exports except for the `}
        <code {...{"className":"ws-code"}}>
          {`css`}
        </code>
        {` function and CSS-in-JS stylesheets in the `}
        <code {...{"className":"ws-code"}}>
          {`css`}
        </code>
        {` folder since we no longer use `}
        <code {...{"className":"ws-code"}}>
          {`emotion`}
        </code>
        {`. To use these functions, import directly from `}
        <code {...{"className":"ws-code"}}>
          {`emotion`}
        </code>
        {` instead. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/3886"}}>
          {`(#3886)`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"react-tokens","size":"h2","className":"ws-title ws-h2"}}>
      {`React tokens`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Removed tokens `}
        <code {...{"className":"ws-code"}}>
          {`global_BackgroundColor_150`}
        </code>
        {` and `}
        <code {...{"className":"ws-code"}}>
          {`global_BackgroundColor_300`}
        </code>
        {` (see associated `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly/pull/2818"}}>
          {`Core PR`}
        </PatternflyThemeLink>
        {`). At the discretion of design, use `}
        <code {...{"className":"ws-code"}}>
          {`global_BackgroundColor_200`}
        </code>
        {` with its new value `}
        <code {...{"className":"ws-code"}}>
          {`#f0f0f0`}
        </code>
        {` instead.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Updated some of our tokens' values to be correct. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4058"}}>
          {`(#4058)`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Added new files with a different structure to the index. `}
        <PatternflyThemeLink {...{"to":"https://github.com/patternfly/patternfly-react/pull/4058"}}>
          {`(#4058)`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
Component.displayName = 'DeveloperResourcesUpgradeGuideReactDocs';
Component.pageData = pageData;

export default Component;
