import React from 'react';
import Tagging from '../Tagging/Tagging';

class TaggingStoryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    tags : [
      { description: 'Name', id: 1, singleValue: true, values: [{ description: 'Pepa', id: 11 }, { description: 'Franta', id: 12 }] },
      { description: 'Number', id: 2, values: [{ description: '1', id: 21 }, { description: '2', id: 22 }] },
      { description: 'Animal', id: 3, values: [{ description: 'Duck', id: 31 }, { description: 'Cat', id: 32 }, { description: 'Dog', id: 33 }] },
      { description: 'Food', id: 4, values: [{ description: 'Steak', id: 41 }, { description: 'Duck', id: 42 }, { description: 'Salad', id: 43 }] },
      {
        description: 'Something very, very looooooooong',
        id: 5,
        values: [{ description: 'Knedlik', id: 51 },
          { description: 'Daenerys Stormborn of the House Targaryen, First of Her Name,...and Mother of Dragons', id: 52 }],
      },
    ],
    assignedTags : [],
    selectedTagCategory : {},
    selectedTagValue : {}
  };
};

  onTagCategoryChange = (selectedCategory) => {
    this.setState({selectedTagCategory: {...selectedCategory}});
  };

  onTagValueChange = ({ tagValue, tagCategory }) => {
    const assignedTags = [...this.state.assignedTags];
    const filteredTags = assignedTags.filter(tag => (tag.tagCategory.id !== tagCategory.id));
    this.setState({assignedTags: [...filteredTags, { tagCategory: tagCategory, tagValues: [tagValue] } ]});
    this.setState({selectedTagValue: tagValue});
  };

  onTagMultiValueChange = ({ tagValue, tagCategory }) => {
    const assignedTags = [...this.state.assignedTags];
    const filteredTags = assignedTags.filter(tag => (tag.tagCategory.id !== tagCategory.id));
    const selectedItem = assignedTags.find(tag => (tag.tagCategory.id === tagCategory.id)) || { tagValues: [] };
    const oldValues = selectedItem.tagValues.filter(value => (value.id !== tagValue.id));
    this.setState({ assignedTags : [...filteredTags, {
      tagCategory: { description: tagCategory.description, id: tagCategory.id },
      tagValues: [...oldValues].concat([tagValue]),
    }]});
    this.setState({selectedTagValue: tagValue});
  };

  onTagDeleteClick = ({ tagCategory, tagValue }) => {
    const assignedTags = [...this.state.assignedTags];
    const filteredTags = assignedTags.filter(tag => (tag.tagCategory.id !== tagCategory.id));
    const selectedItem = assignedTags.find(tag => (tag.tagCategory.id === tagCategory.id)) || { tagValues: [] };
    const filteredTagValues = selectedItem.tagValues.filter(value => (value.id !== tagValue.id));

    this.setState({ assignedTags: [...filteredTags,
      {
        tagCategory: tagCategory,
        tagValues: [...filteredTagValues],
      },
    ].filter(tag => (tag.tagValues.length !== 0))});
  };

  render() {
    return (
      <Tagging
        tags={this.state.tags}
        assignedTags={this.state.assignedTags}
        onTagValueChange={this.onTagValueChange}
        onTagMultiValueChange={this.onTagMultiValueChange}
        onTagCategoryChange={this.onTagCategoryChange}
        onTagDeleteClick={this.onTagDeleteClick}
        selectedTagCategory={this.state.selectedTagCategory}
        selectedTagValue={this.state.selectedTagValue}
      />
    );
  }
}



export default TaggingStoryComponent;
