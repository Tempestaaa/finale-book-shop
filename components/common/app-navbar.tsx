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
import { staticData } from "@/lib/data";
import { cn, slugifiedString } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function AppNavbar() {
  return (
    <nav className="fixed top-0 w-full h-14 flex items-center bg-background z-50">
      <article className="grid grid-cols-2 w-full px-4">
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
              {staticData.navMenu.map((item) => (
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
            <NotificationButton notifications={staticData.notifications} />
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
