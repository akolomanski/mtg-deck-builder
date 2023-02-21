import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Color, Filters } from "../../types/mtg-api";
import { toggleColor } from "../../store/slices/filtersSlice";
import './styles.scss'

export default function FilterBar() {
  const colors: Color[] = ["B", "R", "G", "U", "W"];

  const { colors: selectedColors } = useAppSelector(({ filters }) => filters);
  const dispatch = useAppDispatch();
  const toggleColorHandler = (color: Color) => {
    dispatch(toggleColor(color));
  };

  return (
    <div className="filters">
      {colors.map((color) => (
        <button
          onClick={() => toggleColorHandler(color)}
          className={`filters__button ${selectedColors.includes(color) || "filters__button--disabled"}`}
          key={color}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
