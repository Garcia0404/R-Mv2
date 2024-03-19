import { useNavigate } from "react-router-dom"

export const ChangePage = ({number,page}) => {
  const navigate = useNavigate()
  const style = (number==page) ? 'bg-grayText':'bg-grayMain'
  return (
    <div onClick={()=>navigate(`/${number}`)} className={`${style} hover:bg-grayText text-white p-1 grid place-content-center my-auto w-[20px] h-[20px] text-sm mobileLg:w-[35px] mobileLg:h-[35px] rounded-md cursor-pointer`}>{number}</div>
  )
}
