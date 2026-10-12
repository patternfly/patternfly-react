---
id: Card view
section: patterns
---

import { Fragment, useState } from 'react';
import RhUiTrashFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-trash-fill-icon';
import RhUiAddCircleFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-add-circle-fill-icon';
import pfIcon from '@rh-felt/react-core/src/demos/assets/PF-IconLogo.svg';
import activeMQIcon from '../assets/activemq-core_200x150.png';
import avroIcon from '../assets/camel-avro_200x150.png';
import dropBoxIcon from '../assets/camel-dropbox_200x150.png';
import infinispanIcon from '../assets/camel-infinispan_200x150.png';
import saxonIcon from '../assets/camel-saxon_200x150.png';
import sparkIcon from '../assets/camel-spark_200x150.png';
import swaggerIcon from '../assets/camel-swagger-java_200x150.png';
import azureIcon from '../assets/FuseConnector_Icons_AzureServices.png';
import restIcon from '../assets/FuseConnector_Icons_REST.png';
import RhUiEllipsisVerticalFillIcon from '@rh-felt/react-icons/dist/esm/icons/rh-ui-ellipsis-vertical-fill-icon';
import { data } from '@rh-felt/react-core/src/demos/CardView/examples/CardViewData.jsx';

import { DashboardWrapper } from '@rh-felt/react-core/dist/js/demos/DashboardWrapper';

## Demos

This demonstrates how you can assemble a full page view that contains a grid of equal sized cards that includes a toolbar for managing card grid contents.

### Card view

```ts file="examples/CardView.tsx" isFullscreen
```
