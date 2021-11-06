import { Container } from '../components/draggables/Container';
import { Topbar } from '../components/TopBar';
import { Toolbox } from '../components/Toolbox';
import { Paper, Grid, Typography, makeStyles } from '@material-ui/core';
import { Editor, Frame, Element } from '@craftjs/core';
import { Text } from '../components/draggables/Text';
import { Settings } from '../components/Settings';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: 'rgb(252, 253, 253)',
  },
}));

export default function EditorPage() {
  const classes = useStyles();

  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">PDF-LAYOUT-EDITOR</Typography>
      <Editor
        resolver={{
          Text,
          Container
        }}
      >
        <Topbar />
        <Grid container spacing={5} style={{ paddingTop: '10px' }}>
          <Grid item xs>
            <Frame>
              <Element
                canvas
                is={Container}
                padding={5}
                background="#FFF"
                display="block"
                width={970}
                height={300}
                data-cy="root-container"
              >
                <Text fontSize={20} textAlign="left" text="Delete me and start your layout!" data-cy="frame-text" />
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.root}>
              <Toolbox />
              <Settings />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
