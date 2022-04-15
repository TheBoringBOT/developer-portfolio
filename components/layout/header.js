export default function Header() {
  return (
    <>
      <div className="flex justify-between py-10 items-center sticky top-0 font-medium text-lg ">
        <div className="flex items-start items-center">
          <span className="rounded-full w-8 h-8 bg-black"></span>
        </div>

        <nav className="flex justify-end space-x-5 items-center">
          <a href="#">Resume</a>
          <a href="#" className="text-white bg-black px-5 py-1 rounded ">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
