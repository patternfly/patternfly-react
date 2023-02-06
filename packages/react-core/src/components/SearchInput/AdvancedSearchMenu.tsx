import * as React from 'react';
import { Button } from '../Button';
import { ActionGroup, Form, FormGroup } from '../Form';
import { TextInput } from '../TextInput';
import { GenerateId, KeyTypes } from '../../helpers';
import { SearchInputSearchAttribute } from './SearchInput';
import { Panel, PanelMain, PanelMainBody } from '../Panel';
import { css } from '@patternfly/react-styles';

export interface AdvancedSearchMenuProps extends Omit<React.HTMLProps<HTMLDivElement>, 'onChange'> {
  /** Delimiter in the query string for pairing attributes with search values.
   * Required whenever attributes are passed as props.
   */
  advancedSearchDelimiter?: string;
  /** Array of attribute values used for dynamically generated advanced search. */
  attributes?: string[] | SearchInputSearchAttribute[];
  /** Additional classes added to the advanced search menu. */
  className?: string;
  /* Additional elements added after the attributes in the form.
   * The new form elements can be wrapped in a form group component for automatic formatting. */
  formAdditionalItems?: React.ReactNode;
  /** Function which builds an attribute-value map by parsing the value in the search input. */
  getAttrValueMap?: () => { [key: string]: string };
  /** Attribute label for strings unassociated with one of the provided listed attributes. */
  hasWordsAttrLabel?: React.ReactNode;
  /** Flag for toggling the open/close state of the advanced search menu. */
  isSearchMenuOpen?: boolean;
  /** A callback for when the input value changes. */
  onChange?: (event: React.FormEvent<HTMLInputElement>, value: string) => void;
  /** A callback for when the user clicks the clear button. */
  onClear?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** A callback for when the search button is clicked. */
  onSearch?: (
    event: React.SyntheticEvent<HTMLButtonElement>,
    value: string,
    attrValueMap: { [key: string]: string }
  ) => void;
  /** A callback for when the open advanced search button is clicked. */
  onToggleAdvancedMenu?: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  /** Ref of the input element within the search input. */
  parentInputRef?: React.RefObject<any>;
  /** Ref of the div wrapping the whole search input. */
  parentRef?: React.RefObject<any>;
  /** Label for the button which resets the advanced search form and clears the search input. */
  resetButtonLabel?: string;
  /** Label for the button which calls the onSearch event handler. */
  submitSearchButtonLabel?: string;
  /** Value of the search input. */
  value?: string;
}

