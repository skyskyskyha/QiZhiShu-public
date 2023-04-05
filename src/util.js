export const GetTokenData = async () => {
    const jwt = localStorage.getItem("token");
    const jwtParts = jwt.split(".");
    const header = JSON.parse(atob(jwtParts[0]));
    const payload = JSON.parse(atob(jwtParts[1]));
    return payload
};
