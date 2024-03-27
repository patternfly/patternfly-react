import { FileUpload } from '../FileUpload';
import { render } from '@testing-library/react';

test('simple fileupload', () => {
  const readStartedHandler = jest.fn();
  const readFinishedHandler = jest.fn();

  const { asFragment } = render(
    <FileUpload
      id="simple-text-file"
      type="text"
      value={''}
      filename={''}
      onReadStarted={readStartedHandler}
      onReadFinished={readFinishedHandler}
      isLoading={false}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
