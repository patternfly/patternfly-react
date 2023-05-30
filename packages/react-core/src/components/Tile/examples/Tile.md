---
id: Tile
section: components
cssPrefix: pf-v5-c-tile
propComponents: ['Tile']
---

import PlusIcon from '@patternfly/react-icons/dist/esm/icons/plus-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

## Examples

### Basic tile
Basic tiles have all of their variables under the `<Tile>` component. You can allow or deny access using the states `isSelected` and `isDisabled`. You can also alter the title text inside of the tile by inputting the desired words next to `title=`.

### With subtext 
Tile subtext can provide users with additional context. To add subtext, input a short description to the `<Tile>` component. 

### With icon
Icons can provide users with a visual to understand what the tile is being used for. To add icons, input `icon=` inside of `<Tile>` and set it equal to one of the available [icons](https://www.patternfly.org/v4/components/icon/).

### Stacked tile
You can further customize your icon by placing it above your title. To stack your icon on top of the title, input `isStacked` inside of `<Tile>`.

### Stacked tile with large icons
You can make your icons larger to catch the user's attention. To make an icon large, input `isDisplayLarge` inside of `<Tile>`. 

Be aware that `isDisplayLarge` cannot be used unless `isStacked` has already been typed.

### Subtexts with extra content
To provide users with a large amount of context, subtext can be elongated to wrap around to the next line. To format a long subtext, you can input the component `Flex` into `<Tile>`. 

You can also change the type of `Flex` you can use so that the line breaks in the subtext fits your needs. You can do this by changing the default flex. The standard is `default: “flex_1”`, and changing the number in the default will also change where the sentence breaks.

