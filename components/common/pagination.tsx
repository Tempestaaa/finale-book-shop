import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination() {
  return (
    <ButtonGroup className="mx-auto">
      <ButtonGroup>
        <Button variant="ghost">
          <ChevronsLeft />
        </Button>
        <Button variant="ghost">
          <ChevronLeft />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Input defaultValue={1} className="w-12 text-center" />
        <ButtonGroupText>of 10</ButtonGroupText>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="ghost">
          <ChevronRight />
        </Button>
        <Button variant="ghost">
          <ChevronsRight />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  );
}
