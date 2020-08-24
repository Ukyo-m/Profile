import React from "react"
import { useEffect } from "react"

export default () => {
  // useEffectでDOMを生成後に処理を実行
  useEffect(() => {
    const sections = document.querySelectorAll(".section")
    console.log(sections)
    // 設定
    const options = {
      // root: observerRoot,
      root: null,
      rootMargin: "-50% 0px",
      threshold: [0],
    }

    // IntersectionObserverインスタンス化
    const observer = new IntersectionObserver(doWhenIntersect, options)
    // すべての.sectionに対して実行
    sections.forEach(section => {
      observer.observe(section)
    })

    /**
     * 交差したときに呼び出す関数
     * @param entries - IntersectionObserverEntry IntersectionObserverが交差したときに渡されるオブジェクトです。
     */
    function doWhenIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 要素が画面に入ってきたとき
          console.log("in")
          activatePagination(entry.target)
        }
      })
    }

    /**
     * ページネーションの大きさを変える関数
     * @param element - HTMLElement 現在表示中のスライドのHTML要素を引数に取ります。
     */
    function activatePagination(element) {
      const currentActiveIndex = document.querySelector("#pagination .active")

      console.log("currentActiveIndex", currentActiveIndex)
      if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove("active")
      }
      const newActiveIndex = document.querySelector(`a[href='#${element.id}']`)
      console.log(element.id)
      console.log(newActiveIndex)
      newActiveIndex.classList.add("active")
    }

    const paginations = document.querySelectorAll(".pagination a")
    paginations.forEach(pagination => {
      pagination.addEventListener("click", e => {
        e.preventDefault()
        const targetId = e.target.hash
        const target = document.querySelector(targetId)
        target.scrollIntoView({ behavior: "smooth" })
      })
    })
  })

  return (
    <nav id="pagination" className="pagination">
      <a id="pagination1" href="#section1">
        section 1
      </a>
      <a id="pagination2" href="#section2">
        section 2
      </a>
      <a id="pagination3" href="#section3">
        section 3
      </a>
      <a id="pagination4" href="#section4">
        section 4
      </a>
      <a id="pagination5" href="#section5">
        section 5
      </a>
    </nav>
  )
}
