import { DataList } from '@patternfly/react-core'
import figma from '@figma/code-connect'

figma.connect(
  DataList,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6649-80542&m=dev",
  {
    props: {
      size: figma.enum("Size", {
        Default: "default",
        Compact: "compact",
      }),
      type: figma.enum("Type", {
        Basic: "basic",
        Selectable: "selectable",
        "Clickable + Selectable": "clickable---selectable",
        Clickable: "clickable",
      }),
      expandable: figma.boolean("Expandable"),
    },
    example: (props) => <DataList size={props.size} type={props.type} />,
  },
)
