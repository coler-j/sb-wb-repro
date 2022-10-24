export const badgeSizes = ["small", "medium"] as const;
export const badgeVariants = ["neutral", "primary", "success", "warning", "danger"] as const;
export type BadgeSize = typeof badgeSizes[number];
export type BadgeVariant = typeof badgeVariants[number];

export type Props = {
  /**
   * Adjusts the Badge's color.
   * @default neutral
   */
  variant?: BadgeVariant;

  /**
   * Adjusts the size of the font
   * @default medium
   */
  size?: BadgeSize;

  /**
   * Makes a bold-colored variant of the Badge.
   */
  isSaturated?: boolean;

  /**
   * Applies class
   */
  className?: string;
};
