import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";

// import Typography from "@mui/material/Typography";

import styles from "../card.module.css";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";

// s

export default function CardManufact() {
  return (
    <Box
      className={styles.grid}
      sx={{
        bgcolor: "background.paper",
        // boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 220,
        border: 1,
        height: 100,
      }}
    >
      <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
        <Image src="/Ellipse2.png" width={60} height={60} />
      </Box>
      <CardContent>
        <Box className={styles.marginbottom} sx={{ fontSize: 14 }}>
          vs. last week
        </Box>

        <Box>
          <FacebookSharpIcon />
        </Box>
      </CardContent>
    </Box>
  );
}
