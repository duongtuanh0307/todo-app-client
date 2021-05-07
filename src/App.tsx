import React, { FC } from "react";
import * as styles from "./App.css";
import { Button } from "./views/components/primitive/Button";
import { Typography } from "./views/components/primitive/Typography";
import { InputText } from "./views/components/primitive/InputText";
import { RadioButton } from "./views/components/primitive/RadioButton";

const App: FC = () => {
  return (
    <div>
      <div className={styles.appTitle}>STYLE GUIDE</div>
      <Button variant="primary" size="md">
        Primary
      </Button>
      <Button variant="default" size="md">
        Default
      </Button>
      <Button variant="disabled" size="md">
        Disabled
      </Button>
      <Button variant="danger" size="md">
        Danger
      </Button>
      <br />
      <Typography color="primary" component="h1" variant="h1">
        Heading1
      </Typography>
      <Typography component="h2" variant="h1">
        Heading 1
      </Typography>
      <Typography component="h2" variant="h2">
        Heading 2
      </Typography>
      <Typography>normal text</Typography>
      <Typography color="error">error text</Typography>
      <InputText placeHolder="place holder" />
      <br /> <br />
      <InputText placeHolder="disabled input" disabled />
      <br /> <br />
      <InputText placeHolder="error" error />
      <br />
      <br />
      <RadioButton label="Radio Button 1" name="Radio Button" value="value 1" />
      <RadioButton label="Radio Button 2" name="Radio Button" value="value 2" />
    </div>
  );
};

export default App;
