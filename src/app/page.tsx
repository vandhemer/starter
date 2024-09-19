import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { Pages } from "@/models/cms/pages";

export default async function Page() {

    let data: Pages[] = [];
    let imageUrl, title;


    try {
        const response = await fetch('http://localhost:3000/api/cms/Home', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();
        title = data.page_components[0].hero_banner.banner_title;
        imageUrl = data.page_components[0].hero_banner.banner_image.url;
        
    }
    catch (error: any) {
        console.error(error.message);
    }

    return (
        <Layout isHeaderTransparent={true}>
            <Banner imageUrl={imageUrl} title={title}/>
        </Layout>
    );
};