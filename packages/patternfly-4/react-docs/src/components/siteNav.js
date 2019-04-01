import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { Location } from '@reach/router';

import { Nav, NavList, NavExpandable, NavItem } from '@patternfly/react-core';

const SiteNav = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
      }
      allSitePage {
        edges {
          node {
            path
            context {
              title
            }
          }
        }
      }
    }`);

  const getSlashCount = str => {
    let count = 0;
    str.split('/').forEach(s => {
      if (s.length > 0)
        count++;
    });

    return count;
  }

  const grouped = data.allSitePage.edges
    .map(edge => edge.node)
    .filter(node => node.context)
    .map(node => { // Add a title for pages under src/pages/*/*.js
      if (!node.context.title) {
        const split = node.path.split('/');
        split.forEach(s => { if (s) node.context.title = s; });
      }
      return node;
    })
    .filter(node => getSlashCount(node.path) === 2) // to exclude default /404.html/
    .reduce((acc, node) => {
      const group = node.path.split('/')[1];
      acc[group] = acc[group] || [];
      acc[group].push(node);
      return acc;
    }, {});

  const isActive = (path, curPath) => {
    return curPath === path || curPath === data.site.pathPrefix + path;
  };

  const getNavItem = (value) => (
    <Location key={value.path}>
      {({ location }) => (
        <NavItem isActive={isActive(value.path, location.pathname)} >
          <Link to={value.path} style={{ textTransform: 'capitalize' }}>{value.context.title}</Link>
        </NavItem>
      )}
    </Location>
  );

  const hasActiveLink = (navGroup, location) => {
    for (const value of navGroup) {
      if (isActive(value.path, location.pathname)) {
        return true;
      }
    }

    return false;
  };

  const getNavGroup = ([navGroupName, navGroup]) => {
    if (navGroup.length === 1) {
      return getNavItem(navGroup[0]);
    } else {
      return (
        <Location key={navGroupName}>
          {({ location }) => (
            <NavExpandable title={navGroupName} isActive={hasActiveLink(navGroup, location)} isExpanded={hasActiveLink(navGroup, location)}>
              {navGroup
                .sort((v1, v2) => v1.context.title.localeCompare(v2.context.title))
                .map(getNavItem)}
            </NavExpandable>
          )}
        </Location>
      );
    }
  };

  return (
    <Nav aria-label="Nav">
      <NavList>
        {Object.entries(grouped)
          .sort(([k1, v1], [k2, v2]) => {
            if (v1.length === 1 && v2.length > 1) { // Group single items at bottom
              return 1;
            } else if (v1.length > 1 && v2.length === 1) {
              return -1;
            }
            return k1.localeCompare(k2)
          })
          .map(getNavGroup)}
      </NavList>
    </Nav>
  );
}

export default SiteNav;
