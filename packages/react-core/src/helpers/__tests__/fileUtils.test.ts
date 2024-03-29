import { readFile, fileReaderType } from '../fileUtils';

describe('readFile', () => {
  const file = new File(['File contents here'], 'testfile.txt');

  test('text file', () => expect(readFile(file, fileReaderType.text)).resolves.toBe('File contents here'));

  test('dataURL file', () =>
    expect(readFile(file, fileReaderType.dataURL)).resolves.toBe(
      'data:application/octet-stream;base64,RmlsZSBjb250ZW50cyBoZXJl'
    ));

  test('rejects on unknown type', () => expect(readFile(file, 'foo' as fileReaderType)).rejects.toBe('unknown type'));
});
