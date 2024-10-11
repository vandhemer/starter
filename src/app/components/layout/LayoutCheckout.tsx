import Logo from "@/components/header/Logo";

export default function LayoutCheckout( { children }: { children: React.ReactNode }) {

    return (
        <div className="w-full mx-auto relative container">
            <header>
                <div className="navbar w-full mx-auto mt-0 px-6 md:px-10 py-12">
                    <Logo />
                </div>
            </header>
            {children}
        </div>
    )
    
}