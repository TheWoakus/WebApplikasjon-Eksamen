export const findId = (map, id) => {
  const mapItem = map.get(id);
  if (!mapItem) return { status: 404, error: 'ID not found' };
  return mapItem;
};

export const createID = (map) => (map.size > 0 ? map.size + 1 : 1).toString();
