/**
 * Clientside fetch client with fetch API
 * @param url 
 * @returns data
 */

export const clientFetcher = async function (url: string) {

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_HOSTED_URL + url, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            next: { 
                revalidate: 120 
            },
        });
    
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json();
    }
    catch (error: any) {
        console.error(error.message);
    }

}