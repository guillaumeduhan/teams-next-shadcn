
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Roles({
  selected = 'member',
  setSelected
}: {
  selected?: string;
  setSelected?: (value: string) => void;
}) {
  const roles = [
    "admin",
    "manager",
    "member"
  ]
  return (
    <Select defaultValue={selected} onValueChange={setSelected}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {roles.map(role => <SelectItem key={role} className="capitalize" value={role}>{role}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
