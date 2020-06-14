const initialState = {
  sections: [
    {
      title: "womens",
      imageUrl: "https://source.unsplash.com/nimElTcTNyY",
      size: "large",
      id: 1,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://source.unsplash.com/ZGa9d1a_4tA",
      size: "largee",
      id: 2,
      linkUrl: "shop/mens",
    },
    {
      title: "hats",
      imageUrl: "https://source.unsplash.com/_yVRLC75Ma8",
      id: 3,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://source.unsplash.com/zw_oaDbfzyE",
      id: 4,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://source.unsplash.com/a-QH9MAAVNI",
      id: 5,
      linkUrl: "shop/sneakers",
      size: "last",
    },
  ],
};

const directoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
