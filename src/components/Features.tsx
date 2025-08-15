"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";

const features = [
  {
    title: "⚡ Lightning Fast",
    description: "Go-native performance for instant code analysis and feedback. Process millions of lines in seconds.",
    gradient: "linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)",
  },
  {
    title: "🧠 Multi-LLM Intelligence",
    description: "Integrate with Ollama, OpenAI, GitHub Copilot, and more for context-rich automation.",
    gradient: "linear-gradient(135deg, #00ffcc 0%, #00ff88 100%)",
  },
  {
    title: "🔌 Modular Architecture",
    description: "Plug-and-play integrations that scale with your needs. Add new providers in minutes.",
    gradient: "linear-gradient(135deg, #4dff99 0%, #00ffcc 100%)",
  },
  {
    title: "🌐 MCP-Powered",
    description: "Real-time connection to external data sources and blockchain networks via Model Context Protocol.",
    gradient: "linear-gradient(135deg, #00ff88 0%, #4dff99 100%)",
  },
  {
    title: "🛠️ Developer-First",
    description: "Built by developers, for developers who demand excellence. Intuitive CLI and rich integrations.",
    gradient: "linear-gradient(135deg, #00cc6a 0%, #00ff88 100%)",
  },
  {
    title: "🌍 Open Source",
    description: "Community-driven, extensible, and growing. Contribute, customize, and shape the future.",
    gradient: "linear-gradient(135deg, #00ffcc 0%, #00cc6a 100%)",
  },
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        background: isHovered 
          ? `linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(17, 17, 17, 0.9) 100%)`
          : "rgba(17, 17, 17, 0.8)",
        backdropFilter: "blur(10px)",
        border: `1px solid ${isHovered ? theme.palette.primary.main : 'rgba(0, 255, 136, 0.2)'}`,
        minHeight: 240,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: isHovered 
          ? `0 20px 40px rgba(0, 255, 136, 0.2)`
          : "0 4px 20px rgba(0, 0, 0, 0.3)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: feature.gradient,
          opacity: isHovered ? 1 : 0.7,
          transition: "opacity 0.3s ease",
        },
      }}
    >
      <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            fontSize: "1.3rem",
            background: feature.gradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {feature.title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            opacity: 0.9,
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function Features() {
  const theme = useTheme();

  return (
    <Box 
      id="features" 
      sx={{ 
        py: 12, 
        background: `linear-gradient(180deg, ${theme.palette.background.default} 0%, #0a1a0a 50%, ${theme.palette.background.default} 100%)`,
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00ffcc 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why Choose CodeForgeAI?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              opacity: 0.8, 
              maxWidth: 600, 
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Built for the modern developer workflow with cutting-edge AI and blazing performance
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, idx) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={idx}>
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
