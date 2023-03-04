import React, {ReactElement} from 'react';
import Header from "@/components/header/header";
import {FlexContainer} from "@/styles/style";

type Props ={
    children: ReactElement
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header/>
            <FlexContainer>
                {children}
            </FlexContainer>
        </>
    );
};

export default Layout;