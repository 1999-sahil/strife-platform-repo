"use client";

import Image from "next/image";
import "@uploadthing/react/styles.css";

import { UploadDropzone } from "@/lib/uploadThing";
import { FileCheck2, X } from "lucide-react";

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}

export const FileUpload = ({
    onChange,
    value,
    endpoint,
} : FileUploadProps) => {

    const fileType = value?.split(".").pop();

    // see the image which we uploaded.
    if (value && fileType !== "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    // see the pdf which we uploaded.
    if (value && fileType === "pdf") {
        return (
            <div className="flex items-center relative p-2 mt-2 rounded-md bg-background/10">
                <FileCheck2 className="h-10 w-10 fill-emerald-200 stroke-emerald-400" />
                <a
                    href={value}
                    target="_balnk"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm text-emerald-500 dark:text-emerald-400 hover:underline"
                >
                    {value}
                </a>
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
                >
                    <X className="h-4 w-4" />
                </button>
            </div>
        )
    }

    return (
        <UploadDropzone
            className="bg-gray-100 cursor-pointer ut-button:bg-[#20b2aa] ut-label:text-[#20b2aa] ut-label:underline ut-label:hover:text-gray-600"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
            }}
        />
    )
}
