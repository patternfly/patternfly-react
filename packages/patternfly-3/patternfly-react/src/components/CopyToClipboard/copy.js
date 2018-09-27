export const clipboardCopy = inputNode => {
  if (!inputNode) {
    return false;
  }
  inputNode.select();
  const copiedSuccessfully = document.execCommand('copy');
  inputNode.blur();
  // if execCommand copy is not supported or disabled return false
  return copiedSuccessfully;
};
