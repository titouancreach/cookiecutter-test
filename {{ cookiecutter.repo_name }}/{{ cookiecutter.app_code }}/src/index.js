{%- macro camel_case(str) -%}
{{ str.title().replace("_", "") }}
{%- endmacro -%}

import Vue from 'vue';
import Vuetify from 'vuetify';

const {{ camel_case(appcopde) }} = {
  initUI(app) {
  },

  exitUI(app) {
  }

};
