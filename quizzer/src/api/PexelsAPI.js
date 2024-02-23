import { createClient } from 'pexels';

const PexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
const query = "cow";
    try{
        const response = await client.photos.search({ query, per_page: 1 });
        return response;
    }catch (error){
        console.error('Error fetching photos from Pexels:', error);
        return [];
    }
    
};

export default PexelsAPI;


