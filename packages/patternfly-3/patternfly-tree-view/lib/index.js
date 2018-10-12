import React from 'react';
import { Tree } from 'react-wooden-tree';

const data = [
  {
    text: 'Parent 1 - Expanded',
    state: { expanded: true, checked: true },
    attr: { 'data-random': 'notThatRandom' },
    nodes: [
      { text: 'Child 1 - Custom Icon', icon: 'fa fa-stop fa-fw', state: { checked: true } },
      {
        text: 'Child 2 - Non checkable and disabled - no icon',
        icon: 'fa fa-fw',
        checkable: false,
        state: { disabled: true }
      },
      { text: 'Child 3 - No checkbox', hideCheckbox: true },
      { text: 'Child 4 - LazyLoadable', lazyLoad: true, attr: { 'data-random': 'random' } }
    ]
  },
  {
    text: 'Parent 2 - Not expanded',
    state: { expanded: false, checked: false },
    nodes: [
      { text: 'Child 1 - Custom Icon', icon: 'fa fa-stop' },
      { text: 'Child 2 - No icon specified', classes: 'custom-class' },
      { text: 'Child 3 - Image icon', image: 'https://www.wpsuperstars.net/wp-content/uploads/2015/01/59.png' }
    ]
  },
  {
    text: 'Parent 3 - Children checkboxes',
    hideCheckbox: true,
    state: { expanded: true },
    attr: { 'data-random': 'random' },
    nodes: [
      { text: 'Child 1 - Has checkbox - checked', state: { checked: true } },
      { text: 'Child 2 - Has checkbox - unchecked', attr: { 'data-random': 'random' } }
    ]
  },
  {
    text: 'Parent 4 - Changed icon colors',
    nodes: [
      {
        text: 'Child 1 - Changed icon color',
        icon: 'fa fa-circle ',
        iconColor: 'rgba(255,100,0,1)'
      },
      {
        text: 'Child 2 - Changed background color',
        icon: 'fa fa-circle',
        iconBackground: '#9800ff'
      },
      {
        text: 'Child 3 - Changed both colors',
        icon: 'fa fa-circle',
        iconColor: 'red',
        iconBackground: '#0d21ba'
      },
      {
        text: 'Child 4 - Changed background color - with transparency',
        icon: 'fa fa-circle',
        iconBackground: 'rgba(0,0,0,0.5'
      }
    ]
  }
];

const actionMapper = {
  'state.expanded': Tree.nodeExpanded,
  'state.checked': Tree.nodeChecked,
  'state.disabled': Tree.nodeDisabled,
  'state.selected': Tree.nodeSelected,
  nodes: Tree.nodeChildren,
  loading: Tree.nodeLoading
};

class App extends React.Component {
  /**
   * Constructor.
   * @param {{}} props
   */
  constructor(props) {
    super(props);

    this.data = Tree.initTree(data);

    // console.log(Tree.nodeSearch(this.data, null, 'data-random', 'random'));

    this.state = {
      tree: this.data
    };

    this.onDataChange = this.onDataChange.bind(this);
    this.lazyLoad = this.lazyLoad.bind(this);
  }

  /**
   * The callback function for changing data in the tree.
   *
   * @param {string} nodeId The nodeId of the node.
   * @param {string} type The field name which changed.
   * @param {boolean} value The new value to assign.
   */
  onDataChange(nodeId, type, value) {
    let node = Tree.nodeSelector(this.data, nodeId);
    if (node == null) {
      return;
    }

    if (actionMapper.hasOwnProperty(type)) {
      node = actionMapper[type](node, value);
      this.data = Tree.nodeUpdater(this.data, node);
    } else {
      // console.log(nodeId, type, value);
    }

    this.setState({ tree: this.data });
  }

  /**
   * The lazy loading function - Dummy
   *
   * @param {NodeProps} node The node to get children.
   * @returns {NodeProps[]} The children.
   */
  lazyLoad(node) {
    const isWorking = true;

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isWorking) {
          resolve([]);
        } else {
          reject(new Error('Something happened.'));
        }
      }, 2000);
    });
  }

  render() {
    return (
      <div className="App">
        <Tree
          hierarchicalCheck
          showCheckbox
          multiSelect
          preventDeselect
          allowReselect
          checkboxFirst
          nodeIcon="fa fa-fw fa-circle"
          data={this.state.tree}
          onDataChange={this.onDataChange}
          lazyLoad={this.lazyLoad}
        />
      </div>
    );
  }
}

export const x = () => (
  <div>
    <App />
  </div>
);
