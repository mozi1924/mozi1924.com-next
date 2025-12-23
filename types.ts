export enum ProjectType {
  MODELING = 'Modeling',
  RIGGING = 'Rigging',
  ADDON = 'Blender Add-on',
  NODES = 'Geometry Nodes',
  SERVER = 'Server Config'
}

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  image: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ServiceItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}
