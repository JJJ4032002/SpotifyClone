function FilterByPopularity(items, max, min) {
  if (max === 0 && min === 0) {
    return items;
  } else {
    return items.filter((item) => {
      return item.popularity >= min && item.popularity <= max;
    });
  }
}

export default FilterByPopularity;
