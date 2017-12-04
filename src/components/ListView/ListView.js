import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

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
const ListView = ({ children, className, ...rest }) => {
  const classes = cx('list-group list-view-pf list-view-pf-view', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
ListView.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Children nodes - ListViewGroupItem or ListViewItem instances */
  children: PropTypes.node,
};

export default ListView;
