import axios from "axios";
import { ACC_LANG, BASE_URL } from "../config/config";

const instance = axios.create();

instance.defaults.baseURL = BASE_URL;
instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common["Accept-Language"] = ACC_LANG;

export default instance;
