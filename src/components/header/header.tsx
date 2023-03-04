import React, {ReactElement} from 'react';

type Props = {
    tag: string
    text: string
}

const Heading = ({tag, text}: Props) => {
    let Tag = tag || 'h1'

    return (
        // <Tag>
            {text}
        // </Tag>
    );
};

export default Heading;