export const AdvancedSearchMenu: React.FunctionComponent<AdvancedSearchMenuProps> = ({
  className,
  parentRef,
  parentInputRef,
  value = '',
  attributes = [] as string[],
  formAdditionalItems,
  hasWordsAttrLabel = 'Has words',
  advancedSearchDelimiter,
  getAttrValueMap,
  onChange,
  onSearch,
  onClear,
  resetButtonLabel = 'Reset',
  submitSearchButtonLabel = 'Search',
  isSearchMenuOpen,
  onToggleAdvancedMenu
}: AdvancedSearchMenuProps) => {
  const firstAttrRef = React.useRef(null);
  const [putFocusBackOnInput, setPutFocusBackOnInput] = React.useState(false);

  React.useEffect(() => {
    if (attributes.length > 0 && !advancedSearchDelimiter) {
      // eslint-disable-next-line no-console
      console.error(
        'AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop'
      );
    }
  });

  React.useEffect(() => {
    if (isSearchMenuOpen && firstAttrRef && firstAttrRef.current) {
      firstAttrRef.current.focus();
      setPutFocusBackOnInput(true);
    } else if (!isSearchMenuOpen && putFocusBackOnInput && parentInputRef && parentInputRef.current) {
      parentInputRef.current.focus();
    }
  }, [isSearchMenuOpen]);

  React.useEffect(() => {
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('touchstart', onDocClick);
    document.addEventListener('keydown', onEscPress);

    return function cleanup() {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('touchstart', onDocClick);
      document.removeEventListener('keydown', onEscPress);
    };
  });

  const onDocClick = (event: Event) => {
    const clickedWithinSearchInput = parentRef && parentRef.current.contains(event.target as Node);
    if (isSearchMenuOpen && !clickedWithinSearchInput) {
      onToggleAdvancedMenu(event as any);
    }
  };

  const onEscPress = (event: KeyboardEvent) => {
    if (
      isSearchMenuOpen &&
      event.key === KeyTypes.Escape &&
      parentRef &&
      parentRef.current.contains(event.target as Node)
    ) {
      onToggleAdvancedMenu(event as any);
      if (parentInputRef) {
        parentInputRef.current.focus();
      }
    }
  };

  const onSearchHandler = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(event, value, getAttrValueMap());
    }
    if (isSearchMenuOpen) {
      onToggleAdvancedMenu(event as any);
    }
  };

  const handleValueChange = (attribute: string, newValue: string, event: React.FormEvent<HTMLInputElement>) => {
    const newMap = getAttrValueMap();

    newMap[attribute] = newValue;
    let updatedValue = '';
    Object.entries(newMap).forEach(([k, v]) => {
      if (v.trim() !== '') {
        /* Wrap the value in quotes if it contains spaces */
        const quoteWrappedValue = v.includes(' ') ? `'${v.replace(/(^'|'$)/g, '')}'` : v;

        if (k !== 'haswords') {
          updatedValue = `${updatedValue} ${k}${advancedSearchDelimiter}${quoteWrappedValue}`;
        } else {
          updatedValue = `${updatedValue} ${quoteWrappedValue}`;
        }
      }
    });

    if (onChange) {
      onChange(event, updatedValue.replace(/^\s+/g, ''));
    }
  };

  const getValue = (attribute: string) => {
    const map = getAttrValueMap();
    return map.hasOwnProperty(attribute) ? map[attribute] : '';
  };

  const buildFormGroups = () => {
    const formGroups = [] as React.ReactNode[];
    attributes.forEach((attribute: string | SearchInputSearchAttribute, index: number) => {
      const display = typeof attribute === 'string' ? attribute : attribute.display;
      const queryAttr = typeof attribute === 'string' ? attribute : attribute.attr;
      if (index === 0) {
        formGroups.push(
          <FormGroup label={display} fieldId={`${queryAttr}_${index}`} key={`${attribute}_${index}`}>
            <TextInput
              ref={firstAttrRef}
              type="text"
              id={`${queryAttr}_${index}`}
              value={getValue(queryAttr)}
              onChange={(value, evt) => handleValueChange(queryAttr, value, evt)}
            />
          </FormGroup>
        );
      } else {
        formGroups.push(
          <FormGroup label={display} fieldId={`${queryAttr}_${index}`} key={`${attribute}_${index}`}>
            <TextInput
              type="text"
              id={`${queryAttr}_${index}`}
              value={getValue(queryAttr)}
              onChange={(value, evt) => handleValueChange(queryAttr, value, evt)}
            />
          </FormGroup>
        );
      }
    });
    formGroups.push(
      <GenerateId key={'hasWords'}>
        {randomId => (
          <FormGroup label={hasWordsAttrLabel} fieldId={randomId}>
            <TextInput
              type="text"
              id={randomId}
              value={getValue('haswords')}
              onChange={(value, evt) => handleValueChange('haswords', value, evt)}
            />
          </FormGroup>
        )}
      </GenerateId>
    );
    return formGroups;
  };

  return isSearchMenuOpen ? (
    <Panel variant="raised" className={css(className)}>
      <PanelMain>
        <PanelMainBody>
          <Form>
            {buildFormGroups()}
            {formAdditionalItems ? formAdditionalItems : null}
            <ActionGroup>
              <Button variant="primary" type="submit" onClick={onSearchHandler} isDisabled={!value}>
                {submitSearchButtonLabel}
              </Button>
              {!!onClear && (
                <Button variant="link" type="reset" onClick={onClear}>
                  {resetButtonLabel}
                </Button>
              )}
            </ActionGroup>
          </Form>
        </PanelMainBody>
      </PanelMain>
    </Panel>
  ) : null;
};
AdvancedSearchMenu.displayName = 'SearchInput';
