import React from "react";
import {render} from "@testing-library/react";
import {ThemeProvider} from "styled-components";
import {theme} from "assets/styles/theme";
import {UserProvider} from "providers/UserProvider";

export const renderWithThemeProviders = (children) => {
    return render(
        <ThemeProvider theme={theme}>
            <UserProvider>
                {children}
            </UserProvider>
        </ThemeProvider>
    );
}