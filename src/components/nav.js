import * as React from 'react';
import { Nav } from '@fluentui/react/lib/Nav';
import { TextField } from '@fluentui/react/lib/TextField';
import {IconButton} from '@fluentui/react/lib/Button';

import { Stack } from '@fluentui/react';

const navStyles = {
  root: {
    width: 208,
    boxSizing: 'border-box',
    overflowY: 'auto',
  },
};

const navLinkGroups = [
  {
    links: [
      {
        name: '我的音乐',
        url: 'http://example.com',
        key: 'key1',
        icon: 'Add',
      },
      {
        name: '最近播放内容',
        url: 'http://example.com',
        key: 'key3',
        icon: 'News',
        isExpanded: true,
      },
      {
        name: '正在播放',
        url: 'http://msn.com',
        icon: 'News',
        key: 'key4',
      },
      {
        name: '播放列表',
        url: 'http://msn.com',
        key: 'key5',
        icon: 'News',
      },
      {
        name: '傻逼',
        url: 'http://msn.com',
        icon: 'News',
        key: 'key6',
      },
    ],
  },
];

export const NavBasic = () => {
  return (
      <Stack>
          <Stack
            styles={{
                root: {
                    width: '208px',
                },
            }}
          >
              <IconButton iconProps={
                  {
                      iconName: 'CollapseMenu',
                  }
              } title="CollapseMenu" ariaLabel="CollapseMenu"></IconButton>
              <div className="p-4">
                <TextField iconProps={
                    {
                        iconName: 'Search',
                    }
                }
                placeholder="搜索"
                />
              </div>
              
          </Stack>
        <Nav
            onLinkClick={_onLinkClick}
            selectedKey="key3"
            ariaLabel="Nav basic example"
            styles={navStyles}
            groups={navLinkGroups}
            >
        </Nav>
      </Stack>
    
  );
};

function _onLinkClick(ev, item) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}
