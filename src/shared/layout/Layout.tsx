import React, { FC, ReactElement } from "react";
import { Header } from "../header/Header";

type LayoutProps = {
    children: ReactElement
}

export const Layout: FC<LayoutProps> = (props) => {
    return (
        <section>
            <Header/>
            <main>
                {
                   props.children 
                }
            </main>
        </section>
    )
}