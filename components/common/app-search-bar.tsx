"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { shoppingCartData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function AppSearchBar() {
  const [query, setQuery] = useState("");

  const filteredBooks = useMemo(() => {
    const queryLowerCase = query.toLowerCase();
    return shoppingCartData.filter((item) =>
      item.title.toLowerCase().includes(queryLowerCase),
    );
  }, [query]);

  return (
    <InputGroup className="max-w-60 mr-2 relative">
      <InputGroupInput
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="peer"
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end"></InputGroupAddon>

      <div
        className={cn(
          "absolute top-[calc(100%+8px)] left-0 w-full bg-background border rounded p-1 text-sm peer-focus:block hidden",
          query.length > 0 && "block!",
        )}
      >
        {filteredBooks.length > 0 ? (
          <ul>
            {filteredBooks.map((item) => (
              <Link
                key={item.id}
                href={`/book/${item.slug}`}
                className="p-1 w-full rounded hover:bg-muted/60 transition-colors duration-200 line-clamp-1"
              >
                {item.title}
              </Link>
            ))}
          </ul>
        ) : (
          <p className="text-center">No book found.</p>
        )}
      </div>
    </InputGroup>
  );
}
