import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const integrations = [
  {
    name: "GitHub",
    description: "Deep repository integration for scans, PR automation, and CI insights.",
    icon: "🐙",
    color: "#24292f",
  },
  {
    name: "Models & Claude",
    description: "Plug into Claude and other LLM providers for multi-LLM workflows.",
    icon: "🧠",
    color: "#7b61ff",
  },
  {
    name: "CoinGecko (MCP)",
    description: "Real-time market and token data via the Model Context Protocol.",
    icon: "💱",
    color: "#f2a900",
  },
];

export default function Integrations() {
  return (
    <Box id="integrations" sx={{ py: 8, px: 2, background: "#222", color: "#ededed" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
        Integrations
      </Typography>
      <Grid container spacing={4}>
{integrations.map((integration, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card sx={{ background: "rgba(17,17,17,0.85)", color: "#ededed", minHeight: 160, display: "flex", alignItems: "center", border: `1px solid ${integration.color}` }} elevation={2}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: integration.color, width: 48, height: 48, fontSize: 24 }}>
                  {integration.icon}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {integration.name}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.85 }}>
                    {integration.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
