export interface DropdownItemType {
  label: string;
  value: string;
  color?: "default" | "danger";
  disabled?: boolean;
}

export interface DropdownSectionType {
  title?: string;
  items: DropdownItemType[];
}

export interface DropdownSectionProps {
  section: DropdownSectionType;
  dangerItems?: string[];
  disabledItems?: string[];
  isLast?: boolean;
}
