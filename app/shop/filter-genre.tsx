import FilterWrapper from "@/app/shop/filter-wrapper";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { bookData } from "@/lib/data";
import { slugifiedString } from "@/lib/utils";
import Link from "next/link";

export default function FilterGenre() {
  return (
    <FilterWrapper label="Genres" defaultOpen hasMaxHeight>
      <SidebarMenuSub>
        {bookData.genres.map((item) => (
          <SidebarMenuSubItem key={item.id}>
            <SidebarMenuSubButton asChild>
              <Link href={`/shop?q=${slugifiedString(item.name)}`}>
                {item.name}
              </Link>
            </SidebarMenuSubButton>
          </SidebarMenuSubItem>
        ))}
      </SidebarMenuSub>
    </FilterWrapper>
  );
}
