import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Color, Filters } from "../../types/mtg-api";
import { toggleColor } from "../../store/slices/filtersSlice";


export default function FilterBar() {
  const colors: Color[] = ["B", "R", "G", "U", "W"];

  const { colors: selectedColors } = useAppSelector(({ filters }) => filters);
  const dispatch = useAppDispatch();

  return (
    <div className="filters">
      {colors.map((color) => (
        <button
          onClick={() => dispatch(toggleColor(color))}
          className={`btn ${selectedColors.includes(color) && "btn-active"}`}
          key={color}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
