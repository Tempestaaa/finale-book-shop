import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { formatUSD, slugifiedString } from "@/lib/utils";
import { iShoppingCart } from "@/types/data";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";

type Props = {
  data: iShoppingCart;
};

export default function ShoppingCartItem({ data }: Props) {
  return (
    <div className="flex gap-4 hover:bg-muted/60 transition-colors duration-200 p-2 group">
      <div className="h-20 w-14 bg-muted rounded"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex justify-between">
          <div className="space-y-1">
            <Link
              href={`/books/${data.slug}`}
              className="font-semibold text-sm line-clamp-1 hover-text"
            >
              {data.title}
            </Link>
            <div className="flex items-center gap-1">
              {data.authors.map((a, id) => (
                <Link
                  key={id}
                  href={`/author/${slugifiedString(a)}`}
                  className="text-xs text-muted-foreground line-clamp-1 hover-text"
                >
                  {a}
                  {data.authors.length - 1 > id && ", "}
                </Link>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            className="text-destructive opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <X />
          </Button>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <ButtonGroup>
            <Button variant="outline" size="icon-xs" disabled>
              <Minus />
            </Button>
            <Input
              type="number"
              defaultValue={data.quantity}
              className="text-center w-12 h-6"
            />
            <Button variant="outline" size="icon-xs">
              <Plus />
            </Button>
          </ButtonGroup>
          <p className="text-base">
            {formatUSD(data.price.discountPrice ?? data.price.originalPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}
