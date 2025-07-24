"use client";
import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Divider,
  Stack,
  Link as MuiLink,
  Alert,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

export default function AuthForm() {
  const theme = useTheme();
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auth logic would go here
    console.log(isSignUp ? "Sign up" : "Sign in", { email, password, name });
  };

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
      {/* Animated background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 204, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 204, 106, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Link href="/" passHref>
            <Typography
              component="a"
              variant="h4"
              sx={{
                fontWeight: 800,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00ffcc 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              CodeForgeAI
            </Typography>
          </Link>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.8 }}>
            {isSignUp ? "Create your account" : "Welcome back"}
          </Typography>
        </Box>

        <Card
          sx={{
            background: "rgba(17, 17, 17, 0.9)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: 3,
            boxShadow: `0 20px 60px rgba(0, 255, 136, 0.2)`,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                {isSignUp && (
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgba(0, 255, 136, 0.3)",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                    }}
                  />
                )}

                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(0, 255, 136, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(0, 255, 136, 0.3)",
                      },
                      "&:hover fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: theme.palette.primary.main,
                      },
                    },
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #00cc6a 100%)`,
                    "&:hover": {
                      background: `linear-gradient(135deg, #4dff99 0%, ${theme.palette.primary.main} 100%)`,
                    },
                  }}
                >
                  {isSignUp ? "Create Account" : "Sign In"}
                </Button>

                <Divider sx={{ my: 2, "&::before, &::after": { borderColor: "rgba(0, 255, 136, 0.3)" } }}>
                  <Typography sx={{ color: "rgba(255, 255, 255, 0.6)" }}>or</Typography>
                </Divider>

                <Alert severity="info" sx={{ mb: 2 }}>
                  🚧 OAuth providers coming soon! Currently in development.
                </Alert>

                <Stack spacing={2}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    disabled
                    sx={{
                      py: 1.5,
                      borderColor: "rgba(0, 255, 136, 0.3)",
                      color: "rgba(255, 255, 255, 0.5)",
                      "&.Mui-disabled": {
                        borderColor: "rgba(0, 255, 136, 0.1)",
                      },
                    }}
                  >
                    🐙 Continue with GitHub
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    size="large"
                    disabled
                    sx={{
                      py: 1.5,
                      borderColor: "rgba(0, 255, 136, 0.3)",
                      color: "rgba(255, 255, 255, 0.5)",
                      "&.Mui-disabled": {
                        borderColor: "rgba(0, 255, 136, 0.1)",
                      },
                    }}
                  >
                    🔍 Continue with Google
                  </Button>
                </Stack>

                <Box sx={{ textAlign: "center", mt: 3 }}>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <MuiLink
                      component="button"
                      type="button"
                      onClick={() => setIsSignUp(!isSignUp)}
                      sx={{
                        color: theme.palette.primary.main,
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {isSignUp ? "Sign in" : "Sign up"}
                    </MuiLink>
                  </Typography>
                </Box>
              </Stack>
            </form>
          </CardContent>
        </Card>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            By continuing, you agree to our{" "}
            <MuiLink href="#" sx={{ color: theme.palette.primary.main }}>
              Terms of Service
            </MuiLink>{" "}
            and{" "}
            <MuiLink href="#" sx={{ color: theme.palette.primary.main }}>
              Privacy Policy
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}