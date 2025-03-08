import { motionChildrenTop } from "../helpers/motionsVariants";
import ButtonLink from "./ButtonLink";
import { motion } from "motion/react";
function DestinationLinks() {
  return (
    <motion.ul
      variants={motionChildrenTop}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center gap-6 mb-2"
    >
      <ButtonLink num="" to="/destination/moon">
        MOON
      </ButtonLink>
      <ButtonLink num="" to="/destination/mars">
        Mars
      </ButtonLink>
      <ButtonLink num="" to="/destination/eruopa">
        Europa
      </ButtonLink>
      <ButtonLink num="" to="/destination/titan">
        Titan
      </ButtonLink>
    </motion.ul>
  );
}

export default DestinationLinks;
