const currentImage = (state = 0, action) => {
    switch (action.type) {
        case 'SET_CURRENT_IMAGE':
            return action.payload;
        default:
            return state;
    }
}

export default currentImage;