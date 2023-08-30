export const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurants) =>
      restaurants?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  };