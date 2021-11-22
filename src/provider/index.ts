import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios"


export const login = async (data: any) => {
    
    return await axios.post("https://project-sanchez-ramirez-ifh6e.ondigitalocean.app/api/account/login", data);
    
}

export const getUser = async () => {

    return await axios.get("https://project-sanchez-ramirez-ifh6e.ondigitalocean.app/api/account", {
        headers: {
            authorization: `${await AsyncStorage.getItem("token")}`
        }
    });

}