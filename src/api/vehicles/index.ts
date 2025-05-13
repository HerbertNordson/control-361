import api from "..";
import type { vehiclesListRequestDto } from "../../@types/vehicles";

export const VehiclesRequests = () => {
  async function getList({
    filter,
    type,
    page,
    perPage,
  }: vehiclesListRequestDto) {
    try {
      const filterQParam = filter ? `filter=${filter}&` : "";
      const perPageQParam = perPage ? `&perPage=${perPage}` : "";

      const response = await api.get(
        `vehicles/list-with-paginate?${filterQParam}type=${type}&page=${page}${perPageQParam}`
      );

      if(response.status == 200)
        return response.data
    } catch (error) {
      console.error(error);
    }
  }

  return { getList };
};
