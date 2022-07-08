import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import RedoIcon from '@patternfly/react-icons/dist/esm/icons/redo-icon';
import EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';
import EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';
const pageData = {
  "id": "Password generator",
  "section": "demos",
  "source": "react-demos",
  "slug": "/demos/password-generator/react-demos",
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/main/packages/react-core/src/demos/PasswordGenerator.md",
  "examples": [
    "Provide a generated password"
  ]
};
pageData.liveContext = {
  RedoIcon,
  EyeIcon,
  EyeSlashIcon
};
pageData.examples = {
  'Provide a generated password': props => 
    <Example {...pageData} {...props} {...{"code":"import React from 'react';\nimport {\n  InputGroup,\n  TextInput,\n  Button,\n  Popper,\n  Menu,\n  MenuContent,\n  MenuList,\n  MenuItem,\n  MenuItemAction\n} from '@patternfly/react-core';\nimport RedoIcon from '@patternfly/react-icons/dist/esm/icons/redo-icon';\nimport EyeIcon from '@patternfly/react-icons/dist/esm/icons/eye-icon';\nimport EyeSlashIcon from '@patternfly/react-icons/dist/esm/icons/eye-slash-icon';\n\nconst PasswordGenerator: React.FunctionComponent = () => {\n  const generatePassword = () => {\n    const length = 12;\n    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@%()_-=+';\n    let retVal = '';\n    for (var i = 0, n = charset.length; i < length; ++i) {\n      retVal += charset.charAt(Math.floor(Math.random() * n));\n    }\n    return retVal;\n  };\n  const [password, setPassword] = React.useState<string>('');\n  const [generatedPassword, setGeneratedPassword] = React.useState<string>(generatePassword());\n  const [isAutocompleteOpen, setIsAutocompleteOpen] = React.useState<boolean>(false);\n  const [passwordHidden, setPasswordHidden] = React.useState<boolean>(true);\n  const searchInputRef = React.useRef(null);\n  const autocompleteRef = React.useRef(null);\n\n  React.useEffect(() => {\n    window.addEventListener('keydown', handleMenuKeys);\n    window.addEventListener('click', handleClickOutside);\n    return () => {\n      window.removeEventListener('keydown', handleMenuKeys);\n      window.removeEventListener('click', handleClickOutside);\n    };\n  }, [isAutocompleteOpen, searchInputRef.current]);\n\n  const onChange = (newValue: string) => {\n    if (searchInputRef && searchInputRef.current && searchInputRef.current.contains(document.activeElement)) {\n      setIsAutocompleteOpen(true);\n    } else {\n      setIsAutocompleteOpen(false);\n    }\n    setPassword(newValue);\n  };\n\n  // Whenever an autocomplete option is selected, set the search input value, close the menu, and put the browser\n  // focus back on the search input\n  const onSelect = (event: React.MouseEvent<HTMLButtonElement>) => {\n    event.stopPropagation();\n    setPassword(generatedPassword);\n    setIsAutocompleteOpen(false);\n    searchInputRef.current.focus();\n  };\n\n  const handleMenuKeys = (event: KeyboardEvent | React.KeyboardEvent<any>) => {\n    if (!(isAutocompleteOpen && searchInputRef.current && searchInputRef.current.contains(event.target))) {\n      return;\n    }\n    // the escape key closes the autocomplete menu and keeps the focus on the search input.\n    if (event.key === 'Escape') {\n      setIsAutocompleteOpen(false);\n      searchInputRef.current.focus();\n      // the up and down arrow keys move browser focus into the autocomplete menu\n    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {\n      const firstElement = autocompleteRef.current.querySelector('li > button:not(:disabled)');\n      firstElement && firstElement.focus();\n      event.preventDefault(); // by default, the up and down arrow keys scroll the window\n    }\n    // If the autocomplete is open and the browser focus is in the autocomplete menu\n    // hitting tab will close the autocomplete and put browser focus back on the search input.\n    else if (autocompleteRef.current.contains(event.target) && event.key === 'Tab') {\n      event.preventDefault();\n      setIsAutocompleteOpen(false);\n      searchInputRef.current.focus();\n    }\n  };\n\n  // The autocomplete menu should close if the user clicks outside the menu.\n  const handleClickOutside = (event: MouseEvent | TouchEvent | KeyboardEvent | React.KeyboardEvent<any> | React.MouseEvent<HTMLButtonElement>) => {\n    if (\n      isAutocompleteOpen &&\n      autocompleteRef &&\n      autocompleteRef.current &&\n      !searchInputRef.current.contains(event.target)\n    ) {\n      setIsAutocompleteOpen(false);\n    }\n    if (\n      !isAutocompleteOpen &&\n      searchInputRef &&\n      searchInputRef.current &&\n      searchInputRef.current.contains(event.target)\n    ) {\n      setIsAutocompleteOpen(true);\n    }\n  };\n  const textInput = (\n    <div ref={searchInputRef} id=\"password-input\">\n      <InputGroup>\n        <TextInput\n          onFocus={() => {\n            setIsAutocompleteOpen(true);\n          }}\n          isRequired\n          type={passwordHidden ? 'password' : 'text'}\n          aria-label=\"Password input\"\n          value={password}\n          onChange={onChange}\n        />\n        <Button\n          variant=\"control\"\n          onClick={() => setPasswordHidden(!passwordHidden)}\n          aria-label={passwordHidden ? 'Show password' : 'Hide password'}\n        >\n          {passwordHidden ? <EyeIcon /> : <EyeSlashIcon />}\n        </Button>\n      </InputGroup>\n    </div>\n  );\n  const autocomplete = (\n    <Menu ref={autocompleteRef} onSelect={onSelect}>\n      <MenuContent>\n        <MenuList>\n          <MenuItem\n            itemId={0}\n            actions={\n              <MenuItemAction\n                icon={<RedoIcon aria-hidden />}\n                onClick={e => {\n                  setGeneratedPassword(generatePassword());\n                }}\n                actionId=\"redo\"\n                aria-label=\"Generate a new suggested password\"\n              />\n            }\n          >\n            Use suggested password: <b>{`${generatedPassword}`}</b>\n          </MenuItem>\n        </MenuList>\n      </MenuContent>\n    </Menu>\n  );\n\n  return (\n    <Popper\n      trigger={textInput}\n      popper={autocomplete}\n      isVisible={isAutocompleteOpen}\n      enableFlip={false}\n      // append the autocomplete menu to the search input in the DOM for the sake of the keyboard navigation experience\n      appendTo={() => document.querySelector('#password-input')}\n    />\n  );\n};","title":"Provide a generated password","lang":"ts"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"demos","size":"h2","className":"ws-title ws-h2"}}>
      {`Demos`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Provide a generated password"])}
  </React.Fragment>
);
Component.displayName = 'DemosPasswordGeneratorReactDemosDocs';
Component.pageData = pageData;

export default Component;
