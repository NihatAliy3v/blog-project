import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { postSchema } from "../../validations/postShcema";
import { TextField } from "../ui/TextField";
import { Button } from "../ui/Button";
import { postRequestType } from "../../types/blogPost/postRequestType";
export const PostForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<postRequestType>({ resolver: zodResolver(postSchema) });
  const onSubmit = (data:postRequestType) =>{
    console.log(data)
    reset()
}
console.log(errors)
  return (
    <form
      className="flex flex-col gap-[10px] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField  label="createdBy" {...register("createdBy")} />
      <TextField label="subject" {...register("subject")} />
      <TextField label="content" {...register("content")} />
      <TextField type="file" {...register("file")} />
      
      <Button text="Create"/>
    </form>
  );
};
