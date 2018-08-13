import React from 'react';
import PropTypes from 'prop-types';

import ListViewActions from './ListViewActions';
import ListViewAdditionalInfo from './ListViewAdditionalInfo';
import ListViewCheckbox from './ListViewCheckbox';
import ListViewLeft from './ListViewLeft';
import ListViewBody from './ListViewBody';
import ListViewDescription from './ListViewDescription';
import ListViewDescriptionHeading from './ListViewDescriptionHeading';
import ListViewDescriptionText from './ListViewDescriptionText';
import ListViewMainInfo from './ListViewMainInfo';

/**
 * ListViewRow wraps the ListViewItem row, conditionally renders sections
 * based on availability of individual props, maintains the ListItem row structure
 */
const ListViewRow = ({ actions, additionalInfo, checkboxInput, leftContent, heading, description }) => {
  const items = [];

  if (checkboxInput) {
    items.push(<ListViewCheckbox key="checkbox">{checkboxInput}</ListViewCheckbox>);
  }

  if (actions) {
    items.push(<ListViewActions key="actions">{actions}</ListViewActions>);
  }

  items.push(
    <ListViewMainInfo key="main_info">
      {leftContent && <ListViewLeft>{leftContent}</ListViewLeft>}
      <ListViewBody>
        {(heading || description) && (
          <ListViewDescription>
            {heading && <ListViewDescriptionHeading>{heading}</ListViewDescriptionHeading>}
            {description && <ListViewDescriptionText>{description}</ListViewDescriptionText>}
          </ListViewDescription>
        )}
        {additionalInfo && <ListViewAdditionalInfo>{additionalInfo}</ListViewAdditionalInfo>}
      </ListViewBody>
    </ListViewMainInfo>
  );

  return items;
};

ListViewRow.propTypes = {
  /** Node which renders right-positioned actions (e.g. Buttons, DropdownKebab...) */
  actions: PropTypes.node,
  /** An array of ListViewInfoItem instances to render additional info items */
  additionalInfo: PropTypes.arrayOf(PropTypes.node),
  /** Contents of ListViewItem description section */
  description: PropTypes.node,
  /** Contents of ListViewItem heading */
  heading: PropTypes.node,
  /** Contents for left section of ListViewItem (usually ListViewIcon) */
  leftContent: PropTypes.node,
  /** Checkbox form input component */
  checkboxInput: PropTypes.node
};
export default ListViewRow;
