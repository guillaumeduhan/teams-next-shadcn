import {
  EllipsisVertical,
  MailCheck,
  ShieldCheck,
  UserX
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useHelpers } from "@/hooks/useHelpers";
import Remove from "./Remove";

export default function Options({ user }: any) {
  const { open, setOpen } = useHelpers();
  const menu: any = [
    {
      title: "Set role",
      icon: <ShieldCheck className="w-[20px]" />
    }, {
      title: "Trigger invitation",
      icon: <MailCheck className="w-[20px]" />
    }, {
      title: "Remove member",
      component: <Remove {...{ open, setOpen }} />,
      icon: <UserX className="w-[20px]" />
    }
  ]

  return <div>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical className="w-4 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {menu.map((item: any, i: number) => <div key={i}>
            {item.component}
            <DropdownMenuItem className="flex gap-2 cursor-pointer" onClick={() => setOpen(true)}>
              {item.icon}
              <span>{item.title}</span>
            </DropdownMenuItem>
          </div>)}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
}
