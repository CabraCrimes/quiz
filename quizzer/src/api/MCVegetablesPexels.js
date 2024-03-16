import { createClient } from "pexels";

const MCCVegetablesPexelsAPI = async () => {
  const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
  // const query = "test";
  try {
    const id = [
        144248, 533342, 36438, 161514, 53588, 547263, 768090, 1306559
    ];
    const response = [];
    for (let i = id.length - 1; i >= 0; i--) {
      response.push(await client.photos.show({id: id[i]}));
    }
    return response;
  } catch (error) {
    console.error("Error fetching photos from Pexels:", error);
    return [];
  }
};

export default MCCVegetablesPexelsAPI;
