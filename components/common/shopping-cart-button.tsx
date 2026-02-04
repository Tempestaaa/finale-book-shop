import ShoppingCartItem from "@/components/common/shopping-cart-item";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { shoppingCartData } from "@/lib/data";
import { formatUSD } from "@/lib/utils";
import { ArrowRight, ShoppingCart, Ticket } from "lucide-react";

const FREE_DELIVERY = 0;
const VOUCHER = 0.1;

export default function ShoppingCartButton() {
  const subTotalPrice = shoppingCartData.reduce((a, b) => {
    return a + (b.price.discountPrice ?? b.price.originalPrice) * b.quantity;
  }, 0);
  const totalPrice = subTotalPrice - FREE_DELIVERY - VOUCHER * subTotalPrice;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ShoppingCart />
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-0 divide-y">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="size-4 stroke-3" />
            <span>Your Cart</span>
          </SheetTitle>
        </SheetHeader>

        <section className="flex-1 overflow-y-auto divide-y p-2">
          {shoppingCartData.map((item) => (
            <ShoppingCartItem key={item.id} data={item} />
          ))}
        </section>

        <SheetFooter className="gap-2 shrink-0">
          <InputGroup>
            <InputGroupAddon>
              <Ticket />
            </InputGroupAddon>
            <InputGroupInput placeholder="Enter voucher" />
            <InputGroupButton className="mr-2">Apply</InputGroupButton>
          </InputGroup>
          <div className="flex flex-col gap-2 my-2 text-muted-foreground">
            <Label className="justify-between">
              <span>Subtotal</span>
              <span>{formatUSD(subTotalPrice)}</span>
            </Label>
            <Label className="justify-between">
              <span>Voucher</span>
              <span>{formatUSD(VOUCHER * subTotalPrice)}</span>
            </Label>
            <Label className="justify-between">
              <span>Delivery fee</span>
              <span>{FREE_DELIVERY === 0 ? "Free" : FREE_DELIVERY}</span>
            </Label>
          </div>
          <div className="flex items-center justify-between text-xl font-semibold">
            <p>TOTAL</p>
            <p>{formatUSD(totalPrice)}</p>
          </div>
          <Button>
            Proceed to checkout <ArrowRight />
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
