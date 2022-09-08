import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? 'red' : 'black',
                    textDecoration: "none",
                    borderBottomStyle: 'solid',
                    borderBottomColor: match ? 'coral' : 'black'

                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && " (active)"} */}
        </div >
    );
}

export default CustomLink;