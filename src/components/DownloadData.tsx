import { Button } from "./ui/Button";

export const DownloadData = () => {
  return (
    <div className="flex gap-3">
      <Button variant="primary" className="text-sm">
        Download CSV
      </Button>
      <label>
        <span>File Name:</span>
        <input
          placeholder="file-name.csv"
          className="bg-transparent border border-gray-300 rounded-md w-full px-2 py-1 outline-none"
        />
      </label>
    </div>
  );
};
