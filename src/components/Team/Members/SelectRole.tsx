
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectRole({
  selected,
  setSelected
}: {
  selected?: string;
  setSelected?: (value: string) => void;
}) {
  const roles = [
    "Admin",
    "Manager",
    "Member"
  ]
  return (
    <Select defaultValue={selected} onValueChange={setSelected}>
      <SelectTrigger className="w-[240px]">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          {roles.map(role => <SelectItem value={role}>{role}</SelectItem>)}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
