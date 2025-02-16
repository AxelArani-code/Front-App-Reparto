import { ChevronLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Accordion,  AccordionItem, Button } from "@heroui/react"; // Sin AccordionTrigger
import { Link } from "react-router-dom";

export default function HelpSupport() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

 
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="space-y-2">
        <Link to={"/Profile"}>
        <Button variant="ghost" className="flex items-center gap-2 -ml-2">
          <ChevronLeftIcon className="h-4 w-4" />
          Help & Support
        </Button>
        </Link>
        
        <h1 className="text-2xl font-semibold">
          We're here to help you with anything and everything on Kussbus
        </h1>
        <p className="text-sm text-muted-foreground">
          At Kussbus, everything we expect at a day's start is you, better and happier than yesterday.
          We have got you covered. Share your concern or check our frequently asked questions listed below.
        </p>
      </div>

      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search help"
          className="w-full pl-9 pr-4 py-2 rounded-md border bg-background"
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">FAQ</h2>
        <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
      </div>
    </div>
  );
}
