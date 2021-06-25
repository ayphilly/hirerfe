import { useDispatch, useSelector } from "react-redux";
import { setProfileField } from "../slices/talentSlice";

export const useProfile = () => {
  const profile = useSelector((state) => state.talent.profile);
  const dispatch = useDispatch();
  const dispathProfileAction = (field, value) =>
    dispatch(
      setProfileField({
        field,
        value,
      })
    );
  return { profile, dispathProfileAction };
};
