import {
  Typeahead as TypeAheadSelect,
  Highlighter,
  Menu,
  MenuItem,
  Token,
  TypeaheadMenu,
  asyncContainer,
  menuItemContainer,
  tokenContainer
} from 'react-bootstrap-typeahead';

TypeAheadSelect.Highlighter = Highlighter;
TypeAheadSelect.Menu = Menu;
TypeAheadSelect.MenuItem = MenuItem;
TypeAheadSelect.Token = Token;
TypeAheadSelect.TypeaheadMenu = TypeaheadMenu;
TypeAheadSelect.asyncContainer = asyncContainer;
TypeAheadSelect.menuItemContainer = menuItemContainer;
TypeAheadSelect.tokenContainer = tokenContainer;

export default TypeAheadSelect;
