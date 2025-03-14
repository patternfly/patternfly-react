import { useState } from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';
import GitlabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import GoogleIcon from '@patternfly/react-icons/dist/esm/icons/google-icon';

export const TreeViewWithIconPerItem: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = useState<TreeViewDataItem[]>();

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };
  const options: TreeViewDataItem[] = [
    {
      name: 'Github accounts',
      id: 'iconPerItem-Github',
      icon: <GithubIcon />,
      children: [
        {
          name: 'Account 1',
          id: 'iconPerItem-Acc1'
        },
        {
          name: 'Account 2',
          id: 'iconPerItem-Acc2'
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Gitlab accounts',
      id: 'iconPerItem-Gitlab',
      icon: <GitlabIcon />,
      children: [
        {
          name: 'Account 3',
          id: 'iconPerItem-Acc3'
        }
      ]
    },
    {
      name: 'Google accounts',
      id: 'iconPerItem-Google',
      icon: <GoogleIcon />,
      children: [
        {
          name: 'Account 4',
          id: 'iconPerItem-Acc4'
        }
      ]
    }
  ];
  return (
    <TreeView
      aria-label="Tree View with unique icon per item example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
    />
  );
};
