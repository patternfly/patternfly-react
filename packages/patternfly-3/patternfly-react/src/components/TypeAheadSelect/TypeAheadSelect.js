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
import AsyncTypeAheadSelect from './AsyncTypeAheadSelect';

TypeAheadSelect.Highlighter = Highlighter;
TypeAheadSelect.Menu = Menu;
TypeAheadSelect.MenuItem = MenuItem;
TypeAheadSelect.Token = Token;
TypeAheadSelect.TypeaheadMenu = TypeaheadMenu;
TypeAheadSelect.asyncContainer = asyncContainer;
TypeAheadSelect.menuItemContainer = menuItemContainer;
TypeAheadSelect.tokenContainer = tokenContainer;

TypeAheadSelect.Async = AsyncTypeAheadSelect;

export default TypeAheadSelect;
