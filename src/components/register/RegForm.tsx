import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "../ui/TextField";
import { Button } from "../ui/Button";
import { registerRequestType } from "../../types/auth/registerRequestType";
import { useRegisterMutation } from "../../services/api/auth/registerApi";
import { useDispatch } from "react-redux";
import { register as registerSlice } from "../../features/auth/registerSlice";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<registerRequestType>({ resolver: zodResolver(registerSchema) });
  const [registerPost, { data: registerResponse }] = useRegisterMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: registerRequestType): Promise<void> => {
    try {
      const result = await registerPost(data).unwrap();
      dispatch(registerSlice(result));
      navigate("/");
    } catch (err) {
      console.log(err);
    } finally {
      reset();
    }
  };
  return (
    <>
      <form
        className="flex flex-col gap-[10px] items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField label="First Name" {...register("firstName")} />
        <TextField label="Last Name" {...register("lastName")} />
        <TextField label="Email" {...register("email")} />
        <TextField label="Password" {...register("password")} />
        <Button />
      </form>
    </>
  );
};
