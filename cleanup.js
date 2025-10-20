const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(pathToDelete) {
  if (fs.existsSync(pathToDelete)) {
    fs.readdirSync(pathToDelete).forEach((file) => {
      const curPath = path.join(pathToDelete, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      } else {
        try {
          fs.unlinkSync(curPath);
        } catch (err) {
          // console.error(`Error deleting file ${curPath}:`, err);
        }
      }
    });
    try {
      fs.rmdirSync(pathToDelete);
    } catch (err) {
      // console.error(`Error deleting directory ${pathToDelete}:`, err);
    }
  }
}

['node_modules', '.yarn'].forEach((dir) => {
  // console.log(`Removing ${dir}...`);
  deleteFolderRecursive(dir);
});

['.pnp.cjs', '.pnp.loader.mjs'].forEach((file) => {
  if (fs.existsSync(file)) {
    try {
      fs.unlinkSync(file);
      // console.log(`Removed ${file}`);
    } catch (err) {
      // console.error(`Error removing ${file}:`, err);
    }
  }
});
