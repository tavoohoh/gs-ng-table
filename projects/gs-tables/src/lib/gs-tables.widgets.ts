export interface GTableAction {
  display: boolean;
  text: string;
  id?: string;
  row?: {};
}

export interface GTableRowAction {
  display: boolean;
  text: string;
  actions: Array<GTableAction>;
}

interface GInputStyle {
  /* Input padding */
  padding?: string;
  /* Input text color */
  color?: string;
  /* Input backgroud */
  background?: string;
  /* Input border size */
  borderSize?: string;
  /* Input border style */
  borderStyle?: string;
  /* Input border color */
  borderColor?: string;
  /* Input radious */
  borderRadius?: string;
  /* Input border top width/size */
  borderTop?: string;
  /* Input border right width/size */
  borderRight?: string;
  /* Input border bottom width/size */
  borderBottom?: string;
  /* Input border left width/size */
  borderLeft?: string;
}

/**
 * Library styles
 *
 * @description
 * Send style parameters to the library
 *
 */
export interface GStyles {
  color?: {
    /**
     * Font color
     * default: "inherit"
     */
    font?: string;

    /**
     * Primary color, used in important UI elements background and color
     * default: "#4588fd"
     */
    primary?: string;

    /**
     * Secondary color, used in some UI elements background and color
     * default: "#7a9e9f"
     */
    secondary?: string;

    /**
     * Neutral color, used in some UI elements background and color
     * default: "#4f6367"
     */
    neutral?: string;

    /**
     * White color, all white colors used in UI elements
     * default: "#ffffff"
     */
    white?: string;
  };
  ui?: {
    /**
     * Font size, all fonts size
     * default: ".9rem"
     */
    fontSize?: string;
    /**
     * Table inner padding
     */
    padding?: string;
    /**
     * Input and button style
     * Go to `GInputStyle` for detail
     */
    primaryButton?: GInputStyle;
  };
}

export enum GTableStyle {
  // Display the table with all its columns, a header. Actions are optional.
  TABLE = 'TABLE',
  // Disply only the first and second column, no header. Actions are optional.
  SINGLE = 'SINGLE'
}

export interface GTable {
  data: Array<object>;
  header?: Array<string>;
  options?: {
    style?: GTableStyle;
    rowActions?: GTableRowAction;
  };
}
