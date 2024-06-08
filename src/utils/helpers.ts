import { COLORS } from "../constants";

export const getColor = (value) => {
  if (value < COLORS.limeGreen.value) {
    return COLORS.green.name
  }
  if (value > COLORS.green.value && value < COLORS.yellow.value) {
    return COLORS.limeGreen.name
  }
  if (value > COLORS.limeGreen.value && value < COLORS.orange.value) {
    return COLORS.yellow.name
  }
  if (value > COLORS.yellow.value && value < COLORS.red.value) {
    return COLORS.orange.name
  }
  if (value > COLORS.orange.value) {
    return COLORS.red.name
  }
}