// components/Toolbox.tsx
import { useEditor, Element } from '@craftjs/core';
import {
  Box,
  Typography,
  Grid,
  Button as MaterialButton,
} from '@material-ui/core';
import { Container } from './draggables/Container';
import { Text } from './draggables/Text';

export const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={1}
      >
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref:any) => connectors.create(ref, <Text text="Hi world" fontSize="12" textAlign="left" />)}
            variant="contained"
            data-cy="toolbox-text"
          >
            Text
          </MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton
            ref={(ref:any) =>
              connectors.create(
                ref,
                <Element canvas is={Container} padding={20} background="white" children={null} display="block" width="400" height="auto" />
              )
            }
            variant="contained"
            data-cy="toolbox-container"
          >
            Container
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
