import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Minus, Plus } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  label: string;
  defaultOpen?: boolean;
  hasMaxHeight?: boolean;
  children: ReactNode;
};

export default function FilterWrapper({
  label,
  defaultOpen = false,
  hasMaxHeight = false,
  children,
}: Props) {
  return (
    <Collapsible defaultOpen={defaultOpen} className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {label}
            <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
            <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        {hasMaxHeight ? (
          <ScrollArea className="group-data-[state=closed]/collapsible:h-auto group-data-[state=open]/collapsible:h-80">
            <CollapsibleContent>{children}</CollapsibleContent>
          </ScrollArea>
        ) : (
          <CollapsibleContent>{children}</CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );
}
