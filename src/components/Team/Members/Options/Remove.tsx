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
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Remove({ user, open, onClose }: any) {
  const { loading, setLoading } = useHelpers();

  const removeMember = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('team_members')
        .upsert({
          id: user.id,
          status: 'removed'
        })
        .select('*');

      if (data) {
        toast.success("User successfully removed from team.")
      }
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

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
