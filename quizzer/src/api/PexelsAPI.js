import { createClient } from 'pexels';

const PexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
// const query = "duck";
    try{
        const response = []; 
        response.push(await client.photos.show({ id: 422218 }));
        response.push(await client.photos.show({ id: 1769279 }));
        response.push(await client.photos.show({ id: 110820}));
        response.push(await client.photos.show({ id: 635499 }));
        response.push(await client.photos.show({ id: 104373 }));
        response.push(await client.photos.show({ id: 86594 }));
        response.push(await client.photos.show({ id: 97317 }));
        response.push(await client.photos.show({ id: 833687 }));
        return response;
    }catch (error){
        console.error('Error fetching photos from Pexels:', error);
        return [];
    }
    
};

export default PexelsAPI;


// id: 
// 422218