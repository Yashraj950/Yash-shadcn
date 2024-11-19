// import { Input } from "postcss";
// import { Input } from "postcss";
import { Input } from "./ui/input"
import { Button } from "@/components/ui/button"
export function SearchBar() {
    return(
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search.." />
            <Button type="submit">Search</Button>

        </div>

    )
}