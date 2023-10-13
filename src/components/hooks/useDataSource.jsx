
import axios from 'axios';
import { useEffect, useState } from 'react'

const useDataSource = (resourceUrl) => {

    const [resource, setResource] = useState(null);
    useEffect(() => {
        let isMounted = true;
        (async () => {
            const response = await axios.get(resourceUrl);

            isMounted && setResource(response.data)
        })();
        return () => {
            isMounted = false
        }
    }, [resourceUrl])

    return resource
}

export default useDataSource