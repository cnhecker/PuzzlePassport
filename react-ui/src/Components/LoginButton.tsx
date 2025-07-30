import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function LoginButton() {
  const handleSuccess = (credentialResponse: any) => {
    const token = credentialResponse.credential;
    const user = jwtDecode(token);
    console.log("User data:", user);
    localStorage.setItem("googleToken", token);
  };

  const handleError = () => {
    console.error("Login Failed");
  };

  return <GoogleLogin onSuccess={handleSuccess} onError={handleError} />;
}
