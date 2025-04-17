export default function IconBtn({
  text,
  onClick,
  children,
  disabled,
  outline = false,
  customClasses = "",
  type = "button",
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`flex items-center justify-center gap-x-2 rounded-md py-2 px-5 font-semibold 
        ${outline ? "border border-blue-500 text-blue-500 bg-transparent" : "bg-blue-500 text-white"} 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        ${customClasses}`}
    >
      {children ? (
        <>
          <span className={`${outline ? "text-blue-500" : ""}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
}
