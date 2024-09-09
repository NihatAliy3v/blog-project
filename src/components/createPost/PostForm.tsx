import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";
import { postSchema } from "../../validations/postSchema.ts";
import { TextField } from "../ui/TextField";
import { Button } from "../ui/Button";
import { postRequestType } from "../../types/blogPost/postRequestType";
import { useEffect, useState } from "react";
import { authInitialStateType } from "../../types/auth/authInitialStateType";
import { usePostDataCreateMutation } from "../../services/api/blogPosts/postApi";

export const PostForm = ({ userInfo }: { userInfo: authInitialStateType }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [createPost, { isError }] = usePostDataCreateMutation();
  const created = userInfo.nameidentifier;
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<postRequestType>({
    resolver: zodResolver(postSchema),
    defaultValues: { createdBy: created },
  });
  const onSubmit = (data: postRequestType) => {
    const formData = new FormData();
    formData.append("createdBy", data.createdBy);
    formData.append("subject", data.subject);
    formData.append("content", data.content);
    formData.append("file", data.file[0]);
    console.log(formData)
    createPost(formData);
    if (isError) {
      return;
    }
    reset({
      subject: "",
      content: "",
      file: null,
      createdBy: data.createdBy,
    });
  };

  const watchFile = watch("file");

  useEffect(() => {
    if (watchFile && watchFile.length > 0) {
      const file = watchFile[0];
      const fileUrl = URL.createObjectURL(file);
      setFilePreview(fileUrl);
    }
  }, [watchFile]);

  useEffect(() => {
    setValue("createdBy", created);
  }, [created]);
  return (
    <form
      className="flex flex-col gap-[10px] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField label="createdBy" {...register("createdBy")} disabled={true} />
      <TextField
        label="subject"
        {...register("subject")}
        helperText={errors.subject?.message}
        error={errors.subject}
      />
      <TextField
        label="content"
        {...register("content")}
        helperText={errors.content?.message}
        error={errors.content}
      />
      <TextField
        type="file"
        {...register("file")}
        helperText={errors.file?.message}
        error={errors.file as FieldError}
      />
      {filePreview && (
        <div className="mt-4">
          <img
            src={filePreview}
            alt="Selected File"
            className="max-w-xs max-h-xs"
          />
        </div>
      )}
      <Button text="Create" />
    </form>
  );
};
