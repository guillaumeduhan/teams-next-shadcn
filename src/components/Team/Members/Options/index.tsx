import {
  CircleX,
  EllipsisVertical,
  MailPlus,
  Shield
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Remove from "./Remove";

export default function Options() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="text-base cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <Shield className="w-4" />
            <span>Role</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <MailPlus className="w-4" />
            <span>Send invitation</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer flex gap-2">
            <CircleX className="w-4" />
            <span>Remove</span>
            <Remove />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
