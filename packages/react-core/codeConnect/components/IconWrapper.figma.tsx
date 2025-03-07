import React from "react";
import { IconWrapper } from "./IconWrapper";
import figma from "@figma/code-connect";
import { TestIcon } from "./TestIcon";

figma.connect(
  IconWrapper,
  "https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=198-1573",
  {
    props: {
      icon: figma.instance("🖼️ Icon", {
        'test-icon': <TestIcon />
      }),
      iconSize: figma.enum("Icon Size", {
        "Standalone - Small": "standalone---small",
        "Standalone - Medium": "standalone---medium",
        "Standalone - Large": "standalone---large"
      })
    },
    example: (props) => <IconWrapper {...props} />
  }
);