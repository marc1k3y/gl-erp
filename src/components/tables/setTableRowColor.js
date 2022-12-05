import { colors } from "../colors";

export function setTableRowColor(index) {
  return index % 2 === 0 ? colors.table.rowLight : colors.table.rowDark
}