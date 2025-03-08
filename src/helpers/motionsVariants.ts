const motionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

const motionChildrenLeft = {
  hidden: {
    scale: 0.5,
    x: "-50%",
  },
  visible: {
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const motionChildrenBottom = {
  hidden: {
    scale: 0.6,
    y: "50%",
  },
  visible: {
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const motionChildrenTop = {
  hidden: {
    opcaity: 0,
    y: "-50%",
    gap: "40px",
  },
  visible: {
    opacity: 1,
    gap: "24px",
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const motionPlanetVariant = {
  hidden: {
    opacity: 0,
    x: "-50%",
    rotate: -90,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      duration: 1,
    },
  },
};

export {
  motionVariant,
  motionChildrenBottom,
  motionChildrenLeft,
  motionChildrenTop,
  motionPlanetVariant,
};
