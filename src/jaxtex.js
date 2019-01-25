import React from 'react'
import MathJax from 'react-mathjax'

function TeX(props) {
  return <MathJax.Provider><MathJax.Node inline formula={props.formula}/></MathJax.Provider>
}

export default TeX

