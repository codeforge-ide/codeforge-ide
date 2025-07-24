import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

const integrations = [
  {
    name: "Ollama",
    description: "Run local LLMs for fast, private code analysis and automation.",
    icon: "🦙",
  },
  {
    name: "OpenAI",
    description: "Leverage OpenAI models for high-quality completions, code review, and documentation.",
    icon: "🤖",
  },
  {
    name: "GitHub Copilot",
    description: "Enhance Copilot with full project context, smart code analysis, and auto-generated commit messages.",
    icon: "🐙",
  },
  {
    name: "Astrolescent DeFi",
    description: "Get real-time DeFi data, token prices, and analytics in your AI workflows.",
    icon: "🌌",
  },
  {
    name: "IO Intelligence API",
    description: "Advanced agent workflows, multi-agent orchestration, and scalable AI tasks.",
    icon: "🌐",
  },
];

export default function Integrations() {
  return (
    <Box id="integrations" sx={{ py: 8, px: 2, background: "#222", color: "#ededed" }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, textAlign: "center" }}>
        Integrations
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {integrations.map((integration, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Card sx={{ background: "#171717", color: "#ededed", minHeight: 160, display: "flex", alignItems: "center" }} elevation={2}>
              <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar sx={{ bgcolor: "#333", width: 48, height: 48, fontSize: 32 }}>
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
