import { MapItem } from "../models/item.interface";

export const downloadMapItemsCSV =
  (data: MapItem[], fileName: string) => () => {
    const header = Object.keys(data[0]);
    const csv = [
      header.join(","),
      // eslint-disable-next-line
      ...data.map((row: any) =>
        header.map((fieldName) => {
          const field = row[fieldName as keyof MapItem];
          return JSON.stringify(
            Array.isArray(field) ? field.join(" - ") : field,
            (_, value) => value ?? "",
          ).replace(/\\"/g, '""');
        }),
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });

    downloadFile(blob, fileName);
  };

export const downloadMapItemsJSON =
  (data: MapItem[], fileName: string) => () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });

    downloadFile(blob, fileName);
  };

const downloadFile = (file: Blob, fileName: string) => {
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
