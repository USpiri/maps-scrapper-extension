import { MapItem } from "../models/item.interface";

export const downloadMapItemsCSV =
  (data: MapItem[], fileName: string) => () => {
    const csvValues = [
      [
        "Name",
        "Rating",
        "ReviewCount",
        "Phone",
        "Time",
        "Category",
        "Accesibility",
        "Address",
        "Features",
        "Image",
        "WebSite",
        "GoogleMap",
      ],
      ...data.map((i) => [
        i.name,
        i.rating,
        i.reviewsCount,
        i.phone,
        i.time,
        i.category,
        i.isAccessible,
        i.address,
        i.features.join(" - "),
        i.image,
        i.website,
        i.mapLink,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    data.forEach((i) => {
      console.log(i);
    });

    const blob = new Blob([csvValues], { type: "text/csv" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

export const downloadMapItemsJSON =
  (data: MapItem[], fileName: string) => () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
