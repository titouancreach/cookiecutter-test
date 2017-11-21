{%- macro camel_case(str) -%}
{{ str.title().replace("_", "") }}
{%- endmacro -%}

import Vue from 'vue';
import Vuetify from 'vuetify';

import './style/style.scss';

const {{ camel_case(cookiecutter.app_code) }} = {
  initUI(app) {
    this.vm = new Vue({
      template: '<span> Hello World </span>'
    }).$mount('#{{ cookiecutter.app_code }}-mntpt')
  },

  exitUI(app) {
    this.vm.$destroy();
  }

};

export default {{ camel_case(cookiecutter.app_code) }};
