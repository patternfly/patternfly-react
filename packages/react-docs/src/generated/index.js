module.exports = {
  '/developer-resources/global-css-variables': {
    id: "Global CSS variables",
    title: "Global CSS variables",
    toc: [{"text":"About CSS variables"},[{"text":"Global variables"},{"text":"Component variables"},{"text":"Breakpoint variables and class suffixes"},{"text":"Using the variable system"}],{"text":"Global CSS variables"},{"text":"Chart CSS variables"}],
    section: "developer-resources",
    source: "pages-overview",
    Component: () => import(/* webpackChunkName: "developer-resources/global-css-variables/index" */ './developer-resources/global-css-variables')
  },
  '/developer-resources/red-hat-font': {
    id: "Red Hat font",
    title: "Red Hat font",
    toc: [{"text":"Overview"},[{"text":"Available Opt-ins"},{"text":"Using opt-in classes"}]],
    section: "developer-resources",
    source: "pages-overview",
    Component: () => import(/* webpackChunkName: "developer-resources/red-hat-font/index" */ './developer-resources/red-hat-font')
  },
  '/components/about-modal/react': {
    id: "About modal",
    title: "About modal",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Without product name"},{"text":"Complex user positioned content"},{"text":"Custom background image"}]],
    examples: ["Basic","Without product name","Complex user positioned content","Custom background image"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/about-modal/react/index" */ './components/about-modal/react')
  },
  '/components/accordion/react': {
    id: "Accordion",
    title: "Accordion",
    toc: [{"text":"Examples"},[{"text":"Definition list"},{"text":"Single expand behavior"},{"text":"Fixed with multiple expand behavior"},{"text":"Bordered"}]],
    examples: ["Definition list","Single expand behavior","Fixed with multiple expand behavior","Bordered"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/accordion/react/index" */ './components/accordion/react')
  },
  '/components/action-list/react': {
    id: "Action list",
    title: "Action list",
    toc: [{"text":"Examples"},[{"text":"Action list single group"},{"text":"Action list with icons"},{"text":"Action list multiple groups"},{"text":"Action list with cancel button"}]],
    examples: ["Action list single group","Action list with icons","Action list multiple groups","Action list with cancel button"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/action-list/react/index" */ './components/action-list/react')
  },
  '/components/alert/react': {
    id: "Alert",
    title: "Alert",
    toc: [{"text":"Examples"},[{"text":"Types"},{"text":"Variations"},{"text":"Inline types"},{"text":"Inline variations"},{"text":"Inline plain types"},{"text":"Inline plain variations"},{"text":"Expandable"},{"text":"Static live region alert"},{"text":"Dynamic live region alert"},{"text":"Async live region alert"},{"text":"Alert timeout"},{"text":"Truncate"},{"text":"Custom icons"}]],
    examples: ["Types","Variations","Inline types","Inline variations","Inline plain types","Inline plain variations","Expandable","Static live region alert","Dynamic live region alert","Async live region alert","Alert timeout","Truncate","Custom icons"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/alert/react/index" */ './components/alert/react')
  },
  '/components/alert-group/react': {
    id: "Alert group",
    title: "Alert group",
    toc: [{"text":"Examples"},[{"text":"Static alert group"},{"text":"Toast alert group"},{"text":"Toast alert group with overflow capture"},{"text":"Singular dynamic alert group"},{"text":"Singular dynamic alert group with overflow message"},{"text":"Multiple dynamic alert group"},{"text":"Async alert group"}]],
    examples: ["Static alert group","Toast alert group","Toast alert group with overflow capture","Singular dynamic alert group","Singular dynamic alert group with overflow message","Multiple dynamic alert group","Async alert group"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/alert-group/react/index" */ './components/alert-group/react')
  },
  '/components/application-launcher/react': {
    id: "Application launcher",
    title: "Application launcher",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Router link"},{"text":"Disabled"},{"text":"Aligned right"},{"text":"Aligned top"},{"text":"With tooltip"},{"text":"With sections and icons"},{"text":"With favorites and search"},{"text":"With custom icon"},{"text":"Basic with menu appended to document body"}]],
    examples: ["Basic","Router link","Disabled","Aligned right","Aligned top","With tooltip","With sections and icons","With favorites and search","With custom icon","Basic with menu appended to document body"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/application-launcher/react/index" */ './components/application-launcher/react')
  },
  '/components/avatar/react': {
    id: "Avatar",
    title: "Avatar",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Size variations"},{"text":"Bordered - light"},{"text":"Bordered - dark"}]],
    examples: ["Basic","Size variations","Bordered - light","Bordered - dark"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/avatar/react/index" */ './components/avatar/react')
  },
  '/components/backdrop/react': {
    id: "Backdrop",
    title: "Backdrop",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With spinner"}]],
    fullscreenExamples: ["Basic","With spinner"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/backdrop/react/index" */ './components/backdrop/react')
  },
  '/components/background-image/react': {
    id: "Background image",
    title: "Background image",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/background-image/react/index" */ './components/background-image/react')
  },
  '/components/back-to-top/react': {
    id: "Back to top",
    title: "Back to top",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/back-to-top/react/index" */ './components/back-to-top/react')
  },
  '/components/badge/react': {
    id: "Badge",
    title: "Badge",
    toc: [{"text":"Examples"},[{"text":"Read"},{"text":"Unread"}]],
    examples: ["Read","Unread"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/badge/react/index" */ './components/badge/react')
  },
  '/components/banner/react': {
    id: "Banner",
    title: "Banner",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/banner/react/index" */ './components/banner/react')
  },
  '/components/brand/react': {
    id: "Brand",
    title: "Brand",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Responsive"}]],
    examples: ["Basic","Responsive"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/brand/react/index" */ './components/brand/react')
  },
  '/components/breadcrumb/react': {
    id: "Breadcrumb",
    title: "Breadcrumb",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Without home link"},{"text":"With heading"},{"text":"With dropdown"}]],
    examples: ["Basic","Without home link","With heading","With dropdown"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/breadcrumb/react/index" */ './components/breadcrumb/react')
  },
  '/components/button/react': {
    id: "Button",
    title: "Button",
    toc: [{"text":"Examples"},[{"text":"Variations"},{"text":"Disabled"},{"text":"Aria disabled"},{"text":"Aria disabled button with tooltip"},{"text":"Aria disabled link as button with tooltip"},{"text":"Links as buttons"},{"text":"Inline link as span"},{"text":"Block level"},{"text":"Types"},{"text":"Small"},{"text":"Call to action"},{"text":"Progress"},{"text":"Router link"}]],
    examples: ["Variations","Disabled","Aria disabled","Aria disabled button with tooltip","Aria disabled link as button with tooltip","Links as buttons","Inline link as span","Block level","Types","Small","Call to action","Progress","Router link"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/button/react/index" */ './components/button/react')
  },
  '/components/calendar-month/react': {
    id: "Calendar month",
    title: "Calendar month",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Selectable date"},{"text":"Date range"}]],
    examples: ["Default","Selectable date","Date range"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/calendar-month/react/index" */ './components/calendar-month/react')
  },
  '/components/card/react': {
    id: "Card",
    title: "Card",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With modifiers"},{"text":"With image and actions"},{"text":"Header in card head"},{"text":"Only actions in card head (no header/footer)"},{"text":"Only image in card head"},{"text":"With no footer"},{"text":"With no header"},{"text":"With only a body section"},{"text":"With multiple body sections"},{"text":"With only a body section that fills"},{"text":"Selectable"},{"text":"Selectable accessibility highlight"},{"text":"With heading element"},{"text":"Expandable"},{"text":"Expandable with icon"},{"text":"Legacy selectable"}]],
    examples: ["Basic","With modifiers","With image and actions","Header in card head","Only actions in card head (no header/footer)","Only image in card head","With no footer","With no header","With only a body section","With multiple body sections","With only a body section that fills","Selectable","Selectable accessibility highlight","With heading element","Expandable","Expandable with icon","Legacy selectable"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/card/react/index" */ './components/card/react')
  },
  '/components/checkbox/react': {
    id: "Checkbox",
    title: "Checkbox",
    toc: [{"text":"Examples"},[{"text":"Controlled"},{"text":"Uncontrolled"},{"text":"Disabled"},{"text":"Checkbox with description"},{"text":"Checkbox with body"},{"text":"Checkbox with description and body"},{"text":"Standalone input"}]],
    examples: ["Controlled","Uncontrolled","Disabled","Checkbox with description","Checkbox with body","Checkbox with description and body","Standalone input"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/checkbox/react/index" */ './components/checkbox/react')
  },
  '/components/chip/react': {
    id: "Chip",
    title: "Chip",
    toc: [{"text":"Examples"},[{"text":"Default"}]],
    examples: ["Default"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/chip/react/index" */ './components/chip/react')
  },
  '/components/chip-group/react': {
    id: "Chip group",
    title: "Chip group",
    toc: [{"text":"Examples"},[{"text":"Simple inline"},{"text":"With categories"},{"text":"With removable categories"}]],
    examples: ["Simple inline","With categories","With removable categories"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/chip-group/react/index" */ './components/chip-group/react')
  },
  '/components/clipboard-copy/react': {
    id: "Clipboard copy",
    title: "Clipboard copy",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Read Only"},{"text":"Expanded"},{"text":"Read only expanded"},{"text":"Read only expanded by default"},{"text":"Expanded with array"},{"text":"JSON object (wrap code with pre)"},{"text":"Inline compact"},{"text":"Inline compact code"},{"text":"Inline compact with additional action"},{"text":"Inline compact in sentence"}]],
    examples: ["Basic","Read Only","Expanded","Read only expanded","Read only expanded by default","Expanded with array","JSON object (wrap code with pre)","Inline compact","Inline compact code","Inline compact with additional action","Inline compact in sentence"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/clipboard-copy/react/index" */ './components/clipboard-copy/react')
  },
  '/components/code-block/react': {
    id: "Code block",
    title: "Code block",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Expandable"}]],
    examples: ["Basic","Expandable"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/code-block/react/index" */ './components/code-block/react')
  },
  '/components/context-selector/react': {
    id: "Context selector",
    title: "Context selector",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Plain with text"},{"text":"With footer"}]],
    examples: ["Basic","Plain with text","With footer"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/context-selector/react/index" */ './components/context-selector/react')
  },
  '/components/data-list/react': {
    id: "Data list",
    title: "Data list",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Compact"},{"text":"Checkboxes, actions and additional cells"},{"text":"Actions: single and multiple"},{"text":"Expandable"},{"text":"Width modifiers"},{"text":"Selectable rows"},{"text":"Controlling text"},{"text":"Draggable"},{"text":"Small grid breakpoint"}]],
    examples: ["Basic","Compact","Checkboxes, actions and additional cells","Actions: single and multiple","Expandable","Width modifiers","Selectable rows","Controlling text","Draggable","Small grid breakpoint"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/data-list/react/index" */ './components/data-list/react')
  },
  '/components/date-picker/react': {
    id: "Date picker",
    title: "Date picker",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"American format"},{"text":"Helper text"},{"text":"Min and max date"},{"text":"French"},{"text":"Controlled"},{"text":"Controlling the date picker calendar state"}]],
    examples: ["Basic","American format","Helper text","Min and max date","French","Controlled","Controlling the date picker calendar state"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/date-picker/react/index" */ './components/date-picker/react')
  },
  '/components/description-list/react': {
    id: "Description list",
    title: "Description list",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Term help text"},{"text":"Default 2 col"},{"text":"Default 3 col on lg"},{"text":"Horizontal"},{"text":"Horizontal using custom term width modifier"},{"text":"Horizontal 2 col"},{"text":"Horizontal 3 col on lg"},{"text":"Compact"},{"text":"Compact horizontal"},{"text":"Fluid horizontal"},{"text":"Column fill"}],{"text":"Responsive column definitions"},[{"text":"Default responsive columns"},{"text":"Horizontal responsive columns"},{"text":"Responsive horizontal, vertical group layout"}],{"text":"Auto-column-width"},[{"text":"Default auto column width"},{"text":"Horizontal auto column width"}],{"text":"Inline grid"},[{"text":"Default inline grid"}],{"text":"Auto fit"},[{"text":"Auto-fit basic"},{"text":"Auto-fit, min width modified grid template columns"},{"text":"Auto-fit, min width modified, responsive grid template columns"}],{"text":"With icons"},[{"text":"Icons on terms"}]],
    examples: ["Basic","Term help text","Default 2 col","Default 3 col on lg","Horizontal","Horizontal using custom term width modifier","Horizontal 2 col","Horizontal 3 col on lg","Compact","Compact horizontal","Fluid horizontal","Column fill","Default responsive columns","Horizontal responsive columns","Responsive horizontal, vertical group layout","Default auto column width","Horizontal auto column width","Default inline grid","Auto-fit basic","Auto-fit, min width modified grid template columns","Auto-fit, min width modified, responsive grid template columns","Icons on terms"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/description-list/react/index" */ './components/description-list/react')
  },
  '/components/divider/react': {
    id: "Divider",
    title: "Divider",
    toc: [{"text":"Examples"},[{"text":"Using hr"},{"text":"Using li"},{"text":"Using div"},{"text":"Inset medium"},{"text":"Inset at various breakpoints"},{"text":"Vertical in flex layout"},{"text":"Vertical in flex layout, inset medium"},{"text":"Vertical in flex layout, inset at various breakpoints"},{"text":"Switch orientation at various breakpoints"}]],
    examples: ["Using hr","Using li","Using div","Inset medium","Inset at various breakpoints","Vertical in flex layout","Vertical in flex layout, inset medium","Vertical in flex layout, inset at various breakpoints","Switch orientation at various breakpoints"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/divider/react/index" */ './components/divider/react')
  },
  '/components/drag-and-drop/react': {
    id: "Drag and drop",
    title: "Drag and drop",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Multiple lists"}]],
    examples: ["Basic","Multiple lists"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/drag-and-drop/react/index" */ './components/drag-and-drop/react')
  },
  '/components/drawer/react': {
    id: "Drawer",
    title: "Drawer",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Panel on right"},{"text":"Panel on left"},{"text":"Panel on bottom"},{"text":"Basic inline"},{"text":"Inline panel on right"},{"text":"Inline panel on left"},{"text":"Stacked content body elements"},{"text":"Modified content padding"},{"text":"Modified panel padding"},{"text":"Additional section above drawer content"},{"text":"Static drawer"},{"text":"Breakpoint"},{"text":"Resizable on right"},{"text":"Resizable on left"},{"text":"Resizable on bottom"},{"text":"Resizable on inline"},{"text":"Panel with light-200 background"}]],
    examples: ["Basic","Panel on right","Panel on left","Panel on bottom","Basic inline","Inline panel on right","Inline panel on left","Stacked content body elements","Modified content padding","Modified panel padding","Additional section above drawer content","Static drawer","Breakpoint","Resizable on right","Resizable on left","Resizable on bottom","Resizable on inline","Panel with light-200 background"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/drawer/react/index" */ './components/drawer/react')
  },
  '/components/dropdown/react': {
    id: "Dropdown",
    title: "Dropdown",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With initial selection"},{"text":"With groups"},{"text":"Disabled"},{"text":"Primary toggle"},{"text":"Secondary toggle"},{"text":"Plain with text toggle"},{"text":"Position right"},{"text":"Alignments on different breakpoints"},{"text":"Direction up"},{"text":"With kebab"},{"text":"With badge"},{"text":"Icon only"},{"text":"Split button"},{"text":"Split button (with text)"},{"text":"Split button (indeterminate state)"},{"text":"Split button (disabled)"},{"text":"Split button action"},{"text":"Split button primary action"},{"text":"Basic panel"},{"text":"Router link"},{"text":"Dropdown with image and text"},{"text":"Appending document body vs parent"},{"text":"Dropdown with descriptions"}]],
    examples: ["Basic","With initial selection","With groups","Disabled","Primary toggle","Secondary toggle","Plain with text toggle","Position right","Alignments on different breakpoints","Direction up","With kebab","With badge","Icon only","Split button","Split button (with text)","Split button (indeterminate state)","Split button (disabled)","Split button action","Split button primary action","Basic panel","Router link","Dropdown with image and text","Appending document body vs parent","Dropdown with descriptions"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/dropdown/react/index" */ './components/dropdown/react')
  },
  '/components/dual-list-selector/react': {
    id: "Dual list selector",
    title: "Dual list selector",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Basic with tooltips"},{"text":"Basic with search"},{"text":"Using more complex options with actions"},{"text":"With tree"},{"text":"Composable dual list selector"},{"text":"Composable dual list selector with drag and drop"},{"text":"Composable dual list selector with tree"}]],
    examples: ["Basic","Basic with tooltips","Basic with search","Using more complex options with actions","With tree","Composable dual list selector","Composable dual list selector with drag and drop","Composable dual list selector with tree"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/dual-list-selector/react/index" */ './components/dual-list-selector/react')
  },
  '/components/empty-state/react': {
    id: "Empty state",
    title: "Empty state",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Extra small"},{"text":"Small"},{"text":"Large"},{"text":"Extra large"},{"text":"Spinner"},{"text":"No match found"}]],
    examples: ["Basic","Extra small","Small","Large","Extra large","Spinner","No match found"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/empty-state/react/index" */ './components/empty-state/react')
  },
  '/components/expandable-section/react': {
    id: "Expandable section",
    title: "Expandable section",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Uncontrolled"},{"text":"Uncontrolled with dynamic toggle text"},{"text":"Detached"},{"text":"Disclosure variation"},{"text":"Indented"},{"text":"With custom toggle content"}]],
    examples: ["Basic","Uncontrolled","Uncontrolled with dynamic toggle text","Detached","Disclosure variation","Indented","With custom toggle content"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/expandable-section/react/index" */ './components/expandable-section/react')
  },
  '/components/file-upload/react': {
    id: "File upload",
    title: "File upload",
    toc: [{"text":"Examples"},[{"text":"Text files"},{"text":"Simple text file"},{"text":"Text file with edits allowed"},{"text":"Restricting file size and type"},{"text":"Text file with restrictions"},{"text":"Other file types"},{"text":"Simple file of any format"},{"text":"Customizing the file preview"},{"text":"Custom file preview"},{"text":"Bringing your own file browse logic"},{"text":"Custom file upload"}]],
    examples: ["Simple text file","Text file with edits allowed","Text file with restrictions","Simple file of any format","Custom file preview","Custom file upload"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/file-upload/react/index" */ './components/file-upload/react')
  },
  '/components/form/react': {
    id: "Form",
    title: "Form",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Horizontal"},{"text":"Limit width"},{"text":"Invalid"},{"text":"Invalid with form alert"},{"text":"Validated"},{"text":"Horizontal stacked no padding top"},{"text":"Horizontal stacked helper text on top"},{"text":"Form group with additional label info"},{"text":"Form Sections"},{"text":"Grid form"},{"text":"Field Groups"}]],
    examples: ["Basic","Horizontal","Limit width","Invalid","Invalid with form alert","Validated","Horizontal stacked no padding top","Horizontal stacked helper text on top","Form group with additional label info","Form Sections","Grid form","Field Groups"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/form/react/index" */ './components/form/react')
  },
  '/components/form-select/react': {
    id: "Form select",
    title: "Form select",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Validated"},{"text":"Disabled"},{"text":"Grouped"},{"text":"Icon sprite variant"}]],
    examples: ["Basic","Validated","Disabled","Grouped","Icon sprite variant"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/form-select/react/index" */ './components/form-select/react')
  },
  '/components/helper-text/react': {
    id: "Helper text",
    title: "Helper text",
    toc: [{"text":"Examples"},[{"text":"Static"},{"text":"Static with default icons"},{"text":"Static with custom icons"},{"text":"Multiple static"},{"text":"Dynamic"},{"text":"Dynamic list"}]],
    examples: ["Static","Static with default icons","Static with custom icons","Multiple static","Dynamic","Dynamic list"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/helper-text/react/index" */ './components/helper-text/react')
  },
  '/components/hint/react': {
    id: "Hint",
    title: "Hint",
    toc: [{"text":"Examples"},[{"text":"Basic with title"},{"text":"Basic without title"}]],
    examples: ["Basic with title","Basic without title"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/hint/react/index" */ './components/hint/react')
  },
  '/components/input-group/react': {
    id: "Input group",
    title: "Input group",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With textarea"},{"text":"With dropdown"},{"text":"With popover"},{"text":"With multiple group siblings"}]],
    examples: ["Basic","With textarea","With dropdown","With popover","With multiple group siblings"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/input-group/react/index" */ './components/input-group/react')
  },
  '/components/jump-links/react': {
    id: "Jump links",
    title: "Jump links",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With centered list"},{"text":"With label"},{"text":"Vertical"},{"text":"Vertical with label"},{"text":"Expandable vertical with subsection"}]],
    examples: ["Basic","With centered list","With label","Vertical","Vertical with label","Expandable vertical with subsection"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/jump-links/react/index" */ './components/jump-links/react')
  },
  '/components/label/react': {
    id: "Label",
    title: "Label",
    toc: [{"text":"Examples"},[{"text":"Filled"},{"text":"Outline"},{"text":"Compact"},{"text":"Router link"},{"text":"Editable"}]],
    examples: ["Filled","Outline","Compact","Router link","Editable"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/label/react/index" */ './components/label/react')
  },
  '/components/label-group/react': {
    id: "Label group",
    title: "Label group",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Overflow"},{"text":"Category"},{"text":"Category removable"},{"text":"Vertical category overflow removable"},{"text":"Editable labels"},{"text":"Editable labels with add button"}]],
    examples: ["Basic","Overflow","Category","Category removable","Vertical category overflow removable","Editable labels","Editable labels with add button"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/label-group/react/index" */ './components/label-group/react')
  },
  '/components/list/react': {
    id: "List",
    title: "List",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Inline"},{"text":"Ordered"},{"text":"Plain"},{"text":"With horizontal rules"},{"text":"With icons"},{"text":"With large icons"}]],
    examples: ["Basic","Inline","Ordered","Plain","With horizontal rules","With icons","With large icons"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/list/react/index" */ './components/list/react')
  },
  '/components/login-page/react': {
    id: "Login page",
    title: "Login page",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Show/hide password"}]],
    fullscreenExamples: ["Basic","Show/hide password"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/login-page/react/index" */ './components/login-page/react')
  },
  '/components/masthead/react': {
    id: "Masthead",
    title: "Masthead",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Basic with mixed content"},{"text":"Display inline"},{"text":"Display stack"},{"text":"Display stack, display inline responsive"},{"text":"Light variant"},{"text":"Light 200 variant"},{"text":"Inset"},{"text":"With icon router link"}]],
    examples: ["Basic","Basic with mixed content","Display inline","Display stack","Display stack, display inline responsive","Light variant","Light 200 variant","Inset","With icon router link"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/masthead/react/index" */ './components/masthead/react')
  },
  '/components/menu/react': {
    id: "Menu",
    title: "Menu",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With icons"},{"text":"With checkbox"},{"text":"Filtering with text input"},{"text":"With links"},{"text":"With separator(s)"},{"text":"With titled groups"},{"text":"With description"},{"text":"With actions"},{"text":"With favorites"},{"text":"Option single select"},{"text":"Option multi select"},{"text":"With drilldown"},{"text":"With drilldown - initial drill in state"},{"text":"With drilldown - submenu functions"},{"text":"With drilldown breadcrumbs"},{"text":"Scrollable"},{"text":"Scrollable with custom menu height"},{"text":"With footer"},{"text":"With view more"}]],
    examples: ["Basic","With icons","With checkbox","Filtering with text input","With links","With separator(s)","With titled groups","With description","With actions","With favorites","Option single select","Option multi select","With drilldown","With drilldown - initial drill in state","With drilldown - submenu functions","With drilldown breadcrumbs","Scrollable","Scrollable with custom menu height","With footer","With view more"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/menu/react/index" */ './components/menu/react')
  },
  '/components/menu-toggle/react': {
    id: "Menu toggle",
    title: "Menu toggle",
    toc: [{"text":"Examples"},[{"text":"Collapsed"},{"text":"Expanded"},{"text":"Disabled"},{"text":"Count"},{"text":"Primary"},{"text":"Secondary"},{"text":"Plain"},{"text":"Plain with text"},{"text":"With icon/image and text"},{"text":"With avatar and text"},{"text":"Full height"},{"text":"Full width"}]],
    examples: ["Collapsed","Expanded","Disabled","Count","Primary","Secondary","Plain","Plain with text","With icon/image and text","With avatar and text","Full height","Full width"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/menu-toggle/react/index" */ './components/menu-toggle/react')
  },
  '/components/modal/react': {
    id: "Modal",
    title: "Modal",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With description"},{"text":"Top aligned"},{"text":"Small"},{"text":"Medium"},{"text":"Large"},{"text":"Width"},{"text":"Custom header and footer"},{"text":"No header"},{"text":"Custom Icon"},{"text":"Warning Alert"},{"text":"With wizard"},{"text":"With dropdown"},{"text":"With help"},{"text":"With form"},{"text":"With overflowing content"}]],
    examples: ["Basic","With description","Top aligned","Small","Medium","Large","Width","Custom header and footer","No header","Custom Icon","Warning Alert","With wizard","With dropdown","With help","With form","With overflowing content"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/modal/react/index" */ './components/modal/react')
  },
  '/components/file-upload---multiple/react': {
    id: "File upload - multiple",
    title: "File upload - multiple",
    toc: [[{"text":"Restricting file size and type"}],{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/file-upload---multiple/react/index" */ './components/file-upload---multiple/react')
  },
  '/components/navigation/react': {
    id: "Navigation",
    title: "Navigation",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Grouped"},{"text":"Expandable"},{"text":"Expandable (w/subnavigation titles)"},{"text":"Expandable third level"},{"text":"Mixed"},{"text":"Horizontal (only in PageHeader)"},{"text":"Horizontal subnav"},{"text":"Legacy tertiary"},{"text":"Flyout"},{"text":"Drilldown"}]],
    examples: ["Default","Grouped","Expandable","Expandable (w/subnavigation titles)","Expandable third level","Mixed","Horizontal (only in PageHeader)","Horizontal subnav","Legacy tertiary","Flyout","Drilldown"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/navigation/react/index" */ './components/navigation/react')
  },
  '/components/notification-badge/react': {
    id: "Notification badge",
    title: "Notification badge",
    toc: [{"text":"Examples"},[{"text":"Basic"}],{"text":"Examples","id":"examples-0"},[{"text":"With count"}]],
    examples: ["Basic","With count"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/notification-badge/react/index" */ './components/notification-badge/react')
  },
  '/components/notification-drawer/react': {
    id: "Notification drawer",
    title: "Notification drawer",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Groups"},{"text":"Lightweight"}]],
    examples: ["Basic","Groups","Lightweight"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/notification-drawer/react/index" */ './components/notification-drawer/react')
  },
  '/components/number-input/react': {
    id: "Number input",
    title: "Number input",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With unit"},{"text":"With unit and thresholds"},{"text":"Disabled"},{"text":"Varying sizes"},{"text":"Custom increment/decrement"},{"text":"Custom increment/decrement and thresholds"}]],
    examples: ["Default","With unit","With unit and thresholds","Disabled","Varying sizes","Custom increment/decrement","Custom increment/decrement and thresholds"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/number-input/react/index" */ './components/number-input/react')
  },
  '/components/options-menu/react': {
    id: "Options menu",
    title: "Options menu",
    toc: [{"text":"Examples"},[{"text":"Single option"},{"text":"Disabled"},{"text":"Multiple options"},{"text":"Plain"},{"text":"Align top"},{"text":"Align right"},{"text":"Plain with text"},{"text":"Plain with text disabled"},{"text":"Grouped items with titles"},{"text":"Single option with menu on document body"}]],
    examples: ["Single option","Disabled","Multiple options","Plain","Align top","Align right","Plain with text","Plain with text disabled","Grouped items with titles","Single option with menu on document body"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/options-menu/react/index" */ './components/options-menu/react')
  },
  '/components/overflow-menu/react': {
    id: "Overflow menu",
    title: "Overflow menu",
    toc: [{"text":"Examples"},[{"text":"Simple (responsive)"},{"text":"Group types"},{"text":"Multiple groups"},{"text":"Persistent"}]],
    examples: ["Simple (responsive)","Group types","Multiple groups","Persistent"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/overflow-menu/react/index" */ './components/overflow-menu/react')
  },
  '/components/page/react': {
    id: "Page",
    title: "Page",
    toc: [{"text":"Examples"},[{"text":"Vertical nav"},{"text":"Horizontal nav"},{"text":"Tertiary nav"},{"text":"With or without fill"},{"text":"Main section padding"},{"text":"Uncontrolled nav"},{"text":"Group section"},{"text":"Vertical nav using PageHeader component"},{"text":"Centered section"}]],
    examples: ["Vertical nav","Horizontal nav","Tertiary nav","With or without fill","Main section padding","Uncontrolled nav","Group section","Vertical nav using PageHeader component","Centered section"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/page/react/index" */ './components/page/react')
  },
  '/components/pagination/react': {
    id: "Pagination",
    title: "Pagination",
    toc: [{"text":"Examples"},[{"text":"Top"},{"text":"Bottom"},{"text":"Indeterminate"},{"text":"Disabled"},{"text":"No items"},{"text":"One page"},{"text":"Compact"},{"text":"Sticky"}]],
    examples: ["Top","Bottom","Indeterminate","Disabled","No items","One page","Compact"],
    fullscreenExamples: ["Sticky"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/pagination/react/index" */ './components/pagination/react')
  },
  '/components/panel/react': {
    id: "Panel",
    title: "Panel",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Header"},{"text":"Footer"},{"text":"Header and footer"},{"text":"No body"},{"text":"Raised"},{"text":"Bordered"},{"text":"Scrollable"},{"text":"Scrollable with header and footer"}]],
    examples: ["Basic","Header","Footer","Header and footer","No body","Raised","Bordered","Scrollable","Scrollable with header and footer"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/panel/react/index" */ './components/panel/react')
  },
  '/components/popover/react': {
    id: "Popover",
    title: "Popover",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Close popover from content (controlled)"},{"text":"Close popover from content (uncontrolled)"},{"text":"Without header/footer/close and no padding"},{"text":"Width auto"},{"text":"Popover react ref"},{"text":"Popover selector ref"},{"text":"Advanced"},{"text":"Popover with icon in the title"},{"text":"Alert popover"}]],
    examples: ["Basic","Close popover from content (controlled)","Close popover from content (uncontrolled)","Without header/footer/close and no padding","Width auto","Popover react ref","Popover selector ref","Advanced","Popover with icon in the title","Alert popover"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/popover/react/index" */ './components/popover/react')
  },
  '/components/progress/react': {
    id: "Progress",
    title: "Progress",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Small"},{"text":"Large"},{"text":"Outside"},{"text":"Inside"},{"text":"Success"},{"text":"Failure"},{"text":"Warning"},{"text":"Inside success"},{"text":"Outside failure"},{"text":"Single line"},{"text":"Without measure"},{"text":"Failure without measure"},{"text":"Finite step"},{"text":"Progress (step instruction)"},{"text":"Truncate title"},{"text":"Title outside of progress bar"}]],
    examples: ["Basic","Small","Large","Outside","Inside","Success","Failure","Warning","Inside success","Outside failure","Single line","Without measure","Failure without measure","Finite step","Progress (step instruction)","Truncate title","Title outside of progress bar"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/progress/react/index" */ './components/progress/react')
  },
  '/components/progress-stepper/react': {
    id: "Progress stepper",
    title: "Progress stepper",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Basic with descriptions"},{"text":"Center aligned with descriptions"},{"text":"Vertical with descriptions"},{"text":"Compact"},{"text":"Basic with an issue"},{"text":"Basic with a failure"},{"text":"Basic with Patternfly icons"},{"text":"With help popover"}]],
    examples: ["Basic","Basic with descriptions","Center aligned with descriptions","Vertical with descriptions","Compact","Basic with an issue","Basic with a failure","Basic with Patternfly icons","With help popover"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/progress-stepper/react/index" */ './components/progress-stepper/react')
  },
  '/components/radio/react': {
    id: "Radio",
    title: "Radio",
    toc: [{"text":"Examples"},[{"text":"Controlled"},{"text":"Uncontrolled"},{"text":"Reversed"},{"text":"Label wraps"},{"text":"Disabled"},{"text":"With description"},{"text":"With body"},{"text":"With description and body"},{"text":"Standalone input"}]],
    examples: ["Controlled","Uncontrolled","Reversed","Label wraps","Disabled","With description","With body","With description and body","Standalone input"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/radio/react/index" */ './components/radio/react')
  },
  '/components/search-input/react': {
    id: "Search input",
    title: "Search input",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Match with result count"},{"text":"Match with navigable options"},{"text":"With submit button"},{"text":"Focus search input using ref"},{"text":"Advanced"}]],
    examples: ["Basic","Match with result count","Match with navigable options","With submit button","Focus search input using ref","Advanced"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/search-input/react/index" */ './components/search-input/react')
  },
  '/components/select/react': {
    id: "Select",
    title: "Select",
    toc: [{"text":"Examples"},[{"text":"Single"},{"text":"Single with description"},{"text":"Grouped single"},{"text":"Validated"},{"text":"Checkbox input"},{"text":"Checkbox input with counts"},{"text":"Checkbox input no badge"},{"text":"Grouped checkbox input"},{"text":"Grouped single with filtering"},{"text":"Grouped checkbox input with filtering"},{"text":"Grouped checkbox input with filtering and placeholder text"},{"text":"Grouped checkbox input with filtering and custom badging"},{"text":"Typeahead"},{"text":"Grouped typeahead"},{"text":"Custom filtering"},{"text":"Multiple"},{"text":"Multiple with Custom Chip Group Props"},{"text":"Multiple with Render Custom Chip Group"},{"text":"Multiple with custom objects"},{"text":"Plain multiple typeahead"},{"text":"Panel"},{"text":"Appending document body vs parent"},{"text":"Favorites"},{"text":"Footer"},{"text":"Footer with checkboxes"},{"text":"View more"},{"text":"View more with checkboxes"},{"text":"With a style applied to the placeholder text"},{"text":"With a style applied to the placeholder option"}]],
    examples: ["Single","Single with description","Grouped single","Validated","Checkbox input","Checkbox input with counts","Checkbox input no badge","Grouped checkbox input","Grouped single with filtering","Grouped checkbox input with filtering","Grouped checkbox input with filtering and placeholder text","Grouped checkbox input with filtering and custom badging","Typeahead","Grouped typeahead","Custom filtering","Multiple","Multiple with Custom Chip Group Props","Multiple with Render Custom Chip Group","Multiple with custom objects","Plain multiple typeahead","Panel","Appending document body vs parent","Favorites","Footer","Footer with checkboxes","View more","View more with checkboxes","With a style applied to the placeholder text","With a style applied to the placeholder option"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/select/react/index" */ './components/select/react')
  },
  '/components/sidebar/react': {
    id: "Sidebar",
    title: "Sidebar",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Stack"},{"text":"Panel right with gutter"},{"text":"Sticky panel"},{"text":"Static panel"},{"text":"Responsive panel width"}]],
    examples: ["Basic","Stack","Panel right with gutter","Sticky panel","Static panel","Responsive panel width"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/sidebar/react/index" */ './components/sidebar/react')
  },
  '/components/simple-list/react': {
    id: "Simple list",
    title: "Simple list",
    toc: [{"text":"Examples"},[{"text":"Simple list"},{"text":"Grouped list"},{"text":"Uncontrolled simple list"}]],
    examples: ["Simple list","Grouped list","Uncontrolled simple list"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/simple-list/react/index" */ './components/simple-list/react')
  },
  '/components/skeleton/react': {
    id: "Skeleton",
    title: "Skeleton",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Percentage widths"},{"text":"Percentage heights"},{"text":"Text modifiers"},{"text":"Shapes"}]],
    examples: ["Default","Percentage widths","Percentage heights","Text modifiers","Shapes"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/skeleton/react/index" */ './components/skeleton/react')
  },
  '/components/skip-to-content/react': {
    id: "Skip to content",
    title: "Skip to content",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    fullscreenExamples: ["Basic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/skip-to-content/react/index" */ './components/skip-to-content/react')
  },
  '/components/slider/react': {
    id: "Slider",
    title: "Slider",
    toc: [{"text":"Examples"},[{"text":"Discrete"},{"text":"Continuous"},{"text":"Value input"},{"text":"Thumb value input"},{"text":"Actions"},{"text":"Disabled"}]],
    examples: ["Discrete","Continuous","Value input","Thumb value input","Actions","Disabled"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/slider/react/index" */ './components/slider/react')
  },
  '/components/spinner/react': {
    id: "Spinner",
    title: "Spinner",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Size variations"},{"text":"Custom size"}]],
    examples: ["Basic","Size variations","Custom size"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/spinner/react/index" */ './components/spinner/react')
  },
  '/components/switch/react': {
    id: "Switch",
    title: "Switch",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Reversed Layout"},{"text":"Without label"},{"text":"Checked with label"},{"text":"Disabled"},{"text":"Uncontrolled"}]],
    examples: ["Basic","Reversed Layout","Without label","Checked with label","Disabled","Uncontrolled"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/switch/react/index" */ './components/switch/react')
  },
  '/components/tabs/react': {
    id: "Tabs",
    title: "Tabs",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With tooltip react ref"},{"text":"Uncontrolled"},{"text":"Box light variation"},{"text":"Default overflow"},{"text":"Vertical"},{"text":"Vertical expandable"},{"text":"Vertical expandable uncontrolled"},{"text":"Inset"},{"text":"Page Insets"},{"text":"Icons and text"},{"text":"Tabs with sub tabs"},{"text":"Filled"},{"text":"Filled with icons"},{"text":"Using the nav element"},{"text":"Sub nav using the nav element"},{"text":"Separate content"},{"text":"Tab content with body and padding"},{"text":"Children mounting on click"},{"text":"Unmounting invisible children"},{"text":"Toggled separate content"},{"text":"Dynamic"}]],
    examples: ["Default","With tooltip react ref","Uncontrolled","Box light variation","Default overflow","Vertical","Vertical expandable","Vertical expandable uncontrolled","Inset","Page Insets","Icons and text","Tabs with sub tabs","Filled","Filled with icons","Using the nav element","Sub nav using the nav element","Separate content","Tab content with body and padding","Children mounting on click","Unmounting invisible children","Toggled separate content","Dynamic"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/tabs/react/index" */ './components/tabs/react')
  },
  '/components/text/react': {
    id: "Text",
    title: "Text",
    toc: [{"text":"Examples"},[{"text":"Headings"},{"text":"Body"},{"text":"Unordered list"},{"text":"Ordered list"},{"text":"Data list"},{"text":"Visited"}]],
    examples: ["Headings","Body","Unordered list","Ordered list","Data list","Visited"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/text/react/index" */ './components/text/react')
  },
  '/components/text-area/react': {
    id: "Text area",
    title: "Text area",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Invalid"},{"text":"Validated"},{"text":"Vertically resizable text area"},{"text":"Horizontally resizable text area"},{"text":"Uncontrolled"},{"text":"Disabled"},{"text":"Auto resizing"},{"text":"Icon sprite variants"}]],
    examples: ["Basic","Invalid","Validated","Vertically resizable text area","Horizontally resizable text area","Uncontrolled","Disabled","Auto resizing","Icon sprite variants"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/text-area/react/index" */ './components/text-area/react')
  },
  '/components/text-input/react': {
    id: "Text input",
    title: "Text input",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Disabled"},{"text":"Truncated on Left"},{"text":"Read only"},{"text":"Invalid"},{"text":"Select text using ref"},{"text":"Icon variants"},{"text":"Icon sprite variants"}]],
    examples: ["Basic","Disabled","Truncated on Left","Read only","Invalid","Select text using ref","Icon variants","Icon sprite variants"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/text-input/react/index" */ './components/text-input/react')
  },
  '/components/text-input-group/react': {
    id: "Text input group",
    title: "Text input group",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Disabled"},{"text":"Utilities and icon"},{"text":"Filters"}]],
    examples: ["Basic","Disabled","Utilities and icon","Filters"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/text-input-group/react/index" */ './components/text-input-group/react')
  },
  '/components/tile/react': {
    id: "Tile",
    title: "Tile",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With subtext"},{"text":"With icon"},{"text":"Stacked"},{"text":"Stacked with large icons"},{"text":"With extra content"}]],
    examples: ["Basic","With subtext","With icon","Stacked","Stacked with large icons","With extra content"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/tile/react/index" */ './components/tile/react')
  },
  '/components/time-picker/react': {
    id: "Time picker",
    title: "Time picker",
    toc: [{"text":"Examples"},[{"text":"Basic 12 hour"},{"text":"Basic 24 hour"},{"text":"Custom delimiter"},{"text":"Minimum/maximum times"},{"text":"With seconds"},{"text":"Basic 24 hours with seconds"}]],
    examples: ["Basic 12 hour","Basic 24 hour","Custom delimiter","Minimum/maximum times","With seconds","Basic 24 hours with seconds"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/time-picker/react/index" */ './components/time-picker/react')
  },
  '/components/title/react': {
    id: "Title",
    title: "Title",
    toc: [{"text":"Examples"},[{"text":"Sizes"},{"text":"Default size mappings"}]],
    examples: ["Sizes","Default size mappings"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/title/react/index" */ './components/title/react')
  },
  '/components/toggle-group/react': {
    id: "Toggle group",
    title: "Toggle group",
    toc: [{"text":"Examples"},[{"text":"Default with multiple selectable"},{"text":"Default with single selectable"},{"text":"Icons"},{"text":"Text and icons"},{"text":"Compact variant"}]],
    examples: ["Default with multiple selectable","Default with single selectable","Icons","Text and icons","Compact variant"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/toggle-group/react/index" */ './components/toggle-group/react')
  },
  '/components/toolbar/react': {
    id: "Toolbar",
    title: "Toolbar",
    toc: [{"text":"Examples"},[{"text":"Items"},{"text":"Adjusting item spacers"},{"text":"Adjusting item widths"},{"text":"Adjusting toolbar inset"},{"text":"Sticky"},{"text":"Groups"}],{"text":"Examples with toggle groups and filters"},[{"text":"Component managed toggle groups"},{"text":"Consumer managed toggle groups"},{"text":"With filters"},{"text":"With custom chip group content"},{"text":"Stacked example"}]],
    examples: ["Items","Adjusting item spacers","Adjusting item widths","Adjusting toolbar inset","Sticky","Groups","Component managed toggle groups","Consumer managed toggle groups","With filters","With custom chip group content","Stacked example"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/toolbar/react/index" */ './components/toolbar/react')
  },
  '/components/tooltip/react': {
    id: "Tooltip",
    title: "Tooltip",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Tooltip react ref"},{"text":"Tooltip selector ref"},{"text":"On icon with dynamic content"},{"text":"Options"}]],
    examples: ["Basic","Tooltip react ref","Tooltip selector ref","On icon with dynamic content","Options"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/tooltip/react/index" */ './components/tooltip/react')
  },
  '/components/tree-view/react': {
    id: "Tree view",
    title: "Tree view",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"With search"},{"text":"With checkboxes"},{"text":"With icons"},{"text":"With badges"},{"text":"With custom badges"},{"text":"With action items"},{"text":"Guides"},{"text":"Compact"},{"text":"Compact, no background"},{"text":"With memoization"}]],
    examples: ["Default","With search","With checkboxes","With icons","With badges","With custom badges","With action items","Guides","Compact","Compact, no background","With memoization"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/tree-view/react/index" */ './components/tree-view/react')
  },
  '/components/truncate/react': {
    id: "Truncate",
    title: "Truncate",
    toc: [{"text":"Examples"},[{"text":"Default"},{"text":"Middle"},{"text":"Start"},{"text":"Default with tooltip at the bottom"}]],
    examples: ["Default","Middle","Start","Default with tooltip at the bottom"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/truncate/react/index" */ './components/truncate/react')
  },
  '/components/wizard/react': {
    id: "Wizard",
    title: "Wizard",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Anchors for nav items"},{"text":"Incrementally enabled steps"},{"text":"Expandable steps"},{"text":"Finished"},{"text":"Enabled on form validation"},{"text":"Validate on button press"},{"text":"Progressive steps"},{"text":"Remember last step"},{"text":"Wizard in modal"},{"text":"Wizard with drawer"}]],
    examples: ["Basic","Anchors for nav items","Incrementally enabled steps","Expandable steps","Finished","Enabled on form validation","Validate on button press","Progressive steps","Remember last step","Wizard in modal","Wizard with drawer"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/wizard/react/index" */ './components/wizard/react')
  },
  '/layouts/bullseye/react': {
    id: "Bullseye",
    title: "Bullseye",
    toc: [{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/bullseye/react/index" */ './layouts/bullseye/react')
  },
  '/layouts/flex/react': {
    id: "Flex",
    title: "Flex",
    toc: [{"text":"Flex Basics"},[{"text":"Basic"},{"text":"Nesting"},{"text":"Nested with items"},{"text":"Flex Spacing"},{"text":"Individually spaced"},{"text":"Spacing xl"},{"text":"Spacing none"},{"text":"Flex layout modifiers"},{"text":"Default layout"},{"text":"Inline"},{"text":"Using canGrow"},{"text":"Adjusting width"},{"text":"Specifying column widths"}],{"text":"Column layout modifiers"},[{"text":"Column layout"},{"text":"Stacking elements"},{"text":"Nesting elements in columns"}],{"text":"Responsive layout modifiers"},[{"text":"Switching between direction column and row"},{"text":"Controlling width of text"}],{"text":"Flex alignment"},[{"text":"Aligning right"},{"text":"Align right on single item"},{"text":"Align right on multiple groups"},{"text":"Align adjacent content"},{"text":"Align self flex end"},{"text":"Align self center"},{"text":"Align self baseline"},{"text":"Align self stretch"}],{"text":"Flex justification"},[{"text":"Justify content flex end"},{"text":"Justify content space between"},{"text":"Justify content flex start"}],{"text":"Flex item order"},[{"text":"First last ordering"},{"text":"Responsive first last ordering"},{"text":"Ordering"},{"text":"Responsive ordering"},{"text":"Alternative components"}]],
    examples: ["Basic","Nesting","Nested with items","Individually spaced","Spacing xl","Spacing none","Default layout","Inline","Using canGrow","Adjusting width","Specifying column widths","Column layout","Stacking elements","Nesting elements in columns","Switching between direction column and row","Controlling width of text","Aligning right","Align right on single item","Align right on multiple groups","Align adjacent content","Align self flex end","Align self center","Align self baseline","Align self stretch","Justify content flex end","Justify content space between","Justify content flex start","First last ordering","Responsive first last ordering","Ordering","Responsive ordering","Alternative components"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/flex/react/index" */ './layouts/flex/react')
  },
  '/layouts/gallery/react': {
    id: "Gallery",
    title: "Gallery",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutters"},{"text":"Adjusting min widths"},{"text":"Adjusting max widths"},{"text":"Adjusting min and max widths"},{"text":"Alternative components"}]],
    examples: ["Basic","With gutters","Adjusting min widths","Adjusting max widths","Adjusting min and max widths","Alternative components"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/gallery/react/index" */ './layouts/gallery/react')
  },
  '/layouts/grid/react': {
    id: "Grid",
    title: "Grid",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutters"},{"text":"With overrides"}],{"text":"Ordering"},[{"text":"Ordering"},{"text":"Responsive ordering"},{"text":"Grouped ordering"},{"text":"Alternative components"}]],
    examples: ["Basic","With gutters","With overrides","Ordering","Responsive ordering","Grouped ordering","Alternative components"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/grid/react/index" */ './layouts/grid/react')
  },
  '/layouts/level/react': {
    id: "Level",
    title: "Level",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutters"}]],
    examples: ["Basic","With gutters"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/level/react/index" */ './layouts/level/react')
  },
  '/layouts/split/react': {
    id: "Split",
    title: "Split",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutter"},{"text":"Wrappable"}]],
    examples: ["Basic","With gutter","Wrappable"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/split/react/index" */ './layouts/split/react')
  },
  '/layouts/stack/react': {
    id: "Stack",
    title: "Stack",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With gutter"}]],
    examples: ["Basic","With gutter"],
    section: "layouts",
    source: "react",
    Component: () => import(/* webpackChunkName: "layouts/stack/react/index" */ './layouts/stack/react')
  },
  '/components/back-to-top/react-demos': {
    id: "Back to top",
    title: "Back to top",
    toc: [{"text":"Demos"},[{"text":"Using name selector"}]],
    fullscreenExamples: ["Using name selector"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/back-to-top/react-demos/index" */ './components/back-to-top/react-demos')
  },
  '/components/banner/react-demos': {
    id: "Banner",
    title: "Banner",
    toc: [{"text":"Demos"},[{"text":"Basic sticky banner"},{"text":"Top and bottom banner"}]],
    fullscreenExamples: ["Basic sticky banner","Top and bottom banner"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/banner/react-demos/index" */ './components/banner/react-demos')
  },
  '/components/button/react-demos': {
    id: "Button",
    title: "Button",
    toc: [{"text":"Demos"},[{"text":"Progress button"}]],
    examples: ["Progress button"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/button/react-demos/index" */ './components/button/react-demos')
  },
  '/demos/card-view/react-demos': {
    id: "Card view",
    title: "Card view",
    toc: [{"text":"Demos"},[{"text":"Card view"}]],
    fullscreenExamples: ["Card view"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/card-view/react-demos/index" */ './demos/card-view/react-demos')
  },
  '/components/card/react-demos': {
    id: "Card",
    title: "Card",
    toc: [{"text":"Demos"},[{"text":"Horizontal card grid"},{"text":"Horizontal split"},{"text":"Details card"},{"text":"Aggregate status card"},{"text":"Status"},{"text":"Status Tabbed"},{"text":"Utilization card 1"},{"text":"Utilization card 2"},{"text":"Utilization card 3"},{"text":"Utilization card 4"},{"text":"Nested cards"},{"text":"With accordion"},{"text":"Trend card 1"},{"text":"Trend card 2"},{"text":"Log view"},{"text":"Events view"}]],
    examples: ["Horizontal card grid","Horizontal split","Details card","Aggregate status card","Status","Status Tabbed","Utilization card 1","Utilization card 2","Utilization card 3","Utilization card 4","Nested cards","With accordion","Trend card 1","Trend card 2","Log view","Events view"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/card/react-demos/index" */ './components/card/react-demos')
  },
  '/demos/composable-menu/react-demos': {
    id: "Composable menu",
    title: "Composable menu",
    toc: [{"text":"Demos"},[{"text":"Composable simple dropdown"},{"text":"Composable actions menu"},{"text":"Composable simple select"},{"text":"Composable simple checkbox select"},{"text":"Composable drilldown menu"},{"text":"Composable tree view menu"},{"text":"Composable flyout"},{"text":"Composable application launcher"},{"text":"Composable context selector"},{"text":"Composable options menu variants"},{"text":"Composable dropdown variants"},{"text":"Composable date select"}]],
    examples: ["Composable simple dropdown","Composable actions menu","Composable simple select","Composable simple checkbox select","Composable drilldown menu","Composable tree view menu","Composable flyout","Composable application launcher","Composable context selector","Composable options menu variants","Composable dropdown variants","Composable date select"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/composable-menu/react-demos/index" */ './demos/composable-menu/react-demos')
  },
  '/components/data-list/react-demos': {
    id: "Data list",
    title: "Data list",
    toc: [{"text":"Demos"},[{"text":"Expandable control in toolbar"}]],
    examples: ["Expandable control in toolbar"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/data-list/react-demos/index" */ './components/data-list/react-demos')
  },
  '/components/date-picker/react-demos': {
    id: "Date picker",
    title: "Date picker",
    toc: [{"text":"Demos"},[{"text":"Date range picker"},{"text":"Date and time range picker"},{"text":"Date and time pickers in modal"}]],
    examples: ["Date range picker","Date and time range picker","Date and time pickers in modal"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/date-picker/react-demos/index" */ './components/date-picker/react-demos')
  },
  '/demos/date-and-time-picker/react-demos': {
    id: "Date and time picker",
    title: "Date and time picker",
    toc: [{"text":"Demos"},[{"text":"Date and time picker"}]],
    examples: ["Date and time picker"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/date-and-time-picker/react-demos/index" */ './demos/date-and-time-picker/react-demos')
  },
  '/components/helper-text/react-demos': {
    id: "Helper text",
    title: "Helper text",
    toc: [{"text":"Demos"},[{"text":"Static variant with static text"},{"text":"Static variant with dynamic text"},{"text":"Dynamic variant with static text"}]],
    examples: ["Static variant with static text","Static variant with dynamic text","Dynamic variant with static text"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/helper-text/react-demos/index" */ './components/helper-text/react-demos')
  },
  '/components/jump-links/react-demos': {
    id: "Jump links",
    title: "Jump links",
    toc: [{"text":"Demos"},[{"text":"Scrollspy with subsections"},{"text":"With drawer"}]],
    fullscreenExamples: ["Scrollspy with subsections","With drawer"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/jump-links/react-demos/index" */ './components/jump-links/react-demos')
  },
  '/components/label-group/react-demos': {
    id: "Label group",
    title: "Label group",
    toc: [{"text":"Demos"},[{"text":"Editable labels with add dropdown"},{"text":"Editable labels with add modal"}]],
    examples: ["Editable labels with add dropdown","Editable labels with add modal"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/label-group/react-demos/index" */ './components/label-group/react-demos')
  },
  '/components/masthead/react-demos': {
    id: "Masthead",
    title: "Masthead",
    toc: [{"text":"Demos"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/masthead/react-demos/index" */ './components/masthead/react-demos')
  },
  '/components/file-upload---multiple/react-demos': {
    id: "File upload - multiple",
    title: "File upload - multiple",
    toc: [{"text":"Demos"},[{"text":"Rejected file handling"}]],
    examples: ["Rejected file handling"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/file-upload---multiple/react-demos/index" */ './components/file-upload---multiple/react-demos')
  },
  '/components/navigation/react-demos': {
    id: "Navigation",
    title: "Navigation",
    toc: [{"text":"Demos"},[{"text":"Default nav"},{"text":"Grouped nav"},{"text":"Expandable nav"},{"text":"Horizontal nav"},{"text":"Horizontal subnav"},{"text":"Horizontal nav with horizontal subnav"},{"text":"Legacy tertiary nav"},{"text":"Legacy/Light Nav"},{"text":"Manual nav"},{"text":"Flyout nav"},{"text":"Drilldown nav"}]],
    fullscreenExamples: ["Default nav","Grouped nav","Expandable nav","Horizontal nav","Horizontal subnav","Horizontal nav with horizontal subnav","Legacy tertiary nav","Legacy/Light Nav","Manual nav","Flyout nav","Drilldown nav"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/navigation/react-demos/index" */ './components/navigation/react-demos')
  },
  '/components/notification-drawer/react-demos': {
    id: "Notification drawer",
    title: "Notification drawer",
    toc: [{"text":"Demos"},[{"text":"Basic"},{"text":"Grouped"}]],
    fullscreenExamples: ["Basic","Grouped"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/notification-drawer/react-demos/index" */ './components/notification-drawer/react-demos')
  },
  '/components/page/react-demos': {
    id: "Page",
    title: "Page",
    toc: [{"text":"Layouts"},[{"text":"Sticky section group"},{"text":"Sticky section group (using PageHeader)"},{"text":"Sticky section group (alternate syntax and using PageHeader)"}]],
    fullscreenExamples: ["Sticky section group","Sticky section group (using PageHeader)","Sticky section group (alternate syntax and using PageHeader)"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/page/react-demos/index" */ './components/page/react-demos')
  },
  '/demos/password-generator/react-demos': {
    id: "Password generator",
    title: "Password generator",
    toc: [{"text":"Demos"},[{"text":"Provide a generated password"}]],
    examples: ["Provide a generated password"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/password-generator/react-demos/index" */ './demos/password-generator/react-demos')
  },
  '/demos/password-strength/react-demos': {
    id: "Password strength",
    title: "Password strength",
    toc: [{"text":"Demos"},[{"text":"Basic validation"}]],
    examples: ["Basic validation"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/password-strength/react-demos/index" */ './demos/password-strength/react-demos')
  },
  '/demos/primary-detail/react-demos': {
    id: "Primary-detail",
    title: "Primary-detail",
    toc: [{"text":"Demos"},[{"text":"Primary-detail full page"},{"text":"Primary-detail content padding"},{"text":"Primary-detail card view"},{"text":"Primary-detail simple list in card"},{"text":"Primary-detail data list in card"},{"text":"Primary-detail inline modifier"}]],
    fullscreenExamples: ["Primary-detail full page","Primary-detail content padding","Primary-detail card view","Primary-detail simple list in card","Primary-detail data list in card","Primary-detail inline modifier"],
    section: "demos",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "demos/primary-detail/react-demos/index" */ './demos/primary-detail/react-demos')
  },
  '/components/progress/react-demos': {
    id: "Progress",
    title: "Progress",
    toc: [{"text":"Demos"},[{"text":"Basic"},{"text":"With only increasing progress"}]],
    examples: ["Basic","With only increasing progress"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/progress/react-demos/index" */ './components/progress/react-demos')
  },
  '/components/progress-stepper/react-demos': {
    id: "Progress stepper",
    title: "Progress stepper",
    toc: [{"text":"Demos"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/progress-stepper/react-demos/index" */ './components/progress-stepper/react-demos')
  },
  '/components/search-input/react-demos': {
    id: "Search input",
    title: "Search input",
    toc: [{"text":"Demos"},[{"text":"Search with autocomplete"},{"text":"Composable advanced search"}]],
    examples: ["Search with autocomplete","Composable advanced search"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/search-input/react-demos/index" */ './components/search-input/react-demos')
  },
  '/components/tabs/react-demos': {
    id: "Tabs",
    title: "Tabs",
    toc: [{"text":"Demos"},[{"text":"Open tabs"},{"text":"Open tabs with secondary tabs"},{"text":"Nested tabs"},{"text":"Nested, unindented tabs"},{"text":"Tables and tabs"},{"text":"Tables and tabs, auto width tabs"},{"text":"Modal tabs"},{"text":"Gray tabs"}]],
    fullscreenExamples: ["Open tabs","Open tabs with secondary tabs","Nested tabs","Nested, unindented tabs","Tables and tabs","Tables and tabs, auto width tabs","Modal tabs","Gray tabs"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/tabs/react-demos/index" */ './components/tabs/react-demos')
  },
  '/components/text-input-group/react-demos': {
    id: "Text input group",
    title: "Text input group",
    toc: [{"text":"Demos"},[{"text":"Attribute-value filtering"},{"text":"Auto-complete search with typeahead"}]],
    examples: ["Attribute-value filtering","Auto-complete search with typeahead"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/text-input-group/react-demos/index" */ './components/text-input-group/react-demos')
  },
  '/components/tile/react-demos': {
    id: "Tile",
    title: "Tile",
    toc: [{"text":"Demos"},[{"text":"Tiles with single selection"},{"text":"Tiles with multiple selection"}]],
    examples: ["Tiles with single selection","Tiles with multiple selection"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/tile/react-demos/index" */ './components/tile/react-demos')
  },
  '/components/toolbar/react-demos': {
    id: "Toolbar",
    title: "Toolbar",
    toc: [{"text":"Demos"},[{"text":"Console log viewer toolbar demo"}]],
    fullscreenExamples: ["Console log viewer toolbar demo"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/toolbar/react-demos/index" */ './components/toolbar/react-demos')
  },
  '/components/wizard/react-demos': {
    id: "Wizard",
    title: "Wizard",
    toc: [{"text":"Demos"},[{"text":"In modal"},{"text":"In modal, with drawer"},{"text":"In modal, with drawer and informational step"},{"text":"In page"},{"text":"In page, with drawer"},{"text":"In page, with drawer and informational step"}]],
    fullscreenExamples: ["In modal","In modal, with drawer","In modal, with drawer and informational step","In page","In page, with drawer","In page, with drawer and informational step"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/wizard/react-demos/index" */ './components/wizard/react-demos')
  },
  '/components/table/react-composable': {
    id: "Table",
    title: "Table",
    toc: [{"text":"TableComposable examples"},[{"text":"Composable: Basic"},{"text":"Composable: Custom row wrapper, header tooltips & popovers"},{"text":"Composable: Sortable & wrapping headers"},{"text":"Composable: Sortable - custom control"},{"text":"Composable: Selectable with checkbox"},{"text":"Composable: Selectable radio input"},{"text":"Composable: Row click handler, hoverable & selected rows"},{"text":"Composable: Actions"},{"text":"Composable: Actions Overflow"},{"text":"Composable: Expandable"},{"text":"Composable: Compound expandable"},{"text":"Composable: Cell width, breakpoint modifiers"},{"text":"Composable: Controlling text"},{"text":"Composable: Modifiers with table text"},{"text":"Composable: Empty state"},{"text":"Composable: Favoritable (implemented with sortable)"},{"text":"Composable: Tree table"},{"text":"Composable: Draggable row table"}],{"text":"Sticky table modifiers"},[{"text":"Composable: Sticky column"},{"text":"Composable: Multiple sticky columns"},{"text":"Composable: Sticky columns and header"}],{"text":"Nested column headers"},[{"text":"Composable: Nested column headers"},{"text":"Composable: Nested column headers and expandable rows"},{"text":"Composable: Expandable with nested table"},{"text":"Composable: Nested sticky header"}],{"text":"Striped"},[{"text":"Composable: Striped"},{"text":"Composable: Striped expandable"},{"text":"Composable: Striped multiple tobdy"},{"text":"Composable: Striped tr"}]],
    examples: ["Composable: Basic","Composable: Custom row wrapper, header tooltips & popovers","Composable: Sortable & wrapping headers","Composable: Sortable - custom control","Composable: Selectable with checkbox","Composable: Selectable radio input","Composable: Row click handler, hoverable & selected rows","Composable: Actions","Composable: Actions Overflow","Composable: Expandable","Composable: Compound expandable","Composable: Cell width, breakpoint modifiers","Composable: Controlling text","Composable: Modifiers with table text","Composable: Empty state","Composable: Favoritable (implemented with sortable)","Composable: Tree table","Composable: Draggable row table","Composable: Sticky column","Composable: Multiple sticky columns","Composable: Sticky columns and header","Composable: Nested column headers","Composable: Nested column headers and expandable rows","Composable: Expandable with nested table","Composable: Nested sticky header","Composable: Striped","Composable: Striped expandable","Composable: Striped multiple tobdy","Composable: Striped tr"],
    section: "components",
    source: "react-composable",
    Component: () => import(/* webpackChunkName: "components/table/react-composable/index" */ './components/table/react-composable')
  },
  '/components/table/react-demos': {
    id: "Table",
    title: "Table",
    toc: [{"text":"Demos"},[{"text":"Bulk select"},{"text":"Expand/collapse all"},{"text":"Compact"},{"text":"Compound expansion"},{"text":"Column management"},{"text":"Column management with draggable"},{"text":"Filterable"},{"text":"Sortable - responsive"},{"text":"Automatic pagination"},{"text":"Pagination"},{"text":"Sticky header"},{"text":"Sticky first column"}],{"text":"Empty states"},[{"text":"Empty"},{"text":"Loading"},{"text":"Error"}]],
    examples: ["Column management","Column management with draggable","Filterable","Automatic pagination","Pagination"],
    fullscreenExamples: ["Bulk select","Expand/collapse all","Compact","Compound expansion","Sortable - responsive","Sticky header","Sticky first column","Empty","Loading","Error"],
    section: "components",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "components/table/react-demos/index" */ './components/table/react-demos')
  },
  '/components/table/react-legacy': {
    id: "Table",
    title: "Table",
    toc: [{"text":"Table Columns"},{"text":"Table Rows"},{"text":"Table examples"},[{"text":"Basic"},{"text":"Custom row wrapper"},{"text":"Sortable & wrapping column headers"},{"text":"Sortable - custom control"},{"text":"Selectable with checkbox"},{"text":"Selectable radio input"},{"text":"Hoverable rows, selectable rows, and header cell tooltips/popovers"},{"text":"Actions and first cell in body rows as th"},{"text":"Expandable"},{"text":"Compound expandable"},{"text":"With width and breakpoint visibility modifiers"},{"text":"Controlling text"},{"text":"Modifiers with table text"},{"text":"Empty state"},{"text":"Editable rows"},{"text":"Favoritable (implemented with sortable and selectable)"},{"text":"Tree table"},{"text":"Striped"},{"text":"Striped expandable"},{"text":"Striped custom tr"}]],
    examples: ["Basic","Custom row wrapper","Sortable & wrapping column headers","Sortable - custom control","Selectable with checkbox","Selectable radio input","Hoverable rows, selectable rows, and header cell tooltips/popovers","Actions and first cell in body rows as th","Expandable","Compound expandable","With width and breakpoint visibility modifiers","Controlling text","Modifiers with table text","Empty state","Editable rows","Favoritable (implemented with sortable and selectable)","Tree table","Striped","Striped expandable","Striped custom tr"],
    section: "components",
    source: "react-legacy",
    Component: () => import(/* webpackChunkName: "components/table/react-legacy/index" */ './components/table/react-legacy')
  },
  '/charts/area-chart/react': {
    id: "Area chart",
    title: "Area chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Cyan with bottom aligned legend and axis label"},{"text":"Multi-color (unordered) bottom-left aligned legend and responsive container"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Cyan with bottom aligned legend and axis label","Multi-color (unordered) bottom-left aligned legend and responsive container"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/area-chart/react/index" */ './charts/area-chart/react')
  },
  '/charts/bar-chart/react': {
    id: "Bar chart",
    title: "Bar chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Purple with bottom aligned legend"},{"text":"Multi-color (ordered) with bottom-left aligned legend"},{"text":"Single with right aligned legend"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Purple with bottom aligned legend","Multi-color (ordered) with bottom-left aligned legend","Single with right aligned legend"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/bar-chart/react/index" */ './charts/bar-chart/react')
  },
  '/charts/bullet-chart/react': {
    id: "Bullet chart",
    title: "Bullet chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"Segmented primary measure"},{"text":"Responsive container with bottom aligned legend"},{"text":"Primary measure dot"},{"text":"Error measure and custom axis ticks"},{"text":"Primary measure outside range"},{"text":"Negative primary measure"},{"text":"Reversed with right aligned legend"},{"text":"Negative and positive primary measures"},{"text":"Vertical with segmented primary measure"},{"text":"Vertical primary measure outside max range"},{"text":"Custom labels"},{"text":"Custom size"},{"text":"Horizontal group"},{"text":"Vertical group"},{"text":"Horizontal group with title"},{"text":"Vertical group with title"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic","Segmented primary measure","Responsive container with bottom aligned legend","Primary measure dot","Error measure and custom axis ticks","Primary measure outside range","Negative primary measure","Reversed with right aligned legend","Negative and positive primary measures","Vertical with segmented primary measure","Vertical primary measure outside max range","Custom labels","Custom size","Horizontal group","Vertical group","Horizontal group with title","Vertical group with title"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/bullet-chart/react/index" */ './charts/bullet-chart/react')
  },
  '/charts/donut-chart/react': {
    id: "Donut chart",
    title: "Donut chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"Right aligned legend"},{"text":"Multi-color (ordered) with right aligned legend"},{"text":"Bottom aligned legend"},{"text":"Small"},{"text":"Small with right aligned legend"},{"text":"Small with bottom aligned subtitle"},{"text":"Small with right aligned subtitle"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic","Right aligned legend","Multi-color (ordered) with right aligned legend","Bottom aligned legend","Small","Small with right aligned legend","Small with bottom aligned subtitle","Small with right aligned subtitle"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/donut-chart/react/index" */ './charts/donut-chart/react')
  },
  '/charts/donut-utilization-chart/react': {
    id: "Donut utilization chart",
    title: "Donut utilization chart",
    toc: [{"text":"Introduction"},{"text":"Donut utilization examples"},[{"text":"Basic"},{"text":"Right aligned legend"},{"text":"Inverted with right aligned legend"},{"text":"Right aligned vertical legend"},{"text":"Bottom aligned legend"},{"text":"Small"},{"text":"Small with right aligned legend"},{"text":"Small with bottom aligned subtitle"},{"text":"Small with right aligned subtitle"}],{"text":"Donut utilization threshold examples"},[{"text":"Static thresholds"},{"text":"Static thresholds with right aligned legend"},{"text":"Inverted static thresholds with right aligned legend"},{"text":"Static thresholds with custom legend"},{"text":"Static thresholds with bottom aligned legend"},{"text":"Small with static thresholds"},{"text":"Small with static thresholds and right aligned legend"},{"text":"Small with subtitle"},{"text":"Small with right aligned subtitle"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic","Right aligned legend","Inverted with right aligned legend","Right aligned vertical legend","Bottom aligned legend","Small","Small with right aligned legend","Small with bottom aligned subtitle","Small with right aligned subtitle","Static thresholds","Static thresholds with right aligned legend","Inverted static thresholds with right aligned legend","Static thresholds with custom legend","Static thresholds with bottom aligned legend","Small with static thresholds","Small with static thresholds and right aligned legend","Small with subtitle","Small with right aligned subtitle"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/donut-utilization-chart/react/index" */ './charts/donut-utilization-chart/react')
  },
  '/charts/legends/react': {
    id: "Legends",
    title: "Legends",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Bottom aligned legend"},{"text":"Responsive bottom-left aligned legend"},{"text":"Standalone legend"},{"text":"Interactive legend"},{"text":"Interactive legend with pie chart"},{"text":"Legend tooltips"},{"text":"Legend links"},{"text":"Legend layout"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Bottom aligned legend","Responsive bottom-left aligned legend","Standalone legend","Interactive legend","Interactive legend with pie chart","Legend tooltips","Legend links","Legend layout"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/legends/react/index" */ './charts/legends/react')
  },
  '/charts/line-chart/react': {
    id: "Line chart",
    title: "Line chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Green with bottom aligned legend"},{"text":"Multi-color (unordered) with responsive container"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Green with bottom aligned legend","Multi-color (unordered) with responsive container"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/line-chart/react/index" */ './charts/line-chart/react')
  },
  '/charts/pie-chart/react': {
    id: "Pie chart",
    title: "Pie chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Orange with right aligned legend"},{"text":"Multi-color (ordered) with bottom aligned legend"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Orange with right aligned legend","Multi-color (ordered) with bottom aligned legend"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/pie-chart/react/index" */ './charts/pie-chart/react')
  },
  '/charts/scatter-chart/react': {
    id: "Scatter chart",
    title: "Scatter chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Area chart"},{"text":"Line chart"}],{"text":"Documentation"},[{"text":"Note"}]],
    examples: ["Area chart","Line chart"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/scatter-chart/react/index" */ './charts/scatter-chart/react')
  },
  '/charts/stack-chart/react': {
    id: "Stack chart",
    title: "Stack chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic with right aligned legend"},{"text":"Horizontal with bottom aligned legend"},{"text":"Multi-color (ordered) horizontal with bottom aligned legend"},{"text":"Monthly data with responsive container"},{"text":"Multi-color (unordered) responsive container"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic with right aligned legend","Horizontal with bottom aligned legend","Multi-color (ordered) horizontal with bottom aligned legend","Monthly data with responsive container","Multi-color (unordered) responsive container"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/stack-chart/react/index" */ './charts/stack-chart/react')
  },
  '/charts/themes/react': {
    id: "Themes",
    title: "Themes",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Green"},{"text":"Multi-color (ordered)"},{"text":"Multi color (unordered)"},{"text":"Custom color scale"},{"text":"Custom stroke color"},{"text":"Custom theme"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Green","Multi-color (ordered)","Multi color (unordered)","Custom color scale","Custom stroke color","Custom theme"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/themes/react/index" */ './charts/themes/react')
  },
  '/charts/threshold-chart/react': {
    id: "Threshold chart",
    title: "Threshold chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Multi-color (unordered) with responsive container"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Multi-color (unordered) with responsive container"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/threshold-chart/react/index" */ './charts/threshold-chart/react')
  },
  '/charts/tooltips/react': {
    id: "Tooltips",
    title: "Tooltips",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Voronoi container"},{"text":"Combined cursor and voronoi containers"},{"text":"Embedded legend"},{"text":"Embedded HTML"},{"text":"Data label"},{"text":"Legend"},{"text":"Left aligned"},{"text":"CSS overflow"},{"text":"Wrapped chart"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Voronoi container","Combined cursor and voronoi containers","Embedded legend","Embedded HTML","Data label","Legend","Left aligned","CSS overflow","Wrapped chart"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/tooltips/react/index" */ './charts/tooltips/react')
  },
  '/charts/patterns/react': {
    id: "Patterns",
    title: "Patterns",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic pie chart"},{"text":"Bar chart"},{"text":"Stack chart"},{"text":"Donut chart"},{"text":"Donut utilization chart"},{"text":"Donut utilization chart with thresholds"},{"text":"Interactive legend with pie chart"},{"text":"Interactive legend with area chart"},{"text":"Custom pattern visibility"},{"text":"Custom color scale"},{"text":"Custom pattern defs"},{"text":"All patterns"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic pie chart","Bar chart","Stack chart","Donut chart","Donut utilization chart","Donut utilization chart with thresholds","Interactive legend with pie chart","Interactive legend with area chart","Custom pattern visibility","Custom color scale","Custom pattern defs","All patterns"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/patterns/react/index" */ './charts/patterns/react')
  },
  '/charts/sparkline-chart/react': {
    id: "Sparkline chart",
    title: "Sparkline chart",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"Green"}],{"text":"Documentation"},[{"text":"Tips"},{"text":"Note"}]],
    examples: ["Basic","Green"],
    section: "charts",
    source: "react",
    Component: () => import(/* webpackChunkName: "charts/sparkline-chart/react/index" */ './charts/sparkline-chart/react')
  },
  '/extensions/catalog-view-item-header/react': {
    id: "Catalog view item header",
    title: "Catalog view item header",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"},{"text":"With vendor description"}]],
    examples: ["Basic","With vendor description"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-item-header/react/index" */ './extensions/catalog-view-item-header/react')
  },
  '/extensions/catalog-view-tile/react': {
    id: "Catalog view tile",
    title: "Catalog view tile",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic featured tile"},{"text":"Basic with footer"},{"text":"Link variant"},{"text":"With multiple icon badges"},{"text":"With text badge"},{"text":"With children instead of description"}]],
    examples: ["Basic featured tile","Basic with footer","Link variant","With multiple icon badges","With text badge","With children instead of description"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-tile/react/index" */ './extensions/catalog-view-tile/react')
  },
  '/extensions/catalog-view-filter-side-panel/react': {
    id: "Catalog view filter side panel",
    title: "Catalog view filter side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-filter-side-panel/react/index" */ './extensions/catalog-view-filter-side-panel/react')
  },
  '/extensions/catalog-view-properties-side-panel/react': {
    id: "Catalog view properties side panel",
    title: "Catalog view properties side panel",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Properties side panel with property items"}]],
    examples: ["Properties side panel with property items"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-properties-side-panel/react/index" */ './extensions/catalog-view-properties-side-panel/react')
  },
  '/extensions/catalog-view-vertical-tabs/react': {
    id: "Catalog view vertical tabs",
    title: "Catalog view vertical tabs",
    toc: [{"text":"Introduction"},{"text":"Examples"},[{"text":"Basic"}]],
    examples: ["Basic"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/catalog-view-vertical-tabs/react/index" */ './extensions/catalog-view-vertical-tabs/react')
  },
  '/extensions/virtual-scroll-table/react': {
    id: "Virtual scroll table",
    title: "Virtual scroll table",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"Using composable table components"},{"text":"Sortable"},{"text":"Selectable"},{"text":"Actions"},{"text":"Filterable with WindowScroller"}]],
    examples: ["Basic","Using composable table components","Sortable","Selectable","Actions","Filterable with WindowScroller"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/virtual-scroll-table/react/index" */ './extensions/virtual-scroll-table/react')
  },
  '/extensions/virtual-scroll-window-scroller/react': {
    id: "Virtual scroll window scroller",
    title: "Virtual scroll window scroller",
    toc: [{"text":"Examples"},[{"text":"Window scroller"},{"text":"Using composable table components"}]],
    examples: ["Window scroller","Using composable table components"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/virtual-scroll-window-scroller/react/index" */ './extensions/virtual-scroll-window-scroller/react')
  },
  '/extensions/access-consoles/react': {
    id: "Access consoles",
    title: "Access consoles",
    toc: [[{"text":"Note"}],{"text":"Examples"},[{"text":"Basic Usage"}]],
    examples: ["Basic Usage"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/access-consoles/react/index" */ './extensions/access-consoles/react')
  },
  '/consoles/desktopviewer/react': {
    id: "DesktopViewer",
    title: "DesktopViewer",
    toc: [[{"text":"Note"}],{"text":"Examples"},[{"text":"Basic Usage"}]],
    examples: ["Basic Usage"],
    section: "consoles",
    source: "react",
    Component: () => import(/* webpackChunkName: "consoles/desktopviewer/react/index" */ './consoles/desktopviewer/react')
  },
  '/components/code-editor/react': {
    id: "Code editor",
    title: "Code editor",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With sizeToFit height, height will grow/shrink with content"},{"text":"With shortcut menu and main header content"},{"text":"With actions"},{"text":"With custom control"}]],
    examples: ["Basic","With sizeToFit height, height will grow/shrink with content","With shortcut menu and main header content","With actions","With custom control"],
    section: "components",
    source: "react",
    Component: () => import(/* webpackChunkName: "components/code-editor/react/index" */ './components/code-editor/react')
  },
  '/extensions/log-viewer/react': {
    id: "Log viewer",
    title: "Log viewer",
    toc: [{"text":"Examples"},[{"text":"Basic"},{"text":"With search"},{"text":"With complex toolbar"},{"text":"With header component"},{"text":"With footer component"},{"text":"With ANSI color logs"}]],
    examples: ["Basic","With search","With complex toolbar","With header component","With footer component","With ANSI color logs"],
    section: "extensions",
    source: "react",
    Component: () => import(/* webpackChunkName: "extensions/log-viewer/react/index" */ './extensions/log-viewer/react')
  },
  '/extensions/log-viewer/react-demos': {
    id: "Log viewer",
    title: "Log viewer",
    toc: [[{"text":"With complex toolbar"}]],
    examples: ["With complex toolbar"],
    section: "extensions",
    source: "react-demos",
    Component: () => import(/* webpackChunkName: "extensions/log-viewer/react-demos/index" */ './extensions/log-viewer/react-demos')
  },
  '/developer-resources/release-notes/react': {
    id: "Release notes",
    title: "Release notes",
    toc: [{"text":"2022.07 release notes (2022-06-02)"},[{"text":"Components"},{"text":"Charts"},{"text":"React tokens"},{"text":"Table"},{"text":"Topology"},{"text":"Other"}],{"text":"2022.06 release notes (2022-05-12)"},[{"text":"Components","id":"components-0"},{"text":"Catalog extension"},{"text":"Charts","id":"charts-0"},{"text":"Log viewer"},{"text":"Table","id":"table-0"},{"text":"Topology","id":"topology-0"},{"text":"Other","id":"other-0"}],{"text":"2022.05 release notes (2022-04-22)"},[{"text":"Components","id":"components-1"},{"text":"Catalog view extension"},{"text":"React styles"},{"text":"Table","id":"table-1"},{"text":"Topology","id":"topology-1"},{"text":"Other","id":"other-1"}],{"text":"2022.04 release notes (2022-04-07)"},[{"text":"Components","id":"components-2"},{"text":"Table","id":"table-2"},{"text":"Topology","id":"topology-2"},{"text":"Other","id":"other-2"}],{"text":"2022.03 release notes (2022-03-09)"},[{"text":"Components","id":"components-3"},{"text":"Table","id":"table-3"},{"text":"Topology","id":"topology-3"},{"text":"Other","id":"other-3"}],{"text":"2022.02 release notes (2022-02-22)"},[{"text":"Components","id":"components-4"},{"text":"Catalog view extension","id":"catalog-view-extension-0"},{"text":"Table","id":"table-4"},{"text":"Topology","id":"topology-4"},{"text":"Other","id":"other-4"}],{"text":"2022.01 release notes (2022-01-25)"},[{"text":"Components","id":"components-5"},{"text":"Log viewer","id":"log-viewer-0"},{"text":"Table","id":"table-5"},{"text":"Topology","id":"topology-5"},{"text":"Other","id":"other-5"}],{"text":"2021.16 release notes (2021-12-13)"},[{"text":"Components","id":"components-6"},{"text":"Table","id":"table-6"},{"text":"Other","id":"other-6"}],{"text":"2021.15 release notes (2021-11-17)"},[{"text":"Components","id":"components-7"},{"text":"Access console extension"},{"text":"Charts","id":"charts-1"},{"text":"Code editor"},{"text":"Log viewer","id":"log-viewer-1"},{"text":"Table","id":"table-7"},{"text":"Topology","id":"topology-6"},{"text":"Other","id":"other-7"}],{"text":"2021.14 release notes (2021-10-26)"},[{"text":"Components","id":"components-8"},{"text":"Access console extension","id":"access-console-extension-0"},{"text":"Log viewer extension"},{"text":"React tokens","id":"react-tokens-0"},{"text":"Table","id":"table-8"},{"text":"Other","id":"other-8"},{"text":"PF3"}],{"text":"2021.13 release notes (2021-10-13)"},[{"text":"Components","id":"components-9"},{"text":"Catalog view extension","id":"catalog-view-extension-1"},{"text":"Charts","id":"charts-2"},{"text":"Log viewer extension","id":"log-viewer-extension-0"},{"text":"Table","id":"table-9"},{"text":"Tokens"},{"text":"Other","id":"other-9"}],{"text":"2021.12 release notes (2021-09-15)"},[{"text":"Components","id":"components-10"},{"text":"Log viewer extension","id":"log-viewer-extension-1"},{"text":"Table","id":"table-10"},{"text":"Other","id":"other-10"}],{"text":"2021.11 release notes (2021-08-25)"},[{"text":"Components","id":"components-11"},{"text":"Icons"},{"text":"Log viewer extension","id":"log-viewer-extension-2"},{"text":"Table","id":"table-11"},{"text":"Tokens","id":"tokens-0"},{"text":"Other","id":"other-11"}],{"text":"2021.10 release notes (2021-08-04)"},[{"text":"Components","id":"components-12"},{"text":"Access console extension","id":"access-console-extension-1"},{"text":"Charts","id":"charts-3"},{"text":"Log viewer extension","id":"log-viewer-extension-3"},{"text":"Table","id":"table-12"},{"text":"Other","id":"other-12"}],{"text":"2021.08 release notes (2021-06-22)"},[{"text":"Components","id":"components-13"},{"text":"Charts","id":"charts-4"},{"text":"Log Viewer","id":"log-viewer-2"},{"text":"Table","id":"table-13"},{"text":"Other","id":"other-13"}],{"text":"2021.07 release notes (2021-06-04)"},[{"text":"Components","id":"components-14"},{"text":"Charts","id":"charts-5"},{"text":"Table","id":"table-14"},{"text":"Other","id":"other-14"}],{"text":"2021.06 release notes (2021-05-14)"},[{"text":"Components","id":"components-15"},{"text":"Access console extension","id":"access-console-extension-2"},{"text":"Log viewer","id":"log-viewer-3"},{"text":"Table","id":"table-15"},{"text":"Other","id":"other-15"}],{"text":"2021.05 release notes (2021-04-21)"},[{"text":"Components","id":"components-16"},{"text":"Access console extension","id":"access-console-extension-3"},{"text":"Icons","id":"icons-0"},{"text":"Inline edit extension"},{"text":"Tokens","id":"tokens-1"},{"text":"Table","id":"table-16"},{"text":"Virtualized extension"}],{"text":"Other","id":"other-16"},{"text":"2021.04 release notes (2021-04-01)"},[{"text":"Components","id":"components-17"},{"text":"Table","id":"table-17"},{"text":"Topology","id":"topology-7"},{"text":"Other","id":"other-17"}],{"text":"2021.03 release notes (2021-03-10)"},[{"text":"Components","id":"components-18"},{"text":"Other","id":"other-18"}],{"text":"2021.02 release notes (2021-02-17)"},[{"text":"Components","id":"components-19"},{"text":"Charts","id":"charts-6"},{"text":"Table","id":"table-18"},{"text":"Topology","id":"topology-8"},{"text":"Virtualized extension","id":"virtualized-extension-0"},{"text":"Other","id":"other-19"}],{"text":"2021.01 release notes (2021-01-27)"},[{"text":"Components","id":"components-20"},{"text":"Access console extension","id":"access-console-extension-4"},{"text":"Charts","id":"charts-7"},{"text":"Table","id":"table-19"},{"text":"Topology","id":"topology-9"},{"text":"Other","id":"other-20"}],{"text":"2020.16 release notes (2020-12-11)"},[{"text":"Components","id":"components-21"},{"text":"Access console extension","id":"access-console-extension-5"},{"text":"Chart"},{"text":"Table","id":"table-20"},{"text":"Topology","id":"topology-10"},{"text":"Other","id":"other-21"}],{"text":"2020.15 release notes (2020-11-17)"},[{"text":"Components","id":"components-22"},{"text":"Access console extension","id":"access-console-extension-6"},{"text":"Catalog view extension","id":"catalog-view-extension-2"},{"text":"Date time"},{"text":"Table","id":"table-21"},{"text":"Virtualized extension","id":"virtualized-extension-1"},{"text":"Other","id":"other-22"}],{"text":"2020.14 release notes (2020-10-27)"},[{"text":"Components","id":"components-23"},{"text":"Catalog view extension","id":"catalog-view-extension-3"},{"text":"Chart","id":"chart-0"},{"text":"Table","id":"table-22"},{"text":"Topology","id":"topology-11"},{"text":"Other","id":"other-23"}],{"text":"2020.13 release notes (2020-10-06)"},[{"text":"Components","id":"components-24"},{"text":"Catalog view extension","id":"catalog-view-extension-4"},{"text":"Charts","id":"charts-8"},{"text":"Icons","id":"icons-1"},{"text":"Table","id":"table-23"},{"text":"Topology","id":"topology-12"},{"text":"Other","id":"other-24"},{"text":"PF3","id":"pf3-0"}],{"text":"2020.12 release notes (2020-09-17)"},[{"text":"Components","id":"components-25"},{"text":"Topology","id":"topology-13"},{"text":"Other","id":"other-25"}],{"text":"2020.11 release notes (2020-08-26)"},[{"text":"Components","id":"components-26"},{"text":"Catalog view extension","id":"catalog-view-extension-5"},{"text":"Table","id":"table-24"},{"text":"Other","id":"other-26"}],{"text":"2020.10 release notes (2020-08-17)"},[{"text":"Components","id":"components-27"},{"text":"Charts","id":"charts-9"},{"text":"Table","id":"table-25"},{"text":"Tokens","id":"tokens-2"},{"text":"Topology","id":"topology-14"},{"text":"Other","id":"other-27"}],{"text":"2020.09 release notes (2020-07-17)"},[{"text":"Components","id":"components-28"},{"text":"Table","id":"table-26"},{"text":"Topology","id":"topology-15"},{"text":"Other","id":"other-28"}],{"text":"2020.08 release notes (2020-06-24)"},[{"text":"Components","id":"components-29"},{"text":"Charts","id":"charts-10"},{"text":"Table","id":"table-27"},{"text":"Topology","id":"topology-16"},{"text":"Virtualized extension","id":"virtualized-extension-2"},{"text":"Other","id":"other-29"}],{"text":"2020.07 release notes (2020-06-05)"},{"text":"2020.06 release notes (2020-05-12)"},[{"text":"Components","id":"components-30"},{"text":"Charts","id":"charts-11"},{"text":"Other","id":"other-30"}],{"text":"2020.05 release notes (2020-04-21)"},[{"text":"Components","id":"components-31"},{"text":"Other","id":"other-31"}],{"text":"2020.04 release notes (2020-03-31)"},[{"text":"Components","id":"components-32"},{"text":"Table","id":"table-28"},{"text":"Other","id":"other-32"}],{"text":"2020.03 release notes (2020-03-10)"},[{"text":"Components","id":"components-33"},{"text":"Catalog view extension","id":"catalog-view-extension-6"},{"text":"Other","id":"other-33"},{"text":"Virtualized extension","id":"virtualized-extension-3"},{"text":"PF3","id":"pf3-1"}],{"text":"2020.02 release notes (2020-02-18)"},[{"text":"Components","id":"components-34"},{"text":"Catalog view extension","id":"catalog-view-extension-7"},{"text":"Table","id":"table-29"},{"text":"Other","id":"other-34"},{"text":"PF3","id":"pf3-2"}],{"text":"2020.01 release notes (2020-01-28)"},[{"text":"Components","id":"components-35"},{"text":"Catalog view extension","id":"catalog-view-extension-8"},{"text":"Table","id":"table-30"},{"text":"Other","id":"other-35"},{"text":"PF3","id":"pf3-3"}],{"text":"2019.11 release notes (2019-12-18)"},[{"text":"Charts","id":"charts-12"},{"text":"Components","id":"components-36"},{"text":"Table","id":"table-31"},{"text":"Other","id":"other-36"},{"text":"PF3","id":"pf3-4"}],{"text":"2019.10 release notes (2019-11-25)"},[{"text":"Charts","id":"charts-13"},{"text":"Components","id":"components-37"},{"text":"Catalog view extension","id":"catalog-view-extension-9"},{"text":"Table","id":"table-32"},{"text":"Topology","id":"topology-17"},{"text":"Other","id":"other-37"},{"text":"PF3","id":"pf3-5"}],{"text":"2019.09 release notes (2019-11-01)"},[{"text":"Charts","id":"charts-14"},{"text":"Components","id":"components-38"},{"text":"Table","id":"table-33"},{"text":"Other","id":"other-38"},{"text":"PF3","id":"pf3-6"}],{"text":"2019.08 release notes (2019-10-01)"},[{"text":"Charts","id":"charts-15"},{"text":"Components","id":"components-39"},{"text":"Table","id":"table-34"},{"text":"Other","id":"other-39"}],{"text":"2019.07 release notes (2019-09-10)"},[{"text":"Charts","id":"charts-16"},{"text":"Components","id":"components-40"},{"text":"Table","id":"table-35"},{"text":"Icons","id":"icons-2"},{"text":"Virtualized Extension","id":"virtualized-extension-4"},{"text":"PF3","id":"pf3-7"}],{"text":"2019.06 release notes (2019-08-13)"},[{"text":"Charts","id":"charts-17"},{"text":"Components","id":"components-41"},{"text":"Table","id":"table-36"},{"text":"TypeScript conversion"},{"text":"Docs"},{"text":"Other","id":"other-40"}],{"text":"2019.05 release notes (2019-07-24)"},[{"text":"Charts (@patternfly/react-charts@4.7.1)"},{"text":"Components (@patternfly/react-core@3.75.2)"},{"text":"TypeScript conversion","id":"typescript-conversion-0"},{"text":"Table (@patternfly/react-table@2.14.23)"},{"text":"Styles (@patternfly/react-styles@3.5.7)"},{"text":"Docs","id":"docs-0"},{"text":"Other","id":"other-41"}],{"text":"2019.04 release notes (2019-07-02)"},[{"text":"Charts (@patternfly/react-charts@4.4.7)"},{"text":"Components (@patternfly/react-core@3.58.1)"},{"text":"TypeScript conversion","id":"typescript-conversion-1"}],{"text":"2019.03 release notes (2019-06-11)"},[{"text":"Charts (@patternfly/react-charts@4.1.5)"},{"text":"Components (@patternfly/react-core@3.38.1)"},{"text":"Table (@patternfly/react-table@2.11.1)"},{"text":"Topology (@patternfly/react-topology)"},{"text":"Styles (@patternfly/react-styles@3.3.3)"},{"text":"TypeScript conversion","id":"typescript-conversion-2"}],{"text":"2019.02 release notes (2019-06-05)"},[{"text":"Components (@patternfly/react-core@3.34.2)"},{"text":"Charts @patternfly/react-charts@3.6.4"},{"text":"Docs","id":"docs-1"},{"text":"TypeScript conversion","id":"typescript-conversion-3"}],{"text":"2019.01 release notes (2019-05-02)"}],
    section: "developer-resources",
    source: "react",
    Component: () => import(/* webpackChunkName: "developer-resources/release-notes/react/index" */ './developer-resources/release-notes/react')
  },
  '/developer-resources/upgrade-guide/react': {
    id: "Upgrade guide",
    title: "Upgrade guide",
    toc: [{"text":"Global"},{"text":"React core"},[{"text":"About modal"},{"text":"Accordion"},{"text":"Alert"},{"text":"Application launcher"},{"text":"Background image"},{"text":"Button"},{"text":"Card"},{"text":"Chip group"},{"text":"Context selector"},{"text":"Data list"},{"text":"Divider"},{"text":"Drawer"},{"text":"Dropdown"},{"text":"Empty state"},{"text":"Expandable section (formerly Expandable)"},{"text":"Flex"},{"text":"Form select"},{"text":"Gallery"},{"text":"Grid"},{"text":"Label"},{"text":"Level"},{"text":"Login page"},{"text":"Modal"},{"text":"Nav"},{"text":"Options menu"},{"text":"Page"},{"text":"Pagination"},{"text":"Popover"},{"text":"Progress"},{"text":"Select"},{"text":"Skip to content"},{"text":"Split"},{"text":"Stack"},{"text":"Tabs"},{"text":"Table"},{"text":"Text input"},{"text":"Text area"},{"text":"Title"},{"text":"Toolbar (formerly DataToolbar)"},{"text":"Wizard"}],{"text":"React charts"},{"text":"React icons"},{"text":"React inline edit extension"},{"text":"React styles"},{"text":"React tokens"}],
    section: "developer-resources",
    source: "react",
    Component: () => import(/* webpackChunkName: "developer-resources/upgrade-guide/react/index" */ './developer-resources/upgrade-guide/react')
  },
  '/developer-resources/open-ui-automation/react': {
    id: "Open UI Automation",
    title: "Open UI Automation",
    toc: [{"text":"About Open UI Automation"},[{"text":"Why not use id or ARIA?"},{"text":"Specification parts"},{"text":"Usage"},{"text":"Example"}],{"text":"OUIA-compliant PatternFly 4 components"},[{"text":"react-core package"},{"text":"react-table package"}]],
    examples: ["Example"],
    section: "developer-resources",
    source: "react",
    Component: () => import(/* webpackChunkName: "developer-resources/open-ui-automation/react/index" */ './developer-resources/open-ui-automation/react')
  }
};