import { createClient } from 'pexels';

const MCAnimalsTwoPexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
// const query = "test";
    try{

        const id = [
            7256547, 2220337, 16848028, 792381, 247431, 3250752, 733998, 2317904
        ];
        const response = [];
        for (let i = id.length - 1; i >= 0; i--) {
          response.push(await client.photos.show({ id: id[i] }));
        }
        return response;
    }catch (error){
        console.error('Error fetching photos from Pexels:', error);
        return [];
    }
    
};

export default MCAnimalsTwoPexelsAPI;


