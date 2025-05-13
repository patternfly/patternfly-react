import figma from "@figma/code-connect"
import { DataListItemRow } from '@patternfly/react-core';

figma.connect(
  DataListItemRow,
  "https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=6596-34013&m=dev",
  {
    props: {
      children: figma.children('*')
    },
    example: (props) =>
      <DataListItemRow>
        {props.children}
      </DataListItemRow>
  }
);
