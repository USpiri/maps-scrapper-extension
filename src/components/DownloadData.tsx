import { useState } from "react";
import { MapItem } from "../models/item.interface";
import { Button } from "./ui/Button";
import {
  downloadMapItemsCSV,
  downloadMapItemsJSON,
} from "../utils/download-csv";

interface DownloadDataProps {
  data: MapItem[];
}

export const DownloadData = ({ data }: DownloadDataProps) => {
  const [fileName, setFileName] = useState("maps-data");
  const onDownloadCSV = downloadMapItemsCSV(data, fileName);
  const onDownloadJSON = downloadMapItemsJSON(data, fileName);

  const onInputChange = (value: string) => {
    setFileName(value);
  };

  return (
    <form
      className="flex gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        onDownloadCSV();
      }}
    >
      <div className="flex flex-col">
        <Button type="submit" variant="primary">
          Download CSV
        </Button>
        <Button type="button" variant="primary" onClick={onDownloadJSON}>
          Download JSON
        </Button>
      </div>
      <label className="flex-1">
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
