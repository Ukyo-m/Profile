import { useEffect } from "react"

const Navi = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    console.warn(sections)
    console.log(sections)
  })
}

export default Navi
