import React, { FC } from "react";
import { Typography } from "../../primitive";

export const PageTitle: FC = ({ children }) => (
  <Typography component='h2' variant='h1' align='center'>
    {children}
  </Typography>
);
