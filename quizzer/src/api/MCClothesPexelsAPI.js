import { createClient } from "pexels";

const MCClothesPexelsAPI = async () => {
  const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
  // const query = "test";
  try {
    const id = [
        16390585, 1124465, 1287513, 65676, 16170, 19346997, 19090, 8532616,
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

export default MCClothesPexelsAPI;
