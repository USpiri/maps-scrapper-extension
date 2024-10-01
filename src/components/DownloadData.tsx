import { useState } from "react";
import { MapItem } from "../models/item.interface";
import { Button } from "./ui/Button";
import { downloadMapItemsCSV } from "../utils/download-csv";

interface DownloadDataProps {
  data: MapItem[];
}

export const DownloadData = ({ data }: DownloadDataProps) => {
  const [fileName, setFileName] = useState("maps-data");
  const onDownload = downloadMapItemsCSV(data, fileName);

  const onInputChange = (value: string) => {
    setFileName(value);
  };

  return (
    <form
      className="flex gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onDownload();
      }}
    >
      <Button type="submit" variant="primary">
        Download CSV
      </Button>
      <label>
        <span>File Name:</span>
        <input
          placeholder="file-name.csv"
          value={fileName}
          onChange={(e) => onInputChange(e.target.value)}
          className="bg-transparent border border-gray-300 rounded-md w-full px-2 py-1 outline-none"
        />
      </label>
    </form>
  );
};
