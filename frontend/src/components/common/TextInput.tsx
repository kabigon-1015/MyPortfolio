export const TextInput = (placeholder: { placeholder: string }) => {
  return (
    <input
      type="text"
      placeholder={placeholder.placeholder}
      className="input input-bordered w-full max-w-xs"
    />
  );
};
