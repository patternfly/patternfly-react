import React from 'react';
import { Wizard, WizardStep } from '@patternfly/react-core';

export const WizardBasic: React.FunctionComponent = () => (
  <Wizard height={400} title="Basic wizard">
    <WizardStep name="Step 1" id="basic-first-step">
      <p>
        The content of this step overflows and creates a scrollbar, which causes a tabindex of "0", a role of "region",
        and an aria-label or aria-labelledby to be applied.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum in neque nec pharetra. Duis lacinia
        vel sapien ut imperdiet. Nunc ultrices mollis dictum. Duis tempus, massa nec tincidunt tempor, enim ex porttitor
        odio, eu facilisis dolor tortor id sapien. Etiam sit amet molestie lacus. Nulla facilisi. Duis eget finibus
        ipsum. Quisque dictum enim sed sodales porta. Curabitur eget orci eu risus posuere pulvinar id nec turpis. Morbi
        mattis orci vel posuere tincidunt. Fusce bibendum et libero a auctor.
      </p>
      <p>
        Proin elementum commodo sodales. Quisque eget libero mattis, ornare augue at, egestas nisi. Mauris ultrices orci
        fringilla pretium mattis. Aliquam erat volutpat. Sed pharetra condimentum dui, nec bibendum ante. Vestibulum
        sollicitudin, sem accumsan pharetra molestie, purus turpis lacinia lorem, commodo sodales quam lectus a urna.
        Nam gravida, felis a lacinia varius, ex ipsum ultrices orci, non egestas diam velit in mi. Ut sit amet commodo
        orci. Duis sed diam odio. Duis mi metus, dignissim in odio nec, ornare aliquet libero. Sed luctus elit nibh.
        Quisque et felis diam. Integer ac metus dolor.
      </p>
    </WizardStep>
    <WizardStep name="Step 2" id="basic-second-step">
      Step 2 content
    </WizardStep>
    <WizardStep name="Review" id="basic-review-step" footer={{ nextButtonText: 'Finish' }}>
      Review step content
    </WizardStep>
  </Wizard>
);
