// components/draggables/Container.tsx
import { useNode } from '@craftjs/core';
import { Slider } from '@material-ui/core';
import { Paper, FormControl, FormLabel, Radio, FormControlLabel, RadioGroup } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import React from 'react';

interface Props {
  // any other props that come into the component, you don't have to explicitly define children.
  background: any
  padding: any
  children: any
  display: any
  width: any
  height: any
}

export const Container: React.FC<Props> = ({ background, padding, display, width, height, children, ...props }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      {...props}
      ref={(ref:any) => connect(drag(ref))}
      style={{ margin: '5px 0', background, padding: `${padding}px`, display: `${display}`, width: `${width}px`, height: `${height}px` }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    display,
    width,
    height,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
    display: node.data.props.display,
    width: node.data.props.width,
    height: node.data.props.height
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ColorPicker
          name="background-color"
          value={background}
          onChange={(color) => {
            setProp((props) => (props.background = color), 500);
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          defaultValue={padding}
          onChange={(_, value) =>
            setProp((props) => (props.padding = value), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
        <Slider
          defaultValue={width}
          min={50}
          max={970}
          onChange={(_, value) =>
            setProp((props) => (props.width = value), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Height</FormLabel>
        <Slider
          defaultValue={height}
          min={50}
          max={1000}
          onChange={(_, value) =>
            setProp((props) => (props.height = value), 500)
          }
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Display</FormLabel>
        <RadioGroup
          aria-label="display"
          defaultValue={display}
          name="radio-buttons-group"
          onChange={(_, value) =>
            setProp((props) => (props.display = value), 500)
          }
        >
          <FormControlLabel value="block" control={<Radio />} label="Block" />
          <FormControlLabel value="inline-block" control={<Radio />} label="Inline-Block" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export const ContainerDefaultProps = {
  background: '#ffffff',
  padding: 3,
  display: 'block',
  width: '400',
  height: 'auto'
};

(Container as any).craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings,
  },
};
