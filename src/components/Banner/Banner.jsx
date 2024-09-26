

import classnames from "classnames"
import images from '../../img/images'
import React from "react"

const classVariantContext = React.createContext()
export { classVariantContext }

export default function Banner({ children, variant, className, ...rest }) {

    const classVariant = variant ? `banner-${variant}` : ''

    const allClass = classnames(className, classVariant, "banner-contianer")

    if (typeof children == 'object') {
        return (
            <div className={allClass} {...rest}>
                <img className="banner-img" src={ variant ? images[variant] : images.neutral } />
                <div className="text">
                    <classVariantContext.Provider value={classVariant}>
                        {children}
                    </classVariantContext.Provider>
                </div>
            </div>
        )
    }

    let title = ''
    if (variant == 'success') {
        title = 'Congratulations!'
    } else if (variant == 'error') {
        title = 'There is a problem with your application'
    } else if (variant == 'warning') {
        title = 'Attention'
    } else {
        title = 'Update available'
    }

    return (
        <div className={allClass} {...rest}>
            <img className="banner-img" src={ variant ? images[variant] : images.neutral } />
            <div className="text">
                <h1 className={classVariant}>{title}</h1>
                {children && <p className={classVariant}>{ children }</p>}
            </div>
        </div>
    )
}