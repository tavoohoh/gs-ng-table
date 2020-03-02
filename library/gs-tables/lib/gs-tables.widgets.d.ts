/**
 * A row action element
 * For example: 'edit', 'delete', etc...
 */
export interface GTableAction {
    display: boolean;
    text: string;
    id?: string;
    row?: {};
}
/**
 * An event triggered when clicking an action element
 */
export interface GTableRowAction {
    display: boolean;
    text: string;
    actions: Array<GTableAction>;
}
/**
 * Input/button styles
 */
interface GInputStyle {
    padding?: string;
    color?: string;
    background?: string;
    borderSize?: string;
    borderStyle?: string;
    borderColor?: string;
    borderRadius?: string;
    borderTop?: string;
    borderRight?: string;
    borderBottom?: string;
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
         * Border color
         * default: "#eeeeee"
         */
        border?: string;
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
         * Inner padding
         */
        padding?: string;
        /**
         * Input and button style
         * Go to `GInputStyle` for detail
         */
        primaryButton?: GInputStyle;
    };
}
/**
 * Table design
 */
export declare enum GTableStyle {
    /**
     * Display the table with all its columns, a header. Actions are optional.
     */
    TABLE = "TABLE",
    /**
     * Disply only the first and second column, no header. Actions are optional.
     */
    SINGLE = "SINGLE"
}
/**
 * Table configuration
 */
export interface GTable {
    /**
     * The table data as an array of objects
     */
    data: Array<object>;
    /**
     * Table header values
     *
     * Optional. If not defined the header will use `GTable.data` key names
     */
    header?: Array<string>;
    /**
     * Key names of the data values
     *
     * Optional. If not defined the table will iterate over the keys of its data.
     */
    keyNames?: Array<string>;
    /**
     * Change the table design or add funcionalities
     */
    options?: {
        /**
         * Set the table desgin
         *
         * By Default: `GTableStyle.TABLE`
         */
        style?: GTableStyle;
        /**
         * A dropdown button with actions to trigger events
         */
        rowActions?: GTableRowAction;
        /**
         * The page currently being displayed
         */
        currentPage?: number;
        /**
         * The total of available pages
         */
        totalOfPages?: number;
    };
}
export {};