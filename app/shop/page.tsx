import FilterFormat from "@/app/shop/filter-format";
import FilterGenre from "@/app/shop/filter-genre";
import FilterLanguage from "@/app/shop/filter-language";
import FilterPrice from "@/app/shop/filter-price";
import FilterStatus from "@/app/shop/filter-status";
import SortSection from "@/app/shop/sort-section";
import Pagination from "@/components/common/pagination";
import StarRating from "@/components/common/star-rating";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="flex-1 flex">
      <Sidebar className="">
        <ScrollArea className="mt-14 bg-background h-full overflow-y-auto">
          <SidebarGroup>
            <SidebarGroupLabel>Filters</SidebarGroupLabel>
            <SidebarMenu>
              <FilterGenre />
              <FilterPrice />
              <FilterLanguage />
              <FilterFormat />
              <FilterStatus />
            </SidebarMenu>
          </SidebarGroup>
        </ScrollArea>
      </Sidebar>

      <SidebarInset className="flex flex-col gap-2 pb-8">
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4!" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <SortSection />
        </header>

        <section className="grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-6 px-4">
          {[...Array(15)].map((_, id) => (
            <div
              key={id}
              className="overflow-hidden hover:bg-muted transition-colors duration-300"
            >
              <Link href="/books/123" className="h-96 block relative bg-card">
                {/* <Image src="/test.jpg" alt="Book's cover" fill /> */}
              </Link>

              <div className="p-2">
                <Link href="/author/123">
                  <small className="text-xs text-muted-foreground hover-text">
                    Author
                  </small>
                </Link>
                <Link href="/books/123">
                  <p className="font-semibold line-clamp-1 hover-text">
                    Frieren: Beyond the Journey&apos;s End, Vol 1
                  </p>
                </Link>
                <div className="mt-1 flex items-center justify-between">
                  <StarRating rate={4} showScore />
                  <p className="text-xs text-muted-foreground">999 solds</p>
                </div>
                <div className="flex items-end justify-between">
                  <div className="">
                    <small className="text-xs text-muted-foreground">
                      Price
                    </small>
                    <h4 className="text-xl font-semibold">
                      $9.99{" "}
                      <span className="text-xs text-muted-foreground">
                        <s>$10.99</s>
                      </span>
                    </h4>
                  </div>
                  <ButtonGroup>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-foreground! hover:text-muted!"
                    >
                      <Heart />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-foreground! hover:text-muted!"
                    >
                      <ShoppingCart />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-4">
          <Pagination />
        </div>
      </SidebarInset>
    </main>
  );
}
