import React from "react";
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const fontFamily = theme`fontFamily.default`
const antiAliased = tw`antialiased`

const CustomStyles = createGlobalStyle `
    body {
        fontFamily: ${fontFamily},
        background-color: #E5E5E5
        ${antiAliased},
    }
`
const GlobalStyles = () => {
    return (
        <>
            <BaseStyles />
            <CustomStyles />
        </>
    )
}

export default GlobalStyles