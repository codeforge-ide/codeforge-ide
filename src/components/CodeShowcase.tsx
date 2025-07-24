"use client";
import * as React from "react";
import { Box, Typography, Container, Paper, Tabs, Tab, Button, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const codeExamples = {
  analyze: `# Intelligent code analysis with multi-LLM support
$ codeforgeai analyze ./src --focus security --mcp github

🔍 Analyzing codebase...
🧠 Using GPT-4 + GitHub Copilot
🔒 Security scan: 0 vulnerabilities found
⚡ Performance: 3 optimizations suggested
📝 Documentation: 85% coverage

✅ Analysis complete in 2.3s`,

  commit: `# AI-powered commit message generation
$ codeforgeai commit-message

📊 Analyzing changes in 12 files...
🎯 Generated commit message:

"feat(auth): implement OAuth2 JWT middleware

- Add secure token validation with rate limiting
- Implement automatic refresh token rotation  
- Add comprehensive error handling and logging
- Include unit tests with 95% coverage

Resolves: #247, #251"

🚀 Commit created successfully!`,

  prompt: `# Interactive AI assistant for development
$ codeforgeai prompt "Optimize this React component for performance"

🧠 Analyzing component with React best practices...

Suggestions:
✅ Use React.memo() for expensive renders
✅ Implement useMemo() for computed values
✅ Add useCallback() for event handlers
✅ Consider code splitting with lazy loading

🎯 Performance improvement: ~40% faster renders`,
};

export default function CodeShowcase() {
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("code-showcase");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box 
      id="code-showcase"
      sx={{ 
        py: 12,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #001a0a 50%, ${theme.palette.background.default} 100%)`,
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
            See CodeForgeAI in Action
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              opacity: 0.8, 
              maxWidth: 700, 
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Experience the power of AI-driven development with real command examples
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Tabs 
            value={selectedTab} 
            onChange={handleTabChange}
            centered
            sx={{
              mb: 4,
              "& .MuiTab-root": {
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
                height: 3,
              },
            }}
          >
            <Tab label="Code Analysis" />
            <Tab label="Smart Commits" />
            <Tab label="AI Assistant" />
          </Tabs>

          <Paper
            sx={{
              background: "rgba(17, 17, 17, 0.9)",
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: 3,
              overflow: "hidden",
              backdropFilter: "blur(10px)",
              boxShadow: `0 20px 60px rgba(0, 255, 136, 0.2)`,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Terminal header */}
            <Box sx={{ 
              display: "flex", 
              alignItems: "center", 
              gap: 1, 
              p: 2, 
              borderBottom: `1px solid rgba(0, 255, 136, 0.2)`,
              background: "rgba(0, 0, 0, 0.3)",
            }}>
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ff5f57" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
              <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#28ca42" }} />
              <Typography sx={{ ml: 2, fontFamily: "monospace", fontSize: "0.9rem", opacity: 0.7 }}>
                terminal
              </Typography>
            </Box>

            {/* Code content */}
            <Box sx={{ p: 4 }}>
              <Typography
                component="pre"
                sx={{
                  fontFamily: "'Fira Code', 'Monaco', monospace",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                  lineHeight: 1.6,
                  color: "#e6e6e6",
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  "& .comment": { color: "#6a9955" },
                  "& .command": { color: theme.palette.primary.main },
                  "& .output": { color: "#ffd700" },
                }}
              >
                {Object.values(codeExamples)[selectedTab]}
              </Typography>
            </Box>
          </Paper>

          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 6 }}>
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                px: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc6a 100%)`,
              }}
            >
              Try CodeForgeAI Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                px: 4,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
              }}
            >
              View Documentation
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}