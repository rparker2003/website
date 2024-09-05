import React, { useState, useEffect, useRef, Suspense, lazy } from 'react'
import './Content.css' 

const Content = ({ tabs, setCurrentTab }) => {
  const [components, setComponents] = useState({})
  const sectionRefs = useRef({})


  // load components on initial render (tabs will never change)
  useEffect(() => {
    (async () => {
      const loadedCompenents = {}
      for (const component of tabs) {
          loadedCompenents[component.key] = lazy (() => import(`../${component.label}/${component.label}`))
      }
      setComponents(loadedCompenents)
    })()
  }, [tabs])

  // observer that tracks scroll position and updates current tab for sidebar
  useEffect(() => {
    if (components !== null) {
      const observer = new IntersectionObserver(
        (entries) => {
          let timeout
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              if (timeout) clearTimeout(timeout)
              timeout = setTimeout(() => {
                setCurrentTab(entry.target.getAttribute('data-key'))
              }, 200)
            }
          })
        },
        {
          threshold: 0.5,
        }
      )

      // Store sectionRefs.current in a local variable
      const refs = sectionRefs.current

      // Observe all the refs
      Object.values(refs).forEach(ref => {
        if (ref) observer.observe(ref)
      })

      // Cleanup function
      return () => {
        Object.values(refs).forEach(ref => {
          if (ref) observer.unobserve(ref)
        })
      }
    }
  }, [setCurrentTab, components])

  return (
    <div className="content">
      <div className="content-background" >
        <div className="content-background-dimmer" />
      </div>
      <div className="content-foreground" >
        {tabs.map((tab) => {
          const Component = components[tab.key] || (() => <div>Loading...</div>)
          return (
            <Suspense key={tab.key} fallback={<div>Loading {tab.label}...</div>}>
              <div
                data-key={tab.key}
                ref={ref => (sectionRefs.current[tab.key] = ref)}
              >
                <Component />
              </div>
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}

export default Content
