import { createClient } from 'pexels';

const PexelsAPI = () => {
const client = createClient('Add gitignore');
const query = 'Nature';
    return(
        client.photos.search({ query, per_page: 1 }).then(photos => {
            console.log(photos)})

     );
};

export default PexelsAPI;


