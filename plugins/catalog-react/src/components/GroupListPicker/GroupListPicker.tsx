/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { catalogApiRef } from '../../api';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useAsync from 'react-use/lib/useAsync';
import Popover from '@material-ui/core/Popover';
import { useApi } from '@backstage/core-plugin-api';
import { ResponseErrorPanel } from '@backstage/core-components';
import { GroupEntity } from '@backstage/catalog-model';
import { GroupListPickerButton } from './GroupListPickerButton';

/**
 * Props for {@link GroupListPicker}.
 *
 * @public
 */
export type GroupListPickerProps = {
  placeholder?: string;
  groupTypes: Array<string>;
  defaultGroup?: string;
};

/** @public */
export const GroupListPicker = (props: GroupListPickerProps) => {
  const catalogApi = useApi(catalogApiRef);

  const { groupTypes, defaultGroup = '', placeholder = '' } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [group, setGroup] = React.useState(defaultGroup);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const {
    loading,
    error,
    value: groups,
  } = useAsync(async () => {
    const groupsList = await catalogApi.getEntities({
      filter: {
        kind: 'Group',
        'spec.type': groupTypes,
      },
    });

    return groupsList.items as GroupEntity[];
  }, [catalogApi]);

  if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return (
    <>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <Autocomplete
          data-testid="group-list-picker-input"
          area-aria-describedby={id}
          loading={loading}
          options={groups ?? []}
          groupBy={option => option.spec.type}
          getOptionLabel={option =>
            option.spec.profile?.displayName ?? option.metadata.name
          }
          inputValue={inputValue}
          onInputChange={(_, value) => setInputValue(value)}
          onChange={(_, newValue) => {
            if (newValue) {
              setGroup(
                newValue.spec.profile?.displayName ?? newValue.metadata.name,
              );
            }
            setInputValue('');
          }}
          style={{ width: '200px' }}
          renderInput={params => (
            <TextField
              {...params}
              placeholder={placeholder}
              variant="outlined"
            />
          )}
        />
      </Popover>
      <GroupListPickerButton handleClick={handleClick} group={group} />
    </>
  );
};
