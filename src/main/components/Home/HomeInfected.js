/**
 * Copyright (c) 2020 INESC TEC <https://www.inesctec.pt>
 *
 * This Source Code Form is subject to the terms of the European Union
 * Public License, v. 1.2. If a copy of the EUPL was not distributed with
 * this file, You can obtain one at https://opensource.org/licenses/EUPL-1.2.
 *
 * SPDX-License-Identifier: EUPL-1.2
 */

import React from 'react';

import { ThemeConsumer } from '@app/contexts/Theme';

import Template from '@main/components/Home/Template';
import Images from '@app/common/assets/images';

import i18n from '@app/services/i18n';

export default function HomeInfected (props) {
  const header = i18n.translate('screens.home.infected.title');
  const image = Images.infected;
  const description = [
   {
    "key": "1",
    "text": i18n.translate('screens.home.infected.description.first'),
     "type": "bold",
   },
   {
    "key": "2",
    "text": i18n.translate('screens.home.infected.description.second'),
     "type": "normal",
   },
  ];

  return (
    <ThemeConsumer>
      {({colors}) => (
        <Template
          header={header}
          description={description}
          image={image}
          panelBackgroundColor={colors.white}
          panelTextColor={colors.blueDark}
          {...props}
        />
      )}
    </ThemeConsumer>
  );
}
