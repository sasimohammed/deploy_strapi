import type { Schema, Struct } from '@strapi/strapi';

export interface TextTech extends Struct.ComponentSchema {
  collectionName: 'components_text_teches';
  info: {
    displayName: 'tech';
    icon: 'manyToMany';
  };
  attributes: {};
}

export interface TextTechnologies extends Struct.ComponentSchema {
  collectionName: 'components_text_technologies';
  info: {
    displayName: 'technologies';
    icon: 'manyToMany';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.tech': TextTech;
      'text.technologies': TextTechnologies;
    }
  }
}
