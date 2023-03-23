import axios from "axios";
import { EXPORT_DETAIL } from "next/dist/shared/lib/constants";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;