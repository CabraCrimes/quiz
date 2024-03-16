import { createClient } from 'pexels';

const PexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
// const query = "test";
    try{

        const id = [
            422218, 1769279, 110820, 635499, 104373, 86594, 97317, 833687
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

export default PexelsAPI;


// id: 
// 422218