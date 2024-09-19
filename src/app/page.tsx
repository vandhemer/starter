import Banner from "@/components/Banner";
import { Banner as BannerModel} from "@/models/cms/component";
import Layout from "@/components/Layout";
import { Page } from "@/models/cms/pages";

export default async function Homepage() {

    let data: Page;
    let banner: BannerModel;

    try {
        const response = await fetch('http://localhost:3000/api/cms/Home', {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        data = await response.json();
        banner = data.page_components[0].hero_banner;
        return (
            <Layout isHeaderTransparent={true}>
                <Banner banner={banner} />
            </Layout>
        )        
    }

    catch (error: any) {
        console.error(error.message);
    }
}