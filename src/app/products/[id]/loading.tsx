import ImageLoading from "../../skeletons/ImageLoading";
import TextLoading from "../../skeletons/TextLoading";

export default function Loading() {
    return (
        <section className="relative py-6">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2 h-dvh">
                    <ImageLoading />
                    <div>
                        <TextLoading />
                        <TextLoading />
                        <TextLoading />
                    </div>
                </div>
            </div>
        </section>
    );
}