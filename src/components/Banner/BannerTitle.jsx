
import React from "react"
import classnames from "classnames"
import { classVariantContext } from "./Banner"

export default function BannerTitle({ children, className, ...rest }) {

    const classVariant = React.useContext(classVariantContext)
    const allClass = classnames(className, classVariant)

    return (
        <h1 className={allClass} {...rest}>{children}</h1>
    )
}