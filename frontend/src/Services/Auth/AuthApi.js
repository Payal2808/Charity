import { endPoints } from "../Api's";
import { apiConnector } from "../apiConnector";
const { LOGIN, SIGNUP } = endPoints;
import { setLoading, setToken, setUser } from "../../slices/authSlice";
import toast from "react-hot-toast";

export function signUp(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  accountType,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log("aagya edr");
      const response = await apiConnector("POST", SIGNUP, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        accountType,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      toast.error("Signup Failed");
      navigate("/signup");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", LOGIN, {
        email,
        password,
      });

      console.log("Login API Response", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login Successfully");
      dispatch(setToken(response.data.token));
      const userImage = response.data?.user?.avatar
        ? response.data.user.avatar
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;
      dispatch(setUser({ ...response.data.user, image: userImage }));

      localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login API Error", error);
      toast.error("Login Failed");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return async (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged Out");
    navigate("/");
  };
}
