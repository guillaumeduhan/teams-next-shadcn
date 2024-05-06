import {
  EllipsisVertical,
  UserX
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useHelpers } from "@/hooks/useHelpers";
import Remove from "./Remove";

export default function Options({ user }: any) {
  const { open = false, setOpen, selected, setSelected } = useHelpers();
  const menu: any = [{
    title: "Remove member",
    key: "remove",
    icon: <UserX className="w-[20px]" />
  }
  ]

  return <div>
    <Remove {...{ user, open: selected === "remove", onClose: () => setSelected(undefined) }} />
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="w-4 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" >
        <DropdownMenuGroup >
          {menu.map((item: any, i: number) => <div key={i}>
            <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => setSelected(item.key)}>
              {item.icon}
              <span>{item.title}</span>
            </DropdownMenuItem>
          </div>)}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
};
