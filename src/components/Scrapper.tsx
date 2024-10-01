import { useCallback, useState } from "react";
import { Button } from "./ui/Button";
import { getCurrentTab } from "../utils/tabs";
import { scripting } from "webextension-polyfill";
import { scrapeData } from "../utils/scrapper";
import { MapItem } from "../models/item.interface";
import { DownloadData } from "./DownloadData";
import { MapsItemTable } from "./MapItemsTable";

export const Scrapper = () => {
  const [data, setData] = useState<MapItem[]>([]);

  const onScrapping = useCallback(async () => {
    const [curretTab] = await getCurrentTab();
    scripting
      .executeScript({
        target: { tabId: curretTab.id! },
        func: scrapeData,
      })
      .then((res) => res[0])
      .then((data) => data.result)
      .then((items) =>
        setData((currentData) => [
          ...currentData,
          ...(items as MapItem[]).filter(
            (i) =>
              !currentData.some(
                (prev) => prev.name === i.name && prev.address === i.address,
              ),
          ),
        ]),
      );
  }, []);

  return (
    <>
      <Button onClick={onScrapping}>
        {data.length !== 0 ? "Continue" : "Start"} Scrapping
      </Button>
      {data.length !== 0 && (
        <>
          <div>
            <MapsItemTable data={data} />
            <span className="text-xs font-mono">Total: {data.length}</span>
          </div>
          <DownloadData data={data} />
        </>
      )}
    </>
  );
};
