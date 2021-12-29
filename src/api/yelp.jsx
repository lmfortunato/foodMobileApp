import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 8Ge_TibWIDRBaTkgqJt0uqBovKgCSr7XzcS1CL7naJX9LihTy7IYeGXaKnlv2P7znca0Z3RRpd80reKGbovCXyeONyx_VyCttF6SnudksCR7IJWY_MMZATd4tljLYXYx"
    }
});
