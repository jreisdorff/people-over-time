import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Photos } from "./Photos";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import {
  LightTheme,
  BaseProvider,
  styled,
  DarkTheme,
  useStyletron,
  withStyle
} from "baseui";
import { Checkbox, STYLE_TYPE } from "baseui/checkbox";
import { FlexColumn } from "./Flex/Containers";

const engine = new Styletron();

const H1 = styled("span", ({ $theme }) => ({
  color: $theme.colors.foreground,
  backgroundColor: $theme.colors.background,
  margin: "0",
  ...$theme.typography.font1050
}));

const PageContainer = withStyle(FlexColumn, ({ $theme }) => ({
  backgroundColor: $theme.colors.background,
  height: "100vh",
  alignItems: 'center'
}));

const App: React.FC = () => {
  const [css, theme] = useStyletron()

  const [isLight, setIsLight] = useState(
    localStorage.getItem("isLight") == "true" ? true : false
  );

  const handleOnClick = (checked: boolean) => {
    setIsLight(checked);
    localStorage.setItem("isLight", checked.toString());
  };

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={isLight ? LightTheme : DarkTheme}>
        <div className="App">
          <PageContainer $theme={theme}>
            <Checkbox
              checked={isLight}
              onChange={e => {
                handleOnClick(e.currentTarget.checked);
              }}
              checkmarkType={STYLE_TYPE.toggle}
            ></Checkbox>
            <H1>Trey</H1>
            <Photos name="trey" />
          </PageContainer>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default App;
