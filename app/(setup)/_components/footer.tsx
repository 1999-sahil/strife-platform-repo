"use client";


export const Footer = () => {
    return (
        <div className="dark:bg-gray-600 bg-gray-300 flex items-center justify-center">
            <h2 className="flex items-center gap-2 text-center p-1.5 text-sm font-semibold">
                Made with
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="#20b2aa" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.98389 11.6106L9.11798 18.5107C10.5955 20.4964 13.4045 20.4964 14.882 18.5107L20.0161 11.6106C21.328 9.84746 21.328 7.34218 20.0161 5.57906C18.0957 2.9981 13.6571 3.76465 12 6.54855C10.3429 3.76465 5.90428 2.9981 3.9839 5.57906C2.67204 7.34218 2.67203 9.84746 3.98389 11.6106Z" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                by <span className="font-bold underline">Sahil Ahmed</span> @2024 | Strife | All Rights Reserved
            </h2>
        </div>
    )
}