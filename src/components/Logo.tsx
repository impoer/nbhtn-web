import { Box, Typography } from '@mui/material';

const Logo: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" padding={"10px"}>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        NBHTN
      </Typography>
    </Box>
  );
};

export default Logo;
