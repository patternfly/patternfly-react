import React from 'react';
import { shallow } from 'enzyme';
import AboutModal from './AboutModal';
import ReactDOM from 'react-dom';
import { KEY_CODES } from '../../internal/constants';

jest.spyOn(ReactDOM, 'createPortal');
jest.spyOn(document, 'createElement');
jest.spyOn(document, 'addEventListener');

ReactDOM.createPortal.mockImplementation(v => v);

const props = {
  onClose: jest.fn(),
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image',
  logoImageSrc: 'logoImg...',
  logoImageAlt: 'AboutModal Logo',
  heroImageSrc: 'heroImg...'
};

test('AboutModal creates a container element once for div', () => {
  const view = shallow(<AboutModal {...props}> Test About Modal </AboutModal>);
  view.update();
  expect(document.createElement).toBeCalledWith('div');
  expect(document.createElement).toHaveBeenCalledTimes(3);
});

test('About Modal closes with escape', () => {
  shallow(
    <AboutModal {...props} isOpen>
      Test About Modal
    </AboutModal>
  );
  const [event, handler] = document.addEventListener.mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).toBeCalled();
});

test('modal does not call onClose for esc key if it is not open', () => {
  shallow(<AboutModal {...props} />);
  const [event, handler] = document.addEventListener.mock.calls[0];
  expect(event).toBe('keydown');
  handler({ keyCode: KEY_CODES.ESCAPE_KEY });
  expect(props.onClose).not.toBeCalled();
});

test('Each modal is given new ariaDescribedById and ariaLablledbyId', () => {
  const first = shallow(<AboutModal {...props}> Test About Modal </AboutModal>);
  const second = shallow(<AboutModal {...props}> Test About Modal </AboutModal>);
  expect(first.props().ariaLabelledbyId).not.toBe(second.props().ariaLabelledbyId);
  expect(first.props().ariaDescribedById).not.toBe(second.props().ariaDescribedById);
});
