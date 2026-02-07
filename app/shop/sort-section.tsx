import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { staticData } from "@/lib/data";

export default function SortSection() {
  return (
    <Select defaultValue={staticData.sortOptions[0].value}>
      <SelectTrigger className="w-full max-w-48 ml-auto">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {staticData.sortOptions.map((item) => {
            const Icon = item.icon;
            return (
              <SelectItem key={item.id} value={item.value}>
                <Icon />
                <span>{item.name}</span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
