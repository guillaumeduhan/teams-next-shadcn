import CustomButton from "@/components/CustomButton";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useHelpers } from "@/hooks/useHelpers";
import { toast } from "sonner";

export default function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers();

  const removeMember = () => {
    try {
      setLoading(true);
      toast.success("User successfully archived.")
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {user.name || 'Member'} will no longer be part of the team and will no longer have access to team-related content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onClose()} className="bg-red-500 text-white">
            Cancel
          </AlertDialogCancel>
          <CustomButton {...{ label: 'Confirm', loading, onClick: removeMember }} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}