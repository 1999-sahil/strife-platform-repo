"use client";


export const Footer = () => {
    return (
        <div className="dark:bg-gray-600 bg-gray-300 flex items-center justify-center">
            <h2 className="flex items-center gap-2 text-center p-1.5 text-xs md:text-sm font-semibold">
                Made with
                <svg fill="#20b2aa" width="20px" height="20px" viewBox="0 -1.5 27 27" xmlns="http://www.w3.org/2000/svg"><path d="m0 6.857c0-.029-.001-.063-.001-.097 0-3.734 3.027-6.76 6.761-6.76.034 0 .068 0 .103.001h-.005c3.428 0 6 2.572 6.857 3.428.857-.856 3.428-3.428 6.857-3.428 5.143 0 6.857 3.428 6.857 6.857 0 6.857-12 16.285-13.715 17.143-1.715-.857-13.715-10.285-13.715-17.143z"/></svg>
                by <span className="font-bold underline">Sahil Ahmed</span> @2024 | Strife | All Rights Reserved
            </h2>
        </div>
    )
}