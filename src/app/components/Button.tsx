export default function Button({ children }: any) {

    let buttonClassName = 'text-center w-full px-5 py-4 rounded-3xl bg-black flex gap-2 items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-red-700 hover:shadow-red-400';

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    )

}