"use client";
import * as React from "react";
import { Box, Typography, Button, Stack, Container, Paper, useTheme } from "@mui/material";
import Link from "next/link";

const codeSnippet = `# Analyze your entire codebase with AI
$ codeforgeai analyze ./my-project --focus security

🔍 Analyzing 247 files...
🧠 GPT-4 & Copilot integration active
⚡ Found 3 optimization opportunities
✅ Security scan complete - 0 vulnerabilities

# Generate intelligent commit messages  
$ codeforgeai commit-message
🎯 "feat: add OAuth2 JWT validation middleware

Implements secure token verification with rate limiting
and automatic refresh token rotation for enhanced security"`;

const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0a1a0a 50%, ${theme.palette.background.default} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background grid */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
          "@keyframes grid-move": {
            "0%": { transform: "translate(0, 0)" },
            "100%": { transform: "translate(50px, 50px)" },
          },
        }}
      />

      <Container maxWidth="xl">
        <Stack direction={{ xs: "column", lg: "row" }} spacing={6} alignItems="center">
          {/* Left side - Text content */}
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00ffcc 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Code at the Speed of
              <br />
              <span style={{ color: theme.palette.primary.main }}>Intelligence</span>
            </Typography>
            
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                opacity: 0.9,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                lineHeight: 1.6,
              }}
            >
              The ultimate AI-powered developer toolkit. Analyze, automate, and accelerate your workflow with blazing-fast code intelligence and real-time insights.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mb: 4 }}>
              <Link href="https://github.com/codeforge-ide/codeforgeai.go" target="_blank" rel="noopener" passHref>
                <Button 
                  component="a"
                  variant="contained" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: "1.1rem",
                    boxShadow: `0 0 30px rgba(0, 255, 136, 0.3)`,
                    "&:hover": {
                      boxShadow: `0 0 40px rgba(0, 255, 136, 0.5)`,
                    },
                  }}
                >
                  Start Building
                </Button>
              </Link>
              <Link href="https://github.com/codeforge-ide/codeforgeai.go" target="_blank" rel="noopener">
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      borderColor: theme.palette.primary.light,
                      background: `rgba(0, 255, 136, 0.1)`,
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </Link>
            </Stack>

            <Stack direction="row" spacing={4} sx={{ opacity: 0.8 }}>
              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  10k+
                </Typography>
                <Typography variant="body2">Developers</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  50M+
                </Typography>
                <Typography variant="body2">Lines Analyzed</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                  99.9%
                </Typography>
                <Typography variant="body2">Uptime</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right side - Code snippet */}
          <Box sx={{ flex: 1, zIndex: 2 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                background: "rgba(17, 17, 17, 0.9)",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: 2,
                position: "relative",
                backdropFilter: "blur(10px)",
                boxShadow: `0 0 50px rgba(0, 255, 136, 0.2)`,
              }}
            >
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
                <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28ca42" }} />
              </Box>
              
              <Typography
                component="pre"
                sx={{
                  fontFamily: "'Fira Code', 'Monaco', monospace",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "#e6e6e6",
                  overflow: "auto",
                  "& .comment": { color: "#6a9955" },
                  "& .command": { color: theme.palette.primary.main },
                  "& .output": { color: "#ffd700" },
                }}
              >
                <TypewriterText text={codeSnippet} delay={30} />
              </Typography>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
