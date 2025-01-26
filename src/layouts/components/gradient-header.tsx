import type { StackProps } from '@mui/material/Stack';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { textGradient } from 'src/theme/styles';

interface Props extends StackProps {
  title: string;
}

export function GradientHeader({ title }: Props) {
  return (
    <Box
      display="flex"
    >
      <Typography
        variant="h6"
        sx={(theme) => ({
          ...textGradient(
            `to right, ${theme.vars.palette.secondary.main}, ${theme.vars.palette.warning.main}`
          ),
        })}
      >
        {title}
      </Typography>
    </Box>
  );
}
