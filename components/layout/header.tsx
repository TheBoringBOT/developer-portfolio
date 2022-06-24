export default function Header() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <>
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between w-full max-w-6xl px-6 py-10 mx-auto text-lg font-medium ">
        <div className="flex items-center">
          <span className="w-6 h-6 bg-black rounded-full"></span>
        </div>

        <nav className="flex items-center justify-end space-x-5 text-md text-dark-grey">
          <a href="#">(Resume)</a>
          <a href="#" className="">
            (Github)
          </a>
        </nav>
      </div>
    </>
  );
}
