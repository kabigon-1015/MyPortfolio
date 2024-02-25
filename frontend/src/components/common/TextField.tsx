export const TextField = (placeholder: { placeholder: string }) => {
  return (
    <textarea
      className="textarea textarea-bordered h-48 w-96"
      placeholder={placeholder.placeholder}
    ></textarea>
  );
};
