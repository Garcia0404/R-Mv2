import { ChangePage } from "./components"
export const Footer = ({ page }) => {
  return (
    <footer className="flex justify-center my-4">
      <ChangePage page={page}/>
    </footer>
  )
}
