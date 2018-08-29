import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import ListViewActions from './ListViewActions';
import ListViewAdditionalInfo from './ListViewAdditionalInfo';
import ListViewBody from './ListViewBody';
import ListViewCheckbox from './ListViewCheckbox';
import ListViewDescription from './ListViewDescription';
import ListViewDescriptionHeading from './ListViewDescriptionHeading';
import ListViewDescriptionText from './ListViewDescriptionText';
import ListViewExpand from './ListViewExpand';
import ListViewGroupItem from './ListViewGroupItem';
import ListViewGroupItemContainer from './ListViewGroupItemContainer';
import ListViewGroupItemHeader from './ListViewGroupItemHeader';
import ListViewIcon from './ListViewIcon';
import ListViewInfoItem from './ListViewInfoItem';
import ListViewItem from './ListViewItem';
import ListViewLeft from './ListViewLeft';
import ListViewMainInfo from './ListViewMainInfo';
import ListViewRow from './ListViewRow';

/**
 * Components in this module are used as building blocks for ListViewItem and
 * ListViewRow. If needed, components can be used to create custom ListViewItem
 *
 * Custom ListView example:
 *
 * <ListView>
 *   <ListViewGroupItem stacked expanded>
 *     <ListViewGroupItemHeader toggleExpanded={functionToToggle}> // required only if the ListViewGroupItem is supposed to be expandable
 *       <ListViewExpand expanded />
 *       <ListViewCheckbox />
 *       <ListViewActions>
 *         // buttons, dropdowns...
 *       </ListViewActions>
 *       <ListViewMainInfo>
 *         <ListViewLeft>
 *           <ListViewIcon size="sm" name={iconName} />
 *         </ListViewLeft>
 *         <ListViewBody>
 *           <ListViewDescription>
 *             <ListViewDescriptionHeading>
 *               {name}
 *             </ListViewDescriptionHeading>
 *             <ListViewDescriptionText>
 *               {description}
 *             </ListViewDescriptionText>
 *           </ListViewDescription>
 *           <ListViewAdditionalInfo>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="flavor" />
 *               {Item1}
 *             </ListViewInfoItem>
 *             <ListViewInfoItem>
 *               <ListViewIcon type="pf" name="cpu" />
 *               {Item2}
 *             </ListViewInfoItem>
 *           </ListViewAdditionalInfo>
 *         </ListViewBody>
 *       </ListViewMainInfo>
 *     </ListViewGroupItemHeader>
 *
 *     <ListViewGroupItemContainer onClose={functionWhichClosesMe} expanded>
 *       <Row>Some content goes here</Row>
 *     </ListViewGroupItemContainer>
 *
 *   </ListViewGroupItem>
 *   ...
 * </ListView>
 */

/**
 * ListView component wraps ListViewItems
 */
const ListView = ({ children, className, ...props }) => {
  const classes = classNames('list-group list-view-pf list-view-pf-view', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
ListView.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Children nodes - ListViewGroupItem or ListViewItem instances */
  children: PropTypes.node
};
ListView.defaultProps = {
  className: '',
  children: null
};

ListView.Actions = ListViewActions;
ListView.AdditionalInfo = ListViewAdditionalInfo;
ListView.Body = ListViewBody;
ListView.Checkbox = ListViewCheckbox;
ListView.Description = ListViewDescription;
ListView.DescriptionHeading = ListViewDescriptionHeading;
ListView.DescriptionText = ListViewDescriptionText;
ListView.Expand = ListViewExpand;
ListView.GroupItem = ListViewGroupItem;
ListView.GroupItemContainer = ListViewGroupItemContainer;
ListView.GroupItemHeader = ListViewGroupItemHeader;
ListView.Icon = ListViewIcon;
ListView.InfoItem = ListViewInfoItem;
ListView.Item = ListViewItem;
ListView.Left = ListViewLeft;
ListView.MainInfo = ListViewMainInfo;
ListView.Row = ListViewRow;

export default ListView;
