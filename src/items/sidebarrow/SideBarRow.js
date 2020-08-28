import React from 'react'
import Avatar from '@material-ui/core/Avatar';
function SideBarRow({title, src, icon}) {
    return (
        <div>
            {src && <Avatar src={src} />}
            {icon && <icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
