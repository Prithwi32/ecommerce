import { addCart } from '@/api/productApis/postApi';
import useCartStore from "@/globalStore/useCartStore";
import { toast } from 'react-toastify';
import { getCartListData, getProductListData } from '@/api/productApis/getPostApi';

async function cart(product, itemQty, openModalCart) {
    try {
        openModalCart();
        
        const payload = {
            businessType: process.env.NEXT_PUBLIC_BUSINESS_NAME,
            productId: {
                PK: product?.PK,
                SK: product?.SK
            },
            qty: itemQty || 1,
            totalAmount: (product?.price || 0) * (itemQty || 1), // Ensure price calculation is correct
        };

        const response = await addCart(payload);
        if (!response?.data?.data) throw new Error('Failed to add item to cart');

        const productDetailsResponse = await getProductListData(
            response?.data?.data?.productId?.PK,
            response?.data?.data?.productId?.SK
        );

        const mergedData = {
            ...response.data.data,
            productDetails: productDetailsResponse?.data?.[0] || {},
        };

        useCartStore.getState().addToCart(mergedData);
        toast.success('Item added to cart successfully!');
    } catch (error) {
        console.error("Add to Cart Error:", error);
        toast.error(error?.message || 'Failed to add item to cart');
    }
}

export const handleAddToCart = (product, openModalCart, itemQty = 1) => {
    cart(product, itemQty, openModalCart);
};

export const fetchAndMergeCartData = async () => {
    try {
        const cartResponse = await getCartListData();
        const cartItems = cartResponse?.data?.items || [];

        const mergedCart = await Promise.all(
            cartItems.map(async (item) => {
                const productDetailsResponse = await getProductListData({
                    PK: item?.productId?.PK,
                    SK: item?.productId?.SK,
                });
                return {
                    ...item,
                    productDetails: productDetailsResponse?.data?.items || {},
                };
            })
        );
        useCartStore.getState().setCart(mergedCart);
    } catch (error) {
        console.error('Failed to fetch and merge cart data:', error);
        toast.error('Error fetching cart data');
    }
};
