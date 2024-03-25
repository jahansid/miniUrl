import { useEffect, useState } from "react";
import FormContent from "./FormContent";
import TableData from "./TableData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

function Content() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const updateReloadState = () => {
    setReload(true);
  };
  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/shortUrl`);
      console.log("The response from server is : ", response);
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchTableData();
  }, [reload]);
  return (
    <div>
      <FormContent updateReloadState={updateReloadState} />
      <TableData updateReloadState={updateReloadState} data={data} />
    </div>
  );
}

export default Content;
