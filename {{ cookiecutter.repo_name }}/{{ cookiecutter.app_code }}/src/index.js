{%- macro camel_case(str) -%}
{{ str.title().replace("_", "") }}
{%- endmacro -%}

import Vue from 'vue';
import Vuetify from 'vuetify';

const {{ camel_case(cookiecutter.appcode) }} = {
  initUI(app) {
  },

  exitUI(app) {
  }

};

export default {{ camel_case(cookiecutter.appcode) }};
