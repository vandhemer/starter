"use client";

import AutoPromo from "./components/autopromo/Autopromo";
import Header from "./components/header/Header";
import Breadcrumb from "./components/Breadcrumb";

const Page = () => {
    return (
        <main>
            <AutoPromo />
            <div className="w-full mx-auto container">
                <Header />
                <Breadcrumb />
            </div>
        </main>
    );
};

export default Page;
