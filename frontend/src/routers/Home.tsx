export const Home = () => {
  return (
    <div className="grid flex-grow h-44 card rounded-box place-items-center">
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>npm i daisyui</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code>installing...</code>
        </pre>
        <pre data-prefix=">" className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </div>
  );
};
