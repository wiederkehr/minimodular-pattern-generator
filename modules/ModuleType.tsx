import { ReactElement } from "react";

export interface ModuleType {
  id: string;
  name: string;
  attibutes: Object;
  presets: Array<Object>;
  derivates: Object;
  Pattern: ReactElement;
}
