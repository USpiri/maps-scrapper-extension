import { MapItem } from "../models/item.interface";
import { Table, TableHead, TD, TH, TR } from "./ui/Table";

interface MapsItemTableProps {
  data: MapItem[];
}

export const MapsItemTable = ({ data }: MapsItemTableProps) => {
  return (
    <div className="relative overflow-x-auto h-96">
      <Table>
        <TableHead
          headings={[
            "Image",
            "Name",
            "Rating",
            "Phone",
            "Time",
            "Category",
            "Accesibility",
            "Address",
            "Features",
            "Web Site",
            "Google Map",
          ]}
        />
        <tbody>
          {data.map((item) => (
            <TR key={item.name}>
              <TD>
                <img
                  src={item.image}
                  width={50}
                  height={50}
                  className="aspect-square"
                />
              </TD>
              <TH className="font-medium">{item.name}</TH>
              <TD>
                {item.rating}({item.reviewsCount})
              </TD>
              <TD>{item.phone}</TD>
              <TD className="whitespace-nowrap">{item.time}</TD>
              <TD>{item.category}</TD>
              <TD>{item.isAccessible ? "🦽" : "❌"}</TD>
              <TD className="whitespace-nowrap">{item.address}</TD>
              <TD>
                <ul>
                  {item.features.map((f) => (
                    <li className="whitespace-nowrap">- {f}</li>
                  ))}
                </ul>
              </TD>
              <TD>
                <a
                  href={item.website}
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  Web site 🌐
                </a>
              </TD>
              <TD>
                <a
                  href={item.mapLink}
                  target="_blank"
                  className="underline hover:text-blue-500"
                >
                  Google maps
                </a>
              </TD>
            </TR>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
