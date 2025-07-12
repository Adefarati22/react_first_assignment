import Nav from "../../component/Nav";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validateLoginSchema } from "../../utils/formValidation";
import { loginUser } from "../../api/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAuth } from "../../contextStore";
import { useState } from "react";
import ErrorAlert from "../../component/ErrorAlert";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";

export default function Login() {
  const [errorMsg, setErrorMsg] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validateLoginSchema),
  });
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();
  const { setAccessToken } = useAuth();

  const togglePassword = () => {
    setIsVisible((prev) => !prev);
  };

  const onFormSubmit = async (formData) => {
    try {
      const res = await loginUser(formData);
      console.log("Login response:", res);

      if (res.status === 200) {
        toast.success(
          `Welcome ${res.data.firstName + " " + res.data.lastName}`
        );
        localStorage.setItem("accessToken", res.data.accessToken);
        setAccessToken(res.data.accessToken);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error?.response?.data?.message);
    }
  };

  return (
    <div>
        <Nav />
      <div className="container mx-auto flex flex-col justify-center items-center w-full max-w-[320px] min-h-[70vh] mt-16">
        {errorMsg && <ErrorAlert error={errorMsg} />}
       
        <h1 className="font-bold text-3xl mt-10 w-full text-center">
          Login to your account
        </h1>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="w-[85vw] md:w-[350px] border border-gray-200 p-4 mt-6"
        >
          <div>
            <fieldset className="fieldset">
              <input
                type="text"
                className="input"
                placeholder="Username"
                {...register("username")}
              />
            </fieldset>
            {errors.username?.message && (
              <span className="text-xs text-red-500">
                {errors.username?.message}
              </span>
            )}
          </div>
          <div className="my-4">
            <fieldset className="fieldset relative">
              <input
                type={isVisible ? "text" : "password"}
                className="input"
                placeholder="Password"
                {...register("password")}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 border-0 cursor-pointer"
                onClick={togglePassword}
              >
                {isVisible ? <RiEyeOffLine /> : <RiEyeLine />}
              </button>
            </fieldset>
            {errors.password?.message && (
              <span className="text-xs text-red-500">
                {errors.password?.message}
              </span>
            )}
          </div>
          <button
            className="btn btn-lg bg-[#974FD0] text-white w-full"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
