new Vue({
    el: '#app',
    data: {
        images: [
            {
                id: 1,
                currentImage: './Image/lion_1.jpg',
                altText: 'Image 1',
                alternateImage: './Image/lion_2.jpg',
                originalImage: './Image/lion_1.jpg',
                title: 'Lion'
            },
            {
                id: 2,
                currentImage: './Image/tiger_1.jpg',
                altText: 'Image 2',
                alternateImage: './Image/tiger_2.jpg',
                originalImage: './Image/tiger_1.jpg',
                title: 'Tiger'
            },
            {
                id: 3,
                currentImage: './Image/bear_1.jpg',
                altText: 'Image 3',
                alternateImage: './Image/bear_2.jpg',
                originalImage: './Image/bear_1.jpg',
                title:'Bear'
            },
            {
                id: 4,
                currentImage: './Image/leo_1.jpg',
                altText: 'Image 4',
                alternateImage: './Image/leo_2.jpg',
                originalImage: './Image/leo_1.jpg',
                title: 'Leo'
            },
        ],
    },
    methods: {
        changeImage(image) {
            image.currentImage = image.alternateImage;
        },
        resetImage(image) {
            image.currentImage = image.originalImage;
        },
    },
});