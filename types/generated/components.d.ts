import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
    icon: 'bulletList';
  };
  attributes: {
    linkItem: Schema.Attribute.Component<'shared.link-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'linkItem';
    icon: 'bulletList';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.footer': SharedFooter;
      'shared.link-item': SharedLinkItem;
    }
  }
}
