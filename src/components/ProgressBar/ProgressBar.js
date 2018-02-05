import { ProgressBar as OriginalProgressBar } from 'react-bootstrap';

const ProgressBar = OriginalProgressBar;
delete ProgressBar.propTypes.children;

export default ProgressBar;
