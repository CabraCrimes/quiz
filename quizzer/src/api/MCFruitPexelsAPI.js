import { createClient } from "pexels";

const MCCFruitPexelsAPI = async () => {
  const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
  // const query = "test";
  try {
    const id = [
        139229, 161559, 2872755, 46174, 51312, 672101, 557659, 7657204,
    ];
    const response = [];
    for (let i = id.length - 1; i >= 0; i--) {
      response.push(await client.photos.show({ id: id[i] }));
    }
    return response;
  } catch (error) {
    console.error("Error fetching photos from Pexels:", error);
    return [];
  }
};

export default MCCFruitPexelsAPI;
