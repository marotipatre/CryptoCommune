import { ReactElement } from "react";

interface TableProps {
  data: Array<{
    id: number;
    name: string;
    members: number;
    proposals: number;
  }>;
}

export function ClubTable({ data }: TableProps): ReactElement {
  return (
    <table className="table-auto border-collapse w-full mx-20">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Members</th>
          <th className="px-4 py-2 text-left">Proposals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b hover:bg-gray-100">
            <td className="px-4 py-2">{item.id}</td>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.members}</td>
            <td className="px-4 py-2">{item.proposals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
