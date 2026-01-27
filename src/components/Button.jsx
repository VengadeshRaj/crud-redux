const Button = (props) => {
  const { title, type = "primary", isSubmit = false } = props;
  const dynamicStyles = type
    ? "bg-blue-500 text-white hover:bg-blue-700"
    : "bg-gray-300 hover:bg-gray-400";
  return (
    <button
      className={`rounded px-3 py-2 ${dynamicStyles}`}
      type={isSubmit ? "submit" : "button"}
    >
      {title}
    </button>
  );
};

export default Button;
