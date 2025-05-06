import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const createPlanetAction = async (planet: Partial<Planet>) => {
  try {
    const response = await planetsApi.post<Planet>("/", planet);
    // const [error, response] ?= await planetsApi.post<Planet>("/", planet);
    return response.data;
  } catch (error) {
    console.log(error);

    return null;
  }
};

export const createPlanetActionForm = async (
  prevState: unknown,
  queryData: FormData
) => {
  //Entries agarra TODOS los elemetos del queryData
  const formData = Object.fromEntries(queryData.entries());
  try {
    const response = await planetsApi.post<Planet>("/", formData);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("NO se puedo crar el planeta");
  }
};
