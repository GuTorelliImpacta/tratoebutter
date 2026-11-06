import { hours } from "@/content/site";

export function HoursTable({ dark = false }: { dark?: boolean }) {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Horário de funcionamento</caption>
      <tbody>
        {hours.map((h) => (
          <tr key={h.day} className={`border-b border-dashed ${dark ? "border-paper/30" : "border-ink/30"}`}>
            <th scope="row" className="py-2 pr-4 font-medium">
              {h.day}
            </th>
            <td className="py-2 text-right tabular-nums">
              {h.turns.map((t) => `${t.open}–${t.close}`).join(" · ")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
