function Navbar() {
  return (
    <div className="flex items-center justify-center flex-wrap bg-teal-500 p-1">
      <div className="flex items-center text-center flex-shrink-0 text-white">
        <h1 className="font-bold text-2xl tracking-tight">TODO - App</h1>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
          className="fill-current h-8 w-8 m-2"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
