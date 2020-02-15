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

interface GtableElementStyle {
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

export interface GTableStyles {
  /**
   * Font color
   * default: "inherit"
   */
  color?: string;
  /**
   * Font size, all fonts size
   * default: ".9rem"
   */
  fontSize?: string;
  /**
   * Primary color, used in important UI elements background and color
   * default: "#4588fd"
   */
  primaryColor?: string;
  /**
   * Secondary color, used in some UI elements background and color
   * default: "#7a9e9f"
   */
  secondaryColor?: string;
  /**
   * Neutral color, used in some UI elements background and color
   * default: "#4f6367"
   */
  neutralColor?: string;
  /**
   * White color, all white colors used in UI elements
   * default: "#ffffff"
   */
  whiteColor?: string;
  /**
   * General padding
   * default: ".5rem"
   */
  padding?: string;
  /**
   * Button style
   * Go to `GtableElementStyle` for detail
   */
  buttom?: GtableElementStyle;
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
