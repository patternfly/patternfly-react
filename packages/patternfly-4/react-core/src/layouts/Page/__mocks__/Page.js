export const mockPageContext = {
  isTall: true
};

export const PageContext = {
  Consumer(props) {
    return props.children(mockPageContext);
  }
};
