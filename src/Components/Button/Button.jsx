import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import './Button.css'



/**
 * By default the component has the primary button styling.
 */
export const Button = (
    {
        secondary = false,
        tertiary = false,
        isActionBtn = false,
        icon,
        iconRight,
        label,
        onClick,
        disabled = false,
        className,
        style,
    },
) => {
    const btnSecondary = secondary ? 'secondary' : ''
    const btnTertiary = tertiary && !secondary && !isActionBtn ? 'tertiary' : ''
    const btnIsIcon = isActionBtn ? 'iconBtn' : ''

    return (
        <button
            type="button"
            className={`btn ${btnSecondary} ${btnTertiary} ${btnIsIcon} ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {isActionBtn ? (
                <>
                    {label}
                    {icon && <FontAwesomeIcon icon={icon} />}
                </>
            ) : (
                <>
                    {icon !== undefined && <FontAwesomeIcon icon={icon} />}
                    {label}
                    {iconRight !== undefined && <FontAwesomeIcon icon={iconRight} />}
                </>
            )}
        </button>
    )
}

Button.propTypes =  {
    /**
     * Enable to change button to secondary styling.
     */
    secondary:PropTypes.bool,
    /**
     * Enable to change button to tertiary styling.
     */
    tertiary:PropTypes.bool,
    disabled:PropTypes.bool,
    /**
     * Enable to change button to action button styling. Will also need
     * to pass in a value for icon.
     */
    isActionBtn: PropTypes.bool,
    /**
     * Fontawesome value for icon.
     */
    icon: PropTypes.node,
    iconRight:PropTypes.node,
    onClick: PropTypes.func,
    label:PropTypes.string,
}
