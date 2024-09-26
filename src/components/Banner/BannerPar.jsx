import React from "react"
import classnames from "classnames"
import { classVariantContext } from "./Banner"

export default function BannerPar({ children, className, ...rest }) {

    const classVariant = React.useContext(classVariantContext)
    const allClass = classnames(className, classVariant)

    return (
        <p className={allClass} {...rest}>{children}</p>
    )
}