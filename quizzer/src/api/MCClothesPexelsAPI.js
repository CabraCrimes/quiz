import { createClient } from 'pexels';

const MCClothesPexelsAPI = async () => {
const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
const query = "Fedora";
    try{
        client.photos.search({ query, per_page: 20 }).then(photos => {
            console.log(photos.photos.map(e => e.url))
            return photos;
        });

        // const response = []; 
        // response.push(await client.photos.show({ id: 422218 }));
        // response.push(await client.photos.show({ id: 1769279 }));
        // response.push(await client.photos.show({ id: 110820}));
        // response.push(await client.photos.show({ id: 635499 }));
        // response.push(await client.photos.show({ id: 104373 }));
        // response.push(await client.photos.show({ id: 86594 }));
        // response.push(await client.photos.show({ id: 97317 }));
        // response.push(await client.photos.show({ id: 833687 }));
        // return response;
    }catch (error){
        console.error('Error fetching photos from Pexels:', error);
        return [];
    }
    
};

export default MCClothesPexelsAPI;


