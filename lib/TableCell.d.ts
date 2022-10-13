import * as React from "react";
import ReactPDF from "@react-pdf/renderer";
import { Style } from "@react-pdf/typings";
export interface TableBorder {
    includeTopBorder?: boolean;
    includeRightBorder?: boolean;
    includeBottomBorder?: boolean;
    includeLeftBorder?: boolean;
}
export interface TableCellProps extends TableBorder {
    weighting?: number;
    style?: Style | Style[];
    textAlign?: "left" | "center" | "right";
    isHeader?: boolean;
    fontSize?: number | string;
}
export declare class TableCell extends React.PureComponent<TableCellProps> {
    render(): JSX.Element;
}
