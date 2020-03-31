'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return e(PatternFlyReact.Alert, {
        title: ' Great success',
        children: 'You liked this',
        variant: 'success'
      });
    }

    return e(
      PatternFlyReact.Button,
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}


const domContainer = document.querySelector('#react-root');
ReactDOM.render(e(LikeButton), domContainer);