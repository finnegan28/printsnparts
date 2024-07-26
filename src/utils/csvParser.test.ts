import Papa from 'papaparse';
import { fetchCSV } from './csvParser';

describe('fetchCSV', () => {
  it('should fetch and parse the CSV data correctly', async () => {
    const url = 'https://example.com/data.csv';
    const mockResponse = 'header1,header2\nvalue1,value2\nvalue3,value4';
    const mockParsedData = [
      { header1: 'value1', header2: 'value2' },
      { header1: 'value3', header2: 'value4' },
    ];

    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: 'OK',
      text: jest.fn().mockResolvedValueOnce(mockResponse),
    } as Response);

    const result = await fetchCSV(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(result).toEqual(mockParsedData);
  });

  it('should reject with an error if fetching the CSV fails', async () => {
    const url = 'https://example.com/data.csv';
    const mockError = new Error('Failed to fetch CSV');

    jest.spyOn(window, 'fetch').mockRejectedValueOnce(mockError);

    await expect(fetchCSV(url)).rejects.toThrowError(mockError);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should reject with an error if parsing the CSV fails', async () => {
    const url = 'https://example.com/data.csv';
    const mockResponse = 'header1,header2\nvalue1,value2\nvalue3,value4';
    const mockError = new Error('Failed to parse CSV');

    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: 'OK',
      text: jest.fn().mockResolvedValueOnce(mockResponse),
    } as Response);

    jest.spyOn(Papa, 'parse').mockImplementationOnce((_csvText, { error }) => {
      error(mockError);
    });

    await expect(fetchCSV(url)).rejects.toThrowError(mockError);
    expect(window.fetch).toHaveBeenCalledWith(url);
    expect(Papa.parse).toHaveBeenCalled();
  });
});