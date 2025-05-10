export interface vehiclesListRequestDto {
  filter?: string;
  type: "tracked" | "others";
  page: number;
  perPage?: number;
}
