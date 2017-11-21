{%- macro camel_case(str) -%}
{{ str.title().replace("_", "") }}
{%- endmacro -%}

import Vue from 'vue';
import Vuetify from 'vuetify';

import './style/style.scss';

const {{ camel_case(cookiecutter.app_code) }} = {
  initUI(app) {
  },

  exitUI(app) {
  }

};

export default {{ camel_case(cookiecutter.app_code) }};
