const FilterButton = ({ text, filter }) => {
  return <button onClick={() => filter(text)}>{text}</button>;
};

export default FilterButton;
