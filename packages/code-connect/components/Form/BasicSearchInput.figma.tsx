import figma from '@figma/code-connect';
import { SearchInput } from '@patternfly/react-core';

// Documentation for SearchInput can be found at https://www.patternfly.org/components/search-input

figma.connect(
  SearchInput,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=8065-140137',
  {
    props: {
      placeholder: figma.string('✏️ Placeholder text'),
      value: figma.string('✏️ Searched text'),
      resultsCount: figma.boolean('Show count', {
        true: '3',
        false: undefined
      }),
      showNavigableOptions: figma.boolean('Show navigable options', {
        true: {
          isNextNavigationButtonDisabled: `currentResult === 3`,
          isPreviousNavigationButtonDisabled: `currentResult === 1`,
          resultsCount: `${currentResult} / ${resultsCount}`,
          onNextClick: () => {},
          onPreviousClick: () => {}
        },
        false: undefined
      }),
      submitSearchButtonLabel: figma.boolean('Show submit button', {
        true: {
          label: 'Search',
          onSearch: () => {}
        },
        false: undefined
      })
    },
    example: (props) => (
      <SearchInput
        aria-label="Search basic example"
        isNextNavigationButtonDisabled={props.showNavigableOptions.isNextNavigationButtonDisabled}
        isPreviousNavigationButtonDisabled={props.showNavigableOptions.isPreviousNavigationButtonDisabled}
        onChange={() => {}}
        onClear={() => {}}
        onNextClick={props.showNavigableOptions.onNextClick}
        onPreviousClick={props.showNavigableOptions.onPreviousClick}
        onSearch={props.submitSearchButtonLabel.onSearch}
        placeholder={props.placeholder}
        resultsCount={props.showNavigableOptions.resultsCount}
        submitSearchButtonLabel={props.submitSearchButtonLabel.label}
        value={props.value}
      />
    )
  }
);
