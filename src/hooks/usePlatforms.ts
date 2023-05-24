import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usedPlatforms = () => useData<Platform>("/platforms/list/parents");

export default usedPlatforms;
