import { useForm } from "react-hook-form";
import { TextField } from "../ui/TextField";
import { Button } from "../ui/Button";
import { loginRequestType } from "../../types/auth/loginRequestType";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../validations/loginSchema";
import { useLoginMutation } from "../../services/api/auth/loginApi";
import { register as registerSlice } from "../../features/auth/registerSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [login, { data: loginData }] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<loginRequestType>({ resolver: zodResolver(loginSchema) });
  const dispatch = useDispatch();

  const onSubmit = async(data: loginRequestType): Promise<void> => {
    try {
      const resultLogin = await login(data).unwrap();
      dispatch(registerSlice(resultLogin));
      navigate("/")
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };
  console.log(errors, "error");
  return (
    <form
      className="flex flex-col gap-[10px] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField label="Email" {...register("email")} />
      <TextField label="Password" {...register("password")} />
      <Button />
    </form>
  );
};
