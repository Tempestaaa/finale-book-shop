import FilterWrapper from "@/app/shop/filter-wrapper";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  SidebarMenuButton,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Slider } from "@/components/ui/slider";

export default function FilterPrice() {
  return (
    <FilterWrapper label="Price">
      <div className="px-2 space-y-0.5">
        <Slider value={[0, 100]} className="h-7" />
        <p className="text-sm text-muted-foreground">
          Set your budget range ($0 - 100)
        </p>
      </div>
      <SidebarMenuSubButton className="mt-1.5">
        <Checkbox id="sale-button" />
        <Label htmlFor="sale-button" className="flex-1">
          On Sale
        </Label>
      </SidebarMenuSubButton>
    </FilterWrapper>
  );
}
