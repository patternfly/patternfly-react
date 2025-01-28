import figma from '@figma/code-connect/react';

async function getIconNames(fileId, component, icon) {
  const iconComponents = await figma.getComponents({
    fileId: "YOUR_FIGMA_FILE_ID",
    filter: {
      types: ["COMPONENT"],
      names: ["icon"]
    }
  });

  return iconComponents.map(component => component.name);
}

async function main() {
  try {
    const names = await getIconNames();
    console.log('Icon names:', names);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
