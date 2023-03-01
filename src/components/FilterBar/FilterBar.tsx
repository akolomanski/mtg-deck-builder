import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Color, Filters } from "../../types/mtg-api";
import { toggleColor } from "../../store/slices/filtersSlice";
import classNames from "classnames";


export default function FilterBar() {
  const colors: Color[] = ["B", "R", "G", "U", "W"];

  const { colors: selectedColors } = useAppSelector(({ filters }) => filters);
  const dispatch = useAppDispatch();
  
  const combinedClassNames = {
     "btn",
    {
     "btn-active" : selectedColors.includes(color);
    }
  }

  return (
    <div className="filters">
      {colors.map((color, index) => (
        <button
          onClick={() => dispatch(toggleColor(color))}
          className={classNames(combinedClassNames)}
          key={index}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
