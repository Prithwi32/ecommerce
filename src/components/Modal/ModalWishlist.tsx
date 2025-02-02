'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from '@phosphor-icons/react/dist/ssr';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useWishlist } from '@/context/WishlistContext';

const ModalWishlist = () => {
    const { isModalOpen, closeModalWishlist } = useModalWishlistContext();
    const { wishlistState, removeFromWishlist } = useWishlist();

    return (
        <>
            <div className={`modal-wishlist-block ${isModalOpen ? 'open' : ''}`} onClick={closeModalWishlist}>
                <div
                    className={`modal-wishlist-main py-6 ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="heading px-6 pb-3 flex items-center justify-between relative">
                        <div className="heading5">Wishlist</div>
                        <div
                            className="close-btn absolute right-6 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-purple hover:text-white"
                            onClick={closeModalWishlist}
                        >
                            <Icon.X size={14} />
                        </div>
                    </div>
                    <div className="list-product px-6">
                        {wishlistState?.wishlistArray?.map((product: any, i: number) => {
                            const productDetail = product.productDetails?.[0]; // Get the first product detail
                            return (
                                <div key={i} className='item py-5 flex items-center justify-between gap-3 border-b border-line'>
                                    <div className="infor flex items-center gap-5">
                                        <div className="bg-img">
                                            <Image
                                                src={productDetail?.imageURLs?.[0]?.img || '/image3.png'} // Use the first image or a fallback
                                                width={300}
                                                height={300}
                                                alt={productDetail?.name || 'Product Image'}
                                                className='w-[100px] aspect-square flex-shrink-0 rounded-lg'
                                            />
                                        </div>
                                        <div className=''>
                                            <div className="name text-button">{productDetail?.name}</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="product-price text-title">${productDetail?.price}.00</div>
                                                {productDetail?.originPrice && (
                                                    <div className="product-origin-price text-title text-secondary2">
                                                        <del>${productDetail?.originPrice}.00</del>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="remove-wishlist-btn caption1 font-semibold text-red underline cursor-pointer"
                                        onClick={() => removeFromWishlist(product?.PK, product?.SK)}
                                    >
                                        Remove
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="footer-modal p-6 border-t bg-white border-line absolute bottom-0 left-0 w-full text-center">
                        <Link
                            href={'/wishlist'}
                            onClick={closeModalWishlist}
                            className='button-main w-full text-center uppercase'
                        >
                            View All Wish List
                        </Link>
                        <div
                            onClick={closeModalWishlist}
                            className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block"
                        >
                            Or continue shopping
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalWishlist;