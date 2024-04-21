import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Roles } from "./Options/Roles"

export default function NewMember() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "member"
  })
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span>New member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new member</DialogTitle>
          <DialogDescription>
            Please enter name and email of member. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              defaultValue={member.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue={member.email}
              placeholder="johndoe@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Select role
            </Label>
            <Roles
              selected={member.role}
              setSelected={(v: string) => {
                setMember((prev: any) => ({ ...prev, role: v }))
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send invitation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
