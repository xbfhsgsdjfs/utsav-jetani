const MovieRowSetting = {
    infinite: false,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 7,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
            },
        },
    ],
};

const MovieSliderSetting = {
    infinite: false,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
};


const TvShowSetting = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    adaptiveHeight: true,
    initialSlide: 0,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                arrows: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            },
        },
    ],
};

const EpisodeSetting = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
};

const responsive = {
    0: {
        items: 2,
    },
    512: {
        items: 5,
    },
    1024: {
        items: 5,
    },
};

const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
}

export { MovieRowSetting, TvShowSetting, EpisodeSetting, responsive, MovieSliderSetting, truncate }