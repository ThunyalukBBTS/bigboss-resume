"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import TGR2024 from "@/images/TGR2024-1.jpg"

export default function ImageModal(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">
            {/* Thumbnail Image */}
            <Image
                src={props.src}
                alt="Thumbnail"
                className="cursor-pointer rounded-md"
                onClick={openModal}
            />

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
                    <div className="relative bg-white rounded-lg shadow-lg max-w-screen-xl">
                        {/* Modal Image */}
                        <Image
                            src={props.src}
                            alt="Large View"
                            className="w-100 rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
