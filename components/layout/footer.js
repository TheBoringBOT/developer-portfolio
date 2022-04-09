import { getFullYear } from "../../utils/date-formatter";
import Image from "next/image";
import { constants } from "../../libs/constants";

export default function footer() {
  const { site_author, site_version, site_description } = constants;
  return (
    <footer className="w-100 flex-col flex items-start justify-start  border-t border-slate-200 py-5">
      <span>
        {" "}
        {getFullYear()} - Version: {site_version}
      </span>
      {/* <span>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span> */}
    </footer>
  );
}
