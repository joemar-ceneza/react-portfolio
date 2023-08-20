export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-transparent/80 flex justify-center text-center items-center z-50">
      <div className="w-[75%] xl:w-[25%] md:w-[40%] sm:w-[55%] bg-gray-500 shadow-lg rounded-[5px] shadow-blue-500/50">
        {children}
      </div>
    </div>
  );
}
