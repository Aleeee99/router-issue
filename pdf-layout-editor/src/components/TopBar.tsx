// components/Topbar.tsx
import { useEditor } from '@craftjs/core';
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton
} from '@material-ui/core';

export const Topbar = () => {
  const { actions, enabled, canUndo, canRedo } = useEditor(
    (state, query) => ({
      enabled: state.options.enabled,
      canUndo: state.options.enabled && query.history.canUndo(),
      canRedo: state.options.enabled && query.history.canRedo(),
    })
  );

  return (
    <Box px={1} py={1} mt={3} mb={1} bgcolor="rgb(227, 227, 227)" borderRadius="5px">
      <Grid container alignItems="center">
        <Grid item xs>
          <FormControlLabel
            className="enable-disable-toggle"
            control={
              <Switch
                checked={enabled}
                onChange={(_, value) =>
                  actions.setOptions((options) => (options.enabled = value))
                }
              />
            }
            label="Enable"
          />
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="primary"
            disabled={!canUndo}
            onClick={() => actions.history.undo()}
            style={{ marginRight: '10px' }}
          >
            Undo
          </MaterialButton>
          <MaterialButton
            className="copy-state-btn"
            size="small"
            variant="outlined"
            color="primary"
            disabled={!canRedo}
            onClick={() => actions.history.redo()}
            style={{ marginRight: '10px' }}
          >
            Redo
          </MaterialButton>
        </Grid>
      </Grid>
    </Box>
  );
};
