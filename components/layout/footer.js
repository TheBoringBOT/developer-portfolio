import { getFullYear } from "../../utils/date-formatter";
import Image from "next/image";
import { constants } from "../../libs/constants";

export default function footer() {
  const { site_author, site_version, site_description } = constants;
  return (
    <footer className="mx-auto flex text-center justify-center">
      <span>{getFullYear()} All rights reserved.</span>
      <span>Version: {site_version}</span>
    </footer>
  );
}
