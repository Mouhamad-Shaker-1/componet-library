import classnames from "classnames"


export default function Badge({ children, className, color, variant, ...rest }) {

    const colorBadge = color ? `badge-${color}` : ''
    const variantBadge = variant ? `badge-${variant}` : ''


    const allClass = classnames( colorBadge, variantBadge, 'badge', className)
    
    console.log(allClass)

    return (
        <button className={allClass} {...rest}>
            {children}
        </button>
    )
}