import { omniboxInputEnteredListener } from './omnibox.js';
import {
  openTask, logSuccess, pullSuggestions, Suggestion,
} from '../opener-for-asana.js';

jest.mock('../opener-for-asana');

afterEach(() => {
  jest.clearAllMocks();
});

test('omniboxInputEnteredListenerNonDefault', async () => {
  const mockActOnInputData = jest.mocked(openTask);
  const mockLogSuccess = jest.mocked(logSuccess);
  const resolvedValue = 'foo';
  mockActOnInputData.mockResolvedValue(resolvedValue);

  await omniboxInputEnteredListener('opener-for-asana:mumble');
  expect(mockActOnInputData).toHaveBeenCalledWith('opener-for-asana:mumble');
  expect(mockLogSuccess).toHaveBeenCalledWith(resolvedValue);
});

test('omniboxInputEnteredListenerException', async () => {
  const mockActOnInputData = jest.mocked(openTask);
  const mockLogSuccess = jest.mocked(logSuccess);
  mockActOnInputData.mockRejectedValue('123');

  await expect(omniboxInputEnteredListener('opener-for-asana:mumble')).rejects.toMatch('123');
  expect(mockActOnInputData).toHaveBeenCalledWith('opener-for-asana:mumble');
  expect(mockLogSuccess).not.toHaveBeenCalled();
});

test('omniboxInputEnteredListenerExceptionWithAlertAvailable', async () => {
  const mockActOnInputData = jest.mocked(openTask);
  const mockLogSuccess = jest.mocked(logSuccess);
  mockActOnInputData.mockRejectedValue('123');

  await expect(omniboxInputEnteredListener('opener-for-asana:mumble')).rejects.toMatch('123');
  expect(mockActOnInputData).toHaveBeenCalledWith('opener-for-asana:mumble');
  expect(mockLogSuccess).not.toHaveBeenCalled();
});

test('omniboxInputEnteredListenerDefaultEmptyList', async () => {
  const mockActOnInputData = jest.mocked(openTask);
  const mockLogSuccess = jest.mocked(logSuccess);
  const mockPullSuggestions = jest.mocked(pullSuggestions);
  const resolvedValue = '';
  mockActOnInputData.mockResolvedValue(resolvedValue);
  mockPullSuggestions.mockResolvedValue([]);

  await expect(omniboxInputEnteredListener('blah')).rejects.toEqual(new Error('No results for "blah"'));
  expect(mockActOnInputData).not.toHaveBeenCalled();
  expect(mockLogSuccess).not.toHaveBeenCalled();
});

test('omniboxInputEnteredListenerDefaultMultipleItems', async () => {
  const mockActOnInputData = jest.mocked(openTask);
  const mockLogSuccess = jest.mocked(logSuccess);
  const mockPullSuggestions = jest.mocked(pullSuggestions);
  const resolvedValue = '';
  mockActOnInputData.mockResolvedValue(resolvedValue);
  const item1: Suggestion = { url: 'opener-for-asana:foo', description: 'dfoo', text: 'Foo' };
  const item2: Suggestion = { url: 'opener-for-asana:bar', description: 'dbar', text: 'Bar' };
  const item3: Suggestion = { url: 'opener-for-asana:baz', description: 'dbaz', text: 'Baz' };
  mockPullSuggestions.mockResolvedValue([item1, item2, item3]);

  await omniboxInputEnteredListener('foo');
  expect(mockActOnInputData).toHaveBeenCalledWith('opener-for-asana:foo');
  expect(mockLogSuccess).toHaveBeenCalledWith(resolvedValue);
});
