import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { cn, timeFromNow } from "@/lib/utils";
import { iNotification } from "@/types/data";
import { Bell, CheckCheck } from "lucide-react";

type Props = {
  notifications: iNotification[];
};

export default function NotificationButton({ notifications }: Props) {
  const unreadNotis = notifications.filter((item) => item.isRead);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-lg">
        <DropdownMenuGroup className="flex items-center justify-between px-2 py-1.5">
          <div className="flex items-center gap-2">
            <Bell className="size-4 stroke-3" />
            <span className="text-base font-semibold">Notification</span>
          </div>
          <Label>
            <span className="text-muted-foreground">Unread</span>
            <Switch size="sm" defaultChecked />
          </Label>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <ScrollArea className="h-120">
          <DropdownMenuGroup className="*:rounded-none bg-background">
            {notifications.map((item) => (
              <DropdownMenuItem
                key={item.id}
                className={cn(
                  "flex gap-3 items-start",
                  item.isRead && "bg-muted/60",
                )}
              >
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="shadcn"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <header className="font-semibold line-clamp-1">
                    {item.title}
                  </header>
                  <p className="text-muted-foreground">{item.message}</p>
                  <div className="mt-1">{timeFromNow(item.timestamp)}</div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        </ScrollArea>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="text-sm py-1 px-2 flex items-center justify-between">
          <p className="text-muted-foreground">
            {unreadNotis.length} notifications unread
          </p>
          <Button variant="ghost" className="flex items-center gap-2 ml-auto">
            <CheckCheck className="size-4" />
            <span>Mask as read all</span>
          </Button>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
