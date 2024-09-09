"use client";

import AutoPromo from "./components/autopromo/Autopromo";
import Header from "./components/header/Header";
import Breadcrumb from "./components/Breadcrumb";

const Page = () => {
    return (
        <main>
            <AutoPromo text="EXCLUSIVITE CONFORAMA.fr : Payez en 4 fois Carte bancaire" />
            <div className="w-full mx-auto container">
                <Header />
                <Breadcrumb />
            </div>
        </main>
    );
};

export default Page;
