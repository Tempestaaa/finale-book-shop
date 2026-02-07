import FilterWrapper from "@/app/shop/filter-wrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SidebarMenuSub, SidebarMenuSubButton } from "@/components/ui/sidebar";
import { bookData } from "@/lib/data";
import { slugifiedString } from "@/lib/utils";

export default function FilterStatus() {
  return (
    <FilterWrapper label="Availability & Status">
      <SidebarMenuSub className="gap-0">
        {bookData.status.map((item) => (
          <SidebarMenuSubButton key={item.id} className="mt-1.5">
            <Checkbox
              id={`${slugifiedString(item.name) + "-button"}`}
              className="sr-only"
            />
            <Label
              htmlFor={`${slugifiedString(item.name) + "-button"}`}
              className="flex-1"
            >
              {item.name}
            </Label>
          </SidebarMenuSubButton>
        ))}
      </SidebarMenuSub>
    </FilterWrapper>
  );
}
