
export const colorDetection = (text) => {

    if (text == 'active') {
        return 'text-green-600 bg-green-200 rounded-lg px-2 py-[1px] capitalize text-[16px]'
    } else if (text == 'pending') {
        return 'text-blue-600 bg-blue-100 rounded-lg px-2 py-[1px] capitalize text-[16px]'
    } else if (text == 'decline') {
        return 'text-red-500 bg-red-100 rounded-lg px-2 py-[1px] capitalize text-[16px]'
    }

}