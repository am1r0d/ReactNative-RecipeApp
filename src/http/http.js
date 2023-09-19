import axios from "axios";

export const getRecipesList = async (tags = null) => {
    const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list",
        params: {
            from: "0",
            size: "20",
            tags,
        },
        headers: {
            "X-RapidAPI-Key":
                "6a196637f9msh0894af4de82e24dp1bb3b5jsnd1b3bc3a70a3",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
    };
    return await axios.request(options);
};
