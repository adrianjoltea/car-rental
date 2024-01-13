import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "../services/useLogout";
function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button className="button-icon" onClick={logout} disabled={isLoading}>
      <HiArrowRightOnRectangle />
    </button>
  );
}

export default Logout;
