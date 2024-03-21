import { createClient } from 'pexels';

const GameListPexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
// const query = "test";
    try{
        //Add new ID at the beggining ov the array not the end
        const id = [
            792381 ,635499, 581087, 1120581, 1435904
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

export default GameListPexelsAPI;


