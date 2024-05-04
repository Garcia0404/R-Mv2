import { useNavigate } from "react-router-dom"
import {Pagination} from "@nextui-org/react";
export const ChangePage = ({page}) => {
  const navigate = useNavigate()
  return (
      <Pagination page={parseFloat(page)} onChange={(event)=>navigate(`/${event}`)} total={42} initialPage={1} color='secondary'/>
  )
}


        
