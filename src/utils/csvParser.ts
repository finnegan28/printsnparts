import Papa from 'papaparse';

export const fetchCSV = async (url: string) => {
  const response = await fetch(url);
  const csvText = await response.text();
  return new Promise<any[]>((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      complete: (results) => resolve(results.data),
      error: (error: any) => reject(error),
    });
  });
};