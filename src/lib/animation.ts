const animationOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 0.5,
      duration: 0.5,
    },
  }),
}

const animationScale = {
  hidden: {
    scale: 0,
    ...animationOpacity.hidden,
  },
  visible: (custom: number) => ({
    scale: 1,
    ...animationOpacity.visible(custom),
  }),
}

const animationNegativeXOffset = {
  hidden: {
    x: -300,
    ...animationOpacity.hidden,
  },
  visible: (custom: number) => ({
    x: 0,
    ...animationOpacity.visible(custom),
  }),
}

const animationPositiveXOffset = {
  hidden: {
    x: 300,
    ...animationOpacity.hidden,
  },
  visible: (custom: number) => ({
    ...animationNegativeXOffset.visible(custom),
  }),
}

const animationPositiveYOffset = {
  hidden: {
    y: 300,
    ...animationOpacity.hidden,
  },
  visible: (custom: number) => ({
    y: 0,
    ...animationOpacity.visible(custom),
  }),
}

export {
  animationOpacity,
  animationScale,
  animationNegativeXOffset,
  animationPositiveXOffset,
  animationPositiveYOffset,
}
