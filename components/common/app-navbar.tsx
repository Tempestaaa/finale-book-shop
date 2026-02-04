import AppSearchBar from "@/components/common/app-search-bar";
import NotificationButton from "@/components/common/notification-button";
import ShoppingCartButton from "@/components/common/shopping-cart-button";
import ThemeToggle from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { cn, slugifiedString } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";

const bookData = {
  genres: [
    { id: "GEN-1", name: "Action" },
    { id: "GEN-2", name: "Adventure" },
    { id: "GEN-3", name: "Biography" },
    { id: "GEN-4", name: "Autobiography" },
    { id: "GEN-5", name: "Classic" },
    { id: "GEN-6", name: "Contemporary Fiction" },
    { id: "GEN-7", name: "Crime" },
    { id: "GEN-8", name: "Mystery" },
    { id: "GEN-9", name: "Fantasy" },
    { id: "GEN-10", name: "Historical Fiction" },
    { id: "GEN-11", name: "Horror" },
    { id: "GEN-12", name: "Literary Fiction" },
    { id: "GEN-13", name: "Non-Fiction" },
    { id: "GEN-14", name: "Romance" },
    { id: "GEN-15", name: "Science Fiction" },
    { id: "GEN-16", name: "Self-Help" },
    { id: "GEN-17", name: "Thriller" },
    { id: "GEN-18", name: "Suspense" },
    { id: "GEN-19", name: "Young Adult" },
  ],
};

const data = {
  navMenu: [
    { label: "Home", href: "/" },
    { label: "Categories", href: "/shop", subMenu: bookData.genres },
    { label: "New Arrivals", href: "/shop?type=new" },
    { label: "Best Sellers", href: "/shop?type=hot" },
    { label: "Sale", href: "/shop?type=sale", isSale: true },
  ],
  notifications: [
    {
      id: "NOTIF-001",
      type: "order_update",
      priority: "high",
      title: "Package Out for Delivery",
      message:
        "Great news! Your order #BK-7702 (The Midnight Library) is with the courier and should arrive by 5:00 PM today.",
      timestamp: "2026-02-02T09:15:00Z",
      isRead: false,
    },
    {
      id: "NOTIF-002",
      type: "promotion",
      priority: "medium",
      title: "Early Valentine's Special",
      message:
        "Found your literary soulmate? Get 20% off all Hardcover Romance titles until Feb 14th. Use code: LOVEBOOKS.",
      timestamp: "2026-02-02T08:00:00Z",
      isRead: false,
    },
    {
      id: "NOTIF-003",
      type: "inventory",
      priority: "medium",
      title: "Back in Stock!",
      message:
        "The wait is over. 'Digital Fortress' by Dan Brown is finally back on our shelves. Grab your copy before it vanishes again!",
      timestamp: "2026-02-01T14:30:00Z",
      isRead: true,
    },
    {
      id: "NOTIF-004",
      type: "event",
      priority: "low",
      title: "Author Meet & Greet",
      message:
        "Reminder: Local Sci-Fi author Sarah Chen will be signing books at our Downtown branch this Saturday at 2:00 PM.",
      timestamp: "2026-01-31T11:00:00Z",
      isRead: true,
    },
    {
      id: "NOTIF-005",
      type: "account",
      priority: "high",
      title: "Security Alert",
      message:
        "A new login was detected from a Chrome browser on Windows. If this wasn't you, please reset your password immediately.",
      timestamp: "2026-02-02T13:45:00Z",
      isRead: false,
    },
  ],
};

export default function AppNavbar() {
  return (
    <nav className="fixed top-0 w-full h-14 flex items-center">
      <article className="container mx-auto grid grid-cols-2">
        <section className="flex items-center gap-2">
          <Button variant="ghost" className="p-1.5" asChild>
            <Link href="/">
              <Avatar className="h-5 w-5">
                <AvatarImage src="/globe.svg" alt="Logo" />
                <AvatarFallback>Logo</AvatarFallback>
              </Avatar>
            </Link>
          </Button>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {data.navMenu.map((item) => (
                <NavigationMenuItem key={item.href} className="">
                  {item.subMenu ? (
                    <>
                      <NavigationMenuTrigger>
                        <Link href={item.href} className="w-full">
                          {item.label}
                        </Link>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-lg! grid grid-cols-4 text-sm">
                        {item.subMenu.map((sub) => (
                          <Button
                            key={sub.id}
                            variant="ghost"
                            asChild
                            className="justify-start min-w-0 w-full"
                          >
                            <Link
                              href={`/shop?g=${slugifiedString(sub.name)}`}
                              className="w-full overflow-hidden"
                            >
                              <span className="truncate block w-full">
                                {sub.name}
                              </span>
                            </Link>
                          </Button>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          item.isSale && "text-red-500 hover:text-red-500",
                        )}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </section>

        <section className="flex items-center gap-2 justify-end">
          <AppSearchBar />
          <Separator orientation="vertical" className="h-4!" />
          <ButtonGroup>
            <NotificationButton notifications={data.notifications} />
            <ShoppingCartButton />
            <ThemeToggle variant="ghost" size="icon" />
          </ButtonGroup>
          <Separator orientation="vertical" className="h-4!" />
          <Button className="ml-2">
            <span>Login</span>
            <LogIn />
          </Button>
        </section>
      </article>
    </nav>
  );
}
