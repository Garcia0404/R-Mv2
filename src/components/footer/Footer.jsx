import { useNavigate } from "react-router-dom"
import { ChangePage } from "./components"
export const Footer = ({ page }) => {
  const navigate = useNavigate()
  let p = []
  let n = parseInt(page) + 10
  console.log(n)

  for (let i = page; i < n && i<=42; i++) {
    p.push(
      <ChangePage page={page} key={i} number={i} />
    )
  }
  return (
    <div className="flex items-center justify-center">
      <svg onClick={() => navigate('/1')} className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
      </svg>
      <svg onClick={() => { if (page > 1) navigate(`/${parseInt(page) - 1}`) }} className="cursor-pointer hover:translate-x-[-2px] transition-all w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      <div className="flex justify-center gap-1 h-12 w-56 tablet:w-80 overflow-hidden">
        {p}
      </div>
      <svg onClick={() => { if (page < 42) navigate(`/${parseInt(page) + 1}`) }} className="cursor-pointer hover:translate-x-[2px] transition-all w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      <svg onClick={() => navigate('/42')} className="w-4 h-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>

    </div>
  )
}
