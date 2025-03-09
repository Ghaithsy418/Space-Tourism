import { motionChildrenTop } from "../helpers/motionsVariants";
import ButtonLink from "./ButtonLink";
import { motion } from "motion/react";
function DestinationLinks() {
  return (
    <motion.ul
      variants={motionChildrenTop}
      initial="hidden"
      animate="visible"
      className="mb-2 flex items-center justify-center gap-6"
    >
      <li>
        <ButtonLink num="" to="/destination/moon">
          MOON
        </ButtonLink>
      </li>
      <li>
        <ButtonLink num="" to="/destination/mars">
          Mars
        </ButtonLink>
      </li>
      <li>
        <ButtonLink num="" to="/destination/eruopa">
          Europa
        </ButtonLink>
      </li>
      <li>
        <ButtonLink num="" to="/destination/titan">
          Titan
        </ButtonLink>
      </li>
    </motion.ul>
  );
}

export default DestinationLinks;
