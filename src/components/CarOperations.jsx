import SortBy from "./SortBy";

function CarOperations() {
  return (
    <div className="sort-container">
      <SortBy
        options={[
          { value: "price-asc", label: "Sort by price (low first)" },
          { value: "price-desc", label: "Sort by price (high first)" },
          { value: "year-asc", label: "Sort by year (low first)" },
          { value: "year-desc", label: "Sort by year (high first)" },
        ]}
      />
    </div>
  );
}

export default CarOperations;
