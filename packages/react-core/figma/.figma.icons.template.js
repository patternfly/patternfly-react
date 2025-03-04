// url=https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/uWhfFQ9xglKOhe9v1qRMgO/PatternFly-6%3A-Components?node-id=3-7&p=f&t=xVRfahiETV7MgoQi-0
const figma = require('figma');
const instance = figma.selectedInstance;

// Access component properties using the Template V2 API
const labelText = instance.getString('Label'); // Gets the value of a text property
const isDisabled = instance.getBoolean('Disabled'); // Gets the value of a boolean property

// Find and access child layers
const iconInstance = instance.findInstance('Icon'); // Find a nested icon component
const helperText = instance.findText('HelperText'); // Find a text layer

// Export the rendered code and optional metadata
export default {
  example: figma.code`
    <MyComponent
      label={${labelText}}
      disabled={${isDisabled}}
      icon={${iconInstance.executeTemplate().example}}
      helperText={${helperText.textContent}}
    />
  `,
  // Optional: Custom identifier for referencing this component
  id: 'my-component',
  metadata: {
    // Controls how this appears when nested in other components
    nestable: false
  }
}