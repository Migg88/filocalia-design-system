import * as React from "react";
/**
 * Content card for courses, services and stylists. `arch` gives the signature arch-topped silhouette.
 * @startingPoint section="Display" subtitle="Course / service cards with arch option" viewport="700x420"
 */
export interface CardProps{
  /** Image or placeholder node */
  media?: React.ReactNode;
  /** Arch-topped silhouette (brand signature); use for people and featured courses */
  arch?: boolean;
  eyebrow?: string; title?: string; children?: React.ReactNode; footer?: React.ReactNode;
  interactive?: boolean; tone?: "light"|"inverse"; style?: React.CSSProperties; onClick?: () => void;
}
export declare function Card(props: CardProps): JSX.Element;
